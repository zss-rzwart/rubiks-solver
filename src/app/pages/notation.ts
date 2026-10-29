import { Component } from '@angular/core';
import { AlgorithmView } from '../notation/algorithm-view';
import { SUB_ALGORITHMS } from '../notation/algorithm';

@Component({
  imports: [AlgorithmView],
  template: `
    <h1>Notation</h1>
    <p>Hold the cube with one face towards you. Each letter is a clockwise quarter turn of that face, as seen when looking at it.</p>
    <table>
      <thead><tr><th>Move</th><th>Face</th></tr></thead>
      <tbody>
        <tr><td><code>R</code></td><td>Right</td></tr>
        <tr><td><code>L</code></td><td>Left</td></tr>
        <tr><td><code>U</code></td><td>Up (top)</td></tr>
        <tr><td><code>D</code></td><td>Down (bottom)</td></tr>
        <tr><td><code>F</code></td><td>Front</td></tr>
        <tr><td><code>B</code></td><td>Back</td></tr>
      </tbody>
    </table>
    <ul>
      <li><code>R'</code> (prime, "R prime"): turn counter-clockwise.</li>
      <li><code>R2</code>: turn twice (a half turn, direction does not matter).</li>
      <li>Brackets like <code>(R U R' U')</code> only group moves; they are performed in order, left to right.</li>
    </ul>

    <h2>Named, colour-coded building blocks</h2>
    <p>Long algorithms are mostly made of small recurring sequences. We name and colour them wherever they appear.</p>
    <app-algorithm name="Algorithm F" moves="F (R U R' U') F'" />
    <p>
      In Algorithm F the middle part is the <strong>Sexy Move</strong>. Learn it once and you
      recognise it everywhere.
    </p>

    <h3>Legend</h3>
    @for (sub of subs; track sub.id) {
      <app-algorithm [name]="sub.name" [moves]="sub.moves" />
      <p>{{ sub.description }}</p>
    }
  `,
})
export class Notation {
  protected readonly subs = SUB_ALGORITHMS;
}
