import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import firebase from 'firebase';
// import $ from 'jquery'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit,AfterViewInit {
  @ViewChild('mdl') div: any;
  authstate!: firebase.User | null;
  // declare $:any;
  constructor(private afu:AngularFireAuth, private router:Router, private afs:AngularFirestore) { 
    this.afu.authState.subscribe(auth => {
      this.authstate = auth
    })
  }
  ngAfterViewInit() {
    console.log(this.div.nativeElement)
    this.div.nativeElement.show()
    // throw new Error('Method not implemented.');
  }
  openModel() {
    // $('#myModal').show()
    console.log('model opened')
  }
  signuser(signInform:NgForm) {
    console.log(signInform,signInform.value,signInform.value.terms)
    console.log(typeof(signInform),typeof(signInform.value),typeof(signInform.value.password))
  }
  regForm(regform:NgForm) {
    console.log(regform.value)
  }
  ngOnInit(): void {
    console.log("in signin component")
  }

}
