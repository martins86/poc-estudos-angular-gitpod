import { Component } from '@angular/core';

import { RegistryIconsService } from './../../shared/services/registry-icons/registry-icons.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(protected iconRegistryService: RegistryIconsService) {
    this.registeringIcons();
  }

  private registeringIcons(): void {
    const iconsNames: string[] = ['alternate_email', 'lock'];
    this.iconRegistryService.registryIcons(iconsNames);
  }
}
