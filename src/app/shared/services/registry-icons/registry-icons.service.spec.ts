import { TestBed } from '@angular/core/testing';

import { RegistryIconsService } from './registry-icons.service';

describe('RegistryIconsService', () => {
  let service: RegistryIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistryIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Testing registryIcons', () => {
    it('should be icons successfully registered.', () => {
      // Arrange
      const iconsNames = [
        'settings',
        'help_outline',
        'person',
        'manage_accounts',
        'exit_to_app',
      ];

      // Act
      const registry = service.registryIcons(iconsNames);

      // Assert
      expect(registry).toEqual(iconsNames);
    });
  });
});
