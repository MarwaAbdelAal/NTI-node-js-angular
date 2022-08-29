import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData = {
    name:"",
    age:0,
    email:"",
    password:"",
    gender:""
  }

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }

  handleRegister(register:NgForm){
    if(register.valid && this.userData.age > 20 && this.userData.age < 65){
      // console.log(this.userData)
      this._data.register(this.userData)
      .subscribe(
        data => {console.log(data), console.log("Done")},
        e => {console.log(e), console.log("Error!")}
      )
    }
  }

}
