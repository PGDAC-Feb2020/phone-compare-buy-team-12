import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redsam',
  templateUrl: './redsam.component.html',
  styleUrls: ['./redsam.component.css']
})
export class RedsamComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
  
    sessionStorage.removeItem('sid')
    this.router.navigate(['login'])
  };

}
