import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { Iapps} from '../Interface/interface';
import { ICompanies } from '../Interface/companiesInterface';
import { CompanyService } from '../../providers/companyProvider';

@Component({
    selector: 'app-apps-selector',
    templateUrl: 'apps.html',
    styleUrls: ['./apps.css']
})

export class AppsComponent implements OnInit{
    name : string = '';
    apikey : string = '';
    itemIndex : number;
    apps : Array<Iapps> = [
        {name : 'CargoCanal', apiKey : 'ASJJKSD7787DSDSHH6'},
        {name : 'CrystalCheque' , apiKey : 'DDKAS7823HNSAMDA3'}
    ];
    companies : Array<string> = ['AAAIT AppliedLine','Add Company'];
    messengerObj : Array<ICompanies> = [
        { companyName : '',
          apps : [ 
              { name : '',  apikey : ''}
          ]
        }
    ];
    incompingCompanyObj : ICompanies;
    CompanyObjToDispaly : ICompanies = {
        companyName : '',
        apps : [
            { name : '', apikey : ''} 
        ]
    }
    haveApps : boolean = false;

    constructor(public route: Router, public _CompanyService : CompanyService) { 
        
    }
    ngOnInit() {
        /* localStorage.clear(); */
        if(!localStorage.getItem('MessengerObject')) {
            localStorage.setItem('MessengerObject',JSON.stringify(this.messengerObj));
        }
        else {
            var a = JSON.parse(localStorage.getItem('MessengerObject'));
        }
        if(!localStorage.getItem('objToDisplay')) {
            localStorage.setItem('objToDisplay',JSON.stringify(this.CompanyObjToDispaly));
        }
        else {
            var b = JSON.parse(localStorage.getItem('objToDisplay'));
            this.CompanyObjToDispaly = b;
            console.log(this.CompanyObjToDispaly.companyName);
            if(this.CompanyObjToDispaly.apps[0].name == ''){
                this.haveApps = false;
            }
            else {
                this.haveApps = true;
            }
        }
    }
    
    Name = 'Cargocanal';
    ApiKey = 'ASJJKSD7787DSDSHH6';

    openModal(formName) {
        if(this.CompanyObjToDispaly.companyName == '') {
            swal("please add a company first");
        }
        else {
           const x = document.querySelectorAll('.company-modal');
            const y = document.querySelectorAll(formName);
            for (let i = 0; i < x.length; i++) {
                x[i].classList.add('show');
            }
            for (let j = 0; j < y.length; j++) {
                y[j].classList.add('show');
            }
            if(formName=='.application-form'){
                this.apiKeyGenerate();
            } 
        }
    }
    closeModal() {
        this.name = '';
        this.apikey = '';
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
        for (let k = 0; k < z.length; k++) {
            z[k].classList.remove('show');
        }
        for (let x = 0; x < a.length; x++) {
            a[x].classList.remove('show');
        }
    }
    openAlert(i) {
        swal('Are you sure you want to permanently delete this app?', {
            buttons: ['No', 'Yes']
        }).then((result)=> {
            if(result){
                this.deleteItem(i);
            }
          })
    }
    openEmmon() {
        this.route.navigate(['/analytics']);
    }

    apiKeyGenerate() {
        let length : number =12;
        let n : number;
        let charSet : string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let newApiKey : string = '';
        for(let i=0,  n = charSet.length; i< length; ++i){
            newApiKey = newApiKey + charSet.charAt(Math.floor(Math.random()*n));
        }
        this.apikey = newApiKey;        
    }

