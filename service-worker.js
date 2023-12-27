/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9ca5c93a453436d4cb9b6cd4edfea9fb"
  },
  {
    "url": "assets/css/0.styles.052040ae.css",
    "revision": "50ff4fbdb40a06ccc9a562d3d51d570c"
  },
  {
    "url": "assets/img/ABAC.3bff2f92.svg",
    "revision": "3bff2f9297ca856420e5e97eefbfb2a8"
  },
  {
    "url": "assets/img/api.0bf79b5c.svg",
    "revision": "0bf79b5c520d7e8a2f23e8a1c94568d7"
  },
  {
    "url": "assets/img/data_life_cycle.e1765fc7.svg",
    "revision": "e1765fc745fc41be7f9fd5c4e8deebf9"
  },
  {
    "url": "assets/img/database_extraction.ba7a90f7.svg",
    "revision": "ba7a90f7cd1a0e8a59b749f7d9094dfe"
  },
  {
    "url": "assets/img/image-1.b654d498.png",
    "revision": "b654d498dac75b9ec006814a61835cad"
  },
  {
    "url": "assets/img/image-2.5c386f94.png",
    "revision": "5c386f940d50b6c78c804341778e0e7c"
  },
  {
    "url": "assets/img/image-3.154836db.png",
    "revision": "154836dbaabeadd76994e44f395f4c69"
  },
  {
    "url": "assets/img/image-4.c02267f8.png",
    "revision": "c02267f800ad62e97fd6f30e2c22fc74"
  },
  {
    "url": "assets/img/image-5.1b791bec.png",
    "revision": "1b791beca09eb07b92528fdc03f20be0"
  },
  {
    "url": "assets/img/image-6.4065368a.png",
    "revision": "4065368aad18e2b323ad3a6f2b56d490"
  },
  {
    "url": "assets/img/image.3bc7caf7.png",
    "revision": "3bc7caf72eaa6266628dd0987e9e513b"
  },
  {
    "url": "assets/img/relation_diagram.202b7c0d.svg",
    "revision": "202b7c0de84220d829d154fa65aba32a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/webscraping.9ede8463.svg",
    "revision": "9ede84639db62d16f9fa5264bbfabc3c"
  },
  {
    "url": "assets/js/1.22640208.js",
    "revision": "7fd8650a3dfa14c95e7e005ff12deb26"
  },
  {
    "url": "assets/js/10.61c6e101.js",
    "revision": "434dfbd2b81a1cd994c6e3ba4bcbdeaa"
  },
  {
    "url": "assets/js/13.dccfab3f.js",
    "revision": "878e20ec31beebe9455eddb1fcb44179"
  },
  {
    "url": "assets/js/14.ca027add.js",
    "revision": "b0efff8085e41ffafadc1c09b009f774"
  },
  {
    "url": "assets/js/15.3a3953ad.js",
    "revision": "65ee3c384d60a42865debddbc2ccf84b"
  },
  {
    "url": "assets/js/16.75390761.js",
    "revision": "bcd3fdf99bec8b66560c74c8a6429fc9"
  },
  {
    "url": "assets/js/17.53ba1e03.js",
    "revision": "41190db04f46b18ae47272b6c30c0f93"
  },
  {
    "url": "assets/js/18.688a9669.js",
    "revision": "bd197d3d45824219a5d9d3d6f0242c6f"
  },
  {
    "url": "assets/js/19.6d3854c7.js",
    "revision": "9e60978f51b6a272287ea7698ec95a4c"
  },
  {
    "url": "assets/js/2.fdf911fe.js",
    "revision": "5836d8fd13e20251d67aec97d1b4d49d"
  },
  {
    "url": "assets/js/20.b117a86d.js",
    "revision": "dcf64a195b570998d5d1f69a69f316b6"
  },
  {
    "url": "assets/js/21.7f7eb105.js",
    "revision": "7bbef49c0c1db37bffe411724ae66503"
  },
  {
    "url": "assets/js/22.7e2d579b.js",
    "revision": "54e773f8314d2c606a651b0f13655809"
  },
  {
    "url": "assets/js/23.3edf2e57.js",
    "revision": "29190642e0ea69be40328380835142b3"
  },
  {
    "url": "assets/js/24.c3bc2090.js",
    "revision": "cf56b268bccfa6f0f35a1071625193c3"
  },
  {
    "url": "assets/js/25.f3748501.js",
    "revision": "b418bbbe56b706578034b8a3221065f2"
  },
  {
    "url": "assets/js/26.aa0fb36e.js",
    "revision": "b7abd80d04150605ec48d7d2ed370378"
  },
  {
    "url": "assets/js/27.687ecd9e.js",
    "revision": "036cebcbc2c2e573fc743e27dd412d84"
  },
  {
    "url": "assets/js/28.ecaabfa7.js",
    "revision": "0a26e5b24a0b4c975cf409193a1b8aa4"
  },
  {
    "url": "assets/js/29.eeac1c82.js",
    "revision": "fc82849e73480e5d65524419b66c0512"
  },
  {
    "url": "assets/js/3.c0f5c9b0.js",
    "revision": "24d41f5f66c095b5d0982e9c6eef3189"
  },
  {
    "url": "assets/js/30.87f4d098.js",
    "revision": "f9481f7de424142ccb3b53598ab513f8"
  },
  {
    "url": "assets/js/31.b23cbd9f.js",
    "revision": "dda0e84baf3324ec815e0633c03ff081"
  },
  {
    "url": "assets/js/32.3c06872a.js",
    "revision": "98d54d4b0b79c18d3f11311c3a984e71"
  },
  {
    "url": "assets/js/33.6e438bba.js",
    "revision": "9b838fda374854a9d41f9be41b40d89b"
  },
  {
    "url": "assets/js/34.eae9812e.js",
    "revision": "a0b2992d4cf8627810da771111f68222"
  },
  {
    "url": "assets/js/35.ee84723f.js",
    "revision": "8d282ccd9ae9a76320c36e3e42cf3815"
  },
  {
    "url": "assets/js/36.3ce8e4b9.js",
    "revision": "662afeb50262d879414e8735f300d45d"
  },
  {
    "url": "assets/js/37.cd140772.js",
    "revision": "edef31d17e8e69c480f182779fa537f8"
  },
  {
    "url": "assets/js/38.8168d5bc.js",
    "revision": "76fa5d5a27e5c699014cab3921ef11bc"
  },
  {
    "url": "assets/js/39.f632a3fe.js",
    "revision": "ffa38586ae89d8c6e9051a80c60b0897"
  },
  {
    "url": "assets/js/4.8bbf3dcb.js",
    "revision": "ce01a8ad3723b0751436c8f60a8625d3"
  },
  {
    "url": "assets/js/41.8467d1f8.js",
    "revision": "1d9ab7b4fab02a0cb16175f203653fb4"
  },
  {
    "url": "assets/js/5.ea6dae64.js",
    "revision": "15cb5300bbf2122136354adb8956ed22"
  },
  {
    "url": "assets/js/6.d87a84db.js",
    "revision": "8201075b7aa5ddf738a8ef349bfd9848"
  },
  {
    "url": "assets/js/7.76dbffc7.js",
    "revision": "b671bebf9517451908a90f8a29a7ae8e"
  },
  {
    "url": "assets/js/8.d2b36bb8.js",
    "revision": "c8bd59c94c99681f41d1eccad0e156fe"
  },
  {
    "url": "assets/js/9.703f78d8.js",
    "revision": "bdd4231a7ce58219fb7449519a874840"
  },
  {
    "url": "assets/js/app.a6808847.js",
    "revision": "d075ff5e984df4280cce1eadd7a492ca"
  },
  {
    "url": "assets/js/vendors~docsearch.8bdb2884.js",
    "revision": "1dc7282dc3e2408f5e5762c4ebaefb05"
  },
  {
    "url": "conclusion/index.html",
    "revision": "bbefebb0c24446576cea6cd2759d84e8"
  },
  {
    "url": "design/index.html",
    "revision": "6ec0dba8a7cd662922d7c53beda17905"
  },
  {
    "url": "index.html",
    "revision": "77699c357853814e494e7e7d04f20253"
  },
  {
    "url": "intro/index.html",
    "revision": "3a9a66bb5c0240fca603e940ef0d9710"
  },
  {
    "url": "license.html",
    "revision": "77437445bb85c970b31609014ff5e559"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f418e09ee9d63b17eae266c4b264bfae"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "1f7f8234b63edf8d6a7067f3d83592eb"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "0d6f6e84e4277bb328f80bb5b5ae4755"
  },
  {
    "url": "software/index.html",
    "revision": "9ffbb19413b42e4cd8211212f5fb1d77"
  },
  {
    "url": "test/index.html",
    "revision": "94fc9709022d151594c867fe499bf10d"
  },
  {
    "url": "use cases/index.html",
    "revision": "22a54d23953dab1521cf5ce9adc966b8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
