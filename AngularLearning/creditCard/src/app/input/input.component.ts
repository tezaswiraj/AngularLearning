import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() Control
  @Input() label
  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    const { dirty, touched, errors } = this.Control
    return dirty && touched && errors
  }

}
