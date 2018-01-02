import {NgModule} from "@angular/core";
import {CMS_ROUTING} from "./cms.routing";
import {AuthComponent} from "./auth/auth.component";
import {CmsComponent} from "./cms.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
    DateAdapter,
    MD_DATE_FORMATS,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatOptionModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {Http, RequestOptions} from "@angular/http";
import {AuthConfig, AuthHttp} from "angular2-jwt";
import {AuthGuard} from "./auth/auth-guard.service";
import {Auth} from "./auth/auth.service";
import {TabsComponent} from "./tabs/tabs.component";
import {DeleteQuoteDialog, EditQuoteDialog, HomeComponent} from "./home/home.component";

import {ContactComponent} from "./contact/contact.component";
import {FormsModule} from "@angular/forms";


import {FileUploadModule} from "ng2-file-upload";
import {MyCommonModule} from "../common.module";

import {CommonModule} from "@angular/common";



export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp( new AuthConfig({}), http, options);
}

const MY_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
// dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
};

@NgModule({
    imports: [
        MyCommonModule,
        FormsModule,
        FileUploadModule,
        MatTabsModule,
        MatListModule,
        MatDialogModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatOptionModule,
        MatSelectModule,
        MatProgressBarModule,
        CMS_ROUTING
    ],
    declarations: [
        CmsComponent,
        AuthComponent,
        TabsComponent,
        HomeComponent,
        ContactComponent,
        EditQuoteDialog,
        DeleteQuoteDialog
    ],
    providers: [
        Auth,
        AuthGuard,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [ Http, RequestOptions ]
        }
    ],
    entryComponents: [
        EditQuoteDialog,
        DeleteQuoteDialog
    ]
})

export class CmsModule {}