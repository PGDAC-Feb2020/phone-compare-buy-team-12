import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-buy1',
  templateUrl: './buy1.component.html',
  styleUrls: ['./buy1.component.css']
})
export class Buy1Component implements OnInit {
  
  public fbFormGroup = this.fb.group({

    name :['',Validators.required],
    email :['',Validators.required],
    address: ['',Validators.required],
    contact :['',Validators.required],
    //price: ['',Validators.required]
  })
    constructor(private fb: FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  async buy1process(){

    const data = this.fbFormGroup.value;

    console.log(data);

    const url ="http://localhost:3300/buy1"

   const result= await this.http.post(url,data).toPromise();

   console.log(result);

   this.fbFormGroup.reset();
    
    //this.router.navigate(['login']);

  }
  async logout(){
    // const data = this.fbFormGroup.value;
    // console.log(data);
    // const url = "http://localhost:3300/auth-user";
    // const result : any=await this.http.post(url, data).toPromise();
    // console.log(result);
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  
}

}
