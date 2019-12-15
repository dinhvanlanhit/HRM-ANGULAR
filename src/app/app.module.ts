import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    TimecardDailyComponent
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
