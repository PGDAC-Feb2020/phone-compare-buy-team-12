import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  

  public fbFormGroup = this.fb.group({

    name :['',Validators.required],
    email :['',Validators.required],
    address: ['',Validators.required],
    contact :['',Validators.required],
    
    
  })

  constructor(private fb: FormBuilder,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }

  async buyprocess(){

    const data = this.fbFormGroup.value;

    console.log(data);

    const url ="http://localhost:3300/buy"

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
