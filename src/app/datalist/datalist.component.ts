import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css'],
  providers: [UserService]
})
export class DatalistComponent implements OnInit {
  responseData: any = [];
  filterData: any;
  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList() {
    const data = this.UserService.getAllDataList();
    this.responseData = data.data;
    console.log(this.responseData);
  }

}
