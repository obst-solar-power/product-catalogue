const CACHE_NAME = '"v1"'
const addResourcesToCache = (resources) => {
    return caches.open(CACHE_NAME)
    .then(caches=>{
        console.log("cashes open")
        return cache.addAll(resources);
    })
  };
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
        "/",
      ]),
    ); 
  });

  self.addEventListener("fetch", function(event){
    console.log("this is the event ", event)
    console.log("this is the event request", event.request)
    event.respondWith(
        caches.match(event.request).then((res)=>{
            return fetch(event.request).catch(()=>{
                match('offline.html')
            })
        })
    )
  })

  self.addEventListener("activate", function(event){
    const cashWhiteList = [];
    cashWhiteList.push(CACHE_NAME)
    event.waitUntil(caches.keys().then((cacheNames)=>{
        cacheNames.map(cacheName=>{
            if(!cashWhiteList.includes(cacheName)){
                return caches.delete(cacheName)
            }
        })
    }))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  })