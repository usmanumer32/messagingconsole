import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-appleftpanel-selector',
    templateUrl: 'appleftPanel.html',
    styleUrls: ['./appleftPanel.css']
})
export class AppLeftPanelComponent {

    appName = 'CargoCanal';

    constructor(private _location: Location) { }

    backClicked() {
        this._location.back();
    }
}
