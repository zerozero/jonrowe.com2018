import {NgModule} from "@angular/core";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
    MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule,
    MatToolbarModule
} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        FlexLayoutModule
    ],
    exports: [
        BrowserModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        FlexLayoutModule
    ],
    entryComponents: []
})

export class MyCommonModule {}