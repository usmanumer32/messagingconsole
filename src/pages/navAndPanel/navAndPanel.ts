import { Component } from '@angular/core';

@Component({
    selector: 'app-navandpanel-selector',
    templateUrl: 'navAndPanel.html',
    styleUrls: ['./navAndPanel.css', '../apps/apps.css']
})
export class NavAndPanelComponent {
    openModal(formName) {
        console.log(formName);
        const x = document.querySelectorAll('.company-modal');
        const y = document.querySelectorAll(formName);
        console.log(y.length);
        for (let i = 0; i < x.length; i++) {
            x[i].classList.add('show');
        }
        for (let j = 0; j < y.length; j++) {
            y[j].classList.add('show');
        }
    }
    closeModal() {
        const x = document.querySelectorAll('.company-modal');
        const y = document.querySelectorAll('.company-form');
        const z = document.querySelectorAll('.application-form');
        const a = document.querySelectorAll('.edit-form');
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove('show');
        }
        for (let j = 0; j < y.length; j++) {
            y[j].classList.remove('show');
        }
        for (let k = 0; k < y.length; k++) {
            z[k].classList.remove('show');
        }
        for (let x = 0; x < a.length; x++) {
            a[x].classList.remove('show');
        }
    }
    activebackground(activeButton) {
        const x = document.querySelectorAll('.menu-items');
        const y = document.querySelectorAll(activeButton);
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove('active-background');
        }
        for (let j = 0; j < y.length; j++) {
            y[j].classList.add('active-background');
        }
    }
    openMenu() {
        console.log('called');
        const x = document.querySelectorAll('.overlay-menu');
        console.log(x.length);
        for (let i = 0; i < x.length; i++) {
            x[i].classList.toggle('openMenu');
        }
    }
}
