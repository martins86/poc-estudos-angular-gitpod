import { Component } from '@angular/core';

import { RegistryIconsService } from 'src/app/shared/services/registry-icons/registry-icons.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
})
export class LeftBarComponent {
  constructor(protected iconRegistryService: RegistryIconsService) {
    this.registeringIcons();
  }

  private registeringIcons(): void {
    const iconsNames: string[] = [
      'account_circle',
      'home',
      'login',
      'manage_accounts',
      'logout',
    ];
    this.iconRegistryService.registryIcons(iconsNames);
  }
}
