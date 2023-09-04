import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from './helper.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticatedResponse } from './_interfaces/authenticated-response.model';
import { LoginModel } from './_interfaces/login.model';
import { User } from './models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  invalidLogin: boolean;
  // credentials: LoginModel = {UserID:'', Password:'', UserType:''};
  
  constructor(private http: HttpClient, private router:Router,private helperServices:HelperService)
  {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('UserId')!));
        this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
}

  ngOnInit(): void {
    
  }

  login(username: string, password: string) {
    // return this.http.post<any>("https://localhost:5001/api/users/login", { username, password})
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            console.log("user",user);
            return user;
        }));
}

loginUser(username: string, password: string) {
  // return this.http.post<any>("https://localhost:5001/api/users/login", { username, password})
  return this.http.post<any>(`${environment.apiUrl}/users/user`, { username, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('User', JSON.stringify(user));
          this.userSubject.next(user);
          console.log("User Values ",user);
          return user;
      }));
}

  authenticate = ( userID: string, password: string, userType: string) => {
    const credentials = { userID, password, userType };
      this.http.post<AuthenticatedResponse>("https://localhost:5001/api/users/login", credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          localStorage.setItem('authToken', token);
          console.log("Token: ", token)
          if(userType == "Admin"){
          this.helperServices.helperMode="Admin"
          this.router.navigate(['/details']);
          }
          else if(userType == "Member"){
          this.helperServices.helperMode="Member"
          this.router.navigate(['/details']);
          } 
          
          this.invalidLogin = false; 
          this.router.navigate(["/"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    
  }

  // authenticate(userID: string, password: string, userType: string,) {
  //   const body = { userID, password, userType };
  //   return this.http.post('https://localhost:5001/api/users/login',body).subscribe(
  //     (response : any) => {
  //       const token = response.token;
  //       console.log("Token: ", token)

  //       // store the token in localStorage
  //       localStorage.setItem('authToken', token);
  //       if(userType == "Admin"){
  //         this.helperServices.helperMode="ADMIN"
  //         this.router.navigate(['/details']);
  //       }
  //       else if(userType == "Member"){
  //         this.helperServices.helperMode="Member"
  //         this.router.navigate(['/details']);
  //       }
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  logout() {
    // Remove the token from localStorage
    localStorage.removeItem('UserId');
        this.userSubject.next(null);

    this.helperServices.helperMode=""
    localStorage.removeItem('authToken');

    // Redirect to the login page (or any other appropriate page)
    this.router.navigate(['/login']); // Replace 'login' with your actual login route
  }
  
 
  
}