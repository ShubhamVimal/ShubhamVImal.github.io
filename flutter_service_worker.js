'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d49f89ae0edb00f25da7c1c752cce14c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3289e40d3b108b20a0afee63673e02eb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "26fc8e931ebd34b04550ad7d94d0acbd",
".git/logs/refs/heads/master": "26fc8e931ebd34b04550ad7d94d0acbd",
".git/logs/refs/remotes/origin/master": "7d35b4506cea23deeb40fc08a9a0a429",
".git/objects/18/a115edeb2611e81516a8a850e5e8d4629a95b0": "e84ca11ecc4513bc08f0fd984ba9488c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/add0ef8b2beb3ed813df76b3d5bad1389af8aa": "3c650f91afe354abf9d42bee7ad78964",
".git/objects/27/2af3537b78ed12c43d4511f5a4ce6f6297a5ab": "2369b89a9a20b9117a001f7e8e69cfb1",
".git/objects/27/bfcb3f2a0bc58bf6754f9b58e5b64a55b45a59": "8afdf16e9877cad9bc4d60744f2ac4a4",
".git/objects/2b/6ee737e217f5d67c731c3c4b6ae2d416a1a6d8": "bb261fef80175ec66b421c9be6c78f2a",
".git/objects/2d/940c4c8edba5d268548dd377de9642967a1092": "aa6097ca772d13cd61c71548b409501d",
".git/objects/39/6e3797e52716767e3a5fcc724722f055524aec": "3193f2b48e1a35d4c65e36abaef1b0a7",
".git/objects/3f/532a470551cd34050bac83a482c9bb54af2527": "ad97dced8dbc9b82e9aa12d68930e2be",
".git/objects/41/6572dca27d5329d4912e6fc0557ef3b18874da": "88cd81c3fc5c6647f8234ed709528dab",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4b/fa56a4b5ecdcf221cc1390d9384214d8ac2a42": "ebc53a4b4c9d8f47d19b739c4581e434",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4e/103edb591e8603799546f26b8f4293987f95e4": "f4edabdb0dc85165ee5596c7792bacc7",
".git/objects/4f/bfe6fcaaf5807760f2a9ea22aa242934da2df9": "fc0d04bf033ed59e8a3430d156144811",
".git/objects/51/15bbd024c25b4652a99da806fd9fa82fa52a63": "0c4fcbc22182c79e506692a1fb3c8077",
".git/objects/57/b64143b1fb62585623e383bd573f216b62cfed": "6ff3d136ecf3b25672768487b5e44021",
".git/objects/59/0d57366cd4f831d108defb79173cb614cdf805": "4205e37566a745741d9afed7d0c5bd9e",
".git/objects/5c/30e646e048cfa8412995bcc69ce584f679718c": "9879e43492f99689d1808bcb7a306bba",
".git/objects/65/e26db86690fb14d19a6cf0fce3bc913b122659": "f07ff8537165948b7c5d005c77e05e59",
".git/objects/76/c127aa652ddbf254319e59648864faa82299d8": "6f8aeddc8b0e81f8f760734468abcbc4",
".git/objects/79/ac0df704fa1f1ac01f34c85a0f183635dd7a77": "5c6837c3b1e1119bb76e8148d9744051",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/9c92fbd94da7b183093a8a80057b82f04a430f": "200d5ad6a62c41d13d3860604c33c74d",
".git/objects/83/03a6fa670f6d5189fa855acf1ea371742f95e8": "6815d49e7066566c8e56a63add2243bd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ee468ca9fbc73cc449e2462547f7204434e5c8": "d486bed1b138058c0ce51aceb21eba11",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/1831f56b1ba6caeec56e535bf7d0ca13faad62": "c5cc5aed04dcf17c46311ffe3f723c9b",
".git/objects/91/1c86a5983031c7c2cdfd331a03b9094c67b07e": "1c8e5dfce3e7150be0b4f3f99dd3ef60",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/99/ecee1677d90cb3e9658a8675ac365b93691ebc": "8185fe5a5851de0831b3af1cd9d4cd12",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/ae0317b0d5fc21ffd9b353f85ade7501742a7a": "854d251afb07407e838956b0c51393c7",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/af/5a485aaa51e6b77b4aa40db18bd23656681cbb": "670fd81430b897376a1fcaaa53b18acf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/552b00fe59349609c9b1642a9a10298488f682": "f7aebbabc97dc503d09402747a910e29",
".git/objects/ba/722d36ebc57d79185c79fd005d9defdcbcc2e7": "ca0df48a53d99ecf8af11f108be94013",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c9/65fba8a7d0ce7d65f89c34c06e86e3a4d1540e": "fbedb7977b88a8cdaa5e85e11ab42562",
".git/objects/d2/32f9d3ef59f655f2caea90697d0932156fee50": "205b36d2e8d30aa8187a5e5ba5af3841",
".git/objects/dc/3d4d1e985b84162f3199c4cf1f49c26b23d86b": "71609cb821deff4e8e9bb31f93b784c3",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/8946c5e35cb634381bbc9d97d7d2246b8841c1": "367338ab9c7ab7103c2da2b0911ab704",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/533e8d22e9f68e680ac1d12a39ecf547cee4ac": "f2c4a5e925e9e3170cab095a5f0b554a",
".git/objects/f9/889ea2f88ba186e320d41182135e15e44c62c8": "b32ab18df4406885997605edbce71dfb",
".git/refs/heads/master": "00a31e6235e77f26223ed62d7903aea0",
".git/refs/remotes/origin/master": "00a31e6235e77f26223ed62d7903aea0",
"assets/AssetManifest.json": "747d4454787efa0316ce4f670c587575",
"assets/assets/fonts/Chewy-Regular.ttf": "53ee0977b5f9f3afc1d18b4419264c8b",
"assets/assets/fonts/ConcertOne-Regular.ttf": "1b40f0186d1a8b1500b4676b2e9a7ba1",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/icons/icon.png": "ba018965c16f03bca6f209990640c660",
"assets/assets/images/brickSmashSS(1).png": "42409efe49975e1b108b6b5140c72c2a",
"assets/assets/images/brickSmashSS(2).png": "63cd181ae6e0ea73b6bc2c22d1e75b22",
"assets/assets/images/education.png": "63270d8f3a3d9fedb77c9af5305713f9",
"assets/assets/images/groupChatAppSS(1).png": "5e226d4ac6a7b613c1070394c9a1a8b0",
"assets/assets/images/groupChatAppSS(2).png": "f21e9e92f139e8f843ffe15a52df8bee",
"assets/assets/images/mealsAppSS(1).png": "02d7e990cdc352ac2ad2a460742b72f9",
"assets/assets/images/mealsAppSS(2).png": "30acd13eaf008c971b692614dfdf8636",
"assets/assets/images/movieRecommendSS(1).png": "fa1f8e4a7349cdbea839324c1480e204",
"assets/assets/images/mypic.jpg": "d14d6db027cc3803bdf9d02cff8b37d0",
"assets/assets/images/persExpAppSS(1).png": "f2a0e21751bd5ce769f7bfaf3dd9be62",
"assets/assets/images/persExpAppSS(2).png": "8a79fba0f8f6179cfb6f2a9af34252dd",
"assets/assets/images/programmer.png": "859afb7ab5d270cf40f1fe19115a945f",
"assets/assets/images/sentimentAnalysisSS(1).png": "ba631292cff20a8cd2d944a398ae8f1a",
"assets/assets/images/shopAppSS(1).png": "0153a735251a752ee9edeb891bc1adb7",
"assets/assets/images/shopAppSS(2).png": "82e18cbf21052de1d7cb77f7e0d12498",
"assets/FontManifest.json": "e94406041f4908c021b512f8d21a752b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ae66a9e3ba665d5ccb33f7b5f2bcb501",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.ico": "2d0f4f183734ac326ac5da4b20f5aecf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "72672cc2c2cf3c9c7bb788273916e281",
"/": "72672cc2c2cf3c9c7bb788273916e281",
"main.dart.js": "d5269e498e39cc19762c484359746766",
"manifest.json": "4494413cde58ee458a7b4e00e4230c7a",
"version.json": "98ece6ba2f545a3f872d2df2184a4c1d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
