'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "73b720e7d10eb37334d4fed3cbfe16b2",
".git/config": "7988af56f52e301fd3f036d02f7f1117",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "9c03e18d0e3b42538c6b7959b908d9f1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4228575ea474290eea0f255e0c3c459a",
".git/logs/refs/heads/master": "4228575ea474290eea0f255e0c3c459a",
".git/logs/refs/remotes/origins/master": "f3b9aaba7716de009d00ba3d9025d2c4",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/5a301c9e29e0a87e16f89280481f1fa876571e": "73d9fe1f84785769ad882c1502fe8d1e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/5b3c7306a05c3f7ad7e0d9c7567f9764b95e51": "14e6e2b0a70cdf3401c46b53a1fc74d4",
".git/objects/28/691959ccd539b553e91aba219151c2eb6e89db": "ec361a1883c653898bdfb6313fcf2039",
".git/objects/28/d5b75ab4f02e3820ef2d355d725d7cfdfbfd17": "c09ffbfa4a561cffb78e6e92138752ea",
".git/objects/3a/d165c3cbc7a14df4fa239bfe485032fccafff7": "a3b2a9494426ac5b7f264f3d1f3d3617",
".git/objects/3d/2cc8ebe3859859decae235f3bbc0843b15f7bd": "d0e3442c14ade96f4600a70fe5c5ef18",
".git/objects/3d/8ce5b0b1b4b048e9ffe0dce791a742c8ae0a88": "822b68ef6e662adbe8b3c0a210bd22c4",
".git/objects/58/72f836921297465a3458b9905cee72ab369970": "53f3aa83d9fe591ca6e45cdff01ccd92",
".git/objects/68/b77de7a0324f0de15ce54169ee80639660d872": "bdbf4a3b2dda9b430ddc5d707cd1c083",
".git/objects/69/53b5d55dc6a37c6d32745e35cdd31e3d043bfb": "5cd1ca05fa044c32ab84b26918f7d517",
".git/objects/6f/4204cfefb27ae0396af0b2b564b02227046550": "7f01d3ba7a433a632a03ac3414d8e2b7",
".git/objects/7a/609c6c7ff880d7f3b1df95e4bfbb3e400d90ee": "2250b13b72ad0aaefa3c7184125aaa19",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4c617e3cfcc342665cd12c8825f0221317b178": "ef7ad11590748f1a9b733d1ede1c86ec",
".git/objects/91/ffb59246aae8e0bde809216b2eff8f7d62f50d": "fb460b0b767e1625fc08318eedb29411",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/96/341dbbac37713aa192cf1621efb35ee25e1b83": "2965bc3ae930c8dc30731009e87e4e93",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/51ed8305fa042c677f65f59a44927225d7ca86": "5138b48d639bf4b0deab0ce0dfe23b60",
".git/objects/bf/6003e8195f3330bc28e834355b0229312e57b5": "1602508ecdaef62bd33106a6699776a1",
".git/objects/c3/4a80801f887f9c61684cf3c2676f16d8f9a10f": "1c896bbd3f331e5395505789e8766070",
".git/objects/d5/2046c3e63e755b121fe139ba0bcb738f782534": "4b77b73672775dfe63db09eb746e252e",
".git/objects/ea/71060cda6c9e1b83d7c6dd04ed75bbd50eee8c": "e9e739d96dadba6fb6c901071308098d",
".git/objects/ef/34cdb2385a717568819bf9030ee0b642fa84c6": "4a9038135d6db66494b9f6030dabb08c",
".git/objects/f5/43d212015c8e5821456ec8c12e8cd7e0340234": "ee8eeffec99e6990514f5de95dc99f9b",
".git/objects/f5/ef8ca5c3fb1395a9d4f0b05e2415b57e449adf": "aeccca34174b76b29ba7300c72248a33",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "56a141e6bab548140b794a70133d7c7a",
".git/refs/remotes/origins/master": "56a141e6bab548140b794a70133d7c7a",
"assets/AssetManifest.json": "28cfeda0ba1ea96f5078e63d8a07c4fd",
"assets/FontManifest.json": "592bd723f4343b616199a084fa560d02",
"assets/fonts/Bahnschrift-Regular.ttf": "a397d89c44b9bd679ffe17cfe4a0dcde",
"assets/fonts/BookAntiqua-Regular.ttf": "3efd8e6a45b3f893f54399c6bf4aba68",
"assets/fonts/FlexiTitling-Regular.ttf": "0016f77f50d636d6eb6336a8a9d5d3d5",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/NovaSlim-Regular.ttf": "1c248182c1147f44b63adba72d4376a3",
"assets/fonts/Offside-Regular.ttf": "b546a3c0bd12f927b0958a13dbc03511",
"assets/NOTICES": "28eb89b9741326b1de0cb7eee5a5558d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b5a31da8816d024a1f050ae9a60e68c6",
"/": "b5a31da8816d024a1f050ae9a60e68c6",
"main.dart.js": "3fdc96f2c158c61f13d12f0658b5e053",
"manifest.json": "df520693dfdaa765f1f9f86a15ee10d5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
