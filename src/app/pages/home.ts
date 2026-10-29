import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  template: `
    <h1>Learn to solve the Rubik's Cube</h1>
    <p>
      Step-by-step guides for the 3x3 and 2x2 cube. Recurring move sequences are named and
      colour-coded, so you learn a few small building blocks instead of memorising long lists.
    </p>
    <ol>
      <li><a routerLink="/notation">Notation &amp; building blocks</a> – start here.</li>
      <li><a routerLink="/beginner-3x3">Beginner 3x3</a></li>
      <li><a routerLink="/beginner-2x2">Beginner 2x2</a></li>
      <li><a routerLink="/intermediate">Intermediate</a> (coming soon)</li>
      <li><a routerLink="/advanced">Advanced</a> (coming soon)</li>
    </ol>
  `,
})
export class Home {}
