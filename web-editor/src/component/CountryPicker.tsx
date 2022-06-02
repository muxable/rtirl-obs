import React from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

// https://github.com/lipis/flag-icons/issues/510
const languageToCountry: { [key: string]: string } = {
  aa: "dj",
  af: "za",
  ak: "gh",
  sq: "al",
  am: "et",
  ar: "aa",
  hy: "am",
  ay: "wh",
  az: "az",
  bm: "ml",
  be: "by",
  bn: "bd",
  bi: "vu",
  bs: "ba",
  bg: "bg",
  my: "mm",
  ca: "ad",
  zh: "cn",
  hr: "hr",
  cs: "cz",
  da: "dk",
  dv: "mv",
  nl: "nl",
  dz: "bt",
  en: "gb",
  et: "ee",
  ee: "ew",
  fj: "fj",
  fil: "ph",
  fi: "fi",
  fr: "fr",
  ff: "ff",
  gaa: "gh",
  ka: "ge",
  de: "de",
  el: "gr",
  gn: "gx",
  gu: "in",
  ht: "ht",
  ha: "ha",
  he: "il",
  hi: "in",
  ho: "pg",
  hu: "hu",
  is: "is",
  ig: "ng",
  id: "id",
  ga: "ie",
  it: "it",
  ja: "jp",
  kr: "ne",
  kk: "kz",
  km: "kh",
  kmb: "ao",
  rw: "rw",
  kg: "cg",
  ko: "kr",
  kj: "ao",
  ku: "iq",
  ky: "kg",
  lo: "la",
  la: "va",
  lv: "lv",
  ln: "cg",
  lt: "lt",
  lu: "cd",
  lb: "lu",
  mk: "mk",
  mg: "mg",
  ms: "my",
  mt: "mt",
  mi: "nz",
  mh: "mh",
  mn: "mn",
  mos: "bf",
  ne: "np",
  nd: "zw",
  nso: "za",
  no: "no",
  nb: "no",
  nn: "no",
  ny: "mw",
  pap: "aw",
  ps: "af",
  fa: "ir",
  pl: "pl",
  pt: "pt",
  pa: "in",
  qu: "wh",
  ro: "ro",
  rm: "ch",
  rn: "bi",
  ru: "ru",
  sg: "cf",
  sr: "rs",
  srr: "sn",
  sn: "zw",
  si: "lk",
  sk: "sk",
  sl: "si",
  so: "so",
  snk: "sn",
  nr: "za",
  st: "ls",
  es: "es",
  sw: "sw",
  ss: "sz",
  sv: "se",
  tl: "ph",
  tg: "tj",
  ta: "lk",
  te: "in",
  tet: "tl",
  th: "th",
  ti: "er",
  tpi: "pg",
  ts: "za",
  tn: "bw",
  tr: "tr",
  tk: "tm",
  uk: "ua",
  umb: "ao",
  ur: "pk",
  uz: "uz",
  ve: "za",
  vi: "vn",
  cy: "gb",
  wo: "sn",
  xh: "za",
  yo: "yo",
  zu: "za",
};

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

function CountryPicker({
  countries,
  lang,
  setLang,
}: {
  countries: string[];
  lang: string;
  setLang: any;
  mapboxMapRef: any;
}) {
  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLang = event.target.value as string;
    setLang(newLang);
  };

  return (
    <Select
      fullWidth
      labelId="select-language-label-id"
      id="select-language-picker"
      value={lang}
      label="Language-picker"
      onChange={handleLanguageChange}
      MenuProps={{
        style: {
          maxHeight: "65%",
        },
      }}
    >
      {countries.map((country) => (
        <MenuItem value={country} key={country}>
          {getFlagEmoji(languageToCountry[country.toLowerCase()] ?? "")}{" "}
          {country}
        </MenuItem>
      ))}
    </Select>
  );
}

export default CountryPicker;
