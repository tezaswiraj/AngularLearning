import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateControl } from '../date-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    cExpiry: new DateControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}/)]),
    cSecurityCode: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4)])
    
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.cardForm.value)
  }
  onReset() {
    this.cardForm.reset()
  }
}
