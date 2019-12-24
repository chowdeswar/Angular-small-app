import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  index: number;
  responseData: any;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe(params => {
			this.index = params['id'];
			if (this.index && this.index != null && this.index !== undefined) {
				this.fetchData(this.index);
			}
		});
   }

  ngOnInit() {
  }

  fetchData(index: number) {

    const getData = this.userService.fetchData(index);
    if(getData) {
      this.responseData = getData.data;
      console.log(this.responseData)
    }

  }

}
