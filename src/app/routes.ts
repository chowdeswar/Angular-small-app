import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { childRoutes } from './main-page/main-page.component';
import { AuthService } from './auth.service';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        children: childRoutes,
        canActivate: [AuthService]
    },
    { path: 'login', component: LoginComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class Routing {

}