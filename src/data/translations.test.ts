import test from 'node:test';
import assert from 'node:assert';
import { translations, hadisEnglishData } from './translations';

test('translations contains ms and en dictionaries', () => {
  assert.ok(translations.ms, 'ms dictionary must exist');
  assert.ok(translations.en, 'en dictionary must exist');
  assert.strictEqual(translations.ms.navHome, 'Utama');
  assert.strictEqual(translations.en.navHome, 'Home');
});

test('translations dictionaries have all keys matching', () => {
  const msKeys = Object.keys(translations.ms).sort();
  const enKeys = Object.keys(translations.en).sort();
  assert.deepStrictEqual(msKeys, enKeys, 'Both ms and en must have identical keys');
});

test('hadisEnglishData contains English translations for 42 hadiths', () => {
  assert.strictEqual(Object.keys(hadisEnglishData).length, 42, 'Must have 42 hadiths translated in English');
  for (let i = 1; i <= 42; i++) {
    const item = hadisEnglishData[i];
    assert.ok(item, `Hadis #${i} must have English translation`);
    assert.ok(item.tajukEn.length > 0, `Hadis #${i} must have English title`);
    assert.ok(item.maksudEn.length > 0, `Hadis #${i} must have English meaning`);
  }
});
