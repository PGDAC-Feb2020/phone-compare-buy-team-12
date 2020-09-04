import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public fbFormGroup = this.fb.group({

    email :['',Validators.required],
    password: ['',Validators.required]
  })

  constructor(private fb: FormBuilder,private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  async delete(){
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3300/delete";
    const result : any=await this.http.post(url, data).toPromise();
    console.log(result);
    this.fbFormGroup.reset();

    this.router.navigate(['login'])
  
  

  }

}
