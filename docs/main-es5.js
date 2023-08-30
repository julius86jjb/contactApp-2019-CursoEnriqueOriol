function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contacts_list_contacts_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contacts-list/contacts-list.component */
    "./src/app/contacts-list/contacts-list.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _log_out_log_out_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./log-out/log-out.component */
    "./src/app/log-out/log-out.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var appRoutes = [{
      path: 'contacts',
      component: _contacts_list_contacts_list_component__WEBPACK_IMPORTED_MODULE_2__["ContactsListComponent"],
      data: {
        title: "Contacts"
      },
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      data: {
        title: "Login"
      }
    }, {
      path: 'logout',
      component: _log_out_log_out_component__WEBPACK_IMPORTED_MODULE_4__["LogOutComponent"],
      outlet: 'popup',
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'not-found',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
      data: {
        title: "Ooops! 404"
      }
    }, {
      path: '',
      redirectTo: '/contacts',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'not-found',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
        enableTracing: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
            enableTracing: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    ;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["logout"];
    };

    var _c1 = function _c1(a0) {
      return {
        popup: a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        outlets: a0
      };
    };

    var _c3 = function _c3(a0) {
      return [a0];
    };

    function AppComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)))));
      }
    }

    var AppComponent = function AppComponent(authService) {
      _classCallCheck(this, AppComponent);

      this.authService = authService;
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 2,
      consts: [["title", "My contacts app"], ["routerLink", "/contacts", "routerLinkActive", "active-link"], ["routerLink", "/contact-detail", "routerLinkActive", "active-link"], ["routerLink", "/login", "routerLinkActive", "active-link", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], ["name", "popup"], ["routerLink", "/login", "routerLinkActive", "active-link"], [3, "routerLink"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_a_5_Template, 2, 0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_a_6_Template, 2, 8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.user);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _contacts_list_contacts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contacts-list/contacts-list.component */
    "./src/app/contacts-list/contacts-list.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _log_out_log_out_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./log-out/log-out.component */
    "./src/app/log-out/log-out.component.ts");
    /* harmony import */


    var _contact_detail_contact_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./contact-detail/contact-detail.module */
    "./src/app/contact-detail/contact-detail.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _contact_detail_contact_detail_module__WEBPACK_IMPORTED_MODULE_9__["ContactDetailModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _contacts_list_contacts_list_component__WEBPACK_IMPORTED_MODULE_3__["ContactsListComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], _log_out_log_out_component__WEBPACK_IMPORTED_MODULE_8__["LogOutComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _contact_detail_contact_detail_module__WEBPACK_IMPORTED_MODULE_9__["ContactDetailModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _contacts_list_contacts_list_component__WEBPACK_IMPORTED_MODULE_3__["ContactsListComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], _log_out_log_out_component__WEBPACK_IMPORTED_MODULE_8__["LogOutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _contact_detail_contact_detail_module__WEBPACK_IMPORTED_MODULE_9__["ContactDetailModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return this.checkLogin(state.url);
        }
      }, {
        key: "checkLogin",
        value: function checkLogin(url) {
          if (this.authService.user != null) {
            return true;
          }

          this.authService.redirectUrl = url;
          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService() {
        _classCallCheck(this, AuthService);

        this.user = null;
        this.redirectUrl = null;
        this.user = JSON.parse(localStorage.getItem("user"));
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login() {
          var _this = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            name: "Peter",
            email: "peter@gmail.com",
            token: "123456789"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (user) {
            return _this.user = user;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (user) {
            return localStorage.setItem("user", JSON.stringify(user));
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.user = null;
          localStorage.removeItem("user");
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-detail/add-contact/add-contact.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/contact-detail/add-contact/add-contact.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddContactComponent */

  /***/
  function srcAppContactDetailAddContactAddContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddContactComponent", function () {
      return AddContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/contacts.service */
    "./src/app/contacts.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../contact-form/contact-form.component */
    "./src/app/contact-detail/contact-form/contact-form.component.ts");

    var AddContactComponent =
    /*#__PURE__*/
    function () {
      function AddContactComponent(contactsService, router) {
        _classCallCheck(this, AddContactComponent);

        this.contactsService = contactsService;
        this.router = router;
      }

      _createClass(AddContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var contact = localStorage.getItem('contact');

          if (contact) {
            this.contact = JSON.parse(contact);
          }
        }
      }, {
        key: "saveInLocalStorage",
        value: function saveInLocalStorage(contact) {
          localStorage.setItem('contact', JSON.stringify(contact));
        }
      }, {
        key: "addContact",
        value: function addContact(contact) {
          this.contactsService.addContact(contact);
          localStorage.removeItem('contact');
          this.router.navigate(['/']);
        }
      }]);

      return AddContactComponent;
    }();

    AddContactComponent.ɵfac = function AddContactComponent_Factory(t) {
      return new (t || AddContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AddContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddContactComponent,
      selectors: [["app-add-contact"]],
      decls: 2,
      vars: 1,
      consts: [[3, "contact", "valueChanges", "submitContact"]],
      template: function AddContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-contact-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChanges", function AddContactComponent_Template_app_contact_form_valueChanges_0_listener($event) {
            return ctx.saveInLocalStorage($event);
          })("submitContact", function AddContactComponent_Template_app_contact_form_submitContact_0_listener($event) {
            return ctx.addContact($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", ctx.contact);
        }
      },
      directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__["ContactFormComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-contact',
          template: "<app-contact-form \n                [contact]=\"contact\" \n                (valueChanges)=\"saveInLocalStorage($event)\"\n                (submitContact)=\"addContact($event)\">\n                Add contact\n              </app-contact-form>"
        }]
      }], function () {
        return [{
          type: src_app_contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-detail/contact-detail-resolver.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/contact-detail/contact-detail-resolver.service.ts ***!
    \*******************************************************************/

  /*! exports provided: ContactDetailResolverService */

  /***/
  function srcAppContactDetailContactDetailResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDetailResolverService", function () {
      return ContactDetailResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contacts.service */
    "./src/app/contacts.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ContactDetailResolverService =
    /*#__PURE__*/
    function () {
      function ContactDetailResolverService(contactsService, router) {
        _classCallCheck(this, ContactDetailResolverService);

        this.contactsService = contactsService;
        this.router = router;
      }

      _createClass(ContactDetailResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = Number(route.paramMap.get('id'));
          var contact = this.contactsService.getContactById(id);

          if (contact) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(contact);
          } else {
            this.router.navigate(['/not-found']);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
          }
        }
      }]);

      return ContactDetailResolverService;
    }();

    ContactDetailResolverService.ɵfac = function ContactDetailResolverService_Factory(t) {
      return new (t || ContactDetailResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ContactDetailResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactDetailResolverService,
      factory: ContactDetailResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-detail/contact-detail-shell/contact-detail-shell.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/contact-detail/contact-detail-shell/contact-detail-shell.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ContactDetailShellComponent */

  /***/
  function srcAppContactDetailContactDetailShellContactDetailShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDetailShellComponent", function () {
      return ContactDetailShellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ContactDetailShellComponent = function ContactDetailShellComponent() {
      _classCallCheck(this, ContactDetailShellComponent);
    };

    ContactDetailShellComponent.ɵfac = function ContactDetailShellComponent_Factory(t) {
      return new (t || ContactDetailShellComponent)();
    };

    ContactDetailShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactDetailShellComponent,
      selectors: [["app-contact-detail-shell"]],
      decls: 2,
      vars: 0,
      consts: [["childRoute", "outlet"]],
      template: function ContactDetailShellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet", null, 0);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-detail-shell',
          templateUrl: './contact-detail-shell.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-detail/contact-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/contact-detail/contact-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: ContactDetailComponent */

  /***/
  function srcAppContactDetailContactDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function () {
      return ContactDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contacts.service */
    "./src/app/contacts.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactDetailComponent_p_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var phone_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", phone_r8.type, ") - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](phone_r8.number);
      }
    }

    var ContactDetailComponent =
    /*#__PURE__*/
    function () {
      function ContactDetailComponent(contactsService, route) {
        _classCallCheck(this, ContactDetailComponent);

        this.contactsService = contactsService;
        this.route = route;
      }

      _createClass(ContactDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.data.subscribe(function (data) {
            return _this2.contact = data.contact;
          });
        }
      }]);

      return ContactDetailComponent;
    }();

    ContactDetailComponent.ɵfac = function ContactDetailComponent_Factory(t) {
      return new (t || ContactDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ContactDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactDetailComponent,
      selectors: [["app-contact-detail"]],
      decls: 20,
      vars: 5,
      consts: [[1, "contact"], [1, "contact-header"], [1, "contact-header-image", 3, "src"], [1, "contact-header-name"], [1, "contact-detail"], [1, "contact-detail-phone"], [4, "ngFor", "ngForOf"], [1, "contact-detail-email"], [1, "contact-detail-address"], [1, "contact-detail-phone-type"], [1, "contact-detail-phone-number"]],
      template: function ContactDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Phones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContactDetailComponent_p_9_Template, 5, 2, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.contact.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contact.phones);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.address);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".contact[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 300px;\n}\n.contact-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n}\n.contact-header-image[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 40px;\n  margin: 8px 16px;\n  flex-shrink: 0;\n  align-self: flex-start;\n}\n.contact-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.contact-detail[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n  padding: 20px;\n}\n.contact-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.contact-detail-phone-type[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1kZXRhaWwvQzpcXFVzZXJzXFxqdWxpdVxcRGVza3RvcFxcSVQgMjAyM1xcQ3Vyc29zIEVucmlxdWUgT3Jpb2xcXENvZGlnb1xcZmluYWwtY29kZVxcQ29udGFjdEFwcC9zcmNcXGFwcFxcY29udGFjdC1kZXRhaWxcXGNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LWRldGFpbC9jb250YWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURDSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0FDQ1I7QURDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0NaO0FERVE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQVo7QURLSTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtBQ0hSO0FES1E7RUFDSSxnQkFBQTtBQ0haO0FET1k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNMaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWRldGFpbC9jb250YWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgICYtaGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmLWltYWdle1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgJi1kZXRhaWx7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXBob25leyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLXR5cGV7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmNvbnRhY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzAwcHg7XG59XG4uY29udGFjdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LWhlYWRlci1pbWFnZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbjogOHB4IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuLmNvbnRhY3QtaGVhZGVyIGgxIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jb250YWN0LWRldGFpbCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jb250YWN0LWRldGFpbCBoMiB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4uY29udGFjdC1kZXRhaWwtcGhvbmUtdHlwZSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-detail',
          templateUrl: './contact-detail.component.html',
          styleUrls: ['./contact-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-detail/contact-detail.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/contact-detail/contact-detail.module.ts ***!
    \*********************************************************/

  /*! exports provided: ContactDetailModule */

  /***/
  function srcAppContactDetailContactDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDetailModule", function () {
      return ContactDetailModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _contact_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact-detail.component */
    "./src/app/contact-detail/contact-detail.component.ts");
    /* harmony import */


    var _contact_detail_shell_contact_detail_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-detail-shell/contact-detail-shell.component */
    "./src/app/contact-detail/contact-detail-shell/contact-detail-shell.component.ts");
    /* harmony import */


    var _contact_detail_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-detail-resolver.service */
    "./src/app/contact-detail/contact-detail-resolver.service.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact-form/contact-form.component */
    "./src/app/contact-detail/contact-form/contact-form.component.ts");
    /* harmony import */


    var _directives_startsWithCapital_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../directives/startsWithCapital.directive */
    "./src/app/directives/startsWithCapital.directive.ts");
    /* harmony import */


    var _edit_contact_edit_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./edit-contact/edit-contact.component */
    "./src/app/contact-detail/edit-contact/edit-contact.component.ts");
    /* harmony import */


    var _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./add-contact/add-contact.component */
    "./src/app/contact-detail/add-contact/add-contact.component.ts");

    var contactDetailRoutes = [{
      path: 'contact-detail',
      component: _contact_detail_shell_contact_detail_shell_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailShellComponent"],
      data: {
        title: "Contact detail"
      },
      children: [{
        path: '',
        component: _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_11__["AddContactComponent"]
      }, {
        path: 'edit/:id',
        component: _edit_contact_edit_contact_component__WEBPACK_IMPORTED_MODULE_10__["EditContactComponent"],
        resolve: {
          contact: _contact_detail_resolver_service__WEBPACK_IMPORTED_MODULE_6__["ContactDetailResolverService"]
        }
      }, {
        path: ':id',
        component: _contact_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailComponent"],
        resolve: {
          contact: _contact_detail_resolver_service__WEBPACK_IMPORTED_MODULE_6__["ContactDetailResolverService"]
        }
      }],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }];

    var ContactDetailModule = function ContactDetailModule() {
      _classCallCheck(this, ContactDetailModule);
    };

    ContactDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactDetailModule
    });
    ContactDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactDetailModule_Factory(t) {
        return new (t || ContactDetailModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(contactDetailRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactDetailModule, {
        declarations: [_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailComponent"], _contact_detail_shell_contact_detail_shell_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailShellComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"], _directives_startsWithCapital_directive__WEBPACK_IMPORTED_MODULE_9__["StartsWithCapitalValidatorDirective"], _edit_contact_edit_contact_component__WEBPACK_IMPORTED_MODULE_10__["EditContactComponent"], _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_11__["AddContactComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(contactDetailRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          declarations: [_contact_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactDetailComponent"], _contact_detail_shell_contact_detail_shell_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailShellComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_8__["ContactFormComponent"], _directives_startsWithCapital_directive__WEBPACK_IMPORTED_MODULE_9__["StartsWithCapitalValidatorDirective"], _edit_contact_edit_contact_component__WEBPACK_IMPORTED_MODULE_10__["EditContactComponent"], _add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_11__["AddContactComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-detail/contact-form/contact-form.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/contact-detail/contact-form/contact-form.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ContactFormComponent */

  /***/
  function srcAppContactDetailContactFormContactFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function () {
      return ContactFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/contact.model */
    "./src/app/contact.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_directives_startsWithCapital_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/directives/startsWithCapital.directive */
    "./src/app/directives/startsWithCapital.directive.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactFormComponent_ng_container_8_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is required!! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactFormComponent_ng_container_8_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " A name needs at least 2 characters!! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactFormComponent_ng_container_8_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The name should start with capital letter!! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactFormComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactFormComponent_ng_container_8_p_1_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactFormComponent_ng_container_8_p_2_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ContactFormComponent_ng_container_8_p_3_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.name.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.name.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.name.errors.startsWithCapital && !ctx_r10.name.errors.minlength);
      }
    }

    function ContactFormComponent_div_12_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r18);
      }
    }

    function ContactFormComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContactFormComponent_div_12_option_4_Template, 2, 2, "option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r16 = ctx.index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.phoneTypes);
      }
    }

    var _c0 = ["*"];

    var ContactFormComponent =
    /*#__PURE__*/
    function () {
      function ContactFormComponent(fb) {
        _classCallCheck(this, ContactFormComponent);

        this.fb = fb;
        this.submitContact = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.phoneTypes = Object.values(src_app_contact_model__WEBPACK_IMPORTED_MODULE_2__["PhoneType"]);
        this.pictureFile = null;
        this.contactForm = this.fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), Object(src_app_directives_startsWithCapital_directive__WEBPACK_IMPORTED_MODULE_4__["startsWithCapitalValidator"])()]],
          picture: ['assets/default-user.png'],
          phones: this.fb.array([this.fb.group({
            type: [null],
            number: ['']
          })]),
          email: [''],
          address: ['']
        });
      }

      _createClass(ContactFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          //init contact from input, if exists
          if (this.contact) this.setContact(this.contact); //emit value changes only when status is valid

          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["zip"])(this.contactForm.statusChanges, this.contactForm.valueChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                state = _ref2[0],
                value = _ref2[1];

            return state == 'VALID';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                state = _ref4[0],
                value = _ref4[1];

            return value;
          })).subscribe(function (formValue) {
            _this3.valueChanges.emit(formValue);
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          //emit submission
          this.submitContact.emit(Object.assign(Object.assign({}, this.contactForm.value), {
            pictureFile: this.pictureFile
          })); //reset form

          this.contactForm.reset({
            picture: 'assets/default-user.png'
          }); //and clear structure

          this.phones.clear();
          this.addNewPhoneToModel();
        } //update contact form values from input contact

      }, {
        key: "setContact",
        value: function setContact(contact) {
          this.contactForm.reset();
          this.phones.clear();

          for (var i = 0; i < contact.phones.length; i++) {
            this.addNewPhoneToModel();
          } //extract picture file from contact, so there's no missmatch with form structure


          var pictureFile = contact.pictureFile,
              cleanContact = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(contact, ["pictureFile"]);
          this.contactForm.setValue(cleanContact);
        } //add new phone to the phones array

      }, {
        key: "addNewPhoneToModel",
        value: function addNewPhoneToModel() {
          this.phones.push(this.fb.group({
            type: [null],
            number: ['']
          }));
        } //add image to the form, from file input

      }, {
        key: "addImage",
        value: function addImage(event) {
          var _this4 = this;

          var file = event.target.files[0];
          this.pictureFile = file;
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function (evt) {
            _this4.contactForm.patchValue({
              picture: reader.result
            });
          };
        }
      }, {
        key: "name",
        get: function get() {
          return this.contactForm.get('name');
        }
      }, {
        key: "phones",
        get: function get() {
          return this.contactForm.get('phones');
        }
      }]);

      return ContactFormComponent;
    }();

    ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) {
      return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContactFormComponent,
      selectors: [["app-contact-form"]],
      inputs: {
        contact: "contact"
      },
      outputs: {
        submitContact: "submitContact",
        valueChanges: "valueChanges"
      },
      ngContentSelectors: _c0,
      decls: 25,
      vars: 5,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-item-image"], [3, "src"], ["type", "file", "accept", ".png,.jpg,.jpeg", 3, "change"], [1, "form-item"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name"], [4, "ngIf"], ["formArrayName", "phones", 1, "form-group"], ["class", "form-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "form-action", 3, "click"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email"], ["for", "address"], ["type", "text", "id", "address", "formControlName", "address"], ["type", "submit", 1, "form-button", 3, "disabled"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], [1, "form-item", 3, "formGroupName"], ["for", "phone-type"], ["id", "phone-type", "formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "tel", "id", "phone-number", "formControlName", "number"], [3, "value"]],
      template: function ContactFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_0_listener($event) {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ContactFormComponent_Template_input_change_3_listener($event) {
            return ctx.addImage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ContactFormComponent_ng_container_8_Template, 4, 3, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Phones:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ContactFormComponent_div_12_Template, 6, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactFormComponent_Template_p_click_13_listener($event) {
            return ctx.addNewPhoneToModel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Add phone +");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Adress:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.contactForm.value.picture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.name.valid && ctx.name.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.phones.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.contactForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: [".form-item-image[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 16px 16px 32px 16px;\n}\n.form-item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 40px;\n  margin: 8px 16px;\n  flex-shrink: 0;\n  align-self: flex-start;\n}\n.form-item[_ngcontent-%COMP%] {\n  margin: 16px;\n  width: 300px;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n}\n.form-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 80px;\n  max-width: 80px;\n  display: inline-block;\n}\n.form-item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin: 16px;\n  width: 300px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  width: initial;\n  margin-right: 0px;\n}\n.form-button[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 6px 16px 0px 16px;\n}\n.form-action[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-left: 16px;\n  font-size: 0.9em;\n  font-style: italic;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1kZXRhaWwvY29udGFjdC1mb3JtL0M6XFxVc2Vyc1xcanVsaXVcXERlc2t0b3BcXElUIDIwMjNcXEN1cnNvcyBFbnJpcXVlIE9yaW9sXFxDb2RpZ29cXGZpbmFsLWNvZGVcXENvbnRhY3RBcHAvc3JjXFxhcHBcXGNvbnRhY3QtZGV0YWlsXFxjb250YWN0LWZvcm1cXGNvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC1kZXRhaWwvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDJCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0VSO0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDUjtBREVJO0VBQ0ksbUJBQUE7VUFBQSxZQUFBO0FDQVI7QURJQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDREo7QURHSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREtBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDRko7QURLQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1kZXRhaWwvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWl0ZW0taW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTZweCAxNnB4IDMycHggMTZweDtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBsYWJlbHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAqIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmZvcm0taXRlbXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDZweCAxNnB4IDBweCAxNnB4O1xyXG59XHJcblxyXG4uZm9ybS1hY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiIsIi5mb3JtLWl0ZW0taW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE2cHggMTZweCAzMnB4IDE2cHg7XG59XG4uZm9ybS1pdGVtLWltYWdlIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbjogOHB4IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4uZm9ybS1pdGVtIHtcbiAgbWFyZ2luOiAxNnB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtLWl0ZW0gbGFiZWwge1xuICB3aWR0aDogODBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZm9ybS1pdGVtID4gKiB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDE2cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtLWdyb3VwIC5mb3JtLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHdpZHRoOiBpbml0aWFsO1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZvcm0tYnV0dG9uIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDZweCAxNnB4IDBweCAxNnB4O1xufVxuXG4uZm9ybS1hY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-contact-form',
          templateUrl: './contact-form.component.html',
          styleUrls: ['./contact-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, {
        contact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        submitContact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChanges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/contact-detail/edit-contact/edit-contact.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/contact-detail/edit-contact/edit-contact.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EditContactComponent */

  /***/
  function srcAppContactDetailEditContactEditContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditContactComponent", function () {
      return EditContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/contacts.service */
    "./src/app/contacts.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../contact-form/contact-form.component */
    "./src/app/contact-detail/contact-form/contact-form.component.ts");

    var EditContactComponent =
    /*#__PURE__*/
    function () {
      function EditContactComponent(contactService, route, router) {
        _classCallCheck(this, EditContactComponent);

        this.contactService = contactService;
        this.route = route;
        this.router = router;
      }

      _createClass(EditContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.data.subscribe(function (data) {
            //use spread operator to separate id from the rest of the contact field
            var _a = data.contact,
                id = _a.id,
                contact = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["id"]);
            _this5.contact = contact;
            _this5.id = id;
          });
        }
      }, {
        key: "updateContact",
        value: function updateContact(formContact) {
          this.contactService.updateContact(Object.assign({
            id: this.id
          }, formContact));
          this.router.navigate(['/']);
        }
      }]);

      return EditContactComponent;
    }();

    EditContactComponent.ɵfac = function EditContactComponent_Factory(t) {
      return new (t || EditContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EditContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EditContactComponent,
      selectors: [["app-edit-contact"]],
      decls: 2,
      vars: 1,
      consts: [[3, "contact", "submitContact"]],
      template: function EditContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-contact-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submitContact", function EditContactComponent_Template_app_contact_form_submitContact_0_listener($event) {
            return ctx.updateContact($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Update contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("contact", ctx.contact);
        }
      },
      directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__["ContactFormComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-edit-contact',
          template: "<app-contact-form \n              [contact]=\"contact\" \n              (submitContact)=\"updateContact($event)\">\n              Update contact\n            </app-contact-form>"
        }]
      }], function () {
        return [{
          type: src_app_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact.model.ts":
  /*!**********************************!*\
    !*** ./src/app/contact.model.ts ***!
    \**********************************/

  /*! exports provided: Contact, PhoneType */

  /***/
  function srcAppContactModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneType", function () {
      return PhoneType;
    });

    var Contact = function Contact(id, name, picture, phones, email, address, pictureFile) {
      _classCallCheck(this, Contact);

      this.id = id;
      this.name = name;
      this.picture = picture;
      this.phones = phones;
      this.email = email;
      this.address = address;
      this.pictureFile = pictureFile;
    };

    var PhoneType;

    (function (PhoneType) {
      PhoneType["mobile"] = "mobile";
      PhoneType["home"] = "home";
      PhoneType["work"] = "work";
    })(PhoneType || (PhoneType = {}));
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _contact_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../contact.model */
    "./src/app/contact.model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactComponent_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r6.contact.phones[0].type, ") - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.contact.phones[0].number);
      }
    }

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.clicked.emit(this.contact.id);
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      inputs: {
        contact: "contact"
      },
      outputs: {
        clicked: "clicked"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "contact", 3, "click"], [1, "contact-image", 3, "src"], [1, "contact-detail"], [1, "contact-detail-name"], ["class", "contact-detail-phone", 4, "ngIf"], [1, "contact-detail-phone"], [1, "contact-detail-phone-type"], [1, "contact-detail-phone-number"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_0_listener($event) {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContactComponent_p_5_Template, 5, 2, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.contact.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contact.phones == null ? null : ctx.contact.phones.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  padding: 10px;\n}\n\n.contact[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 340px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\n.contact[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.contact[_ngcontent-%COMP%]:active {\n  background-color: #EEE;\n}\n\n.contact-image[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 40px;\n  margin: 8px 16px;\n  flex-shrink: 0;\n  align-self: flex-start;\n}\n\n.contact-detail-phone[_ngcontent-%COMP%] {\n  margin-top: -20px;\n}\n\n.contact-detail-phone-type[_ngcontent-%COMP%] {\n  color: gray;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXGp1bGl1XFxEZXNrdG9wXFxJVCAyMDIzXFxDdXJzb3MgRW5yaXF1ZSBPcmlvbFxcQ29kaWdvXFxmaW5hbC1jb2RlXFxDb250YWN0QXBwL3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBRUEsMENBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDQ0o7O0FEQ0k7RUFDSSwyQ0FBQTtBQ0NSOztBREVJO0VBQ0ksc0JBQUE7QUNBUjs7QURHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0RSOztBREtRO0VBQ0ksaUJBQUE7QUNIWjs7QURJWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0ZoQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY29udGFjdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuXHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAmLWltYWdle1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDE2cHg7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIH1cclxuXHJcbiAgICAmLWRldGFpbHtcclxuICAgICAgICAmLXBob25le1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgJi10eXBle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzNDBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmNvbnRhY3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmNvbnRhY3Q6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbn1cbi5jb250YWN0LWltYWdlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgbWFyZ2luOiA4cHggMTZweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4uY29udGFjdC1kZXRhaWwtcGhvbmUge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbi5jb250YWN0LWRldGFpbC1waG9uZS10eXBlIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, {
        contact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/contacts-list/contacts-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/contacts-list/contacts-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: ContactsListComponent */

  /***/
  function srcAppContactsListContactsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsListComponent", function () {
      return ContactsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contacts.service */
    "./src/app/contacts.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var _c0 = function _c0(a1) {
      return ["/contact-detail", a1];
    };

    var _c1 = function _c1(a1) {
      return ["/contact-detail/edit/", a1];
    };

    function ContactsListComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-contact", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsListComponent_div_2_Template_div_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var contact_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.deleteContact(contact_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", contact_r3)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, contact_r3.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, contact_r3.id));
      }
    }

    var ContactsListComponent =
    /*#__PURE__*/
    function () {
      function ContactsListComponent(contactsService, router) {
        _classCallCheck(this, ContactsListComponent);

        this.contactsService = contactsService;
        this.router = router;
      }

      _createClass(ContactsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contacts$ = this.contactsService.contacts$;
        }
      }, {
        key: "deleteContact",
        value: function deleteContact(contact) {
          this.contactsService.removeContact(contact);
        }
      }]);

      return ContactsListComponent;
    }();

    ContactsListComponent.ɵfac = function ContactsListComponent_Factory(t) {
      return new (t || ContactsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ContactsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsListComponent,
      selectors: [["app-contacts-list"]],
      decls: 4,
      vars: 3,
      consts: [[1, "container"], [1, "contacts-list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"], [3, "contact", "routerLink"], [1, "actions"], [1, "edit", "action", 3, "routerLink"], [1, "delete", "action", 3, "click"]],
      template: function ContactsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactsListComponent_div_2_Template, 5, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.contacts$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".contacts-list[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 368px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: -52px;\n}\n\n.action[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background-size: 24px !important;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.action[_ngcontent-%COMP%]:hover {\n  background-size: 28px !important;\n}\n\n.edit[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/pen.svg\");\n}\n\n.delete[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/garbage.svg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMtbGlzdC9DOlxcVXNlcnNcXGp1bGl1XFxEZXNrdG9wXFxJVCAyMDIzXFxDdXJzb3MgRW5yaXF1ZSBPcmlvbFxcQ29kaWdvXFxmaW5hbC1jb2RlXFxDb250YWN0QXBwL3NyY1xcYXBwXFxjb250YWN0cy1saXN0XFxjb250YWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0cy1saXN0L2NvbnRhY3RzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURBSTtFQUNJLGdDQUFBO0FDRVI7O0FERUE7RUFDSSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzLWxpc3QvY29udGFjdHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0cy1saXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDM2OHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYWN0aW9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MnB4O1xyXG59XHJcblxyXG4uYWN0aW9ue1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZWRpdHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9wZW4uc3ZnJyk7XHJcbn1cclxuXHJcbi5kZWxldGV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvZ2FyYmFnZS5zdmcnKTtcclxufVxyXG4iLCIuY29udGFjdHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzNjhweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTUycHg7XG59XG5cbi5hY3Rpb24ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmFjdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xufVxuXG4uZWRpdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGVuLnN2Z1wiKTtcbn1cblxuLmRlbGV0ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvZ2FyYmFnZS5zdmdcIik7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts-list',
          templateUrl: './contacts-list.component.html',
          styleUrls: ['./contacts-list.component.scss']
        }]
      }], function () {
        return [{
          type: _contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contacts.service.ts":
  /*!*************************************!*\
    !*** ./src/app/contacts.service.ts ***!
    \*************************************/

  /*! exports provided: ContactsService */

  /***/
  function srcAppContactsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsService", function () {
      return ContactsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _contact_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./contact.model */
    "./src/app/contact.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ContactsService =
    /*#__PURE__*/
    function () {
      function ContactsService() {
        _classCallCheck(this, ContactsService);

        this.contactsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.contacts$ = this.contactsSubject.asObservable();
        var contacts = this.loadContacts();
        this.contactsSubject.next(contacts);
      }

      _createClass(ContactsService, [{
        key: "getContactById",
        value: function getContactById(id) {
          var contactMatches = this.contactsSubject.value.filter(function (item) {
            return item.id === id;
          });
          return contactMatches.length ? contactMatches[0] : null;
        }
      }, {
        key: "loadContacts",
        value: function loadContacts() {
          return [new _contact_model__WEBPACK_IMPORTED_MODULE_1__["Contact"](1, "Albert", "assets/default-user.png", [{
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].work,
            number: 93200621621
          }, {
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].home,
            number: 93444001100
          }, {
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].mobile,
            number: 629304050
          }], "albert@email.com", "Villaroel 52, 08027, Barcelona"), new _contact_model__WEBPACK_IMPORTED_MODULE_1__["Contact"](2, "Beckie", "assets/default-user.png", [{
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].mobile,
            number: 111223344
          }], "", ""), new _contact_model__WEBPACK_IMPORTED_MODULE_1__["Contact"](3, "Johan", "assets/default-user.png", [{
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].home,
            number: 123456789
          }, {
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].mobile,
            number: 111111122
          }], "johan@email.com", "Raval 7, 08020, Barcelona"), new _contact_model__WEBPACK_IMPORTED_MODULE_1__["Contact"](4, "Martin", "assets/default-user.png", [{
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].work,
            number: 222334455
          }, {
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].mobile,
            number: 222222222
          }], "martin@email.com", "Boquería 12, 08021, Barcelona"), new _contact_model__WEBPACK_IMPORTED_MODULE_1__["Contact"](5, "Samantha", "assets/default-user.png", [{
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].work,
            number: 931224455
          }, {
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].home,
            number: 934122233
          }, {
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].mobile,
            number: 662113344
          }], "samantha@email.com", "Plaza Pau Vila 1, 08039, Barcelona"), new _contact_model__WEBPACK_IMPORTED_MODULE_1__["Contact"](6, "Kaycee", "assets/default-user.png", [{
            type: _contact_model__WEBPACK_IMPORTED_MODULE_1__["PhoneType"].mobile,
            number: 939876655
          }], "kaycee@email.com", "Arago 356, 08032, Barcelona")];
        }
      }, {
        key: "addContact",
        value: function addContact(contact) {
          if (!contact.picture) contact.picture = "assets/default-user.png";
          if (!contact.id) contact.id = this.contactsSubject.value.length + 1;
          this.contactsSubject.next([].concat(_toConsumableArray(this.contactsSubject.value), [contact]));
        }
      }, {
        key: "updateContact",
        value: function updateContact(contact) {
          var contacts = this.contactsSubject.value;
          var replaceIndex = contacts.findIndex(function (item) {
            return item.id == contact.id;
          });
          var newContacts = [].concat(_toConsumableArray(contacts.slice(0, replaceIndex)), [contact], _toConsumableArray(contacts.slice(replaceIndex + 1)));
          this.contactsSubject.next(newContacts);
        }
      }, {
        key: "removeContact",
        value: function removeContact(contact) {
          var contacts = this.contactsSubject.value;
          var replaceIndex = contacts.findIndex(function (item) {
            return item.id == contact.id;
          });
          var newContacts = [].concat(_toConsumableArray(contacts.slice(0, replaceIndex)), _toConsumableArray(contacts.slice(replaceIndex + 1)));
          this.contactsSubject.next(newContacts);
        }
      }]);

      return ContactsService;
    }();

    ContactsService.ɵfac = function ContactsService_Factory(t) {
      return new (t || ContactsService)();
    };

    ContactsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactsService,
      factory: ContactsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/startsWithCapital.directive.ts":
  /*!***********************************************************!*\
    !*** ./src/app/directives/startsWithCapital.directive.ts ***!
    \***********************************************************/

  /*! exports provided: startsWithCapitalValidator, StartsWithCapitalValidatorDirective */

  /***/
  function srcAppDirectivesStartsWithCapitalDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startsWithCapitalValidator", function () {
      return startsWithCapitalValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartsWithCapitalValidatorDirective", function () {
      return StartsWithCapitalValidatorDirective;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    function startsWithCapitalValidator() {
      return function (control) {
        if (!control.value) {
          return null;
        }

        var valid = /^[A-Z]/.test(control.value);
        return valid ? null : {
          'startsWithCapital': {
            value: control.value
          }
        };
      };
    }

    var StartsWithCapitalValidatorDirective =
    /*#__PURE__*/
    function () {
      function StartsWithCapitalValidatorDirective() {
        _classCallCheck(this, StartsWithCapitalValidatorDirective);
      }

      _createClass(StartsWithCapitalValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          return !this.isActive ? null : startsWithCapitalValidator()(control);
        }
      }]);

      return StartsWithCapitalValidatorDirective;
    }();

    StartsWithCapitalValidatorDirective.ɵfac = function StartsWithCapitalValidatorDirective_Factory(t) {
      return new (t || StartsWithCapitalValidatorDirective)();
    };

    StartsWithCapitalValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: StartsWithCapitalValidatorDirective,
      selectors: [["", "startsWithCapital", ""]],
      inputs: {
        isActive: ["startsWithCapital", "isActive"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
        useExisting: StartsWithCapitalValidatorDirective,
        multi: true
      }])]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StartsWithCapitalValidatorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[startsWithCapital]',
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
            useExisting: StartsWithCapitalValidatorDirective,
            multi: true
          }]
        }]
      }], null, {
        isActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['startsWithCapital']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../title.service */
    "./src/app/title.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["*"];

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(titleService) {
        _classCallCheck(this, HeaderComponent);

        this.titleService = titleService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_title_service__WEBPACK_IMPORTED_MODULE_1__["TitleService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      ngContentSelectors: _c0,
      decls: 6,
      vars: 3,
      consts: [[1, "container", "sticky-header"], [1, "buttons"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.titleService.title$));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  padding-bottom: 80px;\n  display: block;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 60px;\n  padding-top: 14px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n.sticky-header[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  width: calc(100% - 8px);\n  background: white;\n  margin: 0;\n  padding-left: 16px;\n  padding-top: 10px;\n  padding-bottom: 2px;\n  margin-top: -8px;\n  margin-left: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcanVsaXVcXERlc2t0b3BcXElUIDIwMjNcXEN1cnNvcyBFbnJpcXVlIE9yaW9sXFxDb2RpZ29cXGZpbmFsLWNvZGVcXENvbnRhY3RBcHAvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDRUo7O0FEQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbn1cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uc3RpY2t5LWhlYWRlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG59IiwiOmhvc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDEge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zdGlja3ktaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _title_service__WEBPACK_IMPORTED_MODULE_1__["TitleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/log-out/log-out.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/log-out/log-out.component.ts ***!
    \**********************************************/

  /*! exports provided: LogOutComponent */

  /***/
  function srcAppLogOutLogOutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogOutComponent", function () {
      return LogOutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var LogOutComponent =
    /*#__PURE__*/
    function () {
      function LogOutComponent(router, authService) {
        _classCallCheck(this, LogOutComponent);

        this.router = router;
        this.authService = authService;
      }

      _createClass(LogOutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cancel",
        value: function cancel() {
          this.closePopup();
        }
      }, {
        key: "leave",
        value: function leave() {
          this.authService.logout();
          this.closePopup('login');
        }
      }, {
        key: "closePopup",
        value: function closePopup(redirectRoute) {
          if (redirectRoute) {
            this.router.navigate([{
              outlets: {
                primary: redirectRoute,
                popup: null
              }
            }]);
          } else {
            this.router.navigate([{
              outlets: {
                popup: null
              }
            }]);
          }
        }
      }]);

      return LogOutComponent;
    }();

    LogOutComponent.ɵfac = function LogOutComponent_Factory(t) {
      return new (t || LogOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LogOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogOutComponent,
      selectors: [["app-log-out"]],
      decls: 8,
      vars: 0,
      consts: [[1, "container"], [1, "buttons"], [1, "button", 3, "click"]],
      template: function LogOutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure you want to leave?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogOutComponent_Template_button_click_4_listener($event) {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogOutComponent_Template_button_click_6_listener($event) {
            return ctx.leave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Leave");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  padding: 50px;\n  position: fixed;\n  display: block;\n  top: 50%;\n  background-color: white;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.container[_ngcontent-%COMP%] {\n  min-width: 250px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLW91dC9DOlxcVXNlcnNcXGp1bGl1XFxEZXNrdG9wXFxJVCAyMDIzXFxDdXJzb3MgRW5yaXF1ZSBPcmlvbFxcQ29kaWdvXFxmaW5hbC1jb2RlXFxDb250YWN0QXBwL3NyY1xcYXBwXFxsb2ctb3V0XFxsb2ctb3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2ctb3V0L2xvZy1vdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0VKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sb2ctb3V0L2xvZy1vdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogMTAwJTsgICAgXHJcbn0iLCI6aG9zdCB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogOutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-log-out',
          templateUrl: './log-out.component.html',
          styleUrls: ['./log-out.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, authService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authService = authService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this6 = this;

          this.authService.login().subscribe(function (user) {
            if (user != null) {
              var destination = _this6.authService.redirectUrl ? _this6.router.parseUrl(_this6.authService.redirectUrl) : '';

              _this6.router.navigateByUrl(destination);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"], [1, "button", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please, click to access");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_3_listener($event) {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  height: 80vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxqdWxpdVxcRGVza3RvcFxcSVQgMjAyM1xcQ3Vyc29zIEVucmlxdWUgT3Jpb2xcXENvZGlnb1xcZmluYWwtY29kZVxcQ29udGFjdEFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"], ["routerLink", "/contacts", 1, "button"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorry, this page does not exist :(");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bring me home!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".container[_ngcontent-%COMP%] {\n  height: 80vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL0M6XFxVc2Vyc1xcanVsaXVcXERlc2t0b3BcXElUIDIwMjNcXEN1cnNvcyBFbnJpcXVlIE9yaW9sXFxDb2RpZ29cXGZpbmFsLWNvZGVcXENvbnRhY3RBcHAvc3JjXFxhcHBcXG5vdC1mb3VuZFxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/title.service.ts":
  /*!**********************************!*\
    !*** ./src/app/title.service.ts ***!
    \**********************************/

  /*! exports provided: TitleService */

  /***/
  function srcAppTitleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitleService", function () {
      return TitleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TitleService =
    /*#__PURE__*/
    function () {
      function TitleService(router, activatedRoute) {
        _classCallCheck(this, TitleService);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.title$ = this.titleSubject.asObservable();
        this.init();
      }

      _createClass(TitleService, [{
        key: "init",
        value: function init() {
          var _this7 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (route) {
            return route.firstChild.data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log("DATA: ", data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.title;
          })).subscribe(function (title) {
            return _this7.titleSubject.next(title);
          });
        }
      }]);

      return TitleService;
    }();

    TitleService.ɵfac = function TitleService_Factory(t) {
      return new (t || TitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    TitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TitleService,
      factory: TitleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\juliu\Desktop\IT 2023\Cursos Enrique Oriol\Codigo\final-code\ContactApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map