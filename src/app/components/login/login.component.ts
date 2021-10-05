import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token: any;
  profileForm: FormGroup;
  login: any = false;
  constructor(private apiService:ApiServiceService, private router: Router,private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['',Validators.required],  
      phone: ['',Validators.required]
   })
  }

  ngOnInit() {
    this.isAuthorised();
  }

  isAuthorised(){
    this.token = this.apiService.getToken();
    console.log(this.token)
    if(this.token){
      this.router.navigate(['/customer']);
    }
  }

  onSubmit(){
    this.login =! this.login;
    this.apiService.setToken(this.login);
    this.isAuthorised();
  }

}
