import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onesam',
  templateUrl: './onesam.component.html',
  styleUrls: ['./onesam.component.css']
})
export class OnesamComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
  
    sessionStorage.removeItem('sid')
    this.router.navigate(['login'])
  };

}
