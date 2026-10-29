import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AlgorithmView } from '../notation/algorithm-view';

@Component({
  imports: [AlgorithmView, RouterLink],
  template: `
    <h1>Beginner method: 3x3 (layer by layer)</h1>
    <p>Solve the cube one layer at a time. Learn the <a routerLink="/notation">notation</a> first.</p>

    <h2>Step 1: White cross</h2>
    <p>Make a white cross on top with each edge's side colour matching its centre. No algorithm needed – experiment and think.</p>

    <h2>Step 2: White corners</h2>
    <p>Put a white corner above its slot at the front-right, then repeat the Sexy Move until it drops in correctly.</p>
    <app-algorithm name="Corner insert" moves="R U R' U' R U R' U'" />

    <h2>Step 3: Middle layer</h2>
    <p>With white on the bottom, find a top edge without yellow. Match its front colour with the centre, then:</p>
    <app-algorithm name="Edge to the right" moves="U R U' R' U' F' U F" />
    <app-algorithm name="Edge to the left" moves="U' L' U L U F U' F'" />

    <h2>Step 4: Yellow cross</h2>
    <p>Repeat this from a dot, an L-shape or a line until you have a yellow cross (line: hold it horizontally; L: put it at back-left).</p>
    <app-algorithm name="Algorithm F" moves="F (R U R' U') F'" />

    <h2>Step 5: Yellow edges in place</h2>
    <p>Turn U until at least two edges match their centres, then use Sune-style moves to cycle the rest.</p>
    <app-algorithm name="Edge swap" moves="R U R' U R U2 R' U" />

    <h2>Step 6: Position the yellow corners</h2>
    <app-algorithm name="Corner cycle" moves="U R U' L' U R' U' L" />

    <h2>Step 7: Orient the yellow corners</h2>
    <p>Hold the unsolved corner at front-right and repeat until it is yellow-up. Then turn U (only) to the next corner and repeat.</p>
    <app-algorithm name="Corner twist" moves="R' D' R D R' D' R D" />
  `,
})
export class Beginner3x3 {}
