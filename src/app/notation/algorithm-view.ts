import { Component, computed, input } from '@angular/core';
import { segmentAlgorithm, usedSubAlgorithms } from './algorithm';

@Component({
  selector: 'app-algorithm',
  template: `
    <div class="alg">
      <div class="alg-title">{{ name() }}</div>
      <div class="alg-moves">
        @for (seg of segments(); track $index) {
          <span
            class="seg"
            [class.named]="seg.sub"
            [style.--c]="seg.sub?.color"
            [title]="seg.sub?.name ?? ''"
          >
            @if (seg.sub) {
              <span class="seg-name">{{ seg.sub.name }}</span>
            }
            <span class="seg-moves">{{ seg.text }}</span>
          </span>
        }
      </div>
    </div>
  `,
  styles: `
    .alg { margin: 1rem 0; }
    .alg-title { font-weight: 600; margin-bottom: 0.4rem; }
    .alg-moves { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: flex-end; }
    .seg { display: inline-flex; flex-direction: column; padding: 0.3rem 0.6rem; font-family: monospace; font-size: 1.2rem; }
    .seg.named { background: color-mix(in srgb, var(--c) 18%, white); border-bottom: 4px solid var(--c); border-radius: 6px; }
    .seg-name { font-family: system-ui, sans-serif; font-size: 0.7rem; font-weight: 700; color: var(--c); text-transform: uppercase; }
  `,
})
export class AlgorithmView {
  readonly name = input('');
  readonly moves = input.required<string>();
  readonly segments = computed(() => segmentAlgorithm(this.moves()));
  readonly used = computed(() => usedSubAlgorithms(this.segments()));
}
