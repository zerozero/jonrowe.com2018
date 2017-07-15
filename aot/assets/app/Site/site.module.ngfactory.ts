/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../../assets/app/Site/site.module';
import * as import2 from '../../../../assets/app/common.module';
import * as import3 from '@angular/common';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/material';
import * as import6 from '@angular/flex-layout/media-query/_module';
import * as import7 from '@angular/flex-layout/flexbox/_module';
import * as import8 from '@angular/router';
import * as import9 from '@angular/flex-layout/media-query/breakpoints/break-point-registry';
import * as import10 from '@angular/flex-layout/media-query/match-media';
import * as import11 from './site.component.ngfactory';
import * as import12 from './Home/home.component.ngfactory';
import * as import13 from './Bio/bio.component.ngfactory';
import * as import14 from './Gigs/gigs.component.ngfactory';
import * as import15 from './Media/media.component.ngfactory';
import * as import16 from './Collab/collab.component.ngfactory';
import * as import17 from './Reviews/reviews.component.ngfactory';
import * as import18 from './Contact/contact.component.ngfactory';
import * as import19 from './Collab/image.component.ngfactory';
import * as import20 from './Collab/audio.component.ngfactory';
import * as import21 from './Collab/video.component.ngfactory';
import * as import22 from './Collab/text.component.ngfactory';
import * as import23 from '@angular/http';
import * as import24 from '@angular/flex-layout/media-query/breakpoints/break-points-provider';
import * as import25 from '@angular/flex-layout/media-query/media-monitor-provider';
import * as import26 from '@angular/flex-layout/media-query/media-monitor';
import * as import27 from '@angular/flex-layout/media-query/observable-media-provider';
import * as import28 from '@angular/flex-layout/media-query/observable-media';
import * as import29 from '../../../../assets/app/Site/site.component';
import * as import30 from '../../../../assets/app/Site/Home/home.component';
import * as import31 from '../../../../assets/app/Site/Bio/bio.component';
import * as import32 from '../../../../assets/app/Site/Gigs/gigs.component';
import * as import33 from '../../../../assets/app/Site/Media/media.component';
import * as import34 from '../../../../assets/app/Site/Collab/collab.component';
import * as import35 from '../../../../assets/app/Site/Reviews/reviews.component';
import * as import36 from '../../../../assets/app/Site/Contact/contact.component';
import * as import37 from '@angular/flex-layout/media-query/breakpoints/break-points-token';
class SiteModuleInjector extends import0.ɵNgModuleInjector<import1.SiteModule> {
  _CommonModule_0:import2.CommonModule;
  _CommonModule_1:import3.CommonModule;
  _ErrorHandler_2:any;
  _APP_INITIALIZER_3:any[];
  _ApplicationInitStatus_4:import0.ApplicationInitStatus;
  _ɵf_5:import0.ɵf;
  _ApplicationRef_6:any;
  _ApplicationModule_7:import0.ApplicationModule;
  _BrowserModule_8:import4.BrowserModule;
  _MATERIAL_SANITY_CHECKS_9:any;
  _CompatibilityModule_10:import5.CompatibilityModule;
  _MdCommonModule_11:import5.MdCommonModule;
  _MdToolbarModule_12:import5.MdToolbarModule;
  _PlatformModule_13:import5.PlatformModule;
  _ScrollDispatchModule_14:import5.ScrollDispatchModule;
  _MdRippleModule_15:import5.MdRippleModule;
  _StyleModule_16:import5.StyleModule;
  _MdButtonModule_17:import5.MdButtonModule;
  _MdIconModule_18:import5.MdIconModule;
  _MdLineModule_19:import5.MdLineModule;
  _MdListModule_20:import5.MdListModule;
  _MediaQueriesModule_21:import6.MediaQueriesModule;
  _FlexLayoutModule_22:import7.FlexLayoutModule;
  _RouterModule_23:import8.RouterModule;
  _SiteModule_24:import1.SiteModule;
  __LOCALE_ID_25:any;
  __NgLocalization_26:import3.NgLocaleLocalization;
  __Compiler_27:import0.Compiler;
  __APP_ID_28:any;
  __IterableDiffers_29:any;
  __KeyValueDiffers_30:any;
  __DomSanitizer_31:import4.ɵe;
  __Sanitizer_32:any;
  __HAMMER_GESTURE_CONFIG_33:import4.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_34:any[];
  __EventManager_35:import4.EventManager;
  __ɵDomSharedStylesHost_36:import4.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_37:import4.ɵDomRendererFactory2;
  __RendererFactory2_38:any;
  __ɵSharedStylesHost_39:any;
  __Testability_40:import0.Testability;
  __Meta_41:import4.Meta;
  __Title_42:import4.Title;
  __Platform_43:import5.Platform;
  __ScrollDispatcher_44:any;
  __ViewportRuler_45:any;
  __FocusOriginMonitor_46:any;
  __MdIconRegistry_47:any;
  __BREAKPOINTS_48:any;
  __BreakPointRegistry_49:import9.BreakPointRegistry;
  __MatchMedia_50:import10.MatchMedia;
  __MediaMonitor_51:any;
  __ObservableMedia_52:any;
  _ROUTES_53:any[];
  constructor(parent:import0.Injector) {
    super(parent,[
      import11.SiteComponentNgFactory,
      import12.HomeComponentNgFactory,
      import13.BioComponentNgFactory,
      import14.GigsComponentNgFactory,
      import15.MediaComponentNgFactory,
      import16.CollabComponentNgFactory,
      import17.ReviewsComponentNgFactory,
      import18.ContactComponentNgFactory,
      import19.ImageComponentNgFactory,
      import20.AudioComponentNgFactory,
      import21.VideoComponentNgFactory,
      import22.TextComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _LOCALE_ID_25():any {
    if ((this.__LOCALE_ID_25 == null)) { (this.__LOCALE_ID_25 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_25;
  }
  get _NgLocalization_26():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_26 == null)) { (this.__NgLocalization_26 = new import3.NgLocaleLocalization(this._LOCALE_ID_25)); }
    return this.__NgLocalization_26;
  }
  get _Compiler_27():import0.Compiler {
    if ((this.__Compiler_27 == null)) { (this.__Compiler_27 = new import0.Compiler()); }
    return this.__Compiler_27;
  }
  get _APP_ID_28():any {
    if ((this.__APP_ID_28 == null)) { (this.__APP_ID_28 = import0.ɵg()); }
    return this.__APP_ID_28;
  }
  get _IterableDiffers_29():any {
    if ((this.__IterableDiffers_29 == null)) { (this.__IterableDiffers_29 = import0.ɵl()); }
    return this.__IterableDiffers_29;
  }
  get _KeyValueDiffers_30():any {
    if ((this.__KeyValueDiffers_30 == null)) { (this.__KeyValueDiffers_30 = import0.ɵm()); }
    return this.__KeyValueDiffers_30;
  }
  get _DomSanitizer_31():import4.ɵe {
    if ((this.__DomSanitizer_31 == null)) { (this.__DomSanitizer_31 = new import4.ɵe(this.parent.get(import4.DOCUMENT))); }
    return this.__DomSanitizer_31;
  }
  get _Sanitizer_32():any {
    if ((this.__Sanitizer_32 == null)) { (this.__Sanitizer_32 = this._DomSanitizer_31); }
    return this.__Sanitizer_32;
  }
  get _HAMMER_GESTURE_CONFIG_33():import4.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_33 == null)) { (this.__HAMMER_GESTURE_CONFIG_33 = new import4.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_33;
  }
  get _EVENT_MANAGER_PLUGINS_34():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_34 == null)) { (this.__EVENT_MANAGER_PLUGINS_34 = [
      new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
      new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT),this._HAMMER_GESTURE_CONFIG_33)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_34;
  }
  get _EventManager_35():import4.EventManager {
    if ((this.__EventManager_35 == null)) { (this.__EventManager_35 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_34,this.parent.get(import0.NgZone))); }
    return this.__EventManager_35;
  }
  get _ɵDomSharedStylesHost_36():import4.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_36 == null)) { (this.__ɵDomSharedStylesHost_36 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_36;
  }
  get _ɵDomRendererFactory2_37():import4.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_37 == null)) { (this.__ɵDomRendererFactory2_37 = new import4.ɵDomRendererFactory2(this._EventManager_35,this._ɵDomSharedStylesHost_36)); }
    return this.__ɵDomRendererFactory2_37;
  }
  get _RendererFactory2_38():any {
    if ((this.__RendererFactory2_38 == null)) { (this.__RendererFactory2_38 = this._ɵDomRendererFactory2_37); }
    return this.__RendererFactory2_38;
  }
  get _ɵSharedStylesHost_39():any {
    if ((this.__ɵSharedStylesHost_39 == null)) { (this.__ɵSharedStylesHost_39 = this._ɵDomSharedStylesHost_36); }
    return this.__ɵSharedStylesHost_39;
  }
  get _Testability_40():import0.Testability {
    if ((this.__Testability_40 == null)) { (this.__Testability_40 = new import0.Testability(this.parent.get(import0.NgZone))); }
    return this.__Testability_40;
  }
  get _Meta_41():import4.Meta {
    if ((this.__Meta_41 == null)) { (this.__Meta_41 = new import4.Meta(this.parent.get(import4.DOCUMENT))); }
    return this.__Meta_41;
  }
  get _Title_42():import4.Title {
    if ((this.__Title_42 == null)) { (this.__Title_42 = new import4.Title(this.parent.get(import4.DOCUMENT))); }
    return this.__Title_42;
  }
  get _Platform_43():import5.Platform {
    if ((this.__Platform_43 == null)) { (this.__Platform_43 = new import5.Platform()); }
    return this.__Platform_43;
  }
  get _ScrollDispatcher_44():any {
    if ((this.__ScrollDispatcher_44 == null)) { (this.__ScrollDispatcher_44 = import5.ɵf(this.parent.get(import5.ScrollDispatcher,(null as any)),this.parent.get(import0.NgZone),this._Platform_43)); }
    return this.__ScrollDispatcher_44;
  }
  get _ViewportRuler_45():any {
    if ((this.__ViewportRuler_45 == null)) { (this.__ViewportRuler_45 = import5.ɵd(this.parent.get(import5.ViewportRuler,(null as any)),this._ScrollDispatcher_44)); }
    return this.__ViewportRuler_45;
  }
  get _FocusOriginMonitor_46():any {
    if ((this.__FocusOriginMonitor_46 == null)) { (this.__FocusOriginMonitor_46 = import5.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY(this.parent.get(import5.FocusOriginMonitor,(null as any)),this.parent.get(import0.NgZone),this._Platform_43)); }
    return this.__FocusOriginMonitor_46;
  }
  get _MdIconRegistry_47():any {
    if ((this.__MdIconRegistry_47 == null)) { (this.__MdIconRegistry_47 = import5.ICON_REGISTRY_PROVIDER_FACTORY(this.parent.get(import5.MdIconRegistry,(null as any)),this.parent.get(import23.Http,(null as any)),this._DomSanitizer_31)); }
    return this.__MdIconRegistry_47;
  }
  get _BREAKPOINTS_48():any {
    if ((this.__BREAKPOINTS_48 == null)) { (this.__BREAKPOINTS_48 = import24.DEFAULT_BREAKPOINTS_PROVIDER_FACTORY()); }
    return this.__BREAKPOINTS_48;
  }
  get _BreakPointRegistry_49():import9.BreakPointRegistry {
    if ((this.__BreakPointRegistry_49 == null)) { (this.__BreakPointRegistry_49 = new import9.BreakPointRegistry(this._BREAKPOINTS_48)); }
    return this.__BreakPointRegistry_49;
  }
  get _MatchMedia_50():import10.MatchMedia {
    if ((this.__MatchMedia_50 == null)) { (this.__MatchMedia_50 = new import10.MatchMedia(this.parent.get(import0.NgZone))); }
    return this.__MatchMedia_50;
  }
  get _MediaMonitor_51():any {
    if ((this.__MediaMonitor_51 == null)) { (this.__MediaMonitor_51 = import25.MEDIA_MONITOR_PROVIDER_FACTORY(this.parent.get(import26.MediaMonitor,(null as any)),this._BreakPointRegistry_49,this._MatchMedia_50)); }
    return this.__MediaMonitor_51;
  }
  get _ObservableMedia_52():any {
    if ((this.__ObservableMedia_52 == null)) { (this.__ObservableMedia_52 = import27.OBSERVABLE_MEDIA_PROVIDER_FACTORY(this.parent.get(import28.ObservableMedia,(null as any)),this._MatchMedia_50,this._BreakPointRegistry_49)); }
    return this.__ObservableMedia_52;
  }
  createInternal():import1.SiteModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._CommonModule_1 = new import3.CommonModule();
    this._ErrorHandler_2 = import4.ɵa();
    this._APP_INITIALIZER_3 = [
      import0.ɵo,
      import4.ɵc(this.parent.get(import4.NgProbeToken,(null as any)),this.parent.get(import0.NgProbeToken,(null as any)))
    ]
    ;
    this._ApplicationInitStatus_4 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_3);
    this._ɵf_5 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_2,this.componentFactoryResolver,this._ApplicationInitStatus_4);
    this._ApplicationRef_6 = this._ɵf_5;
    this._ApplicationModule_7 = new import0.ApplicationModule(this._ApplicationRef_6);
    this._BrowserModule_8 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._MATERIAL_SANITY_CHECKS_9 = true;
    this._CompatibilityModule_10 = new import5.CompatibilityModule(this.parent.get(import4.DOCUMENT,(null as any)),this._MATERIAL_SANITY_CHECKS_9);
    this._MdCommonModule_11 = new import5.MdCommonModule();
    this._MdToolbarModule_12 = new import5.MdToolbarModule();
    this._PlatformModule_13 = new import5.PlatformModule();
    this._ScrollDispatchModule_14 = new import5.ScrollDispatchModule();
    this._MdRippleModule_15 = new import5.MdRippleModule();
    this._StyleModule_16 = new import5.StyleModule();
    this._MdButtonModule_17 = new import5.MdButtonModule();
    this._MdIconModule_18 = new import5.MdIconModule();
    this._MdLineModule_19 = new import5.MdLineModule();
    this._MdListModule_20 = new import5.MdListModule();
    this._MediaQueriesModule_21 = new import6.MediaQueriesModule();
    this._FlexLayoutModule_22 = new import7.FlexLayoutModule();
    this._RouterModule_23 = new import8.RouterModule(this.parent.get(import8.ɵa,(null as any)),this.parent.get(import8.Router,(null as any)));
    this._SiteModule_24 = new import1.SiteModule();
        this._ROUTES_53 = [[{
          path: '',
          component: import29.SiteComponent,
          children: [
            {
              path: '',
              redirectTo: '/home',
              pathMatch: 'full'
            }
            ,
            {
              path: 'home',
              component: import30.HomeComponent
            }
            ,
            {
              path: 'bio',
              component: import31.BioComponent
            }
            ,
            {
              path: 'gigs',
              component: import32.GigsComponent
            }
            ,
            {
              path: 'media',
              component: import33.MediaComponent
            }
            ,
            {
              path: 'collab/:artist_id',
              component: import34.CollabComponent
            }
            ,
            {
              path: 'reviews',
              component: import35.ReviewsComponent
            }
            ,
            {
              path: 'contact',
              component: import36.ContactComponent
            }

          ]

        }
    ]];
    return this._SiteModule_24;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.CommonModule)) { return this._CommonModule_1; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_2; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_3; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_4; }
    if ((token === import0.ɵf)) { return this._ɵf_5; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_6; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_7; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_8; }
    if ((token === import5.MATERIAL_SANITY_CHECKS)) { return this._MATERIAL_SANITY_CHECKS_9; }
    if ((token === import5.CompatibilityModule)) { return this._CompatibilityModule_10; }
    if ((token === import5.MdCommonModule)) { return this._MdCommonModule_11; }
    if ((token === import5.MdToolbarModule)) { return this._MdToolbarModule_12; }
    if ((token === import5.PlatformModule)) { return this._PlatformModule_13; }
    if ((token === import5.ScrollDispatchModule)) { return this._ScrollDispatchModule_14; }
    if ((token === import5.MdRippleModule)) { return this._MdRippleModule_15; }
    if ((token === import5.StyleModule)) { return this._StyleModule_16; }
    if ((token === import5.MdButtonModule)) { return this._MdButtonModule_17; }
    if ((token === import5.MdIconModule)) { return this._MdIconModule_18; }
    if ((token === import5.MdLineModule)) { return this._MdLineModule_19; }
    if ((token === import5.MdListModule)) { return this._MdListModule_20; }
    if ((token === import6.MediaQueriesModule)) { return this._MediaQueriesModule_21; }
    if ((token === import7.FlexLayoutModule)) { return this._FlexLayoutModule_22; }
    if ((token === import8.RouterModule)) { return this._RouterModule_23; }
    if ((token === import1.SiteModule)) { return this._SiteModule_24; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_25; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_26; }
    if ((token === import0.Compiler)) { return this._Compiler_27; }
    if ((token === import0.APP_ID)) { return this._APP_ID_28; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_29; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_30; }
    if ((token === import4.DomSanitizer)) { return this._DomSanitizer_31; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_32; }
    if ((token === import4.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_33; }
    if ((token === import4.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_34; }
    if ((token === import4.EventManager)) { return this._EventManager_35; }
    if ((token === import4.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_36; }
    if ((token === import4.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_37; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_38; }
    if ((token === import4.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_39; }
    if ((token === import0.Testability)) { return this._Testability_40; }
    if ((token === import4.Meta)) { return this._Meta_41; }
    if ((token === import4.Title)) { return this._Title_42; }
    if ((token === import5.Platform)) { return this._Platform_43; }
    if ((token === import5.ScrollDispatcher)) { return this._ScrollDispatcher_44; }
    if ((token === import5.ViewportRuler)) { return this._ViewportRuler_45; }
    if ((token === import5.FocusOriginMonitor)) { return this._FocusOriginMonitor_46; }
    if ((token === import5.MdIconRegistry)) { return this._MdIconRegistry_47; }
    if ((token === import37.BREAKPOINTS)) { return this._BREAKPOINTS_48; }
    if ((token === import9.BreakPointRegistry)) { return this._BreakPointRegistry_49; }
    if ((token === import10.MatchMedia)) { return this._MatchMedia_50; }
    if ((token === import26.MediaMonitor)) { return this._MediaMonitor_51; }
    if ((token === import28.ObservableMedia)) { return this._ObservableMedia_52; }
    if ((token === import8.ROUTES)) { return this._ROUTES_53; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_5.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_36 && this._ɵDomSharedStylesHost_36.ngOnDestroy());
  }
}
export const SiteModuleNgFactory:import0.NgModuleFactory<import1.SiteModule> = new import0.NgModuleFactory<any>(SiteModuleInjector,import1.SiteModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvbnJvd2UvRG9jdW1lbnRzL2FuZ3VsYXI0L3ZpbWFsYXR2L2Fzc2V0cy9hcHAvU2l0ZS9zaXRlLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9qb25yb3dlL0RvY3VtZW50cy9hbmd1bGFyNC92aW1hbGF0di9hc3NldHMvYXBwL1NpdGUvc2l0ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
