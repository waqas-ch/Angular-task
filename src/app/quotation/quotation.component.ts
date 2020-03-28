import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  isOptional = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      name1: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      name2: ['', Validators.required]
    });
  }
 

}
