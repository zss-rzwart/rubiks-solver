import { Component } from '@angular/core';
import { AlgorithmView } from '../notation/algorithm-view';

@Component({
  imports: [AlgorithmView],
  template: `
    <h1>Beginner method: 2x2</h1>
    <p>The 2x2 is a 3x3 with no centres and no edges, so it uses the same ideas.</p>

    <h2>Step 1: First layer</h2>
    <p>Build one face of one colour and make the side colours match.</p>

    <h2>Step 2: Orient the last layer (yellow on top)</h2>
    <p>Hold a yellow-up case with one yellow top corner at front-left and run:</p>
    <app-algorithm name="Sune" moves="R U R' U R U2 R'" />
    <app-algorithm name="Antisune" moves="R U2 R' U' R U' R'" />

    <h2>Step 3: Permute the last layer</h2>
    <p>Turn U until two corners next to each other match ("headlights") on the back and run:</p>
    <app-algorithm name="Corner swap" moves="R U R' U' R' F R2 U' R' U' R U R' F'" />
    <p>If there are no headlights, run it once from any angle and look again.</p>
  `,
})
export class Beginner2x2 {}
