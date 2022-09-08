import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Users } from 'src/app/_models/users.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Users = {
    username: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  authoriseTeachers(data: any): void {
    this.userService.loginTeachers(data).subscribe(
      (result: any)=>{
        console.log(result);
        if(result.token) {
          window.localStorage.setItem('token', result.token);
          this.router.navigate(["/notes"])
          Swal.fire({
            title: 'Hello Teacher',
            text: 'Welcome to Your Notebook.',
            imageUrl: '/assets/img/opened_notebook.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        } else {
          Swal.fire({
            icon: "error",
            title: "Please try adding your User Info again"
          })
        }
      }
    )
    console.log(data);
  }

}
