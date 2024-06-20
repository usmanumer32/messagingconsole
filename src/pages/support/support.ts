import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-support-selector',
    templateUrl: 'support.html',
    styleUrls: ['./support.css']
})
export class SupportComponent {

    showAnswer(panelName: any) {
        /* console.log('called'); */
        const x = document.querySelectorAll(panelName);
        const y = document.querySelectorAll('.panel');
        /* console.log(x.length); */
        for (let j = 0; j < y.length; j++) {
            if (y[j].classList.contains(panelName)) {
                y[j].classList.toggle('show');
            } else {
                y[j].classList.remove('show');
            }

        }
    }
}
