System.register(["@angular/platform-browser-dynamic", "./app.module"], function (exports_1, context_1) {
    "use strict";
    var platform_browser_dynamic_1, app_module_1, platform;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }
        ],
        execute: function () {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(app_module_1.AppModule);
        }
    };
});
//# sourceMappingURL=Main.js.map