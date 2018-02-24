import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationService } from './services/authentication.service';
import { QuizService } from './services/quiz.service';
import { FileUploadService } from './services/fileupload/fileupload.service';
import { KeenDataService } from './services/keen-data/keen-data.service';
import { TokenInterceptor } from './services/token.interceptor';

import { AppComponent } from './app.component';
import { HistoryBannerComponent } from './history-banner/history-banner.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { KeenDataComponent } from './keen-data/keen-data.component';


@NgModule({
  declarations: [
    AppComponent,
    HistoryBannerComponent,
    HomeComponent,
    FaqComponent,
    ContactComponent,
    DashboardComponent,
    FileUploadComponent,
    KeenDataComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    AuthenticationService,
    QuizService,
    FileUploadService,
    KeenDataService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
