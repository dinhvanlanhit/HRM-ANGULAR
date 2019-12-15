
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from './../../services';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title = 'Login';
  public FormLogin: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;

  constructor(
      private _FormBuilder: FormBuilder,
      private _AuthService: AuthService,
      private route: ActivatedRoute,
      private router: Router,
     
  ){

    // redirect to home if already logged in
    if (this._AuthService.currentUserValue) {
      this.router.navigate(['/']);
  }
  }
  
  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.FormLogin = this._FormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.FormLogin.controls; }

  onSubmitLogin(){
    this.submitted = true;
    if (this.FormLogin.invalid) {
      return;
    }
    this.loading = true;
    this._AuthService.login(this.f.username.value,this.f.password.value)
    .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    // this.alertService.error(error);
                    this.loading = false;
                });
    
  }
 

}
