import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { Login } from "../Components/index";

export const AuthenicationRoutes: Routes = [

    {
        path: "login",
        children: [
            { path: "", component: Login }
        ]
    }


];

export const AuthenicationProviderRoutes: ModuleWithProviders = 
    RouterModule.forChild(AuthenicationRoutes);

