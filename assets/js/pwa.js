self.addEventListener('fetch', function(event) {
    event.respondWith(async function() {
      const cache = await caches.open(CACHE_NAME)
      const cacheMatch = await cache.match(event.request)
  
      if (navigator.onLine) {
        const request = fetch(event.request)
  
        event.waitUntil(async function() {
          const response = await request
          await cache.put(event.request, await response.clone())
        }())
  
        return cacheMatch || request
      }
  
      return cacheMatch // this will be undefined when offline if there are no matches
    }())
  })