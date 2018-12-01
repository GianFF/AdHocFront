import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'editor', component: EditorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    LandingComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    QuillModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
