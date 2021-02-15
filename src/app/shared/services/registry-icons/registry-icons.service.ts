import { Injectable } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class RegistryIconsService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  public registryIcons(iconsNameRegistry: string[]): string[] {
    iconsNameRegistry.forEach((iconName) => {
      this.matIconRegistry.addSvgIcon(
        iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          './assets/icons/svg/' + iconName + '.svg'
        )
      );
    });
    return iconsNameRegistry;
  }
}
