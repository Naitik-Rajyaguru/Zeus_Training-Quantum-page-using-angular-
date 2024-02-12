import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ButtonVisibilityService } from 'src/app/button-visibility.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  
  testForm: any;
  constructor(private router: Router, private fb: FormBuilder, private formStorageService: ButtonVisibilityService){  }
  variable='password'
  passwordvisible(){
    if(this.variable =="password"){
      this.variable = 'text';
      console.log("change visi");
    }
    else{
      this.variable = 'password';
    }
  }
  
  ngOnInit(){
    this.testForm = this.fb.group({
      // Define your form controls here
    });

    // Populate form with stored data on component initialization
    const storedFormData = this.formStorageService.getFormData();
    if (storedFormData) {
      this.testForm.patchValue(storedFormData);
    }
  }


  formData:any={};
  onSubmit(){
    console.log("hiii");
    
    console.log(this.formData);
    
  }
  
  goTo(){
    this.router.navigate(['/step1'])
    console.log("hiiiee");
    
    console.log(this.formData);
  }
}
