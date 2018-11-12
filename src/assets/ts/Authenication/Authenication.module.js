"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const animations_1 = require("@angular/platform-browser/animations");
const forms_1 = require("@angular/forms");
const index_1 = require("./Routing/index");
let AuthenicationModule = class AuthenicationModule {
};
AuthenicationModule = __decorate([
    core_1.NgModule({
        imports: [
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            index_1.AuthenicationProviderRoutes
        ],
        exports: [],
        declarations: [],
        providers: []
    })
], AuthenicationModule);
exports.AuthenicationModule = AuthenicationModule;
//# sourceMappingURL=Authenication.module.js.map