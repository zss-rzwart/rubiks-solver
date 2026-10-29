import { parseMoves, segmentAlgorithm } from './algorithm';

describe('algorithm notation', () => {
  it('parses moves and normalises apostrophes', () => {
    expect(parseMoves("R U R’ U' F2")).toEqual(['R', 'U', "R'", "U'", 'F2']);
  });

  it('rejects invalid moves', () => {
    expect(() => parseMoves('R Q')).toThrow();
  });

  it('marks the Sexy Move inside the F algorithm', () => {
    const segs = segmentAlgorithm("F (R U R' U') F'");
    expect(segs.map((s) => s.text)).toEqual(['F', "R U R' U'", "F'"]);
    expect(segs[1].sub?.id).toBe('sexy');
    expect(segs[0].sub).toBeUndefined();
  });

  it('prefers longer sub-algorithms such as Sune', () => {
    const segs = segmentAlgorithm("R U R' U R U2 R'");
    expect(segs.length).toBe(1);
    expect(segs[0].sub?.id).toBe('sune');
  });
});
