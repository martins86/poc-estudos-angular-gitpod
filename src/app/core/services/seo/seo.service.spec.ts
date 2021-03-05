import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { SeoService } from './seo.service';

describe('SeoService', () => {
  let serviceTitle: Title;
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: Title, useClass: Title }],
    });
    service = TestBed.inject(SeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Testing generateTags', () => {
    const elementMock = {
      title: 'Title test',
      description: 'Description test',
      image: 'http://url-photo.test.com',
    };

    it('Should be set title', () => {
      // Arrange
      serviceTitle = TestBed.inject(Title);

      // Act
      service.generateTags(elementMock);

      // Assert
      expect(serviceTitle.getTitle()).toBe(elementMock.title);
    });
  });
});
