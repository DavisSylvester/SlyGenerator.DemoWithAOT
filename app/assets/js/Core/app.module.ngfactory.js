System.register(["@angular/core", "./app.module", "./Components/MainComponent", "@angular/router/router.ngfactory", "./Components/MainComponent.ngfactory", "@angular/common", "@angular/platform-browser", "@angular/animations/browser", "@angular/platform-browser/animations", "@angular/animations", "@angular/forms", "@angular/http", "@angular/common/http", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, AppModuleNgFactory;
    var __moduleName = context_1 && context_1.id;
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
            },
            function (i4_1) {
                i4 = i4_1;
            },
            function (i5_1) {
                i5 = i5_1;
            },
            function (i6_1) {
                i6 = i6_1;
            },
            function (i7_1) {
                i7 = i7_1;
            },
            function (i8_1) {
                i8 = i8_1;
            },
            function (i9_1) {
                i9 = i9_1;
            },
            function (i10_1) {
                i10 = i10_1;
            },
            function (i11_1) {
                i11 = i11_1;
            },
            function (i12_1) {
                i12 = i12_1;
            },
            function (i13_1) {
                i13 = i13_1;
            }
        ],
        execute: function () {
            AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.MainComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.MainComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_k, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵangular_packages_core_core_f, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_i, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(4608, i6.DomSanitizer, i6.ɵDomSanitizerImpl, [i5.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i6.DomSanitizer]), i0.ɵmpd(4608, i6.HAMMER_GESTURE_CONFIG, i6.HammerGestureConfig, []), i0.ɵmpd(5120, i6.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new i6.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i6.ɵKeyEventsPlugin(p1_0), new i6.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3)]; }, [i5.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i5.DOCUMENT, i5.DOCUMENT, i6.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i6.HAMMER_LOADER]]), i0.ɵmpd(4608, i6.EventManager, i6.EventManager, [i6.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i6.ɵDomSharedStylesHost, i6.ɵDomSharedStylesHost, [i5.DOCUMENT]), i0.ɵmpd(4608, i6.ɵDomRendererFactory2, i6.ɵDomRendererFactory2, [i6.EventManager, i6.ɵDomSharedStylesHost]), i0.ɵmpd(5120, i7.AnimationDriver, i8.ɵangular_packages_platform_browser_animations_animations_b, []), i0.ɵmpd(5120, i7.ɵAnimationStyleNormalizer, i8.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i7.ɵAnimationEngine, i8.ɵangular_packages_platform_browser_animations_animations_a, [i5.DOCUMENT, i7.AnimationDriver, i7.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i8.ɵangular_packages_platform_browser_animations_animations_d, [i6.ɵDomRendererFactory2, i7.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(6144, i6.ɵSharedStylesHost, null, [i6.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i9.AnimationBuilder, i8.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i6.DOCUMENT]), i0.ɵmpd(4608, i10.ɵangular_packages_forms_forms_i, i10.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i10.FormBuilder, i10.FormBuilder, []), i0.ɵmpd(4608, i11.BrowserXhr, i11.BrowserXhr, []), i0.ɵmpd(4608, i11.ResponseOptions, i11.BaseResponseOptions, []), i0.ɵmpd(5120, i11.XSRFStrategy, i11.ɵangular_packages_http_http_a, []), i0.ɵmpd(4608, i11.XHRBackend, i11.XHRBackend, [i11.BrowserXhr, i11.ResponseOptions, i11.XSRFStrategy]), i0.ɵmpd(4608, i11.RequestOptions, i11.BaseRequestOptions, []), i0.ɵmpd(5120, i11.Http, i11.ɵangular_packages_http_http_b, [i11.XHRBackend, i11.RequestOptions]), i0.ɵmpd(4608, i12.HttpXsrfTokenExtractor, i12.ɵangular_packages_common_http_http_g, [i5.DOCUMENT, i0.PLATFORM_ID, i12.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i12.ɵangular_packages_common_http_http_h, i12.ɵangular_packages_common_http_http_h, [i12.HttpXsrfTokenExtractor, i12.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i12.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i12.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i12.ɵangular_packages_common_http_http_d, i12.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i12.XhrFactory, null, [i12.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i12.HttpXhrBackend, i12.HttpXhrBackend, [i12.XhrFactory]), i0.ɵmpd(6144, i12.HttpBackend, null, [i12.HttpXhrBackend]), i0.ɵmpd(4608, i12.HttpHandler, i12.ɵHttpInterceptingHandler, [i12.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i12.HttpClient, i12.HttpClient, [i12.HttpHandler]), i0.ɵmpd(5120, i13.ActivatedRoute, i13.ɵangular_packages_router_router_g, [i13.Router]), i0.ɵmpd(4608, i13.NoPreloading, i13.NoPreloading, []), i0.ɵmpd(6144, i13.PreloadingStrategy, null, [i13.NoPreloading]), i0.ɵmpd(135680, i13.RouterPreloader, i13.RouterPreloader, [i13.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i13.PreloadingStrategy]), i0.ɵmpd(4608, i13.PreloadAllModules, i13.PreloadAllModules, []), i0.ɵmpd(5120, i13.ɵangular_packages_router_router_n, i13.ɵangular_packages_router_router_c, [i13.Router, i5.ViewportScroller, i13.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i13.ROUTER_INITIALIZER, i13.ɵangular_packages_router_router_j, [i13.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i13.ROUTER_INITIALIZER]), i0.ɵmpd(1073742336, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i6.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i13.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i13.ɵangular_packages_router_router_h, i13.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0) { return [i6.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i13.ɵangular_packages_router_router_i(p1_0)]; }, [[2, i0.NgProbeToken], i13.ɵangular_packages_router_router_h]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i6.BrowserModule, i6.BrowserModule, [[3, i6.BrowserModule]]), i0.ɵmpd(1073742336, i8.BrowserAnimationsModule, i8.BrowserAnimationsModule, []), i0.ɵmpd(1073742336, i10.ɵangular_packages_forms_forms_bb, i10.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i10.FormsModule, i10.FormsModule, []), i0.ɵmpd(1073742336, i10.ReactiveFormsModule, i10.ReactiveFormsModule, []), i0.ɵmpd(1024, i13.ɵangular_packages_router_router_a, i13.ɵangular_packages_router_router_e, [[3, i13.Router]]), i0.ɵmpd(512, i13.UrlSerializer, i13.DefaultUrlSerializer, []), i0.ɵmpd(512, i13.ChildrenOutletContexts, i13.ChildrenOutletContexts, []), i0.ɵmpd(256, i13.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i5.LocationStrategy, i13.ɵangular_packages_router_router_d, [i5.PlatformLocation, [2, i5.APP_BASE_HREF], i13.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i5.Location, i5.Location, [i5.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i13.ROUTES, function () { return [[]]; }, []), i0.ɵmpd(1024, i13.Router, i13.ɵangular_packages_router_router_f, [i0.ApplicationRef, i13.UrlSerializer, i13.ChildrenOutletContexts, i5.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i13.ROUTES, i13.ROUTER_CONFIGURATION, [2, i13.UrlHandlingStrategy], [2, i13.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i13.RouterModule, i13.RouterModule, [[2, i13.ɵangular_packages_router_router_a], [2, i13.Router]]), i0.ɵmpd(1073742336, i11.HttpModule, i11.HttpModule, []), i0.ɵmpd(1073742336, i12.HttpClientXsrfModule, i12.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i12.HttpClientModule, i12.HttpClientModule, []), i0.ɵmpd(1073742336, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i8.ANIMATION_MODULE_TYPE, "BrowserAnimations", []), i0.ɵmpd(256, i12.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i12.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", [])]); });
            exports_1("AppModuleNgFactory", AppModuleNgFactory);
        }
    };
});
//# sourceMappingURL=app.module.ngfactory.js.map