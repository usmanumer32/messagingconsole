import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { ICompanies } from '../pages/Interface/companiesInterface';

@Injectable()
export class CompanyService {
    url = './assets/companyData.json';

    constructor(public http : Http) {

    }
    getCompanyData() : Observable<ICompanies[]> {
        return this.http.get(this.url)
        .map((res : Response)=> <ICompanies[]>res.json());
    }
    addCompanyData(data) : Observable<ICompanies>{
        return this.http.post(this.url,data)
        .map((res : Response)=> <ICompanies>res.json());
    }
}