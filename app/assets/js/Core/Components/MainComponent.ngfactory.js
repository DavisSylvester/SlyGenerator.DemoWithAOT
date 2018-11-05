System.register(["../html/styles.css.shim.ngstyle", "@angular/core", "@angular/router", "./MainComponent"], function (exports_1, context_1) {
    "use strict";
    var i0, i1, i2, i3, styles_MainComponent, RenderType_MainComponent, MainComponentNgFactory;
    var __moduleName = context_1 && context_1.id;
    function View_MainComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["style", "display: flex; flex-direction: column; flex-grow: 1; width: 100%;"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    \n    "])), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h3", [["style", "margin-left: 10px;margin-top: 10px;"]], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n\n"])), (_l()(), i1.ɵeld(6, 16777216, null, null, 2, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(7, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵted(-1, null, ["\n\n"]))], function (_ck, _v) { _ck(_v, 7, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.Title; _ck(_v, 3, 0, currVal_0); }); }
    exports_1("View_MainComponent_0", View_MainComponent_0);
    function View_MainComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "main-app", [], null, null, null, View_MainComponent_0, RenderType_MainComponent)), i1.ɵprd(4608, null, i2.RouterModule, i2.RouterModule, [[2, i2.ɵangular_packages_router_router_a], [2, i2.Router]]), i1.ɵdid(2, 4308992, null, 0, i3.MainComponent, [], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
    exports_1("View_MainComponent_Host_0", View_MainComponent_Host_0);
    return {
        setters: [
            function (i0_1) {
                i0 = i0_1;
            },
            function (i1_1) {
                i1 = i1_1;
            },
            function (i2_1) {
                i2 = i2_1;
            },
            function (i3_1) {
                i3 = i3_1;
            }
        ],
        execute: function () {
            styles_MainComponent = [i0.styles];
            RenderType_MainComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MainComponent, data: {} });
            exports_1("RenderType_MainComponent", RenderType_MainComponent);
            MainComponentNgFactory = i1.ɵccf("main-app", i3.MainComponent, View_MainComponent_Host_0, {}, {}, []);
            exports_1("MainComponentNgFactory", MainComponentNgFactory);
        }
    };
});
//# sourceMappingURL=MainComponent.ngfactory.js.map