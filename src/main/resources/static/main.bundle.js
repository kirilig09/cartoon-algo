webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/algorithms/algorithm/algorithm.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/algorithms/algorithm/algorithm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <h1 class=\"my-4\">{{algorithm.name}}</h1>\n    </div>\n    <div class=\"col-lg-9\">\n      <div class=\"card mt-4\">\n        <iframe width=\"820\" height=\"400\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(algorithm.video)\" frameborder=\"0\"\n                allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n      </div>\n      <div class=\"card card-outline-secondary my-4\">\n        <div class=\"card-header\">\n          <h3>Statistics</h3>\n        </div>\n        <div class=\"card-body\">\n          <h5>Explanation</h5>\n          <p>{{algorithm.expl}}</p>\n          <hr>\n          <h5>Speed</h5>\n          <p>{{algorithm.speed}}</p>\n          <hr>\n          <a routerLink=\"/algos/solve/{{id}}\" class=\"btn btn-success\">Upload Code Space</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/algorithms/algorithm/algorithm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlgorithmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlgorithmComponent = /** @class */ (function () {
    function AlgorithmComponent(route, sanitizer, http) {
        this.route = route;
        this.http = http;
        this.sanitizer = sanitizer;
    }
    AlgorithmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
        this.http.get("/api/algos/" + this.id).subscribe(function (data) {
            _this.algorithm = data;
        });
        // this.algorithm = this.algos[this.id];
    };
    AlgorithmComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AlgorithmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-algorithm',
            template: __webpack_require__("./src/app/algorithms/algorithm/algorithm.component.html"),
            styles: [__webpack_require__("./src/app/algorithms/algorithm/algorithm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AlgorithmComponent);
    return AlgorithmComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/algorithms.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h2 class=\"my-4\">Algos\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-sm-6 portfolio-item my-3\" *ngFor=\"let algo of algos\">\n      <div class=\"card h-100\">\n        <img [src]=\"algo.image\" alt=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">\n            <a routerLink=\"/algos/{{algo.id}}\" class=\"btn btn-primary btn-lg active\" role=\"button\" aria-disabled=\"true\">{{algo.name}}</a>\n          </h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--Pagination-->\n<ul class=\"pagination justify-content-center\">\n  <li class=\"page-item\">\n    <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n      <span aria-hidden=\"true\">&laquo;</span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n  </li>\n  <li class=\"page-item\">\n    <a class=\"page-link\" (click)=\"changePage(1)\">1</a>\n  </li>\n  <li class=\"page-item\">\n    <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n      <span aria-hidden=\"true\">&raquo;</span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlgorithmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlgorithmsComponent = /** @class */ (function () {
    function AlgorithmsComponent(http) {
        this.http = http;
    }
    AlgorithmsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("/api/algos?page=0&size=6").subscribe(function (data) {
            _this.algos = data.content;
        }).unsubscribe();
    };
    AlgorithmsComponent.prototype.changePage = function (page) {
        var _this = this;
        this.http.get("/api/algos?page=" + page + "&size=6").subscribe(function (data) {
            _this.algos = data.content;
        }).unsubscribe();
    };
    AlgorithmsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-algorithms',
            template: __webpack_require__("./src/app/algorithms/algorithms.component.html"),
            styles: [__webpack_require__("./src/app/algorithms/algorithms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AlgorithmsComponent);
    return AlgorithmsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Wiki Algo</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/algos\" class=\"nav-link\">Algos</a>\n        </li>\n        <li class=\"nav-item\">\n          <a *ngIf=\"!loggedIn\" class=\"nav-link\" href=\"/login\">Log In</a>\n          <a *ngIf=\"loggedIn\" class=\"nav-link\" (click)=\"logout()\">Log Out</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
        this.loggedIn = false;
        /*router.events.subscribe(change=>{
          if(this.cookieService.get('XSRF_TOKEN')){
            this.loggedIn=true;
          }
        })*/
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/user').subscribe(function (data) {
            _this.loggedIn = true;
        });
    };
    /*login(){
      this.http.get('/user').subscribe(data=>{
        console.log('success')
      })
    }*/
    AppComponent.prototype.logout = function () {
        this.http.get('/logout').subscribe(function (data) {
            console.log(data);
        });
        this.loggedIn = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__algorithms_algorithms_component__ = __webpack_require__("./src/app/algorithms/algorithms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__algorithms_algorithm_algorithm_component__ = __webpack_require__("./src/app/algorithms/algorithm/algorithm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__solve_solve_component__ = __webpack_require__("./src/app/solve/solve.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'algos', component: __WEBPACK_IMPORTED_MODULE_5__algorithms_algorithms_component__["a" /* AlgorithmsComponent */] },
    { path: 'algos/:id', component: __WEBPACK_IMPORTED_MODULE_6__algorithms_algorithm_algorithm_component__["a" /* AlgorithmComponent */] },
    { path: 'algos/solve/:id', component: __WEBPACK_IMPORTED_MODULE_8__solve_solve_component__["a" /* SolveComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__algorithms_algorithms_component__["a" /* AlgorithmsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__algorithms_algorithm_algorithm_component__["a" /* AlgorithmComponent */],
                __WEBPACK_IMPORTED_MODULE_8__solve_solve_component__["a" /* SolveComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    enableTracing: true
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <!-- Portfolio Item Heading -->\n  <h1 class=\"my-4\">\n\n  </h1>\n\n  <!-- Portfolio Item Row -->\n  <div class=\"row\">\n\n    <div id=\"slideshow\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#slideshow\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#slideshow\" data-slide-to=\"1\"></li>\n    <li data-target=\"#slideshow\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"Algorithms2.png\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"Capture.PNG\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"Algorithms.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#slideshow\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#slideshow\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n    <div class=\"col-md-4\">\n      <h3 class=\"my-3\">What we do</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque\n        urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,\n        justo eu convallis placerat, felis enim.</p>\n      <h3 class=\"my-3\">Ranking</h3>\n      <ul>\n        <!--TODO: Edit Metodi's stupidity-->\n        <li>Майка ти</li>\n        <li>Леля ти</li>\n        <li>Стринка ти</li>\n        <li>Баба ти</li>\n      </ul>\n    </div>\n\n  </div>\n  <!-- /.row -->\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/solve/solve.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/solve/solve.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <!--<label for=\"exampleFormControlSelect1\">Example select</label>-->\n    <select class=\"form-control\" #lang>\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Write your code</label>\n    <textarea class=\"form-control\" cols=\"40\" #code></textarea>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"send()\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/solve/solve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolveComponent = /** @class */ (function () {
    function SolveComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    SolveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
    };
    SolveComponent.prototype.send = function () {
        this.http.put("/api/judge/" + this.id, { code: this.code.nativeElement.value, lang: this.lang.nativeElement.value });
    };
    SolveComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lang'),
        __metadata("design:type", Object)
    ], SolveComponent.prototype, "lang", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('code'),
        __metadata("design:type", Object)
    ], SolveComponent.prototype, "code", void 0);
    SolveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-solve',
            template: __webpack_require__("./src/app/solve/solve.component.html"),
            styles: [__webpack_require__("./src/app/solve/solve.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SolveComponent);
    return SolveComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map