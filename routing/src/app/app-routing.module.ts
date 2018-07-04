import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

//содержит массив, поскольку у нас несколько маршрутов
const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // http://localhost:4200
    { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent } //dynamic path, передаем id и name
    ] }, //http://localhost:4200/users, добавляем название класса компонента
    { path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent }, 
    { path: ':id/edit', component: EditServerComponent } 
    ] },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' } //все ошибочные(несуществующие) маршруты, обяз-но  должно быть на последнем месте
];

@NgModule({
    //declarations добавлять не надо, задекларировано в app.module
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]    
})
export class AppRoutingModule {
    
}

