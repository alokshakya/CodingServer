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

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>HTML</h3>\n<textarea alokShakyaSyntaxHighlighter [options]=\"{}\" [lang]=\"'html'\" >\n  &lt;textarea highlight-js [options]=\"{}\" [lang]=\"'typescript'\">\n  /* tslint:disable */\n  import { Component } from '@angular/core';\n  \n  @Component({\n      selector: 'demo',\n      templateUrl: './demo.component.html',\n      styleUrls: ['./demo.component.scss']\n  })\n  export class DemoComponent {\n      switchStatus: boolean = true;\n  }\n  &lt;/textarea>\n                  </textarea>\n\n\n\n<h3>typescript</h3>\n<textarea alokShakyaSyntaxHighlighter [options]=\"{}\" [lang]=\"'tyscript'\" >\n   import { Directive, Component, ElementRef, Input, OnInit, OnDestroy  } from '@angular/core';\n\n  declare const hljs: any;\n  declare const document: any;\n  \n  @Directive({\n    selector: '[appSyntaxHighlighter]',\n    host: {\n      'style': 'display:none;'\n    }\n  })\n  export class SyntaxHighlighterDirective implements OnInit, OnDestroy {\n    @Input() options: any;\n    @Input() lang: string;\n  \n    protected codeEl: any;\n    protected parentEl: any;\n  \n    constructor(private elementRef: ElementRef) { }\n  \n      ngOnInit() {\n          this.codeEl = document.createElement('pre');\n          if (this.lang) {\n              this.codeEl.className = this.lang;\n          }\n          this.codeEl.innerHTML = '' + this.elementRef.nativeElement.innerHTML.trim();\n          this.parentEl = this.elementRef.nativeElement.parentNode;\n          this.parentEl.insertBefore(this.codeEl, this.elementRef.nativeElement.nextSibling);\n  \n          hljs.configure(Object.assign({ }, this.options));\n          hljs.highlightBlock(this.codeEl);\n      }\n      \n      ngOnDestroy(): void {\n          if (this.codeEl) {\n              this.parentEl.removeChild(this.codeEl);\n              this.codeEl = null;\n          }\n      }\n  \n  }\n  \n</textarea>\n<h3>C++</h3>\n<textarea alokShakyaSyntaxHighlighter [options]=\"{}\" [lang]=\"'C++'\">\n  #include <iostream>\n\n  int main(int argc, char *argv[]) {\n  \n    /* An annoying \"Hello World\" example */\n    for (auto i = 0; i < 0xFFFF; i++)\n      cout << \"Hello, World!\" << endl;\n  \n    char c = '\\n';\n    unordered_map <string, vector<string> > m;\n    m[\"key\"] = \"\\\\\\\\\"; // this is an error\n  \n    return -2e3 + 12l;\n  }\n</textarea>\n<h3>Java</h3>\n<textarea alokShakyaSyntaxHighlighter [options]=\"{}\" [lang]=\"'Java'\">\n    /**\n    * @author John Smith <john.smith@example.com>\n   */\n   package l2f.gameserver.model;\n   \n   public abstract class L2Char extends L2Object {\n     public static final Short ERROR = 0x0001;\n   \n     public void moveTo(int x, int y, int z) {\n       _ai = null;\n       log(\"Should not be called\");\n       if (1 > 5) { // wtf!?\n         return;\n       }\n     }\n   }\n\n</textarea>\n<h3>JavaScript</h3>\n<textarea alokShakyaSyntaxHighlighter [options]=\"{}\" >\n    function $initHighlight(block, cls) {\n      try {\n        if (cls.search(/\\bno\\-highlight\\b/) != -1)\n          return process(block, true, 0x0F) +\n                 ` class=\"${cls}\"`;\n      } catch (e) {\n        /* handle exception */\n      }\n      for (var i = 0 / 2; i < classes.length; i++) {\n        if (checkCondition(classes[i]) === undefined)\n          console.log('undefined');\n      }\n    }\n    \n    export  $initHighlight;\n</textarea>\n<h3>JSON</h3>\n<textarea alokShakyaSyntaxHighlighter [options]=\"{}\" [lang]=\"'JSON'\">\n    [\n    {\n      \"title\": \"apples\",\n      \"count\": [12000, 20000],\n      \"description\": {\"text\": \"...\", \"sensitive\": false}\n    },\n    {\n      \"title\": \"oranges\",\n      \"count\": [17500, null],\n      \"description\": {\"text\": \"...\", \"sensitive\": false}\n    }\n  ]\n</textarea>\n<h3>Markdown</h3>\n<textarea alokShakyaSyntaxHighlighter [options]=\"{}\" [lang]=\"'Markdown'\">\n    # hello world\n\n    you can write text [with links](http://example.com) inline or [link references][1].\n    \n    * one _thing_ has *em*phasis\n    * two __things__ are **bold**\n    \n    [1]: http://example.com\n    \n    ---\n    \n    hello world\n    ===========\n    \n    <this_is inline=\"xml\"></this_is>\n    \n    > markdown is so cool\n    \n        so are code segments\n    \n    1. one thing (yeah!)\n    2. two thing `i can write code`, and `more` wipee!\n    \n</textarea>\n<h3>Python</h3>\n<textarea alokShakyaSyntaxHighlighter [options]=\"{}\" [lang]=\"'Python'\">\n    @requires_authorization\n    def somefunc(param1='', param2=0):\n        r'''A docstring'''\n        if param1 > param2: # interesting\n            print 'Gre\\'ater'\n        return (param2 - param1 + 1 + 0b10l) or None\n    \n    class SomeClass:\n        pass\n    \n    >>> message = '''interpreter\n    ... prompt'''\n</textarea>\n\n\n \n\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 70%;\n  margin: 20px; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <h1>Enter Text to see Preview</h1>\n  <textarea [(ngModel)]=\"markCode\"></textarea>\n  <br>\n  <hr>\n  <h3>Preview of text</h3>{{markdownContent}}<hr>\n\n  <h2>Below Code Again</h2>\n  <app-markdown [data]='markdownContent'></app-markdown>\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = "#textbox {\n  width: 100%;\n  height: 100vh; }\n\ntable.table2 {\n  font-size: 14px;\n  color: #212121;\n  margin: 0 auto;\n  border-collapse: collapse; }\n\ntable.table2 thead th {\n  font-size: 20px;\n  color: #212121;\n  height: 40px;\n  border: 1px solid #e6e6e6;\n  border-top: 0;\n  border-right: 0;\n  border-left: 0; }\n\ntable.table2 tbody tr:nth-child(odd) {\n  background-color: #f6f6f6; }\n\ntable.table2 td {\n  height: 40px;\n  width: 230px;\n  border-bottom: 1px solid #e6e6e6;\n  border-right: 1px solid #e6e6e6; }\n\ntable.table2 td:last-of-type {\n  border-right: 0; }\n\n/* From https://codepen.io/maxds/pen/DcveB */\n\nblockquote.king-quote {\n  display: block;\n  background: #fff;\n  padding: 15px 20px 15px 45px;\n  margin: 0 0 20px;\n  position: relative;\n  /*Font*/\n  font-family: Georgia, serif;\n  font-size: 16px;\n  line-height: 1.2;\n  color: #666;\n  text-align: justify;\n  /*Borders - (Optional)*/\n  border-left: 15px solid #c76c0c;\n  border-right: 2px solid #c76c0c;\n  /*Box Shadow - (Optional)*/\n  -webkit-box-shadow: 2px 2px 15px #ccc;\n  box-shadow: 2px 2px 15px #ccc; }\n\nblockquote.king-quote::before {\n  content: \"\\\\201C\";\n  /*Unicode for Left Double Quote*/\n  /*Font*/\n  font-family: Georgia, serif;\n  font-size: 60px;\n  font-weight: bold;\n  color: #999;\n  /*Positioning*/\n  position: absolute;\n  left: 10px;\n  top: 5px; }\n\nblockquote.king-quote::after {\n  /*Reset to make sure*/\n  content: \"\"; }\n\nblockquote.king-quote a {\n  text-decoration: none;\n  background: #eee;\n  cursor: pointer;\n  padding: 0 3px;\n  color: #c76c0c; }\n\nblockquote.king-quote a:hover {\n  color: #666; }\n\nblockquote.king-quote em {\n  font-style: italic; }\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_markdown_service__ = __webpack_require__("./src/app/services/markdown.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked_extras__ = __webpack_require__("./node_modules/marked-extras/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked_extras___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_marked_extras__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(_markdown) {
        this._markdown = _markdown;
        //markContent:string;
        this.markdownContent = "\n# Headers\n\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n\nAlt-H1\n======\n\nAlt-H2\n------\n\n\n\n# Emphasis\n\nEmphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~\n\n# Lists\n\n(In this example, leading and trailing spaces are shown with with dots: \u22C5)\n\n1. First ordered list item\n2. Another item\n\u22C5\u22C5* Unordered sub-list.\n1. Actual numbers don't matter, just that it's a number\n\u22C5\u22C51. Ordered sub-list\n4. And another item.\n\n\u22C5\u22C5\u22C5You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n\n\u22C5\u22C5\u22C5To have a line break without a paragraph, you will need to use two trailing spaces.\u22C5\u22C5\n\u22C5\u22C5\u22C5Note that this line is separate, but within the same paragraph.\u22C5\u22C5\n\u22C5\u22C5\u22C5(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n\n\n# Links\n\nThere are two ways to create links.\n\n[I'm an inline-style link](https://www.google.com)\n\n[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")\n\n[I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n[I'm a relative reference to a repository file](../blob/master/LICENSE)\n\n[You can use numbers for reference-style link definitions][1]\n\nOr leave it empty and use the [link text itself].\n\nURLs and URLs in angle brackets will automatically get turned into links.\nhttp://www.example.com or <http://www.example.com> and sometimes\nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n\n[arbitrary case-insensitive reference text]: https://www.mozilla.org\n[1]: http://slashdot.org\n[link text itself]: http://www.reddit.com\n\n\n\n# Images\n\nHere's our logo (hover to see the title text):\n\nInline-style:\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n\nReference-style:\n![alt text][logo]\n\n[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 2\"\n\n# Code and Syntax Highlighting\n\nInline `code` has `back-ticks around` it.\n\n```javascript\nvar s = \"JavaScript syntax highlighting\";\nalert(s);\n```\n\n```python\ns = \"Python syntax highlighting\"\nprint s\n```\n\n```\nNo language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n\n```\n\n\n# Blockquotes\n\n> Blockquotes are very handy in email to emulate reply text.\n> This line is part of the same quote.\n\nQuote break.\n\n> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n\n\n# Horizontal Rule\n\nThree or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores\n\n# Tables\n\nColons can be used to align columns.\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n\nThere must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don't need to make the\nraw Markdown line up prettily. You can also use inline Markdown.\n\nMarkdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders]` | **nicely**\n1 | 2 | 3\n\n";
    }
    AdminComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_marked_extras__["init"]();
        this._markdown.setMarkedOptions({});
        console.log(__WEBPACK_IMPORTED_MODULE_2_marked_extras__["markedDefaults"]);
        this._markdown.setMarkedOptions(Object.assign(__WEBPACK_IMPORTED_MODULE_2_marked_extras__["markedDefaults"], {
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        }));
        this._markdown.renderer.table = function (header, body) {
            return "\n      <table class=\"table2\">\n        <thead>\n          " + header + "\n        </thead>\n        <tbody>\n          " + body + "\n        </tbody>\n      </table>\n      ";
        };
        this._markdown.renderer.blockquote = function (quote) {
            return "<blockquote class=\"king-quote\">" + quote + "</blockquote>";
        };
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_markdown_service__["a" /* MarkdownService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mcq_mcq_component__ = __webpack_require__("./src/app/mcq/mcq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routing_routing_module__ = __webpack_require__("./src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_process_http_msg_service__ = __webpack_require__("./src/app/services/process-http-msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_fetch_questions_service__ = __webpack_require__("./src/app/services/fetch-questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_syntax_highlighter_directive__ = __webpack_require__("./src/app/directives/syntax-highlighter.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__coding_coding_component__ = __webpack_require__("./src/app/coding/coding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_codemirror__ = __webpack_require__("./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_runcode_service__ = __webpack_require__("./src/app/services/runcode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_markdown_service__ = __webpack_require__("./src/app/services/markdown.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__markdown_markdown_component__ = __webpack_require__("./src/app/markdown/markdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//for material module import things which you need






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mcq_mcq_component__["a" /* McqComponent */],
                __WEBPACK_IMPORTED_MODULE_18__directives_syntax_highlighter_directive__["a" /* SyntaxHighlighterDirective */],
                __WEBPACK_IMPORTED_MODULE_19__coding_coding_component__["a" /* CodingComponent */],
                __WEBPACK_IMPORTED_MODULE_23__markdown_markdown_component__["a" /* MarkdownComponent */],
                __WEBPACK_IMPORTED_MODULE_24__admin_admin_component__["a" /* AdminComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_13__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["c" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_process_http_msg_service__["a" /* ProcessHttpMsgService */],
                __WEBPACK_IMPORTED_MODULE_16__services_fetch_questions_service__["a" /* FetchQuestionsService */],
                __WEBPACK_IMPORTED_MODULE_21__services_runcode_service__["a" /* RuncodeService */],
                __WEBPACK_IMPORTED_MODULE_22__services_markdown_service__["a" /* MarkdownService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coding/coding.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <p>{{problem.problem}}</p>\r\n  <p>Sample Input : {{problem.sampleInput}}</p>\r\n  <p>Sample Output : {{problem.sampleOutput}}</p>\r\n</div>\r\n    <h2>Theme Demo</h2>\r\n    <div fxFlexLayout> \r\n    <form>\r\n      <p>Select Theme : &nbsp;&nbsp;\r\n          <mat-form-field>\r\n              <mat-select [(value)]=\"theme\" (change)=\"changeTheme()\">\r\n                <mat-option *ngFor=\"let th of themes\" [value]=\"th\">{{th}}</mat-option>\r\n              </mat-select>\r\n          </mat-form-field> \r\n          &nbsp;&nbsp;&nbsp;&nbsp; Select Language &nbsp;&nbsp;&nbsp;&nbsp;\r\n          <mat-form-field>\r\n              <mat-select [(value)]=\"language\" (change)=\"changeLanguage()\">\r\n                <mat-option *ngFor=\"let lg of languages\" [value]=\"lg\">{{lg.name}}</mat-option>\r\n              </mat-select>\r\n          </mat-form-field> \r\n      </p>\r\n        \r\n      <textarea id=\"code\" name=\"code\" #code [(ngModel)]=\"editorCode\">\r\n      </textarea>\r\n    <a mat-button (click)=\"submitCode()\"> Run & Test </a>\r\n  </form>\r\n</div>   \r\n  "

/***/ }),

/***/ "./src/app/coding/coding.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/coding/coding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_codemirror__ = __webpack_require__("./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_themes__ = __webpack_require__("./src/app/shared/themes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_langTemps__ = __webpack_require__("./src/app/shared/langTemps.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_runcode_service__ = __webpack_require__("./src/app/services/runcode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_problems__ = __webpack_require__("./src/app/shared/problems.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_codemirror_mode_clike_clike__ = __webpack_require__("./node_modules/codemirror/mode/clike/clike.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_codemirror_mode_clike_clike___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_codemirror_mode_clike_clike__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_codemirror_mode_clojure_clojure__ = __webpack_require__("./node_modules/codemirror/mode/clojure/clojure.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_codemirror_mode_clojure_clojure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_codemirror_mode_clojure_clojure__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_codemirror_mode_cobol_cobol__ = __webpack_require__("./node_modules/codemirror/mode/cobol/cobol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_codemirror_mode_cobol_cobol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_codemirror_mode_cobol_cobol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_codemirror_mode_crystal_crystal__ = __webpack_require__("./node_modules/codemirror/mode/crystal/crystal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_codemirror_mode_crystal_crystal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_codemirror_mode_crystal_crystal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_codemirror_mode_d_d__ = __webpack_require__("./node_modules/codemirror/mode/d/d.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_codemirror_mode_d_d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_codemirror_mode_d_d__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_codemirror_mode_go_go__ = __webpack_require__("./node_modules/codemirror/mode/go/go.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_codemirror_mode_go_go___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_codemirror_mode_go_go__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_codemirror_mode_groovy_groovy__ = __webpack_require__("./node_modules/codemirror/mode/groovy/groovy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_codemirror_mode_groovy_groovy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_codemirror_mode_groovy_groovy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_codemirror_mode_haskell_haskell__ = __webpack_require__("./node_modules/codemirror/mode/haskell/haskell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_codemirror_mode_haskell_haskell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_codemirror_mode_haskell_haskell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_codemirror_mode_javascript_javascript__ = __webpack_require__("./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_codemirror_mode_javascript_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_codemirror_mode_javascript_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_codemirror_mode_julia_julia__ = __webpack_require__("./node_modules/codemirror/mode/julia/julia.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_codemirror_mode_julia_julia___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_codemirror_mode_julia_julia__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_codemirror_mode_lua_lua__ = __webpack_require__("./node_modules/codemirror/mode/lua/lua.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_codemirror_mode_lua_lua___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_codemirror_mode_lua_lua__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_codemirror_mode_perl_perl__ = __webpack_require__("./node_modules/codemirror/mode/perl/perl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_codemirror_mode_perl_perl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_codemirror_mode_perl_perl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_codemirror_mode_php_php__ = __webpack_require__("./node_modules/codemirror/mode/php/php.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_codemirror_mode_php_php___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_codemirror_mode_php_php__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_codemirror_mode_python_python__ = __webpack_require__("./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_codemirror_mode_python_python___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_codemirror_mode_python_python__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_codemirror_mode_r_r__ = __webpack_require__("./node_modules/codemirror/mode/r/r.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_codemirror_mode_r_r___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_codemirror_mode_r_r__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_codemirror_mode_ruby_ruby__ = __webpack_require__("./node_modules/codemirror/mode/ruby/ruby.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_codemirror_mode_ruby_ruby___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_codemirror_mode_ruby_ruby__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_codemirror_mode_rust_rust__ = __webpack_require__("./node_modules/codemirror/mode/rust/rust.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_codemirror_mode_rust_rust___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_codemirror_mode_rust_rust__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_codemirror_mode_swift_swift__ = __webpack_require__("./node_modules/codemirror/mode/swift/swift.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_codemirror_mode_swift_swift___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_codemirror_mode_swift_swift__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_codemirror_addon_edit_closebrackets__ = __webpack_require__("./node_modules/codemirror/addon/edit/closebrackets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_codemirror_addon_edit_closebrackets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_codemirror_addon_edit_closebrackets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_codemirror_addon_edit_matchbrackets__ = __webpack_require__("./node_modules/codemirror/addon/edit/matchbrackets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_codemirror_addon_edit_matchbrackets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_codemirror_addon_edit_matchbrackets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_codemirror_addon_hint_show_hint__ = __webpack_require__("./node_modules/codemirror/addon/hint/show-hint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_codemirror_addon_hint_show_hint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_codemirror_addon_hint_show_hint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_codemirror_addon_hint_javascript_hint__ = __webpack_require__("./node_modules/codemirror/addon/hint/javascript-hint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_codemirror_addon_hint_javascript_hint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_codemirror_addon_hint_javascript_hint__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_codemirror_addon_hint_anyword_hint__ = __webpack_require__("./node_modules/codemirror/addon/hint/anyword-hint.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_codemirror_addon_hint_anyword_hint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_codemirror_addon_hint_anyword_hint__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import codemirror javascript files
//modes


















//addon


//hints



var CodingComponent = /** @class */ (function () {
    function CodingComponent(runCodeService) {
        this.runCodeService = runCodeService;
    }
    CodingComponent.prototype.ngOnInit = function () {
        this.themes = __WEBPACK_IMPORTED_MODULE_2__shared_themes__["a" /* THEMES */];
        this.theme = 'dracula';
        this.languages = __WEBPACK_IMPORTED_MODULE_3__shared_langTemps__["a" /* LangTemplates */];
        this.language = __WEBPACK_IMPORTED_MODULE_3__shared_langTemps__["a" /* LangTemplates */][0];
        this.problems = __WEBPACK_IMPORTED_MODULE_5__shared_problems__["a" /* PROBLEMS */];
        this.problem = __WEBPACK_IMPORTED_MODULE_5__shared_problems__["a" /* PROBLEMS */][0];
    };
    CodingComponent.prototype.ngAfterViewInit = function () {
        console.log(this.code.nativeElement.value);
        this.editor = __WEBPACK_IMPORTED_MODULE_1_codemirror__["fromTextArea"](this.code.nativeElement, {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            smartIndent: true,
            extraKeys: { "Ctrl+Space": "autocomplete" }
        });
        this.editor.setOption('theme', this.theme);
        this.editor.setOption('mode', this.language.mode);
        this.editor.setValue(this.language.template);
    };
    CodingComponent.prototype.submitCode = function () {
        var _this = this;
        console.log('Submit Code Pressed \n' + this.editor.getValue());
        this.runCodeService.runTest(this.editor.getValue(), this.language.filename, this.language.name, '3', '6')
            .subscribe(function (res) { return _this.res = res; }, function (errmess) { return _this.errMess = errmess; });
    };
    CodingComponent.prototype.changeTheme = function () {
        this.editor.setOption('theme', this.theme);
    };
    CodingComponent.prototype.changeLanguage = function () {
        this.editor.setOption('mode', this.language.mode);
        this.editor.setValue(this.language.template);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('code'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CodingComponent.prototype, "code", void 0);
    CodingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-coding',
            template: __webpack_require__("./src/app/coding/coding.component.html"),
            styles: [__webpack_require__("./src/app/coding/coding.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_runcode_service__["a" /* RuncodeService */]])
    ], CodingComponent);
    return CodingComponent;
}());



/***/ }),

/***/ "./src/app/directives/syntax-highlighter.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyntaxHighlighterDirective; });
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

var SyntaxHighlighterDirective = /** @class */ (function () {
    function SyntaxHighlighterDirective(elementRef) {
        this.elementRef = elementRef;
    }
    SyntaxHighlighterDirective.prototype.ngOnInit = function () {
        this.codeEl = document.createElement('pre');
        if (this.lang) {
            this.codeEl.className = this.lang;
        }
        this.codeEl.innerHTML = '' + this.elementRef.nativeElement.innerHTML.trim();
        this.parentEl = this.elementRef.nativeElement.parentNode;
        this.parentEl.insertBefore(this.codeEl, this.elementRef.nativeElement.nextSibling);
        hljs.configure(Object.assign({}, this.options));
        hljs.highlightBlock(this.codeEl);
    };
    SyntaxHighlighterDirective.prototype.ngOnDestroy = function () {
        if (this.codeEl) {
            this.parentEl.removeChild(this.codeEl);
            this.codeEl = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SyntaxHighlighterDirective.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SyntaxHighlighterDirective.prototype, "lang", void 0);
    SyntaxHighlighterDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[alokShakyaSyntaxHighlighter]',
            host: {
                'style': 'display:none;'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SyntaxHighlighterDirective);
    return SyntaxHighlighterDirective;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\" \n    fxLayout=\"row\" \n    fxLayout.sm=\"column\" \n    fxLayout.xs=\"column\" \n    fxLayoutAlign.xs=\"start center\" \n    fxLayoutAlign.sm=\"start center\"\n    fxLayoutAlign.gt-sm=\"center center\" \n    fxLayoutWrap \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n    <div fxLayout=\"row\">\n      <div fxFlex=\"40\" fxFlexOffset=\"20px\">\n        <h4>Links</h4>\n        <mat-list>\n          <mat-list-item><a mat-button >Home</a></mat-list-item>\n          <mat-list-item><a mat-button >About</a></mat-list-item>\n          <mat-list-item><a mat-button >Menu</a></mat-list-item>\n          <mat-list-item><a mat-button >Contact</a></mat-list-item>\n        </mat-list>\n      </div>\n      <div fxFlex=\"50\">\n        <h4>Our Address</h4>\n        <address >\n          Ramanujam Hostel<br> Kamla Nehru Institute of Technology<br>Sultanpur<br>\n          <i class=\"fa fa-phone\"></i>: +91 7355490341<br>\n          \n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:alokshakya75@gmail.com\">alokshakya75@gmail.com</a>\n        </address>\n      </div>\n    </div>\n  </div>\n  <div fxFlex=\"100%\" fxFlex.gt-sm=\"45%\">\n    <div style=\"text-align:center\">\n      <a mat-icon-button class=\"btn-google-plus\" href=\"https://plus.google.com/107650232466924951664\"><i class=\"fa fa-google-plus fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-facebook\" href=\"https://www.facebook.com/alok.shakya.56\"><i class=\"fa fa-facebook fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/alokshakya\"><i class=\"fa fa-linkedin fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-twitter\" href=\"https://twitter.com/alokshakya75\"><i class=\"fa fa-twitter fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-github\" href=\"https://github.com/alokshakya\"><i class=\"fa fa-github fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-mail\" href=\"mailto:alokshakya75@gmail.com\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-medium\" href=\"https://medium.com/@alokshakya75\"><i class=\"fa fa-medium fa-lg\"></i></a>\n    </div>\n  </div>\n  <div fxFlex=\"100\" fxFlexAlign=\"center center\">\n    <div style=\"text-align:center;\">\n      <p>© Copyright 2018 IntroQuest</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px; }\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important; }\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important; }\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important; }\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important; }\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important; }\n\n.btn-github {\n  color: #fff !important;\n  background-color: #444444 !important; }\n\n.btn-medium {\n  color: #fff !important;\n  background-color: #0da79f !important; }\n\n.btn-bitbucket {\n  color: #fff !important;\n  background-color: #205081 !important; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span><img src=\"/assets/images/logo.png\" height=30 width=41></span>\n  <a mat-button routerLink=\"/home\" routerLinkActive=\"active\"><span class=\"fa fa-home fa-lg\"></span> Home</a>\n  <a mat-button routerLink=\"/about\" routerLinkActive=\"active\"><span class=\"fa fa-info fa-lg\"></span> About</a>\n  <a mat-button routerLink=\"/admin\" routerLinkActive=\"active\"><span class=\"fa fa-list fa-lg\"></span> Admin</a>\n  <a mat-button routerLink=\"/mcq\" routerLinkActive=\"active\"><span class=\"fa fa-list fa-lg\"></span> MCQ</a>\n  <a mat-button routerLink=\"/coding\" routerLinkActive=\"active\"><span class=\"fa fa-list fa-lg\"></span> Coding</a>\n</mat-toolbar>\n\n\n<div class=\"container jumbotron\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\" \n    fxLayout.xs=\"column\" \n    fxLayoutAlign.xs=\"start center\"\n    fxLayoutAlign.sm=\"start center\" \n    fxLayoutAlign.gt-sm=\"center center\" \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <h1>IntroQuest</h1>\n    <p>One stop solution to all your career related problems.\n       Whether it be company interview or Email Writing Simulation or C Coding Simulator for command line arguments. Leave your worries to us. Prepare from us!</p>\n  </div>\n  <div fxFlex fxFlex.gt-sm=\"20%\">\n    <img src=\"/assets/images/logo.png\" alt=\"Logo\">\n  </div>\n  <div fxFlex></div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px; }\n\n.active {\n  background: #4527A0; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"row\"\n    \n     fxLayout.xs=\"column\"\n     fxLayoutAlign.gt-md=\"space-around center\"\n     fxLayoutGap=\"10px\">\n\n  <mat-card class=\"developer-title\">\n    <mat-card-header >\n      <div mat-card-avatar></div>\n      <mat-card-title >\n        <h3>Alok Shakya </h3>\n      </mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"/assets/images/alok.jpg\" alt=\"Alok Shakya\">\n    <mat-card-content>\n      <h4>Developer</h4>\n      <p>Alok Shakya has developed backend APIs for working of this project. Apart from this he has managed hasura cloud cluster.\n      </p>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card class=\"developer-title\">\n      <mat-card-header>\n        <div mat-card-avatar></div>\n        <mat-card-title>\n          <h3>Abhishek Kumar </h3>\n        </mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"/assets/images/alok.jpg\" alt=\"Alok Shakya\">\n      <mat-card-content>\n        <h4>Developer</h4>\n        <p>Abhishek has developed backend APIs for working of this project. Apart from this he has managed hasura cloud cluster.\n        </p>\n      </mat-card-content>\n\n  </mat-card>\n\n  <mat-card class=\"developer-title\">\n      <mat-card-header >\n        <div mat-card-avatar></div>\n        <mat-card-title >\n          <h3>Adarsh Yadav </h3>\n        </mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"/assets/images/alok.jpg\" alt=\"Alok Shakya\">\n      <mat-card-content>\n        <h4>Developer</h4>\n        <p>Adarsh Yadav has developed backend APIs for working of this project. Apart from this he has managed hasura cloud cluster.\n        </p>\n      </mat-card-content>\n    </mat-card>\n  \n    <mat-card class=\"developer-title\">\n        <mat-card-header>\n          <div mat-card-avatar></div>\n          <mat-card-title>\n            <h3>Tushar Bansal </h3>\n          </mat-card-title>\n        </mat-card-header>\n        <img mat-card-image src=\"/assets/images/alok.jpg\" alt=\"Alok Shakya\">\n        <mat-card-content>\n          <h4>Developer</h4>\n          <p>Tushar Bansal has developed backend APIs for working of this project. Apart from this he has managed hasura cloud cluster.\n          </p>\n        </mat-card-content>\n  \n    </mat-card>\n  \n\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".developer-title {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/markdown/markdown.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/markdown/markdown.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/markdown/markdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_markdown_service__ = __webpack_require__("./src/app/services/markdown.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs__ = __webpack_require__("./node_modules/prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import './prism.languages';


var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent(mdService, el, platformId) {
        this.mdService = mdService;
        this.el = el;
        this.platformId = platformId;
        this.changeLog = [];
    }
    MarkdownComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MarkdownComponent.prototype, "path", {
        set: function (value) {
            if (value) {
                this._path = value;
                this.onPathChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "data", {
        set: function (value) {
            if (value) {
                this._data = value;
                this.onDataChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    // on input
    MarkdownComponent.prototype.onDataChange = function (data) {
        if (data) {
            this.el.nativeElement.innerHTML = this.mdService.compile(data);
        }
        else {
            this.el.nativeElement.innerHTML = '';
        }
        this.highlightContent(false);
    };
    /**
     *  After view init
     */
    MarkdownComponent.prototype.ngAfterViewInit = function () {
        if (this._path) {
            this.onPathChange();
        }
        else if (!this._data) {
            this.processRaw();
        }
    };
    MarkdownComponent.prototype.processRaw = function () {
        this._md = this.prepare(decodeHtml(this.el.nativeElement.innerHTML));
        this.el.nativeElement.innerHTML = this.mdService.compile(this._md);
        this.highlightContent(false);
    };
    /**
     * get remote conent;
     */
    MarkdownComponent.prototype.onPathChange = function () {
        var _this = this;
        this._ext = this._path && this._path.split('.').splice(-1).join();
        this.mdService.getContent(this._path)
            .then(function (data) {
            _this._md = _this._ext !== 'md' ? '```' + _this._ext + '\n' + data + '\n```' : data;
            _this.el.nativeElement.innerHTML = _this.mdService.compile(_this.prepare(_this._md));
            _this.highlightContent(false);
        }, function (err) { return _this.handleError; });
    };
    /**
     * catch http error
     */
    MarkdownComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /**
     * Prepare string
     */
    MarkdownComponent.prototype.prepare = function (raw) {
        var _this = this;
        if (!raw) {
            return '';
        }
        if (this._ext === 'md' || !this.path) {
            var isCodeBlock_1 = false;
            return raw.split('\n').map(function (line) {
                if (_this.trimLeft(line).substring(0, 3) === "```") {
                    isCodeBlock_1 = !isCodeBlock_1;
                }
                return isCodeBlock_1 ? line : line.trim();
            }).join('\n');
        }
        return raw.replace(/\"/g, '\'');
    };
    /**
     * Trim left whitespace
     */
    MarkdownComponent.prototype.trimLeft = function (line) {
        return line.replace(/^\s+|\s+$/g, '');
    };
    /**
     * Use Prism to highlight code snippets only on the browser
     * @param {string} async param passed directly to Prism.highlightAll
     */
    MarkdownComponent.prototype.highlightContent = function (async) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["l" /* isPlatformBrowser */])(this.platformId)) {
            __WEBPACK_IMPORTED_MODULE_3_prismjs__["highlightAll"](async);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MarkdownComponent.prototype, "path", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MarkdownComponent.prototype, "data", null);
    MarkdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-markdown',
            template: __webpack_require__("./src/app/markdown/markdown.component.html"),
            styles: [__webpack_require__("./src/app/markdown/markdown.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_markdown_service__["a" /* MarkdownService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], String])
    ], MarkdownComponent);
    return MarkdownComponent;
}());

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}


/***/ }),

/***/ "./src/app/mcq/mcq.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"questions && !showAnswer\">\n<mat-card *ngFor=\"let question of questions\">\n  <mat-card-header>\n    \n    <mat-card-title><h2>Q {{question.id}}: {{question.question}}</h2></mat-card-title>\n    \n  </mat-card-header>\n  \n  <mat-card-content>\n    \n        <form>\n            <input type=\"radio\" name=\"gender\" [(ngModel)]=\"question.marked\" value=\"{{question.a}}\" > (A) {{question.a}}<br>\n            <input type=\"radio\" name=\"gender\" [(ngModel)]=\"question.marked\" value=\"{{question.b}}\"> (B) {{question.b}})<br>\n            <input type=\"radio\" name=\"gender\" [(ngModel)]=\"question.marked\" value=\"{{question.c}}\"> (C) {{question.c}} <br>\n            <input type=\"radio\" name=\"gender\" [(ngModel)]=\"question.marked\" value=\"{{question.d}}\"> (D) {{question.d}} <br>\n          </form>\n    \n  </mat-card-content>\n  \n    {{question.marked}} <br>\n  \n</mat-card>\n\n<button type=\"submit\" md-button class=\"background-primary text-floral-white\" (click)=\"showAnswerFun()\">Submit</button>\n</div>\n\n<div [hidden]=\"questions || errMess\" >\n  <mat-spinner><h4>Loading . . . Please Wait</h4></mat-spinner>\n</div>\n<div *ngIf=\"errMess\">\n  <h2>Error</h2>\n  <h4>{{errMess}}</h4>\n</div>\n<div *ngIf=\"showAnswer\">\n  <mat-list>\n    <mat-list-item *ngFor=\"let q of questions\">\n      <h4>Q {{q.id}} Marked : {{q.marked}} And Answer is: {{q.answer}}</h4><br>\n\n    </mat-list-item>\n  </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/mcq/mcq.component.scss":
/***/ (function(module, exports) {

module.exports = ".scrollable {\n  overflow: scroll;\n  height: 400px; }\n"

/***/ }),

/***/ "./src/app/mcq/mcq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fetch_questions_service__ = __webpack_require__("./src/app/services/fetch-questions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var McqComponent = /** @class */ (function () {
    function McqComponent(fetchQuestionService) {
        this.fetchQuestionService = fetchQuestionService;
    }
    McqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchQuestionService.getQuestions()
            .subscribe(function (questions) { _this.questions = questions; _this.showAnswer = false; }, function (errmess) { return _this.errMess = errmess; });
    };
    McqComponent.prototype.showAnswerFun = function () {
        this.showAnswer = true;
    };
    McqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mcq',
            template: __webpack_require__("./src/app/mcq/mcq.component.html"),
            styles: [__webpack_require__("./src/app/mcq/mcq.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fetch_questions_service__["a" /* FetchQuestionsService */]])
    ], McqComponent);
    return McqComponent;
}());



/***/ }),

/***/ "./src/app/routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mcq_mcq_component__ = __webpack_require__("./src/app/mcq/mcq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coding_coding_component__ = __webpack_require__("./src/app/coding/coding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'mcq', component: __WEBPACK_IMPORTED_MODULE_2__mcq_mcq_component__["a" /* McqComponent */] },
    { path: 'coding', component: __WEBPACK_IMPORTED_MODULE_3__coding_coding_component__["a" /* CodingComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__["a" /* AdminComponent */] }
];


/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./src/app/routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/fetch-questions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchQuestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_urls__ = __webpack_require__("./src/app/shared/urls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_http_msg_service__ = __webpack_require__("./src/app/services/process-http-msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FetchQuestionsService = /** @class */ (function () {
    function FetchQuestionsService(http, processHttpMsgService) {
        this.http = http;
        this.processHttpMsgService = processHttpMsgService;
    }
    FetchQuestionsService.prototype.getQuestions = function () {
        var _this = this;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_urls__["a" /* dataURL */] + 'questions')
            .map(function (res) { return _this.processHttpMsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpMsgService.handleError(error); });
    };
    FetchQuestionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__process_http_msg_service__["a" /* ProcessHttpMsgService */]])
    ], FetchQuestionsService);
    return FetchQuestionsService;
}());



/***/ }),

/***/ "./src/app/services/markdown.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked__ = __webpack_require__("./node_modules/marked/lib/marked.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MarkdownService = /** @class */ (function () {
    function MarkdownService() {
        this._renderer = new __WEBPACK_IMPORTED_MODULE_2_marked__["Renderer"]();
        this.extendRenderer();
        this.setMarkedOptions({});
    }
    //get the content from remote resource
    MarkdownService.prototype.getContent = function (path) {
        return fetch(path).then(this.extractData).catch(this.handleError);
    };
    Object.defineProperty(MarkdownService.prototype, "renderer", {
        get: function () {
            return this._renderer;
        },
        enumerable: true,
        configurable: true
    });
    // handle data
    MarkdownService.prototype.extractData = function (res) {
        return res.text() || '';
    };
    MarkdownService.prototype.setMarkedOptions = function (options) {
        options = Object.assign({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        }, options);
        options.renderer = this._renderer;
        __WEBPACK_IMPORTED_MODULE_2_marked__["setOptions"](options);
    };
    // comple markdown to html
    MarkdownService.prototype.compile = function (data) {
        return __WEBPACK_IMPORTED_MODULE_2_marked__(data);
    };
    //handle error
    MarkdownService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof fetch) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    // extend marked render to support todo checkbox
    MarkdownService.prototype.extendRenderer = function () {
        this._renderer.listitem = function (text) {
            if (/^\s*\[[x ]\]\s*/.test(text)) {
                text = text
                    .replace(/^\s*\[ \]\s*/, '<input type="checkbox" style=" vertical-align: middle; margin: 0 0.2em 0.25em -1.6em; font-size: 16px; " disabled> ')
                    .replace(/^\s*\[x\]\s*/, '<input type="checkbox" style=" vertical-align: middle; margin: 0 0.2em 0.25em -1.6em; font-size: 16px; " checked disabled> ');
                return '<li style="list-style: none">' + text + '</li>';
            }
            else {
                return '<li>' + text + '</li>';
            }
        };
    };
    MarkdownService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MarkdownService);
    return MarkdownService;
}());



/***/ }),

/***/ "./src/app/services/process-http-msg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpMsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcessHttpMsgService = /** @class */ (function () {
    function ProcessHttpMsgService() {
    }
    ProcessHttpMsgService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    ProcessHttpMsgService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    ProcessHttpMsgService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProcessHttpMsgService);
    return ProcessHttpMsgService;
}());



/***/ }),

/***/ "./src/app/services/runcode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuncodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_http_msg_service__ = __webpack_require__("./src/app/services/process-http-msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //for post request with data





var RuncodeService = /** @class */ (function () {
    function RuncodeService(http, processHttpMsgService) {
        this.http = http;
        this.processHttpMsgService = processHttpMsgService;
        this.glotToken = '92debc0b-994a-4004-98f6-4895ba453c84';
    }
    RuncodeService.prototype.runTest = function (code, filename, language, input, output) {
        var _this = this;
        var body = {
            "language": language,
            "stdin": input,
            "files": [
                {
                    "name": filename,
                    "content": code
                }
            ]
        };
        console.log(body);
        var glotheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //glotheaders.append('Authorization', 'Token 92debc0b-994a-4004-98f6-4895ba453c84e');
        glotheaders.append('Content-type', 'application/json');
        var glotopts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        glotopts.headers = glotheaders;
        var url = 'https://run.glot.io/languages/' + language + '/latest';
        var url2 = 'https://api.enlightenment56.hasura-app.io/sampleTest';
        var url3 = 'http://localhost:8080/sampleTest';
        return this.http.post(url2, body, glotopts)
            .map(function (res) { return _this.processHttpMsgService.extractData(res); })
            .catch(function (error) { return _this.processHttpMsgService.handleError(error); });
        /* Checked for CORS on hasura api worked on hasura but not working on run.glot.io
             let hadata=JSON.stringify(
               {
                 "type": "select",
                 "args": {
                     "table": "Questions",
                     "columns": [
                         "*"
                     ]
                 }
             }
             );
     
           let Hsheaders = new Headers();
           Hsheaders.append('Authorization', 'Bearer 0b253fa1dfe1d4a9078aa68a6869b99ef2298c5f9f5bbd2f');
           Hsheaders.append('Content-Type', 'application/json');
           let Hsopts = new RequestOptions();
           Hsopts.headers = Hsheaders;
     
           return this.http.post('https://data.enlightenment56.hasura-app.io/v1/query',hadata,Hsopts)
                 .map(res =>{ return this.processHttpMsgService.extractData(res);})
                 .catch(error => { return this.processHttpMsgService.handleError(error);});
     
             */
    };
    RuncodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__process_http_msg_service__["a" /* ProcessHttpMsgService */]])
    ], RuncodeService);
    return RuncodeService;
}());



