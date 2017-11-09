/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/* eslint-env node */

module.exports = {
  staticFileGlobs: [
    "index.html",
    "manifest.json",
    "src/**/*",
    "images/**/*",
    "data/**/*",
    "bower_components/webcomponentsjs/*.js",
    "bower_components/app-storage/app-indexeddb-mirror/*.js"
  ],
  runtimeCaching: [
    {
      urlPattern: /\/bower_components\/webcomponentsjs\/.*.js/,
      handler: "fastest",
      options: {
        cache: {
          name: "webcomponentsjs-polyfills-cache"
        }
      }
    },
    {
      urlPattern: /\/data\/images\/.*/,
      handler: "cacheFirst",
      options: {
        cache: {
          maxEntries: 200,
          name: "items-cache"
        }
      }
    },
    {
      urlPattern: /\/data\/.*json/,
      handler: "fastest",
      options: {
        cache: {
          maxEntries: 100,
          name: "data-cache"
        }
      }
    }
  ],
  ignoreUrlParametersMatching: [/^https:\/\/smart-mes\.firebaseapp\.com/],
  navigateFallback: "index.html",
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
  dontCacheBustUrlsMatching: /./
};
