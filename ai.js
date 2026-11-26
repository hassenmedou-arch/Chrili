/* اشريلي — زر «اكتب الوصف بالذكاء الاصطناعي» (لوحة التحكم وواجهة المؤثّر) */
(function () {
  const ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>';
  function small(file) { // صورة صغيرة (768px) حتى يكون الطلب خفيفاً ورخيصاً
    return new Promise((res, rej) => {
      const img = new Image(); const url = URL.createObjectURL(file);
      img.onload = () => { const k = Math.min(1, 768 / Math.max(img.width, img.height)); const c = document.createElement('canvas');
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url); res(c.toDataURL('image/jpeg', 0.82).split(',')[1]); };
      img.onerror = () => { URL.revokeObjectURL(url); rej(new Error('img')); };
      img.src = url;
    });
  }
  // opts: { db, desc, name, brand, category, fileInput, imageUrl, toast }
  window.aiButton = function (opts) {
    return `<button type="button" class="aibtn" onclick="aiDescribe(this)">${ICON}<span>اكتب الوصف بالذكاء الاصطناعي</span></button>`;
  };
  window.AI_OPTS = null;
  window.aiDescribe = async function (btn) {
    const o = window.AI_OPTS || {}, $ = id => id && document.getElementById(id);
    const span = btn.querySelector('span'), label = span.textContent;
    const body = { name: ($(o.name) || {}).value || '', brand: ($(o.brand) || {}).value || '', category: typeof o.category === 'function' ? o.category() : (o.category || '') };
    try {
      btn.disabled = true; span.textContent = 'جارٍ الكتابة...';
      const f = $(o.fileInput) && $(o.fileInput).files[0];
      if (f) { body.image_b64 = await small(f); body.media_type = 'image/jpeg'; }
      else if (o.imageUrl) body.image_url = o.imageUrl;
      const { data, error } = await o.db.functions.invoke('ai-describe', { body });
      let msg = data && data.error;
      if (error) { try { msg = (await error.context.json()).error; } catch (e) { msg = msg || error.message; } }
      if (msg) throw new Error(msg);
      const t = $(o.desc); t.value = [data.ar, data.fr].filter(Boolean).join('\n\n'); t.dispatchEvent(new Event('input'));
    } catch (e) { (o.toast || alert)(e.message || 'تعذّر'); }
    finally { btn.disabled = false; span.textContent = label; }
  };
})();
