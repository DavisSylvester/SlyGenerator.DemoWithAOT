import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthenicationProviderRoutes } from "./Routing/index";
import { RouterModule } from "@angular/router";
// import { AuthenicationRoutes } from "./Routing/index";
import { Login } from "./Components/index";


@NgModule({
    imports:    [                   
                    CommonModule,
                    AuthenicationProviderRoutes,
                    // RouterModule.forRoot(AuthenicationRoutes)
                ],
    exports:    [
                    RouterModule
                ],
    declarations:
                [
                    Login
                ],
    providers:  [

                ]
})


export class AuthenicationModule { }
