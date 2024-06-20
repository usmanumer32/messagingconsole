import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    userName2 : string = '';
    password2 : string = '';

    constructor(public route: Router) {  }

     clientList = [
        { 
            username : "d@appliedline.com",
            password : "password1"
        },
        {
            username :"u@appliedline.com",
            password : "password2"
        }
    ];

    getInfo(){
        /* var username = document.getElementById("username").value;
        var password = document.getElementById("password").value; */
        console.log(this.clientList[0].username);
       for(let i = 0; i< this.clientList.length; i++ ){
           if(this.userName2 == this.clientList[i].username && this.password2 == this.clientList[i].password){
               console.log(this.userName2 + " is logged in");
               this.login();
               return;
           }
       }
       console.log("Incorrect Password");
    }
    
    login() {
        this.route.navigate(['/apps']);
    }

}
