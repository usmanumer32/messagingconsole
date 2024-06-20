import { Component, OnInit } from '@angular/core';
import { ICompanies } from '../Interface/companiesInterface';
import { AppsComponent } from '../apps/apps';
import { Router } from '@angular/router'

@Component({
    selector: 'app-leftpanel-selector',
    templateUrl: 'leftPanel.html',
    styleUrls: ['./leftPanel.css']
})
export class LeftPanelComponent implements OnInit{
    companies : Array<string> = ['Add Company'];
    company : string = '';
    compan : string = '';
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
    retrievedObject : Array<ICompanies>;
    selectedCompany : string;
    companyObjToPass : ICompanies;

    constructor(public router : Router) {

    }
    ngOnInit() {
        /* localStorage.clear(); */
        var a = JSON.parse(localStorage.getItem('MessengerObject'));
        this.retrievedObject = a;
        console.log(this.retrievedObject);
        var b = JSON.parse(localStorage.getItem('objToDisplay'));
            this.selectedCompany = b.companyName;
    }
    addCompany(value: any) {
        if(this.selectedCompany == 'Add Company'){
            this.openModal('.company-form');
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
