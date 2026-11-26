// اشريلي — عامل الخدمة: يحفظ واجهة التطبيق ليفتح بسرعة، ولا يحفظ بيانات Supabase
const CACHE = 'chrili-v42';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return; // البيانات تمر مباشرة
  // الشبكة أولاً، ثم النسخة المحفوظة عند انقطاع الإنترنت
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});

// إشعارات الهاتف
self.addEventListener('push', e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (x) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || 'اشريلي', {
    body: d.body || '', icon: './icon-192.png', badge: './icon-192.png', tag: d.tag || 'chrili',
    data: { url: d.url || './' }, dir: 'auto', renotify: !!d.tag,
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) { if ('navigate' in c) { c.focus(); return c.navigate(url); } }
    return self.clients.openWindow(url);
  }));
});
