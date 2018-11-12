"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const index_1 = require("../Components/index");
const AuthenicationRoutes = [
    {
        path: "login",
        children: [
            { path: "", component: index_1.Login }
        ]
    }
];
exports.AuthenicationProviderRoutes = router_1.RouterModule.forChild(AuthenicationRoutes);
//# sourceMappingURL=Authenication.Routing.js.map