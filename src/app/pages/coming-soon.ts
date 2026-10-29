import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <h1>{{ title }}</h1>
    <p>This section is planned for a later phase. {{ plan }}</p>
  `,
})
export class ComingSoon {
  private readonly data = inject(ActivatedRoute).snapshot.data;
  protected readonly title = this.data['title'] as string;
  protected readonly plan = this.data['plan'] as string;
}
