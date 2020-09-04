import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-realsam',
  templateUrl: './realsam.component.html',
  styleUrls: ['./realsam.component.css']
})
export class RealsamComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  logout() {
  
    sessionStorage.removeItem('sid')
    this.router.navigate(['login'])
  };

}
