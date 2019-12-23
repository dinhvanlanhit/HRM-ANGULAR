import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION,PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
//Layout
import { LayoutAdminComponent} from './layouts/admin/admin.component';
import { LayoutAuthComponent} from './layouts/auth/auth.component';
// -------- include ----------
import { HeaderComponent } from './components/includes/header/header.component';
import { SidebarComponent } from './components/includes/sidebar/sidebar.component';
import { FooterComponent } from './components/includes/footer/footer.component';
// Auth pages
import { AuthComponent} from './components/auth/auth.component';
//Admin pages
import { DashboardComponent } from './components/pages/dashboard/dashboard.component'
import { TimecardComponent } from './components/pages/timecard/timecard.component';
import { TimecardDailyComponent } from './components/pages/timecard-daily/timecard-daily.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  // bgsOpacity: 0.5,
  // bgsPosition: POSITION.bottomCenter,
  // bgsSize: 60,
  // bgsType: SPINNER.rectangleBounce,
  fgsColor: 'red',
  // fgsPosition: POSITION.centerCenter,
  // fgsSize: 60,
  // fgsType: SPINNER.chasingDots,
  // logoUrl: 'assets/angular.png',
  pbColor: 'red',
  // pbDirection: PB_DIRECTION.leftToRight,
  // pbThickness: 5,
  // text: 'Welcome to ngx-ui-loader',
  // textColor: '#FFFFFF',
  // textPosition: POSITION.centerCenter
};
 

@NgModule({
  declarations: [
    AppComponent,
    // Layouts
    LayoutAuthComponent,
    LayoutAdminComponent,
    // Include --------
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    // Auth pages
    AuthComponent,
    // Admin pages
    DashboardComponent,
    TimecardComponent,
    TimecardDailyComponent,
    ProfileComponent
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule, // import this module for showing loader automatically when navigating between app routes
    NgxUiLoaderHttpModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
