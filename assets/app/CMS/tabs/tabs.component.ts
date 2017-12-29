import {Component} from "@angular/core";

@Component({
    selector: 'cms-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent{

    public navLinks = [
        {
            label:"Home",
            route:"home",
        },
        {
            label:"Contact",
            route:"contact",
        },
    ];
}