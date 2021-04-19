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
})({"4o6ZF":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "d4ec0480b9fee27b30b6777887adc047";
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

},{}],"25aTR":[function(require,module,exports) {
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

},{}]},["4o6ZF","25aTR"], "25aTR", "parcelRequire68c7")

//# sourceMappingURL=index.87adc047.js.map
