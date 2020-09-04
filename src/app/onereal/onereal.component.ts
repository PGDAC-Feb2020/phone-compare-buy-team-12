import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onereal',
  templateUrl: './onereal.component.html',
  styleUrls: ['./onereal.component.css']
})
export class OnerealComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
  
    sessionStorage.removeItem('sid')
    this.router.navigate(['login'])
  };

}
