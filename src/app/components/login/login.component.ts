import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import checkFormFields from 'src/app/helper/checkFormFields';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  type: string = "password";

  isText: boolean = false;

  eyeIcon: string = "fa-eye-slash";

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required] //required input values
    })
  }

  //hide and shows the password and changes the icon accordingly
  hideShowPass(){
    
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit(){
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value);
    }
    else
    {
      checkFormFields.checkForm(this.loginForm);
      
    }
  }

}
