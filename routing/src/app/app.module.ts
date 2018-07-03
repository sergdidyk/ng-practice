import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';

//содержит массив, поскольку у нас несколько маршрутов
const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // http://localhost:4200
  { path: 'users', component: UsersComponent }, //http://localhost:4200/users, добавляем название класса компонента
  { path: 'users/:id/:name', component: UserComponent }, //dynamic path, передаем id и name
  { path: 'servers', component: ServersComponent },
  //добавили новый маршрут, кот. загружает EditServerComponent
  { path: 'servers/:id/edit', component: EditServerComponent } 

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) //обязательно импортировать RouterModule.forRoot() и передавать массив с маршрутами
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
