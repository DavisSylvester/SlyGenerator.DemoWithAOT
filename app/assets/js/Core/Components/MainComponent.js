System.register(["@angular/core", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, MainComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            MainComponent = class MainComponent {
                constructor() {
                    this.Title = "Main Component Title";
                    console.log("Starting Main Component");
                }
                ngOnInit() {
                }
                ngAfterViewInit() {
                }
            };
            MainComponent = __decorate([
                core_1.Component({
                    selector: "main-app",
                    moduleId: __moduleName,
                    template: "<div style=\"display: flex; flex-direction: column; flex-grow: 1; width: 100%;\">\r\n    \r\n    <h3 style=\"margin-left: 10px;margin-top: 10px;\">{{ Title }}</h3>\r\n</div>\r\n\r\n<router-outlet>\r\n\r\n</router-outlet>",
                    providers: [router_1.RouterModule],
                    styles: [":host {\n  width: 100vw;\n  max-width: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 0;\n}\n\n/*# sourceMappingURL=styles.css.map */\n"]
                }),
                __metadata("design:paramtypes", [])
            ], MainComponent);
            exports_1("MainComponent", MainComponent);
        }
    };
});
//# sourceMappingURL=MainComponent.js.map