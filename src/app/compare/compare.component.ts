import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
  
    sessionStorage.removeItem('Ak')
    this.router.navigate(['login'])
  };
}
