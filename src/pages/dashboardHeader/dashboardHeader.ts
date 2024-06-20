import { Component, OnInit } from '@angular/core';
import { ICompanies } from '../Interface/companiesInterface';
import swal from 'sweetalert';

@Component({
    selector: 'app-dashboardheader-selector',
    templateUrl: 'dashboardHeader.html',
    styleUrls: ['./dashboardHeader.css']
})
export class DashboardHeaderComponent implements OnInit{
    companies : Array<string> = ['AAAIT AppliedLine','Add Company'];
    compan : string = '';
    usmi : boolean = true;
    selectedCompany : string;
    retrievedObject : Array<ICompanies>;
    companyObjToPass : ICompanies;
    newCompanyObj : Array<ICompanies> = [
        { companyName : '',
          apps : [
              {name : '', apikey : ''}
          ]
        }
    ]
    companyObject : ICompanies = {
        companyName : '',
        apps : [
            {name : '', apikey : ''}
        ]   
    }

    ngOnInit(){
        var a = JSON.parse(localStorage.getItem('MessengerObject'));
        this.retrievedObject = a;
        console.log(this.retrievedObject);
        var b = JSON.parse(localStorage.getItem('objToDisplay'));
        this.selectedCompany = b.companyName;
    }

    addCompany(value: any) {
        if(this.selectedCompany == 'Add Company'){
            this.openModal('.company-form');
            this.openMenu();
        }
        else {
            for(let i=0; i< this.retrievedObject.length; i++) {
                if(this.retrievedObject[i].companyName == this.selectedCompany){
                    this.companyObjToPass = this.retrievedObject[i];
                }
            }
            localStorage.setItem('objToDisplay',JSON.stringify(this.companyObjToPass));
            window.location.reload();
        }
    }

    openModal(formName) {
        const x = document.querySelectorAll('.company-modal2');
        const y = document.querySelectorAll(formName);
        for (let i = 0; i < x.length; i++) {
            x[i].classList.add('show');
        }
        for (let j = 0; j < y.length; j++) {
            y[j].classList.add('show');
        }
    }
    closeModal() {
        const x = document.querySelectorAll('.company-modal2');
        const y = document.querySelectorAll('.company-form');
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove('show');
        }
        for (let j = 0; j < y.length; j++) {
            y[j].classList.remove('show');
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
        /* const y = document.querySelectorAll('.navbar'); */
        console.log(x.length);
        for (let i = 0; i < x.length; i++) {
            x[i].classList.toggle('openMenu');
        }
    }

    addNewCompany() {
        if(this.compan == '') {
            swal("Please enter company name");
        }
        else {
            var companiesObj = JSON.parse(localStorage.getItem('MessengerObject'));
        if(companiesObj.length == 1) {
            if(companiesObj[0].companyName == '') {
                this.newCompanyObj[0].companyName = this.compan;
                localStorage.setItem('MessengerObject', JSON.stringify(this.newCompanyObj));
                this.companyObject = this.newCompanyObj[0];
                localStorage.setItem('objToDisplay',JSON.stringify(this.companyObject));
                var b = JSON.parse(localStorage.getItem('MessengerObject'));
                this.retrievedObject = b;
                this.compan = '';
                this.companyObject.companyName = '';
                this.closeModal();
            }
            else {
                var a = JSON.parse(localStorage.getItem('MessengerObject'));
                this.companyObject.companyName = this.compan;
                a.push(this.companyObject);
                localStorage.setItem('MessengerObject',JSON.stringify(a));
                localStorage.setItem('objToDisplay',JSON.stringify(this.companyObject));
                var b = JSON.parse(localStorage.getItem('MessengerObject'));
                this.retrievedObject = b;
                this.compan = '';
                this.companyObject.companyName = '';
                this.closeModal();
            }    
        }
        else {
            var a = JSON.parse(localStorage.getItem('MessengerObject'));
            this.companyObject.companyName = this.compan;
            a.push(this.companyObject);            
            localStorage.setItem('MessengerObject',JSON.stringify(a));
            localStorage.setItem('objToDisplay',JSON.stringify(this.companyObject));
            var b = JSON.parse(localStorage.getItem('MessengerObject'));
            this.retrievedObject = b;
            this.compan = '';
            this.companyObject.companyName = '';
            this.closeModal();
        }
        window.location.reload();
        }
    }
}
