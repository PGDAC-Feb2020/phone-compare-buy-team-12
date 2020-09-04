import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  

  public fbFormGroup = this.fb.group({

    email :['',Validators.required],
    password: ['',Validators.required]
  })

  constructor(private fb: FormBuilder,private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  async update(){
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3300/update";
    const result : any=await this.http.post(url, data).toPromise();
    console.log(result);
    this.fbFormGroup.reset();

    this.router.navigate(['login'])
  
  

  }

}
