import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-poc-demo',
  templateUrl: './poc-demo.component.html',
  styleUrls: ['./poc-demo.component.scss'],
})
export class PocDemoComponent implements OnInit {
  formCnpj = this.fb.group({
    cnpj: new FormControl('', [
      Validators.required,
      Validators.maxLength(17),
      Validators.minLength(17),
    ]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.warn('CNPJ => ', this.formCnpj.value);
  }
}
