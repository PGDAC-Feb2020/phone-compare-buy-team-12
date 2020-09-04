import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redreal',
  templateUrl: './redreal.component.html',
  styleUrls: ['./redreal.component.css']
})
export class RedrealComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
  
    sessionStorage.removeItem('sid')
    this.router.navigate(['login'])
  };

}
