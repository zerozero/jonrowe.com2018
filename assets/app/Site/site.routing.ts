import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./Home/home.component";
import {ContactComponent} from "./Contact/contact.component";
import {SiteComponent} from "./site.component";

const SITE_ROUTES: Routes = [
    {
        path:'', component: SiteComponent
        , children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent},
        { path: 'contact', component: ContactComponent }
    ]
    }
];

export const SITE_ROUTING  = RouterModule.forChild((SITE_ROUTES));