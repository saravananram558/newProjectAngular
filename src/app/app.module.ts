
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { FormsModule } from '@angular/forms';
import { PracticeComponent } from './practice/practice.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ServicingService } from './servicing.service';

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    PracticeComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
