'use strict';

import offlineHTML from '../app/index.html';
//import html from '../app/app.js';

self.addEventListener('install', event => {

});

self.addEventListener('activate', event => {

});

self.addEventListener('fetch', event => {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  // request.mode of 'navigate' is unfortunately not supported in Chrome
  // versions older than 49, so we need to include a less precise fallback,
  // which checks for a GET request with an Accept: text/html header.
  if (event.request.url.includes('/api-mimic') &&
    (event.request.mode === 'navigate' ||
      (event.request.method === 'GET' &&
       event.request.headers.get('accept').includes('text/html')))
  ) {
    event.respondWith(
      new Response(offlineHTML, {
          headers: {'Content-Type': 'text/html'}
      })
    );
  }

  // If our if() condition is false, then this fetch handler won't intercept the request.
  // If there are any other fetch handlers registered, they will get a chance to call
  // event.respondWith(). If no fetch handlers call event.respondWith(), the request will be
  // handled by the browser as if there were no service worker involvement.
});
