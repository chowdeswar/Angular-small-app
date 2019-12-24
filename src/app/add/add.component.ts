import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
addForm: FormGroup;
index: any;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute) {
    this.addForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });

    this.route.params.subscribe(params => {
      this.index = params['id'];
      console.log(this.index)
			// check if ID exists in route & call update or add methods accordingly
			// if (this.index && this.index !== null && this.index !== undefined) {
			// 	this.getStudentDetails(this.index);
			// } else {
			// 	this.createForm(null);
			// }
		});
   }

  ngOnInit() {
  }

  doAdd() {
    console.log(this.addForm.value);
  }

}
