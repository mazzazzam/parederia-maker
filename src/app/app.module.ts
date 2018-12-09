import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AngularDraggableModule } from 'angular2-draggable';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { QuadroComponent } from './quadro/quadro.component';
import { MenuComponent } from './quadro/menu/menu.component';
import { ThumbComponent } from './quadro/thumb/thumb.component';
import { CoresComponent } from './quadro/cores/cores.component';
import { HttpClientModule } from '@angular/common/http';
import { BottommenuComponent } from './bottommenu/bottommenu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    QuadroComponent,
    MenuComponent,
    ThumbComponent,
    CoresComponent,
    BottommenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularDraggableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
