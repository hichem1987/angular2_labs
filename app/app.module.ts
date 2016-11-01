/**
 * Created by HP on 23/10/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { ClientFormComponent } from './client.form.component';
@NgModule({
    imports:      [ BrowserModule,FormsModule ],
    declarations: [ AppComponent,ClientFormComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }