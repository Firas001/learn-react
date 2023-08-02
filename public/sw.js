// console.warn("ws file is public folder")

let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "static/media/hero-bg.6d8598e6254998fb90a3.png",
        "static/media/newsletter.6f06b034d819fc0339bf.png",
        "static/media/logo.3649f3eefda181bfc5b7006cb51b2611.svg",
        "static/media/features-1.2014423d50a4f39079ea.png",
        "static/media/chair.1d1eea9b11a64a75e5e7.png",
        "static/media/bed.54103a7c3bc87b442953.png",
        "static/media/cupboard.a031290f00686929c3de.png",
        "static/media/lighting.2ca4dba946ce98f25d67.png",
        "static/media/features-2.92c06926402d857d61c0.png",
        "static/media/product-1.81415b4b2db67c206362.png",
        "static/media/product-2.478798e88d77b77b18ae.png",
        "static/media/product-3.f7f05e1059234192e329.png",
        "static/media/product-4.e2e28d6f16d6205d8c3c.png",
        "static/media/product-5.5dbb6e9b8088ee311423.png",
        "static/media/product-6.3b4bb863c7c4e93feac6.png",
        "static/media/product-7.8303cc75d8385719633d.png",
        "static/media/product-8.7b2ec61f985cc403475b.png",
        "static/media/product-9.88d9b287cf8cdba409c3.png",
        "static/media/product-10.c5ec2f5da9a0e5b83a4d.png",
        "static/media/avatar-1.aabbb166b2124eb5f652.png",
        "static/media/avatar-2.ae52c9a34ee0972574e2.png",
        "static/media/avatar-3.139cf9bf423382872360.png",
        "static/media/testimonial.0ab513ce6b847daf98c0.png",
        "favicon.ico",	
        "static/js/bundle.js",
        "index.html",
        "/"
    ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((resp) => {
              if (resp) {
                return resp;
              }
            })
          );
    }

});
