import test from 'node:test';
import assert from 'node:assert/strict';
import { allQuizLevels, getQuizSession, calculatePoints, QUIZ_CONFIG } from './quizData';

test('allQuizLevels contains exactly 10 levels', () => {
  assert.equal(allQuizLevels.length, 10);
  for (let i = 1; i <= 10; i++) {
    const lvl = allQuizLevels.find(l => l.level === i);
    assert.ok(lvl, `Level ${i} must exist`);
    assert.ok(lvl.soalanPool.length >= 5, `Level ${i} must have at least 5 questions`);
    assert.ok(lvl.namaMs.length > 0);
    assert.ok(lvl.namaEn.length > 0);
  }
});

test('Every quiz question has 4 options A, B, C, D and valid answer index', () => {
  allQuizLevels.forEach(lvl => {
    lvl.soalanPool.forEach(q => {
      assert.equal(q.pilihan.length, 4, `Question ${q.id} must have 4 options`);
      assert.equal(q.pilihan[0].label, 'A');
      assert.equal(q.pilihan[1].label, 'B');
      assert.equal(q.pilihan[2].label, 'C');
      assert.equal(q.pilihan[3].label, 'D');
      assert.ok(q.jawapanBetulIndex >= 0 && q.jawapanBetulIndex <= 3, `Question ${q.id} answer index must be 0-3`);
      assert.ok(q.soalanMs.length > 0);
      assert.ok(q.soalanEn.length > 0);
      assert.ok(q.peneranganMs.length > 0);
    });
  });
});

test('getQuizSession returns 5 distinct random questions per level', () => {
  const session = getQuizSession(1, 5);
  assert.equal(session.length, 5);
  const ids = new Set(session.map(q => q.id));
  assert.equal(ids.size, 5, 'Questions in session must be distinct');
});

test('calculatePoints handles regular and 2x fast bonus', () => {
  // Correct answer within 8s -> 2x bonus (4 points)
  const fast = calculatePoints(true, 5);
  assert.equal(fast.points, 4);
  assert.equal(fast.isFastBonus, true);

  // Correct answer after 8s -> normal 2 points
  const normal = calculatePoints(true, 12);
  assert.equal(normal.points, 2);
  assert.equal(normal.isFastBonus, false);

  // Wrong answer -> 0 points
  const wrong = calculatePoints(false, 3);
  assert.equal(wrong.points, 0);
  assert.equal(wrong.isFastBonus, false);
});
