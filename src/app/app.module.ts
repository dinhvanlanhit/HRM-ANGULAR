import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule,AlertModule } from 'ngx-bootstrap';



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
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
