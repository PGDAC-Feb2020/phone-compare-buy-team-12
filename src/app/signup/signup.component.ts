import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent implements OnInit {


  public fbFormGroup = this.fb.group({
    name :['',Validators.required],
    email :['',Validators.required],
    contact :['',Validators.required],
    password: ['',Validators.required],

    // name: ['', Validators.required,Validators.minLength(3), Validators.maxLength(12)],
    // email: ['',Validators.required,Validators.pattern('[a-zA-Z0-9@]')],
    // password: ['', Validators.required,Validators.minLength(3), Validators.maxLength(12)],
    // contact:['',Validators.required,Validators.minLength(10)]
    
  })
  constructor(private fb: FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  async registerProcess(){

    const data = this.fbFormGroup.value;

    console.log(data);

    const url ="http://localhost:3300/adduser"

   const result= await this.http.post(url,data).toPromise();

   console.log(result);

   this.fbFormGroup.reset();
    
    //this.router.navigate(['login']);

  }
  // formgroup1 = new FormGroup({
  //   'name': new FormControl('',[
  //     Validators.required,Validators.minLength(3), Validators.maxLength(12)]), 
  //     'password': new FormControl('',[
  //     Validators.required, Validators.minLength(5), Validators.maxLength(12),Validators.pattern('[a-zA-Z0-9@]{5,12}')]),
  //   })


  

}

