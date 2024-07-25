
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { FormsModule } from '@angular/forms';
import { PracticeComponent } from './practice/practice.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ServicingService } from './servicing.service';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    PracticeComponent,
    LifecycleComponent,
    HomeComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
