function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../dist/ngx-group-validator/fesm2015/ngx-group-validator.js":
  /*!**************************************************************************************************************!*\
    !*** D:/Angular/Libraries/ngx-form-group-validator/dist/ngx-group-validator/fesm2015/ngx-group-validator.js ***!
    \**************************************************************************************************************/

  /*! exports provided: NgxGroupValidators */

  /***/
  function distNgxGroupValidatorFesm2015NgxGroupValidatorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxGroupValidators", function () {
      return NgxGroupValidators;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-group-validators.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function ValidationRules() {}
    /**
     * @record
     */


    function AsyncValidationRules() {}
    /**
     * @record
     * @template Type
     */


    function SingleControlCondition() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-group-validators.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgxGroupValidators =
    /*#__PURE__*/
    function () {
      function NgxGroupValidators() {
        _classCallCheck(this, NgxGroupValidators);
      }

      _createClass(NgxGroupValidators, null, [{
        key: "sync",

        /**
         * @param {?} config
         * @return {?}
         */
        value: function sync(config) {
          return (
            /**
            * @param {?} formGroup
            * @return {?}
            */
            function (formGroup) {
              /** @type {?} */
              var errors = Object.entries(config).map(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    path = _ref2[0],
                    conditions = _ref2[1];

                if (!_controlIsValidatable(formGroup.get(path))) {
                  return null;
                }
                /** @type {?} */


                var allErrors = Object.values(conditions).map(
                /**
                * @param {?} data
                * @return {?}
                */
                function (data) {
                  var _data$condition;

                  if (data.condition.paths.length === 0) {
                    return null;
                  }

                  if (!_pathsIsCorrect(data.condition.paths, formGroup)) {
                    return null;
                  }
                  /** @type {?} */


                  var err = null;

                  if ((_data$condition = data.condition).check.apply(_data$condition, _toConsumableArray(data.condition.paths.map(
                  /**
                  * @param {?} c
                  * @return {?}
                  */
                  function (c) {
                    return formGroup.get(c);
                  })))) {
                    if (!data.validators) {
                      return null;
                    }
                    /** @type {?} */


                    var validators = Array.isArray(data.validators) ? data.validators : [data.validators];
                    err = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose(validators)(formGroup.get(path));
                  }

                  return err ? _defineProperty({}, path, err) : null;
                });
                return _mergeErrors(allErrors);
              }).filter(
              /**
              * @param {?} a
              * @return {?}
              */
              function (a) {
                return a != null;
              });
              return _mergeErrors(errors);
            }
          );
        }
        /**
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "async",
        value: function async(config) {
          return (
            /**
            * @param {?} formGroup
            * @return {?}
            */
            function (formGroup) {
              /** @type {?} */
              var errors = Object.entries(config).map(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    path = _ref5[0],
                    conditions = _ref5[1];

                if (!_controlIsValidatable(formGroup.get(path))) {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                }
                /** @type {?} */


                var asyncErrors = Object.values(conditions).map(
                /**
                * @param {?} data
                * @return {?}
                */
                function (data) {
                  var _data$condition2;

                  if (data.condition.paths.length === 0) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                  }

                  if (!_pathsIsCorrect(data.condition.paths, formGroup)) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                  }

                  if ((_data$condition2 = data.condition).check.apply(_data$condition2, _toConsumableArray(data.condition.paths.map(
                  /**
                  * @param {?} c
                  * @return {?}
                  */
                  function (c) {
                    return formGroup.get(c);
                  })))) {
                    if (!data.validators) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                    }
                    /** @type {?} */


                    var validators = Array.isArray(data.validators) ? data.validators : [data.validators];
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].composeAsync(validators)(formGroup.get(path));
                  }

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(asyncErrors).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_mergeErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_assignName(path)));
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(errors).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_mergeErrors));
            }
          );
        }
      }]);

      return NgxGroupValidators;
    }();
    /**
     * @param {?} name
     * @return {?}
     */


    function _assignName(name) {
      return (
        /**
        * @param {?} errors
        * @return {?}
        */
        function (errors) {
          return errors ? _defineProperty({}, name, errors) : null;
        }
      );
    }
    /**
     * @param {?} paths
     * @param {?} formGroup
     * @return {?}
     */


    function _pathsIsCorrect(paths, formGroup) {
      return paths.every(
      /**
      * @param {?} path
      * @return {?}
      */
      function (path) {
        return formGroup.get(path) != null;
      });
    }
    /**
     * @param {?} control
     * @return {?}
     */


    function _controlIsValidatable(control) {
      return control != null && !control.disabled;
    }
    /**
     * This function is raw copy from \@Angular/forms
     * @param {?} arrayOfErrors
     * @return {?}
     */


    function _mergeErrors(arrayOfErrors) {
      /** @type {?} */
      var res = arrayOfErrors.reduce(
      /**
      * @param {?} res
      * @param {?} errors
      * @return {?}
      */
      function (res, errors) {
        return errors != null ? Object.assign({},
        /** @type {?} */
        res, errors) :
        /** @type {?} */
        res;
      }, {});
      return Object.keys(res).length === 0 ? null : res;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-group-validator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-group-validator.js.map

    /***/

  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**********************************************************************************************************************!*\
    !*** D:/Angular/Libraries/ngx-form-group-validator/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span>{{title}}</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div class=\"container\">\r\n  <fgv-demo-sync></fgv-demo-sync>\r\n  <fgv-demo-async style=\"margin-top: 2rem; display: block\"></fgv-demo-async>\r\n</div>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/async/async.component.html":
  /*!******************************************************************************************************************************!*\
    !*** D:/Angular/Libraries/ngx-form-group-validator/node_modules/raw-loader/dist/cjs.js!./src/app/async/async.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAsyncAsyncComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"example-card mat-elevation-z5\">\r\n  <mat-card-header>\r\n    <mat-card-title>Async Validation Example</mat-card-title>\r\n    <mat-card-subtitle>Comment input is required only if both checkbox are checked</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n\r\n    <div class=\"flex\">\r\n      <form [formGroup]=\"form\" class=\"w-50\">\r\n        <mat-checkbox class=\"example-checkbox\" formControlName=\"checkbox1\">checkbox1</mat-checkbox>\r\n        <mat-checkbox class=\"example-checkbox\" formControlName=\"checkbox2\">checkbox2</mat-checkbox>\r\n        <mat-form-field appearance=\"legacy\" class=\"example-full-width\">\r\n          <mat-label>comment</mat-label>\r\n          <input [errorStateMatcher]=\"matcher\" formControlName=\"comment\" matInput placeholder=\"Leave a comment\">\r\n          <mat-progress-bar *ngIf=\"form.pending\" mode=\"query\"></mat-progress-bar>\r\n          <mat-error *ngIf=\"hasError('asyncRequired')\">\r\n            Comment is <strong>required</strong> after 500 mils\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n      </form>\r\n      <div class=\"flex vertical w-50\">\r\n        <mat-card class=\"mat-elevation-z3\">\r\n          <mat-card-header>\r\n            <mat-card-title><code>form.errors</code></mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <pre><code [highlight]=\"form.errors | json\"></code></pre>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title><code>form.get('comment').errors</code></mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <pre><code [highlight]=\"form.get('comment').errors | json\"></code></pre>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"divider\">\r\n      <mat-divider [inset]=\"true\"></mat-divider>\r\n    </div>\r\n\r\n    <!--<div (gistLoad)=\"gist = $event\" class=\"hljs\" gist=\"d49e4fa14e024946a6a2a7c17b80d6f8\">\r\n      <mat-tab-group dynamicHeight>\r\n        <mat-tab *ngFor=\"let file of gist?.files | keyvalue\" [label]=\"file.value.filename\">\r\n            <pre>\r\n              <code [highlight]=\"gist | gistFile: file.key\"></code>\r\n            </pre>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n      <mat-divider [inset]=\"true\"></mat-divider>\r\n      <a [href]=\"gist?.html_url\" class=\"gist-url\" target=\"_blank\">\r\n        <span class=\"git-icon\">Open gist on Github</span>\r\n        <fa-icon [icon]=\"github\" class=\"fa-2x\"></fa-icon>\r\n      </a>\r\n    </div>-->\r\n\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/sync/sync.component.html":
  /*!****************************************************************************************************************************!*\
    !*** D:/Angular/Libraries/ngx-form-group-validator/node_modules/raw-loader/dist/cjs.js!./src/app/sync/sync.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSyncSyncComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"example-card mat-elevation-z5\">\r\n  <mat-card-header>\r\n    <mat-card-title>Sync Validation Example</mat-card-title>\r\n    <mat-card-subtitle>Comment input is required only if both checkbox are checked</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"flex\">\r\n      <form [formGroup]=\"form\" class=\"w-50\">\r\n        <mat-checkbox class=\"example-checkbox\" formControlName=\"checkbox1\">checkbox1</mat-checkbox>\r\n        <mat-checkbox class=\"example-checkbox\" formControlName=\"checkbox2\">checkbox2</mat-checkbox>\r\n        <mat-checkbox class=\"example-checkbox\" formControlName=\"longEnable\">longEnable</mat-checkbox>\r\n        <mat-form-field appearance=\"legacy\" class=\"example-full-width\">\r\n          <mat-label>comment</mat-label>\r\n          <input [errorStateMatcher]=\"matcher\" formControlName=\"comment\" matInput placeholder=\"Leave a comment\">\r\n          <mat-error *ngIf=\"hasError('required')\">\r\n            Comment is <strong>required</strong>\r\n          </mat-error>\r\n          <mat-error *ngIf=\"hasError('commentToLong')\">\r\n            Comment is <b>longer</b> than 'No longer' field\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"legacy\" class=\"example-full-width\">\r\n          <mat-label>No longer</mat-label>\r\n          <input formControlName=\"long\" matInput placeholder=\"Type something\">\r\n          <mat-hint>the 'comment' field can't be longer than me but only if 'longEnable' checkbox is checked\r\n          </mat-hint>\r\n        </mat-form-field>\r\n\r\n      </form>\r\n      <div class=\"flex vertical w-50\">\r\n        <mat-card class=\"mat-elevation-z3\">\r\n          <mat-card-header>\r\n            <mat-card-title><code>form.errors</code></mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <pre><code [highlight]=\"form.errors | json\"></code></pre>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title><code>form.get('comment').errors</code></mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <pre><code [highlight]=\"form.get('comment').errors | json\"></code></pre>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"divider\">\r\n      <mat-divider [inset]=\"true\"></mat-divider>\r\n    </div>\r\n\r\n    <div (gistLoad)=\"gist = $event\" class=\"hljs\" gist=\"d49e4fa14e024946a6a2a7c17b80d6f8\">\r\n      <mat-tab-group dynamicHeight>\r\n        <mat-tab *ngFor=\"let file of gist?.files | keyvalue\" [label]=\"file.value.filename\">\r\n            <pre>\r\n              <code [highlight]=\"gist | gistFile: file.key\"></code>\r\n            </pre>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n      <mat-divider [inset]=\"true\"></mat-divider>\r\n      <a [href]=\"gist?.html_url\" class=\"gist-url\" target=\"_blank\">\r\n        <span class=\"git-icon\">Open gist on Github</span>\r\n        <fa-icon [icon]=\"github\" class=\"fa-2x\"></fa-icon>\r\n      </a>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "../../node_modules/tslib/tslib.es6.js":
  /*!*************************************************************************************!*\
    !*** D:/Angular/Libraries/ngx-form-group-validator/node_modules/tslib/tslib.es6.js ***!
    \*************************************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ngx-group-validator';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fgv-demo-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: getHighlightLanguages, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getHighlightLanguages", function () {
      return getHighlightLanguages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "../../node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-highlightjs */
    "../../node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var ngx_highlightjs_plus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-highlightjs/plus */
    "../../node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs-plus.js");
    /* harmony import */


    var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-scrollbar */
    "../../node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "../../node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _sync_sync_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sync/sync.component */
    "./src/app/sync/sync.component.ts");
    /* harmony import */


    var _async_async_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./async/async.component */
    "./src/app/async/async.component.ts");

    function getHighlightLanguages() {
      return {
        typescript: function typescript() {
          return __webpack_require__.e(
          /*! import() | highlight-js-lib-languages-typescript */
          "common").then(__webpack_require__.t.bind(null,
          /*! highlight.js/lib/languages/typescript */
          "../../node_modules/highlight.js/lib/languages/typescript.js", 7));
        },
        css: function css() {
          return __webpack_require__.e(
          /*! import() | highlight-js-lib-languages-css */
          "common").then(__webpack_require__.t.bind(null,
          /*! highlight.js/lib/languages/css */
          "../../node_modules/highlight.js/lib/languages/css.js", 7));
        },
        json: function json() {
          return __webpack_require__.e(
          /*! import() | highlight-js-lib-languages-json-js */
          "common").then(__webpack_require__.t.bind(null,
          /*! highlight.js/lib/languages/json.js */
          "../../node_modules/highlight.js/lib/languages/json.js", 7));
        },
        javascript: function javascript() {
          return __webpack_require__.e(
          /*! import() | highlight-js-lib-languages-javascript-js */
          "common").then(__webpack_require__.t.bind(null,
          /*! highlight.js/lib/languages/javascript.js */
          "../../node_modules/highlight.js/lib/languages/javascript.js", 7));
        },
        xml: function xml() {
          return __webpack_require__.e(
          /*! import() | highlight-js-lib-languages-xml */
          "common").then(__webpack_require__.t.bind(null,
          /*! highlight.js/lib/languages/xml */
          "../../node_modules/highlight.js/lib/languages/xml.js", 7));
        }
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _sync_sync_component__WEBPACK_IMPORTED_MODULE_12__["SyncComponent"], _async_async_component__WEBPACK_IMPORTED_MODULE_13__["AsyncComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HighlightModule"], ngx_highlightjs_plus__WEBPACK_IMPORTED_MODULE_9__["HighlightPlusModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"]],
      providers: [{
        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_8__["HIGHLIGHT_OPTIONS"],
        useValue: {
          languages: getHighlightLanguages(),
          lineNumbers: false
        }
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/async/async.component.ts":
  /*!******************************************!*\
    !*** ./src/app/async/async.component.ts ***!
    \******************************************/

  /*! exports provided: AsyncComponent */

  /***/
  function srcAppAsyncAsyncComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsyncComponent", function () {
      return AsyncComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_form_group_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-form-group-validator */
    "../../dist/ngx-group-validator/fesm2015/ngx-group-validator.js");

    var AsyncComponent =
    /*#__PURE__*/
    function () {
      function AsyncComponent(fb) {
        _classCallCheck(this, AsyncComponent);

        this.fb = fb;
        this.matcher = {
          isErrorState: function isErrorState(control, form) {
            return !!(form.invalid && form.errors && form.errors.comment);
          }
        };
        this.github = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"];
        this.form = this.fb.group({
          checkbox1: [true],
          checkbox2: [false],
          comment: ['']
        }, {
          asyncValidators: ngx_form_group_validator__WEBPACK_IMPORTED_MODULE_6__["NgxGroupValidators"].async({
            comment: [{
              condition: {
                paths: ['checkbox1', 'checkbox2'],
                check: function check(a, b) {
                  return a.value === true && b.value === true;
                }
              },
              validators: function validators(control) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
                  if (control.value) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
                  }

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({
                    asyncRequired: 'eg. API Validation'
                  });
                }));
              }
            }]
          })
        });
      }

      _createClass(AsyncComponent, [{
        key: "hasError",
        value: function hasError(error) {
          return this.form.errors != null && this.form.errors.comment != null && error in this.form.errors.comment;
        }
      }]);

      return AsyncComponent;
    }();

    AsyncComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    AsyncComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fgv-demo-async',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./async.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/async/async.component.html"))["default"]
    })], AsyncComponent);
    /***/
  },

  /***/
  "./src/app/sync/sync.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sync/sync.component.ts ***!
    \****************************************/

  /*! exports provided: SyncComponent */

  /***/
  function srcAppSyncSyncComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SyncComponent", function () {
      return SyncComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var ngx_form_group_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-form-group-validator */
    "../../dist/ngx-group-validator/fesm2015/ngx-group-validator.js");

    var SyncComponent =
    /*#__PURE__*/
    function () {
      function SyncComponent(fb) {
        _classCallCheck(this, SyncComponent);

        this.fb = fb;
        this.matcher = {
          isErrorState: function isErrorState(control, form) {
            return !!(form.invalid && form.errors && form.errors.comment);
          }
        };
        this.github = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"];
        this.form = this.fb.group({
          checkbox1: [true],
          checkbox2: [false],
          comment: [''],
          "long": [''],
          longEnable: [false]
        }, {
          validators: ngx_form_group_validator__WEBPACK_IMPORTED_MODULE_4__["NgxGroupValidators"].sync({
            comment: [{
              condition: {
                paths: ['checkbox1', 'checkbox2'],
                check: function check(a, b) {
                  return a.value === true && b.value === true;
                }
              },
              validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            }, {
              condition: {
                paths: ['comment', 'long', 'longEnable'],
                check: function check(a, b, c) {
                  if (b.value.length > 0 && c.value) {
                    return a.value.length > b.value.length;
                  }

                  return false;
                }
              },
              validators: function validators(c) {
                return {
                  commentToLong: true
                };
              }
            }]
          })
        });
      }

      _createClass(SyncComponent, [{
        key: "hasError",
        value: function hasError(error) {
          return this.form.errors && 'comment' in this.form.errors && error in this.form.errors.comment;
        }
      }]);

      return SyncComponent;
    }();

    SyncComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SyncComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fgv-demo-sync',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sync.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/sync/sync.component.html"))["default"]
    })], SyncComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Angular\Libraries\ngx-form-group-validator\projects\ngx-group-validator-demo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map