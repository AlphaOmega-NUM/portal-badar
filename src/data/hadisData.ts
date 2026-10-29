import { hadisPart1 } from './hadisPart1';
import { hadisPart2 } from './hadisPart2';
import { hadisPart3 } from './hadisPart3';
import { hadisPart4 } from './hadisPart4';

export interface HadisItem {
  no: number;
  tajuk: string;
  rawi: string;
  matanArab: string;
  maksud: string;
  huraian: string;
  pengajaran: string[];
  nilai: string;
  aktiviti: string;
}

export const pangkalanHadis: HadisItem[] = [
  ...hadisPart1,
  ...hadisPart2,
  ...hadisPart3,
  ...hadisPart4
];

export function searchHadis(query: string, list: HadisItem[] = pangkalanHadis): HadisItem[] {
  const raw = query.trim();
  const q = raw.toLowerCase();
  if (!q) return list;

  const corakNombor = q.match(/^(?:hadis|hadith|h|no\.?|nombor)?\s*(\d+)$/i);
  if (corakNombor) {
    const nomborDicari = parseInt(corakNombor[1], 10);
    return list.filter(h => h.no === nomborDicari);
  }

  const kataBersih = q.replace(/^(hadis|hadith)\s*/i, '');
  return list.filter(h =>
    h.tajuk.toLowerCase().includes(kataBersih) ||
    h.tajuk.toLowerCase().includes(q) ||
    h.maksud.toLowerCase().includes(kataBersih) ||
    h.nilai.toLowerCase().includes(kataBersih) ||
    h.rawi.toLowerCase().includes(kataBersih) ||
    (h.huraian && h.huraian.toLowerCase().includes(kataBersih))
  );
}
