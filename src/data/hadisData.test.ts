import test from 'node:test';
import assert from 'node:assert/strict';
import { pangkalanHadis, searchHadis } from './hadisData';

test('pangkalanHadis contains exactly 42 hadiths from KPM module', () => {
  assert.equal(pangkalanHadis.length, 42);
  assert.equal(pangkalanHadis[0].no, 1);
  assert.equal(pangkalanHadis[41].no, 42);
});

test('Hadis 1 has expected properties', () => {
  const h1 = pangkalanHadis[0];
  assert.equal(h1.tajuk, 'Keutamaan Niat');
  assert.ok(h1.matanArab.includes('إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ'));
  assert.ok(h1.pengajaran.length > 0);
  assert.ok(h1.nilai.includes('Ikhlas'));
});

test('Hadis 42 has expected properties from KPM module', () => {
  const h42 = pangkalanHadis[41];
  assert.equal(h42.no, 42);
  assert.equal(h42.tajuk, 'Mengharapkan Pengampunan dan Rahmat Allah SWT');
  assert.ok(h42.matanArab.includes('يَا ابْنَ آدَمَ'));
  assert.ok(h42.pengajaran.length > 0);
});

test('searchHadis handles number queries correctly', () => {
  const res1 = searchHadis('Hadis 1', pangkalanHadis);
  assert.equal(res1.length, 1);
  assert.equal(res1[0].no, 1);

  const res15 = searchHadis('15', pangkalanHadis);
  assert.equal(res15.length, 1);
  assert.equal(res15[0].no, 15);

  const res42 = searchHadis('hadis 42', pangkalanHadis);
  assert.equal(res42.length, 1);
  assert.equal(res42[0].no, 42);
});

test('searchHadis handles keywords correctly', () => {
  const resNiat = searchHadis('niat', pangkalanHadis);
  assert.ok(resNiat.length >= 1);
  assert.ok(resNiat.some(h => h.no === 1));

  const resMalu = searchHadis('malu', pangkalanHadis);
  assert.ok(resMalu.some(h => h.no === 20));

  const resEmpty = searchHadis('', pangkalanHadis);
  assert.equal(resEmpty.length, 42);
});
