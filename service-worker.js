"use strict";var precacheConfig=[["/Clicky-Game-React/index.html","b3e433ce9ced41f2eb784e1e8c73260e"],["/Clicky-Game-React/static/css/main.f911013d.css","45f7dfe7a29746515100d9b4046d3918"],["/Clicky-Game-React/static/js/main.1a12c41d.js","0b3950274937f60190723d90c06728ab"],["/Clicky-Game-React/static/media/char1.c2999068.jpg","c299906846b4da83d1f85c8063492286"],["/Clicky-Game-React/static/media/char10.77f39769.jpg","77f39769fa83ade6b2a1f5cc47e5a49e"],["/Clicky-Game-React/static/media/char11.b0adec27.jpg","b0adec275f19ba48964dcd63990d833b"],["/Clicky-Game-React/static/media/char12.b1e4472f.jpg","b1e4472fb2f8c9d0eb293e1686a7d517"],["/Clicky-Game-React/static/media/char2.bd3c0518.jpg","bd3c051811e6e6b99e82ee2eb0f6af0c"],["/Clicky-Game-React/static/media/char3.06978bbd.jpg","06978bbd25d0b7e8166e0a5ece073c94"],["/Clicky-Game-React/static/media/char4.b0a4dceb.jpg","b0a4dceb455bd3f0a5ce7ac0bc2db611"],["/Clicky-Game-React/static/media/char5.a3839211.jpg","a38392110e81bec8764267383d8f6167"],["/Clicky-Game-React/static/media/char6.d2f738f7.jpg","d2f738f7e6a190e4317864d2601dc858"],["/Clicky-Game-React/static/media/char7.d7d7e50a.jpg","d7d7e50a101a2b926804b250c9642c87"],["/Clicky-Game-React/static/media/char8.7d9b5b6d.jpg","7d9b5b6d4b53a00a38330b4bffc2a4e5"],["/Clicky-Game-React/static/media/char9.f41e7831.jpg","f41e78319287a29081f4180b705d84eb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var n="/Clicky-Game-React/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});