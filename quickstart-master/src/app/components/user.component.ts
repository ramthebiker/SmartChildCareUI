import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1> {{address.street}}`,
})
export class UserComponent 
 { 
     name: string;
    address: address;

     constructor(){
         this.name = "RIYA";
         this.address = {
             street: "73",
             city: "chennai",
            pincode: 11234567
         }

     }
    
 }

 interface address{
     street: string;
     city: string;
     pincode: number;
 }
