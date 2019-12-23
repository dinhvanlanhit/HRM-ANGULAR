
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
  public errorAlert = false;

  constructor(
      // tslint:disable-next-line: variable-name
      private _FormBuilder: FormBuilder,
      // tslint:disable-next-line: variable-name
      private _AuthService: AuthService,
      private route: ActivatedRoute,
      private router: Router,

  ) {

    // redirect to home if already logged in
    if (this._AuthService.currentUserValue) {
      this.router.navigate(['/auth/login']);
  }
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.FormLogin = this._FormBuilder.group({
      username: ['073', Validators.required],
      password: ['12345', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'dashboard';
  }
  get f() { return this.FormLogin.controls; }

  // tslint:disable-next-line: one-line
  onSubmitLogin(){
    this.submitted = true;
    if (this.FormLogin.invalid) {
      return;
    }
    this.loading = true;
    this._AuthService.login(this.f.username.value, this.f.password.value)
    .pipe(first())
            .subscribe(
                data => {
                    // this.router.navigate([this.returnUrl]);
                    this.submitted = false;
                    this.loading = false;
                    window.location.href =this.returnUrl;
                    // alert(this.returnUrl);
                },
                error => {
                    // this.alertService.error(error);
                    this.submitted = false;
                    this.loading = false;
                    this.errorAlert = true;
                    setTimeout(() => {
                      this.errorAlert = false;
                    }, 5000);
                });

  }


}
