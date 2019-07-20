import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
  userName: new FormControl('',[Validators.required,Validators.minLength(4)]),
  passWord : new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  constructor() { }

  ngOnInit() {
  }
  handleLogin(){
    console.log(this.formGroup.getRawValue())
  }
}
