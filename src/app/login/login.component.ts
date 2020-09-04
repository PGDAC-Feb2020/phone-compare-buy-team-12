import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public InvalidData= false;

public fbFormGroup = this.fb.group({

  email :['',Validators.required],
  password: ['',Validators.required]

})

  constructor(private fb: FormBuilder,private router:Router, private http:HttpClient) { }

  ngOnInit(): void {}

  // loginProcess(){
  //   const data=this.fbFormGroup.value;
  //   console.log(data);

    //ajax call
    // if(data.email==="ashishkamthe111@gmail.com" && data.password==="ashish"){
    //   sessionStorage.setItem('sid','true');
    //   this.router.navigate(['homepage']);

    // }
    // else{
    //   this.InvalidData= true;
      
    // }

    async loginProcess(){
      const data = this.fbFormGroup.value;
      console.log(data);
      const url = "http://localhost:3300/auth-user";
      const result : any=await this.http.post(url, data).toPromise();
      console.log(result);
    
    if (result.opr)
    
    {
      sessionStorage.setItem('sid','true');
      this.router.navigate(['homepage']);
    }
    else{
      this.InvalidData=true;
      this.fbFormGroup.reset();
    }
    
    }


    
}










