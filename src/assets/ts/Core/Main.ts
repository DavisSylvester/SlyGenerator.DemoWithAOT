import { Libs } from "./libs";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
// import { Libs } from "./libs";

const lib = new Libs();

console.log(lib);

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

