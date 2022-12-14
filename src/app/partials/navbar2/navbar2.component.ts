import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})

export class Navbar2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logoutUsers(): void {

    if(localStorage.getItem('token')) {

      localStorage.removeItem('token')

    }
    
    this.router.navigate(["/login"])

    Swal.fire({
      title: "Teacher Successfully Logged Out",
      icon: "success",
    })
  }

}
