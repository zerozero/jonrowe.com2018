import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {CmsComponent} from "./cms.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
const CMS_ROUTES: Routes = [
    {
        path:'cms', component: CmsComponent
        , children: [
            { path: 'cms', redirectTo: 'cms/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'contact', component: ContactComponent }
        ]
    }
];

export const CMS_ROUTING  = RouterModule.forChild((CMS_ROUTES));