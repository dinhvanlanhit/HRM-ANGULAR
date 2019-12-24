import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services';
import { UsersInfos} from './../../../models';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from "ng-block-ui";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  public FormUpdateProfile: FormGroup;
  constructor(
    private _FormBuilder: FormBuilder,
    private _ProfileService:ProfileService,
    private _localeService: BsLocaleService
    ){

    }
  ngOnInit() {
      this.GetProFile();
      this.createForm();
  }
  
  private GetProFile(){
    this.blockUI.start('Vui lòng chờ ... ');
    this._ProfileService.getProFile().pipe(first()).subscribe(data => {
      this.blockUI.stop();
      this.FormUpdateProfile.patchValue(data);
    },error => {
      this.blockUI.stop();
    });
  }
  private createForm() {
    this.FormUpdateProfile = this._FormBuilder.group({
      full_name: ['', Validators.required],
      english_name: ['', Validators.required],
      nickname: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      sex: ['', Validators.required],
      working_day: ['', Validators.required],
      introduce : ['', Validators.required],
      nation : ['', Validators.required],
      postal_code : ['', Validators.required],
      address_1 : ['', Validators.required],
      address_2 : ['', Validators.required],
      address_3 : ['', Validators.required],
      company_name : ['', Validators.required],
      city_name : ['', Validators.required],
      provincial : ['', Validators.required],
      phone_number : ['', Validators.required],
      internal_number : ['', Validators.required],
      fax : ['', Validators.required],
      mobile_number : ['', Validators.required],
      skin_class : ['', Validators.required],
    });
  }
  get f() { return this.FormUpdateProfile.controls; }
  onSubmitFormUpdateProfile(){
   
    //  console.log(this.FormUpdateProfile);
     this.blockUI.start('Cập Nhập ..');
     this._ProfileService.postUpdateUserInfo(this.FormUpdateProfile.value).pipe(first()).subscribe(data =>{
          // console.log(data);
          this.blockUI.stop();
     },error => {
        this.blockUI.stop();
    });
  }
  changeSkin(){
    document.body.className=this.f.skin_class.value;
  }
  reloadPage(){
    this.blockUI.start('Đang tải');
    this._ProfileService.getProFile().pipe(first()).subscribe(data => {
      this.FormUpdateProfile.patchValue(data);
      this.blockUI.stop();
    },error => {
      this.blockUI.stop();
    });
  }
}
