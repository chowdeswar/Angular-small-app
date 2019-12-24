import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { DatalistComponent } from './../datalist/datalist.component';
import { AddComponent } from '../add/add.component';
import { ViewComponent } from '../view/view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {

    // this.toastr.success('Success', "Logged Out Successfully");
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);

  }

}

export const childRoutes: Routes = [
  { path: '', component: DatalistComponent },
  { path: 'add', component: AddComponent },
  { path: 'view/:id', component: ViewComponent }

]