    addApplication() {
        if(this.name == '' || this.apikey == '') {
            swal("please Enter name of application");
        }
        else {
            let newObj : ICompanies = {
                companyName : '',
                apps : [
                    { name : '', apikey : ''}
                ]
            }
            let counter = 0;
            var b = JSON.parse(localStorage.getItem('objToDisplay'));
            this.CompanyObjToDispaly = b;
            console.log(this.CompanyObjToDispaly.companyName);
            if(this.CompanyObjToDispaly.apps[0].name == '') {
                newObj.companyName = this.CompanyObjToDispaly.companyName;
                newObj.apps[0].name = this.name;
                newObj.apps[0].apikey = this.apikey;
                localStorage.setItem('objToDisplay',JSON.stringify(newObj));
                var x = JSON.parse(localStorage.getItem('objToDisplay'));
                this.CompanyObjToDispaly = x;
                var y = JSON.parse(localStorage.getItem('MessengerObject'));
                for(let i = 0; i < y.length; i++){
                    if(this.CompanyObjToDispaly.companyName == y[i].companyName){
                        counter = 1;
                        for(let j = 0; j < this.CompanyObjToDispaly.apps.length; j++){
                            if(y[i].apps[0].name == ''){
                                y[i].apps[0].name = this.CompanyObjToDispaly.apps[j].name;
                                y[i].apps[0].apikey = this.CompanyObjToDispaly.apps[j].apikey;
                            }
                            else{
                                y[i].apps.push(this.CompanyObjToDispaly.apps[j]);
                            }
                            this.CompanyObjToDispaly = y[i];
                            localStorage.setItem('MessengerObject',JSON.stringify(y));
                            var ls = JSON.parse(localStorage.getItem('MessengerObject'));
                            console.log(ls);
                        }
                    }
                } 
                if(counter == 0) {
                    y.push(this.CompanyObjToDispaly);
                    localStorage.setItem('MessengerObject',JSON.stringify(y));
                }
                this.haveApps = true;
                this.name = '';
                this.apikey = '';
                this.closeModal();
            }
            else {
                //add another app
                let counter2 = 0;
                let newApp : any = { name : '', apikey : ''}
                newApp.name = this.name;
                newApp.apikey = this.apikey;
                this.CompanyObjToDispaly.apps.push(newApp);
                localStorage.setItem('objToDisplay',JSON.stringify(this.CompanyObjToDispaly));
                this.CompanyObjToDispaly = JSON.parse(localStorage.getItem('objToDisplay'));
                console.log(this.CompanyObjToDispaly);
                 var y = JSON.parse(localStorage.getItem('MessengerObject'));
                 console.log(y);
                for(let i = 0; i < y.length; i++){
                    if(this.CompanyObjToDispaly.companyName == y[i].companyName) {
                        counter2 = 1;
                        y[i].apps = this.CompanyObjToDispaly.apps; 
                        localStorage.setItem('MessengerObject',JSON.stringify(y));
                    }
                }
                this.haveApps = true;
                this.name = '';
                this.apikey = '';
                this.closeModal();
            }
        }
       
    }
    editApplication() {
        this.CompanyObjToDispaly.apps[this.itemIndex].name = this.name;
        this.CompanyObjToDispaly.apps[this.itemIndex].apikey = this.apikey;
        console.log(this.CompanyObjToDispaly.apps[this.itemIndex]);
        localStorage.setItem('objToDisplay',JSON.stringify(this.CompanyObjToDispaly));
        this.CompanyObjToDispaly = JSON.parse(localStorage.getItem('objToDisplay'));
        var y = JSON.parse(localStorage.getItem('MessengerObject'));
        console.log(this.CompanyObjToDispaly.companyName);
        console.log(y);
        console.log("index : " + this.itemIndex);
        for(let i = 0; i < y.length; i++){
            if(y[i].companyName == this.CompanyObjToDispaly.companyName) {
                y[i].apps[this.itemIndex] = this.CompanyObjToDispaly.apps[this.itemIndex];
                localStorage.setItem('MessengerObject',JSON.stringify(y));
            }
        }
        this.closeModal();
    }
    openEditModal(formName,app,index) {
        this.itemIndex = index;
        const x = document.querySelectorAll('.company-modal');
        const y = document.querySelectorAll(formName);
        for (let i = 0; i < x.length; i++) {
            x[i].classList.add('show');
        }
        for (let j = 0; j < y.length; j++) {
            y[j].classList.add('show');
        }
        if(formName=='.edit-form'){
            this.name = app.name;
            this.apikey = app.apikey;
        }
    }
    copyApiKey() {
        var copyText = document.getElementById("copy-apikey") as HTMLInputElement;
        copyText.select();
        document.execCommand("copy");
        swal("copied");
    }
    deleteItem(index) {
        if(this.CompanyObjToDispaly.apps.length > 1) {
            this.CompanyObjToDispaly.apps.splice(index,1);
            console.log(this.CompanyObjToDispaly.apps.length);
            localStorage.setItem('objToDisplay',JSON.stringify(this.CompanyObjToDispaly));
            this.CompanyObjToDispaly = JSON.parse(localStorage.getItem('objToDisplay'));
            var y = JSON.parse(localStorage.getItem('MessengerObject'));
            for(let i = 0; i < y.length; i++){
                if(y[i].companyName == this.CompanyObjToDispaly.companyName) {
                    y[i] = this.CompanyObjToDispaly;
                    localStorage.setItem('MessengerObject',JSON.stringify(y));
                }
            }
        }
        else {
            this.CompanyObjToDispaly.apps[0].name = '';
            this.CompanyObjToDispaly.apps[0].apikey = '';
            localStorage.setItem('objToDisplay',JSON.stringify(this.CompanyObjToDispaly));
            this.CompanyObjToDispaly = JSON.parse(localStorage.getItem('objToDisplay'));
            var y = JSON.parse(localStorage.getItem('MessengerObject'));
            for(let i = 0; i < y.length; i++){
                if(y[i].companyName == this.CompanyObjToDispaly.companyName) {
                    y[i] = this.CompanyObjToDispaly;
                    localStorage.setItem('MessengerObject',JSON.stringify(y));
                }
            }
            this.haveApps = false;
        }
    }
}
