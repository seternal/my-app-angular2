import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'toastr-ng2';
import { AppComponent } from './app.component';
import { LateralmenuComponent } from './lateralmenu/lateralmenu.component';
import { ChronometreComponent } from './chronometre/chronometre.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralmenuComponent,
    ChronometreComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(), // ToastrModule added TEST
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,ChronometreComponent]
})
export class AppModule { }
