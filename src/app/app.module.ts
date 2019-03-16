import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { FormsModule } from '@angular/forms';
import {environment} from '../environments/environment.prod';
import {HttpClientModule} from '@angular/common/http';
import { TabsComponent } from './tabs/tabs.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'expediente', component: ExpedienteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    LandingComponent,
    BuscarClienteComponent,
    CrearClienteComponent,
    TabsComponent,
    ExpedienteComponent,
    ClienteComponent
  ],
  imports: [
    FormsModule,
    SelectDropDownModule,
    NgbModule,
    RouterModule.forRoot(routes),
    QuillModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: 'EscritoService', useClass: environment.escritoService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
