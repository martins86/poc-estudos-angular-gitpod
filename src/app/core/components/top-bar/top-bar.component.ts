import { Component } from '@angular/core';

import { RegistryIconsService } from './../../../shared/services/registry-icons/registry-icons.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  constructor(protected iconRegistryService: RegistryIconsService) {
    this.registeringIcons();
  }

  private registeringIcons(): void {
    const iconsNames: string[] = [
      'settings',
      'help_outline',
      'person',
      'manage_accounts',
      'exit_to_app',
    ];
    this.iconRegistryService.registryIcons(iconsNames);
  }
}
