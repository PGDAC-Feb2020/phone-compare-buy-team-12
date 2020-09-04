import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redone',
  templateUrl: './redone.component.html',
  styleUrls: ['./redone.component.css']
})
export class RedoneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
  
    sessionStorage.removeItem('sid')
    this.router.navigate(['login'])
  };


}
