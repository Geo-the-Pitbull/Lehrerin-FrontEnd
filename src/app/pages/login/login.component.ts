import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Users } from 'src/app/_models/users.model';
import { Router } from '@angular/router';

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
        } 
      }
    )
    console.log(data);
  }

}
