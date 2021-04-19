// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"63iPG":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "d231a23f43d60e28ed500b93b4f5078c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4ThtM":[function(require,module,exports) {
'use strict';
// ENV for API Key
require('dotenv').config();
// Hangul.js
const Hangul = require('hangul-js');
// Converter elements
const textInputEl = document.querySelector('.textarea--input');
const textOutputEl = document.querySelector('.textarea--output');
const textfieldEl = document.querySelector('.textfield');
const submitBtn = document.querySelector('.btn--submit');
const clearBtn = document.querySelector('.btn--clear');
// modal + overlay
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const hangeulBtn = document.querySelector('.btn--hangeul');
const closeModalBtn = document.querySelector('.btn--close-modal');
// Search Tool Elements
const searchInputEl = document.querySelector('.input--searchtool');
const searchOutputResultsEl = document.querySelector('.output--searchtool-name');
const searchOutputDescriptionEl = document.querySelector('.output--searchtool-description');
const searchOutputDetailsEl = document.querySelector('.output--searchtool-detail');
const searchToolBtn = document.querySelector('.btn--searchtool-submit');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
hangeulBtn.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// prettier-ignore
const hangulDict = {
  hangeul: ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'],
  consonants: ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
  vowels: ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'],
  jotiert: ['ㅑ', 'ㅒ', 'ㅖ', 'ㅛ', 'ㅠ', 'ㅕ'],
  // Checks if letter is a Consonant
  // Checks if letter is a Consonant
  isConsonant(letter) {
    return this.consonants.includes(letter);
  },
  // Checks if letter is a Vowel
  // Checks if letter is a Vowel
  isVowel(letter) {
    return this.vowels.includes(letter);
  },
  // Checks if letter is hangeul. if not, it is blank, abc or special character
  // Checks if letter is hangeul. if not, it is blank, abc or special character
  notHangeul(letter) {
    return !this.hangeul.includes(letter);
  },
  ㄱ: 'k',
  kiyeokChecker(preprev, prev, fol, fol2) {
    // Check for 'ㄱㅅ' 받침 -> solve in ㅅchecker
    if (fol === 'ㅅ' && (hangulDict.consonants.includes(fol2) || this.notHangeul(fol2))) {
      return '';
    } else if (prev === 'ㄹ' && fol === 'ㅇ') {
      return 'lg';
    } else if (prev === 'ㄹ' && ['ㄱ', 'ㅋ', 'ㄲ'].includes(fol)) {
      return 'l';
    } else if (prev === 'ㄹ' && ['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'ng';
    } else if (prev === 'ㄹ' && fol === 'ㅎ' && fol2 === 'ㅣ') {
      return "lk'";
    } else if (prev === 'ㄹ' && this.consonants.includes(fol) || this.notHangeul(fol)) {
      return 'k';
    } else if (preprev === 'ㄹ' && prev === 'ㅂ') {
      return 'g';
    } else if (prev === 'ㅇ') {
      return 'g';
    } else if (prev === 'ㅎ') {
      return "k'";
    } else if (fol === 'ㄴ' || fol === 'ㄹ' || fol === 'ㅁ') {
      return 'ng';
    } else if (this.isVowel(prev) && this.isVowel(fol) || ['ㄴ', 'ㄹ', 'ㅁ'].includes(prev)) {
      return 'g';
    } else {
      return 'k';
    }
  },
  ㄲ: 'kk',
  ssKiyeokChecker(prev, fol) {
    if (prev === 'ㄱ') {
      return 'k';
    } else if (['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'ng';
    } else if (this.notHangeul(fol) || this.consonants.includes(fol)) {
      return 'k';
    } else {
      return 'kk';
    }
  },
  ㄴ: 'n',
  nieunChecker(preprev, prev, fol, fol2) {
    // Check for 'ㄴㅎ','ㄴㅈ' 받침 -> solve in ㅎ/ㅈ checker
    if ((fol === 'ㅎ' || fol === 'ㅈ') && (hangulDict.consonants.includes(fol2) || this.notHangeul(fol2))) {
      return '';
    } else if (preprev === 'ㄹ' && prev === 'ㅎ') {
      return 'l';
    } else if (prev === 'ㄹ' || fol === 'ㄹ') {
      return 'l';
    } else if (fol === 'ㄱ') {
      return "n'";
    } else {
      return 'n';
    }
  },
  ㄷ: 't',
  digeudChecker(preprev, prev, fol, fol2) {
    // ㄹㅌ + ㄷ exception
    if (preprev === 'ㄹ' && prev === 'ㅌ') {
      return 'd';
    } else if (prev === 'ㅎ') {
      return "t'";
    } else if (fol === 'ㅇ' && fol2 === 'ㅣ') {
      return 'j';
    } else if (fol === 'ㅎ' && ['ㅣ', 'ㅕ'].includes(fol2)) {
      return "ch'";
    } else if (this.isVowel(prev) && this.isVowel(fol) || ['ㄴ', 'ㄹ', 'ㅁ', 'ㅇ'].includes(prev)) {
      return 'd';
    } else if (['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'n';
    } else if (fol === 'ㅅ') {
      return 's';
    } else {
      return 't';
    }
  },
  ㄸ: 'tt',
  ssDigeudChecker(prev, fol, fol2) {
    if (['ㄷ', 'ㄸ', 'ㅅ', 'ㅆ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅌ'].includes(prev)) {
      return 't';
    } else {
      return 'tt';
    }
  },
  ㄹ: 'r',
  rieulChecker(prev, fol, fol2) {
    // if (this.jotiert.includes(fol) || fol === 'ㅣ') {
    // return '';
    // } else
    // Check for 'ㄹㄱ','ㄹㅁ', 'ㄹㅂ', 'ㄹㅅ', 'ㄹㅌ', 'ㄹㅍ', 'ㄹㅎ' 받침 -> solve in respective consonant checkers
    if (['ㄱ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅌ', 'ㅍ', 'ㅎ'].includes(fol) && (hangulDict.consonants.includes(fol2) || this.notHangeul(fol2))) {
      return '';
    } else if (this.isVowel(prev) && this.isVowel(fol) || fol === 'ㅇ') {
      return 'r';
    } else if (['ㄴ', 'ㄹ'].includes(prev)) {
      return 'l';
    } else if (['ㄱ', 'ㄲ', 'ㄷ', 'ㄸ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'].includes(prev)) {
      return 'n';
    } else if (this.notHangeul(prev)) {
      return 'r';
    } else {
      return 'l';
    }
  },
  ㅁ: 'm',
  mieumChecker(prev, fol, fol2) {
    // check for 'ㄹㅁ + vokal' case
    if (prev === 'ㄹ' && fol === 'ㅇ') {
      return 'lm';
    } else {
      return 'm';
    }
  },
  ㅂ: 'p',
  bieubChecker(preprev, prev, fol, fol2) {
    // check for 'ㅂㅅ' 받침
    if (fol === 'ㅅ' && (hangulDict.consonants.includes(fol2) || this.notHangeul(fol2))) {
      return '';
    } else if (prev === 'ㄹ' && fol === 'ㅇ') {
      return 'lb';
    } else if (prev === 'ㄹ' && fol === 'ㅎ') {
      return "lp'";
    } else if (prev === 'ㄹ' && fol === 'ㄴ') {
      return 'm';
    } else if (preprev === 'ㅏ' && prev === 'ㄹ' && ['ㄷ', 'ㄱ'].includes(fol)) {
      return 'p';
    } else if (preprev === 'ㅓ' && prev === 'ㄹ' && fol === 'ㄷ' && fol2 === 'ㅜ') {
      return 'p';
    } else if (prev === 'ㄹ' && ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅍ', 'ㅃ'].includes(fol)) {
      return 'l';
    } else if (prev === 'ㄹ' && this.consonants.includes(fol)) {
      return 'p';
    } else if (prev === 'ㄹ' && this.notHangeul(fol)) {
      return 'l';
    } else if (this.isVowel(prev) && this.isVowel(fol) || ['ㄴ', 'ㄹ', 'ㅁ', 'ㅇ'].includes(prev)) {
      return 'b';
    } else if (['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'm';
    } else return 'p';
  },
  ㅃ: 'pp',
  ssBieubChecker(prev, fol) {
    if (['ㅂ', 'ㅃ', 'ㅍ'].includes(prev)) {
      return 'p';
    } else return 'pp';
  },
  ㅅ: 's',
  siotChecker(prepreprev, preprev, prev, fol, fol2, fol3) {
    // check for 'ㄱㅅ' 받침
    if (prev === 'ㄱ' && fol === 'ㅇ') {
      return 'ks';
    } else if (prev === 'ㄱ' && ['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'ng';
    } else if (prev === 'ㄱ' && (this.consonants.includes(fol) || this.notHangeul(fol))) {
      return 'k';
    } else if (prev === 'ㄹ' && fol === 'ㅇ') {
      return 'ls';
    } else if (prev === 'ㄹ' && this.consonants.includes(fol)) {
      return 'l';
    } else if (prev === 'ㄹ' && this.notHangeul(fol)) {
      return 'l';
    } else if (preprev === 'ㅏ' && prev === 'ㅂ' && fol === 'ㅇ' && (fol2 === 'ㅏ' || fol2 === 'ㅓ')) {
      return 'p';
    } else if (prev === 'ㅂ' && fol === 'ㅇ') {
      return 'ps';
    } else if (prev === 'ㅂ' && ['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'm';
    } else if (prev === 'ㅂ' && (this.consonants.includes(fol) || this.notHangeul(fol))) {
      return 'p';
    } else if (preprev === 'ㅇ' && prev === 'ㅜ' && fol === 'ㅇ' && fol2 === 'ㅓ') {
      return 'd';
    } else if (prepreprev === 'ㅇ' && preprev === 'ㅜ' && prev === 'ㅣ' && fol === 'ㅇ' && fol2 !== 'ㅣ') {
      return 'd';
    } else if (['ㅊ', 'ㅎ'].includes(preprev) && prev === 'ㅓ' && fol === 'ㅇ' && (!this.jotiert.includes(fol2) || fol2 === 'ㅣ')) {
      return 'd';
    } else if (fol === 'ㅇ' && (fol2 === 'ㅣ' || this.jotiert.includes(fol2)) && this.consonants.includes(fol3)) {
      return 'nn';
    } else if (fol === 'ㅜ' && fol2 === 'ㅣ') {
      return 'sh';
    } else if (// between vowels
    this.isVowel(prev) && this.isVowel(fol) || // prev not hangeul
    this.notHangeul(prev) || // prev is cons
    this.isConsonant(prev)) {
      return 's';
    } else if (['ㄴ', 'ㄹ', 'ㅁ'].includes(fol) || fol === 'ㅇ' && this.jotiert.includes(fol2)) {
      return 'n';
    } else if (this.isConsonant(fol) && fol !== 'ㅇ') {
      return 't';
    } else if (this.isConsonant(fol)) {
      return 's';
    } else {
      return 't';
    }
  },
  ㅆ: 'ss',
  ssSiotChecker(prev, fol) {
    if (['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'n';
    } else if (this.isConsonant(fol) && !['ㄴ', 'ㄹ', 'ㅁ', 'ㅅ', 'ㅇ'].includes(fol)) {
      return 't';
    } else if (prev === 'ㅅ' || fol === 'ㅅ') {
      return 's';
    } else {
      return 'ss';
    }
  },
  ㅇ: '',
  ieungChecker(prev, fol) {
    if (this.notHangeul(prev) || prev === 'ㅇ') {
      return '';
    } else if (this.isConsonant(prev) && this.isVowel(fol)) {
      return '';
    } else if (this.isVowel(prev) && this.isVowel(fol)) {
      return '';
    } else {
      return 'ng';
    }
  },
  ㅈ: 'ch',
  jieutChecker(prev, fol, fol2) {
    // check for 'ㄴㅈ' 받침
    if (prev === 'ㄴ' && fol === 'ㅇ') {
      return 'nj';
    } else if (prev === 'ㄴ' && fol !== 'ㅎ' && this.consonants.includes(fol)) {
      return 'n';
    } else if (prev === 'ㄴ' && fol === 'ㅎ') {
      return "nch'";
    } else if (prev === 'ㅎ') {
      return "ch'";
    } else if (fol === 'ㅎ' && ['ㅣ', 'ㅕ'].includes(fol2)) {
      return "ch'";
    } else if (this.isVowel(prev) && this.isVowel(fol) || ['ㄴ', 'ㄹ', 'ㅁ', 'ㅇ'].includes(prev)) {
      return 'j';
    } else if (['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'n';
    } else if (this.isConsonant(fol) && fol !== 'ㅅ' || this.notHangeul(fol)) {
      return 't';
    } else if (this.isConsonant(fol)) {
      return 's';
    } else {
      return 'ch';
    }
  },
  ㅉ: 'tch',
  ssJieutChecker(prev, fol) {
    if (['ㄷ', 'ㅅ', 'ㅋ', 'ㅊ', 'ㅌ', 'ㅆ'].includes(prev)) {
      return 'ch';
    } else {
      return 'tch';
    }
  },
  ㅊ: "ch'",
  chieutChecker(prev, fol) {
    if (['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'n';
    } else if (this.isConsonant(fol) && fol !== 'ㅅ' || this.notHangeul(fol)) {
      return 't';
    } else if (this.isConsonant(fol)) {
      return 's';
    } else {
      return "ch'";
    }
  },
  ㅋ: "k'",
  kieukChecker(prev, fol, fol2) {
    if (fol === 'ㄴ' || fol === 'ㄹ' || fol === 'ㅁ') {
      return 'ng';
    } else if (this.isVowel(prev) && this.isVowel(fol)) {
      return "k'";
    } else if (fol === 'ㅇ' && fol2 === 'ㅣ') {
      return 'ngn';
    } else if (this.notHangeul(fol)) {
      return 'k';
    } else {
      return "k'";
    }
  },
  ㅌ: "t'",
  tieutChecker(prev, fol, fol2) {
    // check for 'ㄹㅌ' 받침
    if (prev === 'ㄹ' && fol === 'ㅇ' && (this.jotiert.includes(fol2) || fol2 === 'ㅣ')) {
      return "lch'";
    } else if (prev === 'ㄹ' && fol === 'ㅇ' && this.vowels.includes(fol2)) {
      return "lt'";
    } else if (prev === 'ㄹ' && this.consonants.includes(fol)) {
      return 'l';
    } else if (['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'n';
    } else if (fol === 'ㅇ' && fol2 === 'ㅣ') {
      return "ch'";
    } else if (this.notHangeul(fol) || fol === 'ㅉ') {
      return 't';
    } else if (fol === 'ㅅ') {
      return 's';
    } else {
      return "t'";
    }
  },
  ㅍ: "p'",
  pieupChecker(prev, fol, fol2) {
    // ㄹ,ㅍ 받침 + vokal
    if (prev === 'ㄹ' && fol === 'ㅇ') {
      return "lp'";
    } else if (prev === 'ㄹ' && fol === 'ㄴ') {
      return 'm';
    } else if (prev === 'ㄹ' && this.consonants.includes(fol)) {
      return 'p';
    } else if (this.notHangeul(fol) || ['ㅂ', 'ㅍ', 'ㅃ'].includes(fol)) {
      return 'p';
    } else if (['ㄴ', 'ㄹ', 'ㅁ'].includes(fol)) {
      return 'm';
    } else return "p'";
  },
  ㅎ: 'h',
  hieutChecker(preprev, prev, fol, fol2) {
    // check for 'ㄴㅈ+히' exception
    if (preprev === 'ㄴ' && prev === 'ㅈ' && fol === 'ㅣ') {
      return '';
    } else if (preprev === 'ㄹ' && prev === 'ㄱ' && fol === 'ㅣ') {
      return '';
    } else if (prev === 'ㄴ' && fol === 'ㅇ' && this.vowels.includes(fol2)) {
      return 'n';
    } else if (prev === 'ㄴ' && fol === 'ㅇ') {
      return 'nh';
    } else if (prev === 'ㄴ' && ['ㄱ', 'ㄷ', 'ㅂ', 'ㅈ'].includes(fol)) {
      return 'n';
    } else if (prev === 'ㄴ' && fol === 'ㄴ') {
      return 'n';
    } else if (prev === 'ㄴ' && fol === 'ㅅ') {
      return 'ns';
    } else if (prev === 'ㄹ' && fol === 'ㅇ' && this.vowels.includes(fol2)) {
      return 'r';
    } else if (prev === 'ㄹ' && fol === 'ㅇ') {
      return 'rh';
    } else if (prev === 'ㄹ' && ['ㄱ', 'ㄷ', 'ㅂ', 'ㅈ'].includes(fol)) {
      return 'l';
    } else if (prev === 'ㄹ' && fol === 'ㄴ') {
      return 'l';
    } else if (this.vowels.includes(prev) && fol === 'ㅇ' && this.vowels.includes(fol2)) {
      return '';
    } else if (fol === 'ㅅ') {
      return 's';
    } else if (this.vowels.includes(prev) && fol === 'ㄴ') {
      return 'n';
    } else if (this.notHangeul(fol) || ['ㄱ', 'ㄷ', 'ㅈ'].includes(fol)) {
      return '';
    } else {
      return 'h';
    }
  },
  ㅏ: 'a',
  aChecker(prev, fol, fol2) {
    if (prev === 'ㅗ') {
      return '';
    } else {
      return 'a';
    }
  },
  ㅐ: 'ae',
  aeChecker(prev, fol, fol2) {
    if (prev === 'ㅗ') {
      return '';
    } else {
      return 'ae';
    }
  },
  ㅑ: 'ya',
  ㅒ: 'yae',
  ㅓ: 'ŏ',
  eoChecker(prev, fol, fol2) {
    if (prev === 'ㅜ') {
      return '';
    } else {
      return 'ŏ';
    }
  },
  ㅔ: 'e',
  eChecker(prev, fol, fol2) {
    if (prev === 'ㅜ') {
      return '';
    } else {
      return 'e';
    }
  },
  ㅕ: 'yŏ',
  ㅖ: 'ye',
  ㅗ: 'o',
  oChecker(prev, fol, fol2) {
    if (fol === 'ㅏ') {
      return 'wa';
    } else if (fol === 'ㅐ') {
      return 'wae';
    } else if (fol === 'ㅣ') {
      return 'oe';
    } else {
      return 'o';
    }
  },
  ㅛ: 'yo',
  ㅜ: 'u',
  uChecker(prev, fol, fol2) {
    if (fol === 'ㅓ') {
      return 'wŏ';
    } else if (fol === 'ㅣ') {
      return 'wi';
    } else if (fol === 'ㅔ') {
      return 'we';
    } else {
      return 'u';
    }
  },
  ㅠ: 'yu',
  ㅡ: 'ŭ',
  euChecker(prev, fol, fol2) {
    if (fol === 'ㅣ') {
      return 'ŭi';
    } else {
      return 'ŭ';
    }
  },
  ㅣ: 'i',
  iChecker(prev, fol, fol2) {
    if (['ㅗ', 'ㅜ', 'ㅡ'].includes(prev)) {
      return '';
    } else {
      return 'i';
    }
  }
};
const checker = function (words) {
  const splitText = Hangul.disassemble(words);
  const arr = [];
  for (const [i, letter] of splitText.entries()) {
    // check for consonants
    if (letter === 'ㄱ') {
      arr.push(hangulDict.kiyeokChecker(splitText[i - 2], splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㄴ') {
      arr.push(hangulDict.nieunChecker(splitText[i - 2], splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㄷ') {
      arr.push(hangulDict.digeudChecker(splitText[i - 2], splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㄹ') {
      arr.push(hangulDict.rieulChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅂ') {
      arr.push(hangulDict.bieubChecker(splitText[i - 2], splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅅ') {
      arr.push(hangulDict.siotChecker(splitText[i - 3], splitText[i - 2], splitText[i - 1], splitText[i + 1], splitText[i + 2], splitText[i + 3]));
    } else if (letter === 'ㅇ') {
      arr.push(hangulDict.ieungChecker(splitText[i - 1], splitText[i + 1]));
    } else if (letter === 'ㅈ') {
      arr.push(hangulDict.jieutChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅊ') {
      arr.push(hangulDict.chieutChecker(splitText[i - 1], splitText[i + 1]));
    } else if (letter === 'ㅋ') {
      arr.push(hangulDict.kieukChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅌ') {
      arr.push(hangulDict.tieutChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅍ') {
      arr.push(hangulDict.pieupChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅎ') {
      arr.push(hangulDict.hieutChecker(splitText[i - 2], splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅁ') {
      arr.push(hangulDict.mieumChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㄲ') {
      arr.push(hangulDict.ssKiyeokChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㄸ') {
      arr.push(hangulDict.ssDigeudChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅃ') {
      arr.push(hangulDict.ssBieubChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅆ') {
      arr.push(hangulDict.ssSiotChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅉ') {
      arr.push(hangulDict.ssJieutChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅗ') {
      arr.push(hangulDict.oChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅜ') {
      arr.push(hangulDict.uChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅡ') {
      arr.push(hangulDict.euChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅣ') {
      arr.push(hangulDict.iChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅓ') {
      arr.push(hangulDict.eoChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅏ') {
      arr.push(hangulDict.aChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅐ') {
      arr.push(hangulDict.aeChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else if (letter === 'ㅔ') {
      arr.push(hangulDict.eChecker(splitText[i - 1], splitText[i + 1], splitText[i + 2]));
    } else {
      hangulDict[letter] ? arr.push(hangulDict[letter]) : arr.push(letter);
    }
  }
  return arr.join('');
};
submitBtn.addEventListener('click', function () {
  const input = textInputEl.value;
  textOutputEl.value = checker(input);
});
clearBtn.addEventListener('click', function () {
  textInputEl.value = textOutputEl.value = '';
});
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// Search Tool Module
const api_key = "AIzaSyAHd78Vg666Vid9gtPAJe0-9DlHBq0viW8";
const AJAX = async function (query) {
  try {
    const fetchedData = await fetch(`https://kgsearch.googleapis.com/v1/entities:search?query=${query}&key=${api_key}&limit=1&indent=True`);
    const data = await fetchedData.json();
    const resultName = data.itemListElement[0].result.name;
    const resultDescription = data.itemListElement[0].result.description;
    const resultDetail = data.itemListElement[0].result.detailedDescription.articleBody;
    searchOutputResultsEl.value = `${resultName}`;
    searchOutputDescriptionEl.value = `${resultDescription ? resultDescription : 'No Description found!'}`;
    searchOutputDetailsEl.value = resultDetail;
  } catch (err) {
    console.error(err);
    searchOutputResultsEl.value = 'Sorry, looks like there are no results for that query!';
  }
};
searchToolBtn.addEventListener('click', function (e) {
  e.preventDefault();
  searchOutputResultsEl.value = searchOutputDescriptionEl.value = searchOutputDetailsEl.value = '';
  const input = searchInputEl.value.trim().replace(' ', '+');
  AJAX(input);
});

},{"dotenv":"0NiTB","hangul-js":"363mA"}],"0NiTB":[function(require,module,exports) {
var process = require("process");
/*@flow*/
/*::

type DotenvParseOptions = {
debug?: boolean
}

// keys and values from src
type DotenvParseOutput = { [string]: string }

type DotenvConfigOptions = {
path?: string, // path to .env file
encoding?: string, // encoding of .env file
debug?: string // turn on logging for debugging purposes
}

type DotenvConfigOutput = {
parsed?: DotenvParseOutput,
error?: Error
}

*/
const fs = require('fs');
const path = require('path');
function log(message) /*: string*/
{
  console.log(`[dotenv][DEBUG] ${message}`);
}
const NEWLINE = '\n';
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;
const RE_NEWLINES = /\\n/g;
const NEWLINES_MATCH = /\n|\r|\r\n/;
// Parses src into an Object
function parse(src, /*: string | Buffer*/
options) /*: ?DotenvParseOptions*/
/*: DotenvParseOutput*/
{
  const debug = Boolean(options && options.debug);
  const obj = {};
  // convert Buffers before splitting into lines and processing
  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    const keyValueArr = line.match(RE_INI_KEY_VAL);
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1];
      // default undefined or missing values to empty string
      let val = keyValueArr[2] || '';
      const end = val.length - 1;
      const isDoubleQuoted = val[0] === '"' && val[end] === '"';
      const isSingleQuoted = val[0] === "'" && val[end] === "'";
      // if single or double quoted, remove quotes
      if (isSingleQuoted || isDoubleQuoted) {
        val = val.substring(1, end);
        // if double quoted, expand newlines
        if (isDoubleQuoted) {
          val = val.replace(RE_NEWLINES, NEWLINE);
        }
      } else {
        // remove surrounding whitespace
        val = val.trim();
      }
      obj[key] = val;
    } else if (debug) {
      log(`did not match key and value when parsing line ${idx + 1}: ${line}`);
    }
  });
  return obj;
}
// Populates process.env from .env file
function config(options) /*: ?DotenvConfigOptions*/
/*: DotenvConfigOutput*/
{
  let dotenvPath = path.resolve(process.cwd(), '.env');
  let encoding = /*: string*/
  'utf8';
  let debug = false;
  if (options) {
    if (options.path != null) {
      dotenvPath = options.path;
    }
    if (options.encoding != null) {
      encoding = options.encoding;
    }
    if (options.debug != null) {
      debug = true;
    }
  }
  try {
    // specifying an encoding returns a string instead of a buffer
    const parsed = parse(fs.readFileSync(dotenvPath, {
      encoding
    }), {
      debug
    });
    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = parsed[key];
      } else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`);
      }
    });
    return {
      parsed
    };
  } catch (e) {
    return {
      error: e
    };
  }
}
module.exports.config = config;
module.exports.parse = parse;

},{"process":"1F0qe","fs":"2VpFW","path":"24BJo"}],"1F0qe":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    // normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    // normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};
// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = '';
// empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

},{}],"2VpFW":[function(require,module,exports) {
"use strict";
},{}],"24BJo":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
// 
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
// 
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var process = require("process");
function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length) code = path.charCodeAt(i); else if (code === 47) /*/*/
    break; else code = 47;
    if (code === 47) /*/*/
    {
      if (lastSlash === i - 1 || dots === 1) {} else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || /*.*/
        res.charCodeAt(res.length - 2) !== 46) /*.*/
        {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0) res += '/..'; else res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i); else res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 && /*.*/
    dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}
var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0) path = arguments[i]; else {
        if (cwd === undefined) cwd = process.cwd();
        path = cwd;
      }
      assertPath(path);
      // Skip empty entries
      if (path.length === 0) {
        continue;
      }
      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47;
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
    if (resolvedAbsolute) {
      if (resolvedPath.length > 0) return '/' + resolvedPath; else return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },
  normalize: function normalize(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var isAbsolute = path.charCodeAt(0) === 47;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);
    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';
    if (isAbsolute) return '/' + path;
    return path;
  },
  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47;
  },
  join: function join() {
    if (arguments.length === 0) return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined) joined = arg; else joined += '/' + arg;
      }
    }
    if (joined === undefined) return '.';
    return posix.normalize(joined);
  },
  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to) return '';
    from = posix.resolve(from);
    to = posix.resolve(to);
    if (from === to) return '';
    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47) /*/*/
      break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;
    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47) /*/*/
      break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;
    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47) /*/*/
          {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47) /*/*/
          {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode) break; else if (fromCode === 47) /*/*/
      lastCommonSep = i;
    }
    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47) /*/*/
      {
        if (out.length === 0) out += '..'; else out += '/..';
      }
    }
    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0) return out + to.slice(toStart + lastCommonSep); else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47) /*/*/
      ++toStart;
      return to.slice(toStart);
    }
  },
  _makeLong: function _makeLong(path) {
    return path;
  },
  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47) /*/*/
      {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }
    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },
  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;
    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47) /*/*/
        {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) end = firstNonSlashEnd; else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47) /*/*/
        {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }
      if (end === -1) return '';
      return path.slice(start, end);
    }
  },
  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47) /*/*/
      {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46) /*.*/
      {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i; else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },
  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },
  parse: function parse(path) {
    assertPath(path);
    var ret = {
      root: '',
      dir: '',
      base: '',
      ext: '',
      name: ''
    };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47) /*/*/
      {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46) /*.*/
      {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i; else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end); else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }
    if (startPart > 0) ret.dir = path.slice(0, startPart - 1); else if (isAbsolute) ret.dir = '/';
    return ret;
  },
  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"1F0qe"}],"363mA":[function(require,module,exports) {
var define;
/**
* Hangul.js
* https://github.com/e-/Hangul.js
*
* Copyright 2017, Jaemin Jo
* under the MIT license.
*/
(function () {
  "use strict";
  var CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', ['ㅗ', 'ㅏ'], ['ㅗ', 'ㅐ'], ['ㅗ', 'ㅣ'], 'ㅛ', 'ㅜ', ['ㅜ', 'ㅓ'], ['ㅜ', 'ㅔ'], ['ㅜ', 'ㅣ'], 'ㅠ', 'ㅡ', ['ㅡ', 'ㅣ'], 'ㅣ'], JONG = ['', 'ㄱ', 'ㄲ', ['ㄱ', 'ㅅ'], 'ㄴ', ['ㄴ', 'ㅈ'], ['ㄴ', 'ㅎ'], 'ㄷ', 'ㄹ', ['ㄹ', 'ㄱ'], ['ㄹ', 'ㅁ'], ['ㄹ', 'ㅂ'], ['ㄹ', 'ㅅ'], ['ㄹ', 'ㅌ'], ['ㄹ', 'ㅍ'], ['ㄹ', 'ㅎ'], 'ㅁ', 'ㅂ', ['ㅂ', 'ㅅ'], 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], HANGUL_OFFSET = 0xAC00, CONSONANTS = ['ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], COMPLETE_CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], COMPLETE_JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'], COMPLETE_JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], COMPLEX_CONSONANTS = [['ㄱ', 'ㅅ', 'ㄳ'], ['ㄴ', 'ㅈ', 'ㄵ'], ['ㄴ', 'ㅎ', 'ㄶ'], ['ㄹ', 'ㄱ', 'ㄺ'], ['ㄹ', 'ㅁ', 'ㄻ'], ['ㄹ', 'ㅂ', 'ㄼ'], ['ㄹ', 'ㅅ', 'ㄽ'], ['ㄹ', 'ㅌ', 'ㄾ'], ['ㄹ', 'ㅍ', 'ㄿ'], ['ㄹ', 'ㅎ', 'ㅀ'], ['ㅂ', 'ㅅ', 'ㅄ']], COMPLEX_VOWELS = [['ㅗ', 'ㅏ', 'ㅘ'], ['ㅗ', 'ㅐ', 'ㅙ'], ['ㅗ', 'ㅣ', 'ㅚ'], ['ㅜ', 'ㅓ', 'ㅝ'], ['ㅜ', 'ㅔ', 'ㅞ'], ['ㅜ', 'ㅣ', 'ㅟ'], ['ㅡ', 'ㅣ', 'ㅢ']], CONSONANTS_HASH, CHO_HASH, JUNG_HASH, JONG_HASH, COMPLEX_CONSONANTS_HASH, COMPLEX_VOWELS_HASH;
  function _makeHash(array) {
    var length = array.length, hash = {
      0: 0
    };
    for (var i = 0; i < length; i++) {
      if (array[i]) hash[array[i].charCodeAt(0)] = i;
    }
    return hash;
  }
  CONSONANTS_HASH = _makeHash(CONSONANTS);
  CHO_HASH = _makeHash(COMPLETE_CHO);
  JUNG_HASH = _makeHash(COMPLETE_JUNG);
  JONG_HASH = _makeHash(COMPLETE_JONG);
  function _makeComplexHash(array) {
    var length = array.length, hash = {}, code1, code2;
    for (var i = 0; i < length; i++) {
      code1 = array[i][0].charCodeAt(0);
      code2 = array[i][1].charCodeAt(0);
      if (typeof hash[code1] === 'undefined') {
        hash[code1] = {};
      }
      hash[code1][code2] = array[i][2].charCodeAt(0);
    }
    return hash;
  }
  COMPLEX_CONSONANTS_HASH = _makeComplexHash(COMPLEX_CONSONANTS);
  COMPLEX_VOWELS_HASH = _makeComplexHash(COMPLEX_VOWELS);
  function _isConsonant(c) {
    return typeof CONSONANTS_HASH[c] !== 'undefined';
  }
  function _isCho(c) {
    return typeof CHO_HASH[c] !== 'undefined';
  }
  function _isJung(c) {
    return typeof JUNG_HASH[c] !== 'undefined';
  }
  function _isJong(c) {
    return typeof JONG_HASH[c] !== 'undefined';
  }
  function _isHangul(c) /*code number*/
  {
    return 0xAC00 <= c && c <= 0xd7a3;
  }
  function _isJungJoinable(a, b) {
    return COMPLEX_VOWELS_HASH[a] && COMPLEX_VOWELS_HASH[a][b] ? COMPLEX_VOWELS_HASH[a][b] : false;
  }
  function _isJongJoinable(a, b) {
    return COMPLEX_CONSONANTS_HASH[a] && COMPLEX_CONSONANTS_HASH[a][b] ? COMPLEX_CONSONANTS_HASH[a][b] : false;
  }
  var disassemble = function (string, grouped) {
    if (string === null) {
      throw new Error('Arguments cannot be null');
    }
    if (typeof string === 'object') {
      string = string.join('');
    }
    var result = [], length = string.length, cho, jung, jong, code, r;
    for (var i = 0; i < length; i++) {
      var temp = [];
      code = string.charCodeAt(i);
      if (_isHangul(code)) {
        // 완성된 한글이면
        code -= HANGUL_OFFSET;
        jong = code % 28;
        jung = (code - jong) / 28 % 21;
        cho = parseInt((code - jong) / 28 / 21);
        temp.push(CHO[cho]);
        if (typeof JUNG[jung] === 'object') {
          temp = temp.concat(JUNG[jung]);
        } else {
          temp.push(JUNG[jung]);
        }
        if (jong > 0) {
          if (typeof JONG[jong] === 'object') {
            temp = temp.concat(JONG[jong]);
          } else {
            temp.push(JONG[jong]);
          }
        }
      } else if (_isConsonant(code)) {
        // 자음이면
        if (_isCho(code)) {
          r = CHO[CHO_HASH[code]];
        } else {
          r = JONG[JONG_HASH[code]];
        }
        if (typeof r === 'string') {
          temp.push(r);
        } else {
          temp = temp.concat(r);
        }
      } else if (_isJung(code)) {
        r = JUNG[JUNG_HASH[code]];
        if (typeof r === 'string') {
          temp.push(r);
        } else {
          temp = temp.concat(r);
        }
      } else {
        temp.push(string.charAt(i));
      }
      if (grouped) result.push(temp); else result = result.concat(temp);
    }
    return result;
  };
  var disassembleToString = function (str) {
    if (typeof str !== 'string') {
      return '';
    }
    str = disassemble(str);
    return str.join('');
  };
  var assemble = function (array) {
    if (typeof array === 'string') {
      array = disassemble(array);
    }
    var result = [], length = array.length, code, stage = 0, complete_index = -1, // 완성된 곳의 인덱스
    previous_code, jong_joined = false;
    function _makeHangul(index) {
      // complete_index + 1부터 index까지를 greedy하게 한글로 만든다.
      var code, cho, jung1, jung2, jong1 = 0, jong2, hangul = '';
      jong_joined = false;
      if (complete_index + 1 > index) {
        return;
      }
      for (var step = 1; ; step++) {
        if (step === 1) {
          cho = array[complete_index + step].charCodeAt(0);
          if (_isJung(cho)) {
            // 첫번째 것이 모음이면 1) ㅏ같은 경우이거나 2) ㅙ같은 경우이다
            if (complete_index + step + 1 <= index && _isJung(jung1 = array[complete_index + step + 1].charCodeAt(0))) {
              // 다음것이 있고 모음이면
              result.push(String.fromCharCode(_isJungJoinable(cho, jung1)));
              complete_index = index;
              return;
            } else {
              result.push(array[complete_index + step]);
              complete_index = index;
              return;
            }
          } else if (!_isCho(cho)) {
            result.push(array[complete_index + step]);
            complete_index = index;
            return;
          }
          hangul = array[complete_index + step];
        } else if (step === 2) {
          jung1 = array[complete_index + step].charCodeAt(0);
          if (_isCho(jung1)) {
            // 두번째 또 자음이 오면 ㄳ 에서 ㅅ같은 경우이다
            cho = _isJongJoinable(cho, jung1);
            hangul = String.fromCharCode(cho);
            result.push(hangul);
            complete_index = index;
            return;
          } else {
            hangul = String.fromCharCode((CHO_HASH[cho] * 21 + JUNG_HASH[jung1]) * 28 + HANGUL_OFFSET);
          }
        } else if (step === 3) {
          jung2 = array[complete_index + step].charCodeAt(0);
          if (_isJungJoinable(jung1, jung2)) {
            jung1 = _isJungJoinable(jung1, jung2);
          } else {
            jong1 = jung2;
          }
          hangul = String.fromCharCode((CHO_HASH[cho] * 21 + JUNG_HASH[jung1]) * 28 + JONG_HASH[jong1] + HANGUL_OFFSET);
        } else if (step === 4) {
          jong2 = array[complete_index + step].charCodeAt(0);
          if (_isJongJoinable(jong1, jong2)) {
            jong1 = _isJongJoinable(jong1, jong2);
          } else {
            jong1 = jong2;
          }
          hangul = String.fromCharCode((CHO_HASH[cho] * 21 + JUNG_HASH[jung1]) * 28 + JONG_HASH[jong1] + HANGUL_OFFSET);
        } else if (step === 5) {
          jong2 = array[complete_index + step].charCodeAt(0);
          jong1 = _isJongJoinable(jong1, jong2);
          hangul = String.fromCharCode((CHO_HASH[cho] * 21 + JUNG_HASH[jung1]) * 28 + JONG_HASH[jong1] + HANGUL_OFFSET);
        }
        if (complete_index + step >= index) {
          result.push(hangul);
          complete_index = index;
          return;
        }
      }
    }
    for (var i = 0; i < length; i++) {
      code = array[i].charCodeAt(0);
      if (!_isCho(code) && !_isJung(code) && !_isJong(code)) {
        // 초, 중, 종성 다 아니면
        _makeHangul(i - 1);
        _makeHangul(i);
        stage = 0;
        continue;
      }
      // console.log(stage, array[i]);
      if (stage === 0) {
        // 초성이 올 차례
        if (_isCho(code)) {
          // 초성이 오면 아무 문제 없다.
          stage = 1;
        } else if (_isJung(code)) {
          // 중성이오면 ㅐ 또는 ㅘ 인것이다. 바로 구분을 못한다. 따라서 특수한 stage인 stage4로 이동
          stage = 4;
        }
      } else if (stage == 1) {
        // 중성이 올 차례
        if (_isJung(code)) {
          // 중성이 오면 문제없음 진행.
          stage = 2;
        } else {
          // 아니고 자음이오면 ㄻ같은 경우가 있고 ㄹㅋ같은 경우가 있다.
          if (_isJongJoinable(previous_code, code)) {
            // 합쳐질 수 있다면 ㄻ 같은 경우인데 이 뒤에 모음이 와서 ㄹ마 가 될수도 있고 초성이 올 수도 있다. 따라서 섣불리 완성할 수 없다. 이땐 stage5로 간다.
            stage = 5;
          } else {
            // 합쳐질 수 없다면 앞 글자 완성 후 여전히 중성이 올 차례
            _makeHangul(i - 1);
          }
        }
      } else if (stage == 2) {
        // 종성이 올 차례
        if (_isJong(code)) {
          // 종성이 오면 다음엔 자음 또는 모음이 온다.
          stage = 3;
        } else if (_isJung(code)) {
          // 그런데 중성이 오면 앞의 모음과 합칠 수 있는지 본다.
          if (_isJungJoinable(previous_code, code)) {} else {
            // 합칠 수 없다면 오타가 생긴 경우
            _makeHangul(i - 1);
            stage = 4;
          }
        } else {
          // 받침이 안되는 자음이 오면 ㄸ 같은 이전까지 완성하고 다시시작
          _makeHangul(i - 1);
          stage = 1;
        }
      } else if (stage == 3) {
        // 종성이 하나 온 상태.
        if (_isJong(code)) {
          // 또 종성이면 합칠수 있는지 본다.
          if (!jong_joined && _isJongJoinable(previous_code, code)) {
            // 합칠 수 있으면 계속 진행. 왜냐하면 이번에 온 자음이 다음 글자의 초성이 될 수도 있기 때문. 대신 이 기회는 한번만
            jong_joined = true;
          } else {
            // 없으면 한글자 완성
            _makeHangul(i - 1);
            stage = 1;
          }
        } else if (_isCho(code)) {
          // 초성이면 한글자 완성.
          _makeHangul(i - 1);
          stage = 1;
        } else if (_isJung(code)) {
          // 중성이면 이전 종성은 이 중성과 합쳐지고 앞 글자는 받침이 없다.
          _makeHangul(i - 2);
          stage = 2;
        }
      } else if (stage == 4) {
        // 중성이 하나 온 상태
        if (_isJung(code)) {
          // 중성이 온 경우
          if (_isJungJoinable(previous_code, code)) {
            // 이전 중성과 합쳐질 수 있는 경우
            _makeHangul(i);
            stage = 0;
          } else {
            // 중성이 왔지만 못합치는 경우. ㅒㅗ 같은
            _makeHangul(i - 1);
          }
        } else {
          // 아니면 자음이 온 경우.
          _makeHangul(i - 1);
          stage = 1;
        }
      } else if (stage == 5) {
        // 초성이 연속해서 두개 온 상태 ㄺ
        if (_isJung(code)) {
          // 이번에 중성이면 ㄹ가
          _makeHangul(i - 2);
          stage = 2;
        } else {
          _makeHangul(i - 1);
          stage = 1;
        }
      }
      previous_code = code;
    }
    _makeHangul(i - 1);
    return result.join('');
  };
  var search = function (a, b) {
    var ad = disassemble(a).join(''), bd = disassemble(b).join('');
    return ad.indexOf(bd);
  };
  var rangeSearch = function (haystack, needle) {
    var hex = disassemble(haystack).join(''), nex = disassemble(needle).join(''), grouped = disassemble(haystack, true), re = new RegExp(nex, 'gi'), indices = [], result;
    if (!needle.length) return [];
    while (result = re.exec(hex)) {
      indices.push(result.index);
    }
    function findStart(index) {
      for (var i = 0, length = 0; i < grouped.length; ++i) {
        length += grouped[i].length;
        if (index < length) return i;
      }
    }
    function findEnd(index) {
      for (var i = 0, length = 0; i < grouped.length; ++i) {
        length += grouped[i].length;
        if (index + nex.length <= length) return i;
      }
    }
    return indices.map(function (i) {
      return [findStart(i), findEnd(i)];
    });
  };
  function Searcher(string) {
    this.string = string;
    this.disassembled = disassemble(string).join('');
  }
  Searcher.prototype.search = function (string) {
    return disassemble(string).join('').indexOf(this.disassembled);
  };
  var endsWithConsonant = function (string) {
    if (typeof string === 'object') {
      string = string.join('');
    }
    var code = string.charCodeAt(string.length - 1);
    if (_isHangul(code)) {
      // 완성된 한글이면
      code -= HANGUL_OFFSET;
      var jong = code % 28;
      if (jong > 0) {
        return true;
      }
    } else if (_isConsonant(code)) {
      // 자음이면
      return true;
    }
    return false;
  };
  var endsWith = function (string, target) {
    return disassemble(string).pop() === target;
  };
  var hangul = {
    disassemble: disassemble,
    d: disassemble,
    // alias for disassemble
    disassembleToString: disassembleToString,
    ds: disassembleToString,
    // alias for disassembleToString
    assemble: assemble,
    a: assemble,
    // alias for assemble
    search: search,
    rangeSearch: rangeSearch,
    Searcher: Searcher,
    endsWithConsonant: endsWithConsonant,
    endsWith: endsWith,
    isHangul: function (c) {
      if (typeof c === 'string') c = c.charCodeAt(0);
      return _isHangul(c);
    },
    isComplete: function (c) {
      if (typeof c === 'string') c = c.charCodeAt(0);
      return _isHangul(c);
    },
    isConsonant: function (c) {
      if (typeof c === 'string') c = c.charCodeAt(0);
      return _isConsonant(c);
    },
    isVowel: function (c) {
      if (typeof c === 'string') c = c.charCodeAt(0);
      return _isJung(c);
    },
    isCho: function (c) {
      if (typeof c === 'string') c = c.charCodeAt(0);
      return _isCho(c);
    },
    isJong: function (c) {
      if (typeof c === 'string') c = c.charCodeAt(0);
      return _isJong(c);
    },
    isHangulAll: function (str) {
      if (typeof str !== 'string') return false;
      for (var i = 0; i < str.length; i++) {
        if (!_isHangul(str.charCodeAt(i))) return false;
      }
      return true;
    },
    isCompleteAll: function (str) {
      if (typeof str !== 'string') return false;
      for (var i = 0; i < str.length; i++) {
        if (!_isHangul(str.charCodeAt(i))) return false;
      }
      return true;
    },
    isConsonantAll: function (str) {
      if (typeof str !== 'string') return false;
      for (var i = 0; i < str.length; i++) {
        if (!_isConsonant(str.charCodeAt(i))) return false;
      }
      return true;
    },
    isVowelAll: function (str) {
      if (typeof str !== 'string') return false;
      for (var i = 0; i < str.length; i++) {
        if (!_isJung(str.charCodeAt(i))) return false;
      }
      return true;
    },
    isChoAll: function (str) {
      if (typeof str !== 'string') return false;
      for (var i = 0; i < str.length; i++) {
        if (!_isCho(str.charCodeAt(i))) return false;
      }
      return true;
    },
    isJongAll: function (str) {
      if (typeof str !== 'string') return false;
      for (var i = 0; i < str.length; i++) {
        if (!_isJong(str.charCodeAt(i))) return false;
      }
      return true;
    }
  };
  if (typeof define == 'function' && define.amd) {
    define(function () {
      return hangul;
    });
  } else if (typeof module !== 'undefined') {
    module.exports = hangul;
  } else {
    window.Hangul = hangul;
  }
})();

},{}]},["63iPG","4ThtM"], "4ThtM", "parcelRequire68c7")

//# sourceMappingURL=index.b4f5078c.js.map
