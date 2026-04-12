(function () {
  'use strict';

  var PAGE_MAP = {
    'index.html': 'content/index.json',
    '': 'content/index.json',
    'priser.html': 'content/priser.json',
    'om.html': 'content/om.json',
    'kontakt.html': 'content/kontakt.json',
    'evalueringer.html': 'content/evalueringer.json',
    'stress.html': 'content/stress.json',
    'stress-erhverv.html': 'content/stress-erhverv.json',
    'yoga.html': 'content/yoga.json',
    'fysioterapi.html': 'content/fysioterapi.json',
    'glad.html': 'content/glad.json',
    'gifted.html': 'content/gifted.json',
    'boern.html': 'content/boern.json',
    'konsulent.html': 'content/konsulent.json'
  };

  function getPageKey() {
    var path = window.location.pathname;
    var filename = path.substring(path.lastIndexOf('/') + 1);
    return filename || '';
  }

  /**
   * Resolves a dot-notation key like "hero.heading" or "contact.phone"
   * against a data object, supporting both nested objects and flat keys.
   */
  function resolve(data, key) {
    var parts = key.split('.');
    var current = data;
    for (var i = 0; i < parts.length; i++) {
      if (current == null || typeof current !== 'object') return undefined;
      current = current[parts[i]];
    }
    return current;
  }

  /**
   * Applies resolved content values to all [data-content-key] elements
   * within the given root element.
   * Keys ending in "_html" use innerHTML (for bold/links); all others use textContent.
   */
  function applyContent(data, root) {
    root = root || document;
    var elements = root.querySelectorAll('[data-content-key]');
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute('data-content-key');
      var value = resolve(data, key);
      if (value == null || typeof value === 'object') continue;
      var str = String(value);
      if (key.slice(-5) === '_html') {
        el.innerHTML = str;
      } else {
        el.textContent = str;
      }
    }
  }

  function loadContent() {
    var pageKey = getPageKey();
    var pageJsonPath = PAGE_MAP[pageKey];
    if (!pageJsonPath) return;

    var requests = [
      fetch(pageJsonPath).then(function (r) { return r.json(); }),
      fetch('content/global.json').then(function (r) { return r.json(); })
    ];

    Promise.all(requests).then(function (results) {
      var pageData = results[0];
      var globalData = results[1];

      // Apply page-specific content
      applyContent(pageData);

      // Apply global content (keys prefixed with "global." in the HTML)
      var globalWrapped = { global: globalData };
      applyContent(globalWrapped);
    }).catch(function (err) {
      // Fail silently — original HTML text remains visible as fallback
      if (typeof console !== 'undefined') {
        console.warn('[content-loader] Could not load content:', err);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadContent);
  } else {
    loadContent();
  }
})();
