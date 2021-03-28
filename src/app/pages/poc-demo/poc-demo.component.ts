import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { RegistryIconsService } from './../../shared/services/registry-icons/registry-icons.service';

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

  constructor(
    protected iconRegistryService: RegistryIconsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registeringIcons();
  }

  onSubmit(): void {
    console.warn('CNPJ => ', this.formCnpj.value);
  }

  private registeringIcons(): void {
    const iconsNames: string[] = ['home'];
    this.iconRegistryService.registryIcons(iconsNames);
  }
}
