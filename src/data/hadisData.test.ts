import test from 'node:test';
import assert from 'node:assert/strict';
import { pangkalanHadis, searchHadis } from './hadisData';

test('pangkalanHadis contains exactly 40 hadiths', () => {
  assert.equal(pangkalanHadis.length, 40);
  assert.equal(pangkalanHadis[0].no, 1);
  assert.equal(pangkalanHadis[39].no, 40);
});

test('Hadis 1 has expected properties', () => {
  const h1 = pangkalanHadis[0];
  assert.equal(h1.tajuk, 'Keutamaan Niat');
  assert.ok(h1.matanArab.includes('إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ'));
  assert.ok(h1.pengajaran.length > 0);
  assert.ok(h1.nilai.includes('Ikhlas'));
});

test('searchHadis handles number queries correctly', () => {
  const res1 = searchHadis('Hadis 1', pangkalanHadis);
  assert.equal(res1.length, 1);
  assert.equal(res1[0].no, 1);

  const res15 = searchHadis('15', pangkalanHadis);
  assert.equal(res15.length, 1);
  assert.equal(res15[0].no, 15);

  const res40 = searchHadis('hadis 40', pangkalanHadis);
  assert.equal(res40.length, 1);
  assert.equal(res40[0].no, 40);
});

test('searchHadis handles keywords correctly', () => {
  const resNiat = searchHadis('niat', pangkalanHadis);
  assert.ok(resNiat.length >= 1);
  assert.ok(resNiat.some(h => h.no === 1));

  const resMalu = searchHadis('malu', pangkalanHadis);
  assert.ok(resMalu.some(h => h.no === 20));

  const resEmpty = searchHadis('', pangkalanHadis);
  assert.equal(resEmpty.length, 40);
});
