/* اشريلي — توحيد خلفية صور المنتجات
   يزيل الخلفية السادة (أبيض/رمادي/لون واحد) بالتعبئة من الحواف،
   ثم يضع المنتج في وسط خلفية الاستوديو الموحّدة مع ظلّ خفيف، بصورة مربّعة 1000×1000. */
(function(){
  const SIZE = 1000, BG_URL = 'studio-bg.jpg';
  let bgImg = null;
  function loadImg(src){
    return new Promise((ok, no) => { const i = new Image(); i.crossOrigin = 'anonymous';
      i.onload = () => ok(i); i.onerror = () => no(new Error('تعذّر تحميل الصورة')); i.src = src; });
  }
  async function bg(){ if (!bgImg) bgImg = await loadImg(BG_URL); return bgImg; }

  // يحسب لون الحواف؛ ويعيد null إذا لم تكن الخلفية سادة
  function edgeColor(d, w, h){
    const pts = [];
    for (let x = 0; x < w; x += Math.max(1, w >> 6)) { pts.push((0*w+x)*4, ((h-1)*w+x)*4); }
    for (let y = 0; y < h; y += Math.max(1, h >> 6)) { pts.push((y*w)*4, (y*w+w-1)*4); }
    let r=0,g=0,b=0; pts.forEach(i => { r+=d[i]; g+=d[i+1]; b+=d[i+2]; });
    r/=pts.length; g/=pts.length; b/=pts.length;
    let near = 0; pts.forEach(i => { if (Math.abs(d[i]-r)+Math.abs(d[i+1]-g)+Math.abs(d[i+2]-b) < 60) near++; });
    return near / pts.length > 0.8 ? [r,g,b] : null;
  }

  function removeBg(cv){
    const w = cv.width, h = cv.height, ctx = cv.getContext('2d');
    const im = ctx.getImageData(0, 0, w, h), d = im.data;
    const c = edgeColor(d, w, h);
    if (!c) return false;
    const TOL = 70, N = w*h, seen = new Uint8Array(N), st = new Int32Array(N + 4*(w+h)); let sp = 0;
    const add = p => { if (!seen[p]) { seen[p] = 1; st[sp++] = p; } };
    for (let x = 0; x < w; x++) { add(x); add((h-1)*w + x); }
    for (let y = 0; y < h; y++) { add(y*w); add(y*w + w - 1); }
    let removed = 0;
    while (sp) {
      const p = st[--sp], q = p*4;
      const k = Math.abs(d[q]-c[0]) + Math.abs(d[q+1]-c[1]) + Math.abs(d[q+2]-c[2]);
      if (k > TOL) continue;
      d[q+3] = k < TOL*0.55 ? 0 : Math.round(255 * (k - TOL*0.55) / (TOL*0.45)); removed++;
      const x = p % w;
      if (x > 0) add(p-1); if (x < w-1) add(p+1);
      if (p >= w) add(p-w); if (p < N-w) add(p+w);
    }
    if (removed < w*h*0.05) return false;
    ctx.putImageData(im, 0, 0);
    return true;
  }

  function bbox(cv){
    const w = cv.width, h = cv.height, d = cv.getContext('2d').getImageData(0,0,w,h).data;
    let x0=w, y0=h, x1=-1, y1=-1;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[(y*w+x)*4+3] > 24) {
      if (x<x0) x0=x; if (x>x1) x1=x; if (y<y0) y0=y; if (y>y1) y1=y; }
    return x1 < 0 ? [0,0,w,h] : [x0, y0, x1-x0+1, y1-y0+1];
  }

  // src: ملف (File/Blob) أو رابط صورة. يعيد Blob بصيغة JPEG
  async function studioize(src){
    const url = typeof src === 'string' ? src : URL.createObjectURL(src);
    const img = await loadImg(url);
    if (typeof src !== 'string') URL.revokeObjectURL(url);
    const k = Math.min(1, 1000 / Math.max(img.naturalWidth, img.naturalHeight));
    const cv = document.createElement('canvas');
    cv.width = Math.round(img.naturalWidth * k); cv.height = Math.round(img.naturalHeight * k);
    cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
    const cut = removeBg(cv);
    const [bx, by, bw, bh] = cut ? bbox(cv) : [0, 0, cv.width, cv.height];

    const out = document.createElement('canvas'); out.width = out.height = SIZE;
    const o = out.getContext('2d');
    o.drawImage(await bg(), 0, 0, SIZE, SIZE);
    const box = cut ? SIZE * 0.74 : SIZE * 0.84;
    const s = Math.min(box / bw, box / bh);
    const dw = bw * s, dh = bh * s, dx = (SIZE - dw) / 2, dy = cut ? SIZE * 0.84 - dh : (SIZE - dh) / 2;
    if (cut) { // ظلّ أرضي ناعم تحت المنتج
      o.save(); o.filter = 'blur(18px)'; o.fillStyle = 'rgba(80,60,30,.28)';
      o.beginPath(); o.ellipse(SIZE/2, SIZE*0.845, dw*0.42, SIZE*0.022, 0, 0, Math.PI*2); o.fill(); o.restore();
      o.drawImage(cv, bx, by, bw, bh, dx, dy, dw, dh);
    } else { // خلفية الصورة غير سادة: إطار مستدير أنيق فوق خلفية الاستوديو
      o.save(); o.shadowColor = 'rgba(80,60,30,.25)'; o.shadowBlur = 30; o.shadowOffsetY = 10;
      const r = 36; o.beginPath(); o.roundRect(dx, dy, dw, dh, r); o.fillStyle = '#fff'; o.fill(); o.restore();
      o.save(); o.beginPath(); o.roundRect(dx, dy, dw, dh, r); o.clip(); o.drawImage(cv, dx, dy, dw, dh); o.restore();
    }
    return await new Promise(ok => out.toBlob(ok, 'image/jpeg', 0.88));
  }
  window.ChriliStudio = { studioize };
})();
