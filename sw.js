self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-site-cache-v1').then(function(cache) {
      return cache.addAll([
        '/unmes.png',
        '/3meses.png',
        '/6meses.png',
        '/12meses.png'
        // Aquí añade todas las imágenes que deseas cargar en caché
      ]);
    })
  );
});
