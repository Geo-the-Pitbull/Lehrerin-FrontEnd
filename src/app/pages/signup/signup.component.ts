import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/_services/user.service';
import {Users} from 'src/app/_models/users.model';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({selector: 'app-signup', templateUrl: './signup.component.html', styleUrls: ['./signup.component.css']})
export class SignupComponent implements OnInit {

    users : Users = {
        name: '',
        email: '',
        phone: '',
        password: ''
    };

    constructor(private userService : UserService, private router : Router) {}

    ngOnInit(): void {}

    signupTeachers(data : any): void {
        this.userService.registerTeachers(data).subscribe((data : any) => {
            console.log(data);
            this.router.navigate(["/home"]);
        });
    }
}
