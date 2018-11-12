import { Routes } from "@angular/router";
import { NotFound } from "../Components/index";
// import { Login } from "../../Authenication/index";



export const NavigationRoutes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },    
    { path: "401", component: NotFound },
    // { path: "login2", component: Login }

];


