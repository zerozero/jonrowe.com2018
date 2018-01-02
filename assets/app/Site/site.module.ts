import {NgModule} from "@angular/core";
import {ContactComponent} from "./Contact/contact.component";
import {HomeComponent} from "./Home/home.component";
import {AppComponent} from "../app.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SITE_ROUTING} from "./site.routing";
import {BrowserModule} from "@angular/platform-browser";
import {MyCommonModule} from "../common.module";
import {SiteComponent} from "./site.component";
import {CommonModule} from "@angular/common";
import {MatGridListModule} from "@angular/material";


//refactor
@NgModule({
    imports: [
        MyCommonModule,
        MatGridListModule,
        SITE_ROUTING
    ],
    declarations: [
        SiteComponent,
        AppComponent,
        HomeComponent,
        ContactComponent
    ],
    providers: [],
    entryComponents: [
    ]
})

export class SiteModule {}