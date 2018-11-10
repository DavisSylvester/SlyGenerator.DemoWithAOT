import { Libs } from "./libs";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
const lib = new Libs();
console.log(lib);
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//# sourceMappingURL=Main.js.map