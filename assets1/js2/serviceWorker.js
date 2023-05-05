const cacheName="EKO app";
const cacheto=[
    "/",
    "manifest.html"
];

self.addEventListener("install",function(event) {
    console.log("install");
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("cache");
            return cache.addAll(cacheto);
        }).catch(function(error) {
            console.log("error2 :"+error);
        })
    );
});

self.addEventListener("activate",function(event) {
    caches.keys().then(function(keylist) {
        return Promise.all(
            keylist.map(function(key) {
                if(key !== cacheName) {
                    console.log("delete");
                    return caches.delete(key);
                }
            })
        );
    });
});

self.addEventListener("fetch",function(event) {
    event.respondWith(
        caches.match(event.request,{ignoreSearch:true}).then(function(response) {
            return response || fetch(event.request);
        })
    );
});