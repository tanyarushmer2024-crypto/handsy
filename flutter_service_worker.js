'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9b66f42287f221abba26958271789e43",
"assets/AssetManifest.bin.json": "c3617c4fd63ba1a106e7ff4d88778c25",
"assets/AssetManifest.json": "9ddcd65d881a7d3443abc4a773a402d6",
"assets/assets/images/59951fb3-fa74-40f6-91e9-bd6ee17b3f67.png": "d804e84b531bfc2c2f9483e947286f79",
"assets/assets/images/abade78d-0709-4387-8511-3193fd12d521.png": "f18a4d0f4a077a63e8bf7d9ea27d3ee9",
"assets/assets/images/cfa4cf6e-d899-4f4a-ad48-32eca7fafb94.png": "4371f44920c8995940928675e06bea06",
"assets/assets/images/logo_handsy.png": "50e91658f835a7896317268a7708c4cd",
"assets/assets/images/Screenshot_1.png": "c85313e2040d847e5f467b85dcfed249",
"assets/assets/images/Screenshot_10.png": "d35ef944ed6398ade194c71f4469cf20",
"assets/assets/images/Screenshot_11.png": "79cd11c72cb578ad7707ef4118a163c8",
"assets/assets/images/Screenshot_12.png": "46a02feb3a25a0ff8e977abbd029ae5f",
"assets/assets/images/Screenshot_13.png": "ed5671fcdd4d433688371651744d99f1",
"assets/assets/images/Screenshot_14.png": "d682f70032983605e67c96d361a8b754",
"assets/assets/images/Screenshot_15.png": "69dc713a06181b3b05b1903983fb9728",
"assets/assets/images/Screenshot_16.png": "126ec35ff6543ad039e6c5092cc035b6",
"assets/assets/images/Screenshot_17.png": "875d9886fd3484423f8b6a532713b704",
"assets/assets/images/Screenshot_18.png": "9c7dd29ba3d3b7a3f2fb28b8f7d659a5",
"assets/assets/images/Screenshot_19.png": "97a3ec3861dd6cf825a6d8c5e9e6c428",
"assets/assets/images/Screenshot_2.png": "39ab687090b8aa84bbbe1c65fe4d0bed",
"assets/assets/images/Screenshot_20.png": "b9991eedf3dfcbceac0aa161ed8faa18",
"assets/assets/images/Screenshot_3.png": "cf21141c7492969b12b8dc1aa3c77da0",
"assets/assets/images/Screenshot_4.png": "54e9916b1fb79900dd239611db639193",
"assets/assets/images/Screenshot_5.png": "f1f16a6ece22b15473dfa35ff888ab67",
"assets/assets/images/Screenshot_6.png": "81735e453cd33d334f40477005011732",
"assets/assets/images/Screenshot_7.png": "ffd98c7b647860fce6d4a9125fe6328d",
"assets/assets/images/Screenshot_8.png": "68c852b45a3896448d567fb959860941",
"assets/assets/images/Screenshot_9.png": "9d5d6c7766496b81b3e9bba4b09f66db",
"assets/assets/images/social.png": "56ba796648e15a33dc88b9295a39a83a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c61b7c448a6bb8f00a972b37652d51cb",
"assets/NOTICES": "dada78a46e7efb49b03aa58bf641d5a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "af2e1870c723736dfb766e23d87237f4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "708a6fd275cf1ede743911b954fe3298",
"/": "708a6fd275cf1ede743911b954fe3298",
"main.dart.js": "fdb967ca5e3d49f955ec2ac122f04181",
"main.dart.js_1.part.js": "4b9b8483cea9b51ec7ae0514de29b7f6",
"main.dart.js_3.part.js": "4a879991933d83b706b5e08d3128de12",
"main.dart.mjs": "c5293b8b366f5257375fa4d0a65a6036",
"main.dart.wasm": "92d2e913f28dbe3fdc5670302d201a0a",
"manifest.json": "2a3b28c8574b28e29c7af48004a18b92",
"version.json": "6c462785ca8b5b7839478980afa78bba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
