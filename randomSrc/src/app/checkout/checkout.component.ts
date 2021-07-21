import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;      //give same formGroup name as in the html template
  constructor(private formBuilder:FormBuilder) {      //building the form using formBuilder
    this.checkoutForm = formBuilder.group({   //in the formbuilder we are creating a group of form elements
    email:new FormControl(),                  //these should be same as the form
    quantity:new FormControl(),
    terms:new FormControl()
    })
  }

  postData(){
    console.log(this.checkoutForm)
  }
  ngOnInit(): void {
  }

}
