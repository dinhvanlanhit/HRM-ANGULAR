import { Component, OnInit ,Input ,Output,EventEmitter } from '@angular/core';
import { ProfileService } from '../../../services';
import { UsersInfos} from './../../../models';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { environment } from '../../../../environments/environment';

declare var $: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  full_name:string;
  selectedFile:File =null;
  imageUrl: string | ArrayBuffer = environment.IMG_URL_AVATAR;
  @BlockUI() blockUI: NgBlockUI;
  public FormUpdateProfile: FormGroup;
  constructor(
    private _FormBuilder: FormBuilder,
    private _ProfileService:ProfileService,
    private _localeService: BsLocaleService
  ){}
  ngOnInit() {
      this.GetProFile();
      this.createForm();
  }
  private GetProFile(){
    this.blockUI.start('Vui lòng chờ ... ');
    this._ProfileService.getProFile().pipe(first()).subscribe(data => {
      this.blockUI.stop();
      this.full_name = data['full_name'];
      this.imageUrl = data['avatar']==null?this.imageUrl: environment.AIP+'/'+data['avatar'];
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
  SET_INFO() {
    this._ProfileService.getProFile().pipe(first()).subscribe(INFO => {
      localStorage.removeItem('INFO');
      localStorage.setItem('INFO',JSON.stringify(INFO));
    });
  }
  get f() { return this.FormUpdateProfile.controls; }
  onSubmitFormUpdateProfile(){
     this.blockUI.start('Cập nhập ..');
     this._ProfileService.postUpdateUserInfo(this.FormUpdateProfile.value).pipe(first()).subscribe(data =>{
          $('#user-info').text(this.full_name = this.FormUpdateProfile.value.full_name);
          this.blockUI.stop();
          this.SET_INFO();
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
  onChange(event) {
    this.selectedFile = <File>event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = event => {
        this._ProfileService.postChangeAvatar(this.selectedFile).pipe(first()).subscribe(data=>{
            this.imageUrl = reader.result;
            $("#nav_user_poto").attr('src',reader.result);
            this.SET_INFO();
        });
      };
    }
  }
}
