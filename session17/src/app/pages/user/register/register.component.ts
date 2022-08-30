import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    // name: new FormControl(value:"marwa", disabled:true),
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl("", [
      Validators.required
    ]),
    age: new FormControl("", [
      Validators.required,
      Validators.min(20),
      Validators.max(65)
    ]),
    gender: new FormControl("", [
      Validators.required
    ]),
  })

  constructor() { }

  get name(){
    return this.registerForm.get("name")
  }
  get email(){
    return this.registerForm.get("email")
  }
  get password(){
    return this.registerForm.get("password")
  }
  get age(){
    return this.registerForm.get("age")
  }
  get gender(){
    return this.registerForm.get("gender")
  }

  ngOnInit(): void {
  }

  handleRegister(){
    if(this.registerForm.valid)
      console.log(this.registerForm.value)
  }
}
