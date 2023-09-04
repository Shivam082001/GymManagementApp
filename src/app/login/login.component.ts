import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../authentication.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    loading = false;
    submitted = false;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.userValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from query parameters or default to home page
                    if(this.f.username.value=="admin"){
                        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/adminDashboard';
                        this.router.navigateByUrl(returnUrl);
                    }
                    else{
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/userDashboard';
                    
                    this.router.navigateByUrl(returnUrl);
                }
                },
                error: error => {
                    this.error = error;
                    this.loading = false;
                }
            });
    }
}

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthenticationService } from '../authentication.service';
// import { LoginModel } from '../_interfaces/login.model';
// import { NgForm } from '@angular/forms';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   invalidLogin: boolean;
//   credentials: LoginModel = {UserID:'', Password:'', UserType:''};
//     constructor(private authService: AuthenticationService) {}
//   ngOnInit(): void {
//     // throw new Error('Method not implemented.');
//     this.authService.logout();
//   }

//     Authentication = ( form: NgForm) => {
//       // const userID = (document.getElementById('userId') as HTMLInputElement).value;
//       // const password = (document.getElementById('password') as HTMLInputElement).value;
//       // const userType = (document.getElementById('userType') as HTMLSelectElement).value;

//       if(form.valid)
//       {
//         this.authService.authenticate(this.credentials.UserID, this.credentials.Password, this.credentials.UserType);
//       }
//       else
//       {
//         alert("Please Fill Credentials!")
//       }
//     }  
// }

// import { Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { AuthenticatedResponse } from './../_interfaces/authenticated-response.model';
// import { LoginModel } from './../_interfaces/login.model';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
  // invalidLogin: boolean;
  // credentials: LoginModel = {username:'', password:''};

//   constructor(private router: Router, private http: HttpClient) { }

  // ngOnInit(): void {
    
  // }

  // login = ( form: NgForm) => {
  //   if (form.valid) {
  //     this.http.post<AuthenticatedResponse>("https://localhost:5001/api/auth/login", this.credentials, {
  //       headers: new HttpHeaders({ "Content-Type": "application/json"})
  //     })
  //     .subscribe({
  //       next: (response: AuthenticatedResponse) => {
  //         const token = response.token;
  //         localStorage.setItem("jwt", token); 
  //         this.invalidLogin = false; 
  //         this.router.navigate(["/"]);
  //       },
  //       error: (err: HttpErrorResponse) => this.invalidLogin = true
  //     })
  //   }
  // }
// }

