import { Component, EventEmitter, Output } from '@angular/core';

import { RegistryIconsService } from 'src/app/shared/services/registry-icons/registry-icons.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
})
export class LeftBarComponent {
  @Output()
  closeLeftBarForMe: EventEmitter<string> = new EventEmitter();

  authValid = false;

  constructor(protected iconRegistryService: RegistryIconsService) {
    this.registeringIcons();
  }

  closeLeftBar(): void {
    this.clickMenuCheck();
    this.closeLeftBarForMe.emit('closeLeftBar');
  }

  private clickMenuCheck(): void {
    document.getElementById('menu-checked').click();
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
