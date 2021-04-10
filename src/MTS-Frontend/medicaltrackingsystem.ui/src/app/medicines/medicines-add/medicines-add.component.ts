import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Medicines } from '../medicines';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'pm-medicines-add',
  templateUrl: './medicines-add.component.html',
  styleUrls: ['./medicines-add.component.css']
})
export class MedicinesAddComponent implements OnInit {
  addMedicine: FormGroup;
  pageTitle = 'Add Medicine';
  errorMessage = '';
    medicine: Medicines ;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service:MedicinesService,
    private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addMedicine = this.FormBuilder.group({
      brand: [null],
      expiryDate: [null],
      fullNameOfMedicine : [null],
      notes : [null],
      price : [null],
      quantity : [null],
    });
   

  }
  getMed(id: string): void {
    this.service.getMedicineById(id).subscribe({
      next: data => this.medicine = data,
      error: err => this.errorMessage = err
    });
  }

  submit() {
    let data = {
      ...this.addMedicine.value
    }

    console.log(data,"data");

    this.service.addMedicine(data).subscribe({
      error: err => this.errorMessage = err
    });
    
  }
  quantityCheck(q:number)
  {
    if(q<10)
    {
      return 'yellow';
    }
  }

  dateCheck(d:Date)
  {
    var todaysDate = new Date();
console.log(todaysDate.toDateString());
console.log(new Date(d) );
let compareDate= new Date(d);
    if(compareDate < todaysDate) {
    return 'red';

}
  }
}