import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './tabs/tabs.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import {EscritoService} from '../services/escrito.service';


const routes: Routes = [
  { path: '', redirectTo: '/editor', pathMatch: 'full' },
  { path: 'editor', component: EditorComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'expediente', component: ExpedienteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    BuscarClienteComponent,
    TabsComponent,
    ExpedienteComponent,
    ClienteComponent,
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
  providers: [EscritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
