/* اشريلي — تنبيه عند إضافة منتج اسمه موجود من قبل
   dupAsk(db, name, {canUse}) → 'go' (أضف كمنتج جديد) | 'cancel' | {use: item} */
(function(){
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  async function dupAsk(db, name, opts){
    opts = opts || {};
    let res;
    try { res = await db.rpc('check_product_name', { q: name }); } catch (e) { return 'go'; }
    const list = (res && res.data) || [];
    if (!list.length) return 'go';
    const exact = list.some(x => x.exact);
    return await new Promise(done => {
      const bg = document.createElement('div');
      bg.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:16px';
      bg.innerHTML = `<div style="background:#fff;border-radius:18px;max-width:440px;width:100%;max-height:88vh;overflow:auto;padding:18px;font-family:inherit;direction:rtl">
        <div style="font-size:19px;font-weight:800;color:${exact?'#b42318':'#9a6a00'}">${exact?'⚠️ هذا المنتج موجود من قبل':'⚠️ توجد منتجات بأسماء قريبة'}</div>
        <p style="font-size:14px;color:#555;margin:8px 0 12px;line-height:1.7">«${esc(name)}» — ${opts.canUse
          ? 'إذا كان نفس المنتج، استعمل الموجود ولا تنشئ نسخة ثانية، حتى يبقى المخزون والمبيعات في مكان واحد.'
          : 'إذا كان نفس المنتج، سيربطه فريق اشريلي بالمنتج الموجود عند المراجعة.'}</p>
        ${list.map((x,i) => `<div style="display:flex;gap:10px;align-items:center;border:1.5px solid ${x.exact?'#f3b5ae':'#eee'};background:${x.exact?'#fff5f4':'#fafafa'};border-radius:12px;padding:8px;margin-bottom:8px">
            <div style="width:52px;height:52px;border-radius:10px;background:#f1ece2 center/cover;flex-shrink:0;${x.image_url?`background-image:url('${esc(x.image_url)}')`:''}"></div>
            <div style="flex:1;min-width:0"><div style="font-weight:800;font-size:14.5px">${esc(x.name)}</div>
              <div style="font-size:12px;color:#777"><span dir="ltr" style="font-family:monospace">${esc(x.code)}</span>${x.brand?' · '+esc(x.brand):''}${x.active?'':' · مخفي'}${x.exact?' · <b style="color:#b42318">نفس الاسم</b>':''}</div></div>
            ${opts.canUse?`<button data-i="${i}" style="background:#0F5132;color:#fff;border-radius:9px;padding:8px 10px;font-weight:700;font-size:13px;white-space:nowrap">استعمله</button>`:''}
          </div>`).join('')}
        <button data-a="go" style="width:100%;margin-top:6px;padding:13px;border-radius:12px;background:${exact?'#fff':'#1b1b1b'};color:${exact?'#1b1b1b':'#fff'};border:1.5px solid #1b1b1b;font-weight:800">${opts.canUse?'منتج مختلف — أضفه كجديد':'متابعة الإرسال'}</button>
        <button data-a="cancel" style="width:100%;margin-top:8px;padding:12px;border-radius:12px;background:#f4f1ea;font-weight:700">إلغاء</button>
      </div>`;
      bg.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        bg.remove();
        if (b.dataset.i !== undefined) done({ use: list[+b.dataset.i] });
        else done(b.dataset.a);
      });
      document.body.appendChild(bg);
    });
  }
  window.dupAsk = dupAsk;
})();
