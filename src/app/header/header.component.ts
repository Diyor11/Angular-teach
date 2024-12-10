import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header-component',
  template: `
    <ul>
      <li>
        <a routerLink="/home" routerLinkActive="active">home</a>
      </li>
      <li>
        <a routerLink="/first" routerLinkActive="active">first</a>
      </li>
      <li>
        <a routerLink="/child" routerLinkActive="active">child</a>
      </li>
    </ul>
    <button (click)="goFirst()">go first</button>
    <button (click)="goBack()">go back</button>
  `,
  styles: `a{margin-right: 15px; color: blue; cursor: pointer}`,
  imports: [RouterLink, RouterLinkActive],
})
export default class HeaderComponent {
  constructor(private router: Router, private location: Location) {}
  goFirst() {
    this.router.navigate(['/child'], { queryParams: { id: 'testId%209999' } });
  }

  goBack() {
    this.router.navigate([history.back()]);
  }
}
