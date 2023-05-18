const cacheName="E-KO app";
const cacheto=[
    "/",
    "index.html",
    "index-tr.html",
    "aboutme.html",
    "aboutme-tr.html",
    "contact.html",
    "contact-tr.html",
    "icon5.png",
    "icon6.png",
    "ai2.mp4",
    "assets/css/all.css",
    "assets/css/animate.css",
    "assets/css/bootstrap.min.css",
    "assets/css/magnific-popup.css",
    "assets/css/meanmenu.min.css",
    "assets/css/nice-select.css",
    "assets/css/swiper-bundle.min.css",
    "assets/sass/style.css",
    "assets/sass/style.css.map",
    "assets/sass/style.scss",
    
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