export interface SubAlgorithm {
  id: string;
  name: string;
  moves: string;
  color: string;
  description: string;
}

export interface Segment {
  text: string;
  sub?: SubAlgorithm;
}

export const SUB_ALGORITHMS: SubAlgorithm[] = [
  {
    id: 'sexy',
    name: 'Sexy Move',
    moves: "R U R' U'",
    color: '#e67e22',
    description: 'The most common 4-move trigger. Six repeats bring the cube back to where it started.',
  },
  {
    id: 'sledge',
    name: 'Sledgehammer',
    moves: "R' F R F'",
    color: '#8e44ad',
    description: 'The mirror-like partner of the Sexy Move, used for corners and permutations.',
  },
  {
    id: 'sune',
    name: 'Sune',
    moves: "R U R' U R U2 R'",
    color: '#16a085',
    description: 'A 7-move fish-shaped orientation trigger.',
  },
  {
    id: 'antisune',
    name: 'Antisune',
    moves: "R U2 R' U' R U' R'",
    color: '#2980b9',
    description: 'The inverse of Sune.',
  },
  {
    id: 'insert-right',
    name: 'Right Insert',
    moves: "U R U' R'",
    color: '#27ae60',
    description: 'Moves a top-layer piece into the right slot.',
  },
  {
    id: 'insert-left',
    name: 'Left Insert',
    moves: "U' L' U L",
    color: '#c0392b',
    description: 'Moves a top-layer piece into the left slot.',
  },
  {
    id: 'insert-front',
    name: 'Front Insert',
    moves: "U F U' F'",
    color: '#d4ac0d',
    description: 'Inserts a piece into the front-right slot (mirror of the Left Insert).',
  },
  {
    id: 'insert-front-mirror',
    name: 'Front Insert (mirror)',
    moves: "U' F' U F",
    color: '#7f8c8d',
    description: 'Inserts a piece into the front-left slot.',
  },
  {
    id: 'twist',
    name: 'Corner Twist',
    moves: "R' D' R D",
    color: '#e84393',
    description: 'Twists a corner in the bottom layer. Repeat it until the corner is solved.',
  },
];

const MOVE_PATTERN = /^[RLUDFBMESrludfbxyz](?:2'?|')?$/;

/** Splits a notation string into individual moves, accepting typographic apostrophes. */
export function parseMoves(input: string): string[] {
  const normalized = input.replace(/[’‘`′]/g, "'").replace(/[()]/g, ' ');
  const tokens = normalized.split(/\s+/).filter((t) => t.length > 0);
  for (const t of tokens) {
    if (!MOVE_PATTERN.test(t)) {
      throw new Error(`Invalid move: ${t}`);
    }
  }
  return tokens.map((t) => t.replace("2'", '2'));
}

/** Splits an algorithm into plain moves and recognised named sub-algorithms (longest match first). */
export function segmentAlgorithm(input: string): Segment[] {
  const moves = parseMoves(input);
  const subs = SUB_ALGORITHMS.map((sub) => ({ sub, moves: parseMoves(sub.moves) })).sort(
    (a, b) => b.moves.length - a.moves.length,
  );
  const segments: Segment[] = [];
  let plain: string[] = [];
  const flush = () => {
    if (plain.length) {
      segments.push({ text: plain.join(' ') });
      plain = [];
    }
  };
  let i = 0;
  while (i < moves.length) {
    const hit = subs.find(({ moves: m }) => m.every((mv, k) => moves[i + k] === mv));
    if (hit) {
      flush();
      segments.push({ text: hit.moves.join(' '), sub: hit.sub });
      i += hit.moves.length;
    } else {
      plain.push(moves[i]);
      i++;
    }
  }
  flush();
  return segments;
}

export function usedSubAlgorithms(segments: Segment[]): SubAlgorithm[] {
  const seen = new Map<string, SubAlgorithm>();
  for (const s of segments) {
    if (s.sub) seen.set(s.sub.id, s.sub);
  }
  return [...seen.values()];
}