/***/ }),

/***/ "./src/app/shared/langTemps.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangTemplates; });
var LangTemplates = [
    {
        name: 'c',
        mode: 'text/x-csrc',
        template: "#include <stdio.h>\n\nint main(void) {\n    printf(\"Hello World!\n\");\n    return 0;\n}",
        filename: 'main.c'
    },
    {
        name: 'cpp',
        mode: 'text/x-c++src',
        template: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello World!\";\n    return 0;\n}",
        filename: 'main.cpp'
    },
    {
        name: 'java',
        mode: 'text/x-java',
        template: "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World!\");\n    }\n}",
        filename: 'Main.java'
    },
    {
        name: 'python',
        mode: 'text/x-python',
        template: "print(\"Hello World!\")",
        filename: 'main.py'
    },
    {
        name: 'clojure',
        mode: 'text/x-clojure',
        template: "(println \"Hello World!\")",
        filename: 'main.clj'
    },
    {
        name: 'cobol',
        mode: 'text/x-cobol',
        template: "IDENTIFICATION DIVISION.\nPROGRAM-ID. hello.\n\nPROCEDURE DIVISION.\n    DISPLAY 'Hello World!'\n    GOBACK\n    .",
        filename: 'main.cob'
    },
    {
        name: 'coffeescript',
        mode: 'text/x-coffeescript',
        template: "console.log \"Hello World!\"",
        filename: 'main.coffee'
    },
    {
        name: 'crystal',
        mode: 'text/x-crystal',
        template: "puts \"Hello World!\"",
        filename: 'main.cr'
    },
    {
        name: 'csharp',
        mode: 'text/x-csharp',
        template: "using System;\n\nclass MainClass {\n    static void Main() {\n        Console.WriteLine(\"Hello World!\");\n    }\n}",
        filename: 'main.cs'
    },
    {
        name: 'd',
        mode: 'text/x-d',
        template: "import std.stdio;\n\nvoid main()\n{\n    writeln(\"Hello World!\");\n}",
        filename: 'main.d'
    },
    {
        name: 'go',
        mode: 'text/x-go',
        template: "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    fmt.Println(\"Hello World!\")\n}",
        filename: 'main.go'
    },
    {
        name: 'groovy',
        mode: 'text/x-groovy',
        template: "println \"Hello World!\"",
        filename: 'main.groovy'
    },
    {
        name: 'javascript',
        mode: 'text/javascript',
        template: "console.log(\"Hello World!\");",
        filename: 'main.js'
    },
    {
        name: 'julia',
        mode: 'text/x-julia',
        template: "println(\"Hello world!\")",
        filename: 'main.jl'
    },
    {
        name: 'kotlin',
        mode: 'text/x-kotlin',
        template: "fun main(args : Array<String>){\n    println(\"Hello World!\")\n}",
        filename: 'main.kt'
    },
    {
        name: 'lua',
        mode: 'text/x-lua',
        template: "print(\"Hello World!\");",
        filename: 'main.lua'
    },
    {
        name: 'perl',
        mode: 'text/x-perl',
        template: "print \"Hello World!\n\";",
        filename: 'main.pl'
    },
    {
        name: 'php',
        mode: 'text/x-php',
        template: "<?php\n\necho \"Hello World\n\";",
        filename: 'main.php'
    },
    {
        name: 'ruby',
        mode: 'text/x-ruby',
        template: "puts \"Hello World!\"",
        filename: 'main.rb'
    },
    {
        name: 'rust',
        mode: 'text/x-rust',
        template: "fn main() {\n    println!(\"Hello World!\");\n}",
        filename: 'main.rs'
    },
    {
        name: 'scala',
        mode: 'text/x-scala',
        template: "object Main extends App {\n    println(\"Hello World!\")\n}",
        filename: 'main.scala'
    },
    {
        name: 'swift',
        mode: 'text/x-swift',
        template: "print(\"Hello World!\")",
        filename: 'main.swift'
    },
    {
        name: 'typescript',
        mode: 'text/typescript',
        template: "const hello : string = \"Hello World!\"\nconsole.log(hello)",
        filename: 'main.ts'
    }
];


/***/ }),

/***/ "./src/app/shared/problems.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROBLEMS; });
var PROBLEMS = [
    {
        id: 1,
        problem: 'Print the factorial of a number. n will be taken as input .',
        sampleInput: '3',
        sampleOutput: '6',
        testcases: [
            {
                input: '5',
                output: '120'
            },
            {
                input: '4',
                output: '24'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/themes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return THEMES; });
var THEMES = [
    'dracula', 'cobalt', 'eclipse', 'isotope', 'material', 'monokai', 'neo', 'twilight'
];


/***/ }),

/***/ "./src/app/shared/urls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataURL; });
/* unused harmony export glotURL */
var dataURL = 'http://localhost:3000/';
var glotURL = 'https://run.glot.io/languages/';


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
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