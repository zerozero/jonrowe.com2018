import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {SiteModule} from "./Site/site.module";
import {APP_ROUTING} from "./app.routing";
import {
    MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule,
    MatToolbarModule
} from "@angular/material";
import {FlexLayoutModule, MediaService} from "@angular/flex-layout";
import {CmsModule} from "./CMS/cms.module";
import {HttpModule} from "@angular/http";
import {PageNotFoundComponent} from "./pagenotfound.component";
import {CommonModule} from "@angular/common";
import {QuotesService} from "./CMS/home/quote.service";
import {ContactService} from "./CMS/contact/contact.service";

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        BrowserAnimationsModule,
        HttpModule,
        CmsModule,
        SiteModule,
        APP_ROUTING
    ],
    providers: [
        QuotesService,
        ContactService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{

}