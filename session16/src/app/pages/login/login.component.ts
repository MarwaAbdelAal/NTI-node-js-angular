import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userData = {
    email:"",
    password:""
  }

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }

  handleLogin(login:NgForm){
    if(login.valid){
      this._data.login(this.userData)
      .subscribe(
        data => {console.log(data), console.log("Done")},
        e => {console.log(e), console.log("Error!")}
      )
    }
  }

}
