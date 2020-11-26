import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable, Observer} from "rxjs";
import {Person} from "../../../../models/person";

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.sass'],
  providers: [Person]

})


export class ContactosComponent implements OnInit {

  validateForm: FormGroup;

  submitForm(value: { name: string; lastName: string; email:  string; comment: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    this.persona=value;
   localStorage.setItem("Contacto",JSON.stringify(this.persona));
    sessionStorage.setItem("Contacto",JSON.stringify(value));
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }


  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  lastNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  constructor(private fb: FormBuilder, private persona:Person) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required], [this.userNameAsyncValidator]],
      lastName: ['', [Validators.required],[this.lastNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }



}
