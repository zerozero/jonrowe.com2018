import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";

import {MatSidenav} from "@angular/material";


@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
})

export class SiteComponent implements OnInit{


    @ViewChild('sidenav', {read: MatSidenav}) _sidenav: MatSidenav;

    //note this class must be defined in the global css file
    classes : string = 'flat-menu-panel';


    constructor(private router:Router){

    }


    ngOnInit(): void {

    }

    navigateToRoute(route: string){
        this.router.navigateByUrl(route);
    }
}