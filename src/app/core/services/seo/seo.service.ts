import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    protected title: Title,
    protected meta: Meta,
    private router: Router
  ) {}

  generateTags(tags: any): void {
    this.title.setTitle(tags.title);
    this.meta.addTags([
      {
        name: 'og:url',
        content: `https://martins86.github.io/poc-estudos-angular-gitpod${this.router.url}`,
      },
      { name: 'og:title', content: tags.title },
      { name: 'og:description', content: tags.description },
      { name: 'og:image', content: tags.image },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@tmf_martins86' },
    ]);
  }
}
