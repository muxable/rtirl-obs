import React from "react";
import { MenuItem, Stack, Select } from "@mui/material";

const { DateTime } = require("luxon");

export const ClockSetting = ({ clockSetting, setClockSetting, setText }) => {
  const standadloneToken = [
    "S",
    "SSS",
    "u",
    "uu",
    "uuu",
    "s",
    "ss",
    "m",
    "mm",
    "h",
    "hh",
    "H",
    "HH",
    "Z",
    "ZZ",
    "ZZZ",
    "ZZZZ",
    "ZZZZZ",
    "z",
    "a",
    "d",
    "dd",
    "c",
    "ccc",
    "cccc",
    "ccccc",
    "L",
    "LL",
    "LLL",
    "LLLL",
    "LLLLL",
    "y",
    "yy",
    "yyyy",
    "G",
    "GG",
    "GGGGG",
    "kk",
    "kkkk",
    "W",
    "WW",
    "o",
    "ooo",
    "q",
    "qq",
    "D",
    "DD",
    "DDD",
    "DDDD",
    "t",
    "tt",
    "ttt",
    "tttt",
    "T",
    "TT",
    "TTT",
    "TTTT",
    "f",
    "ff",
    "fff",
    "ffff",
    "F",
    "FF",
    "FFF",
    "FFFF",
    "X",
    "x",
  ];

  const { format, lang } = clockSetting;

  const time = DateTime.now().setLocale(lang);

  return (
    <Stack>
      <Select
        label="Format"
        value={time.toFormat(format)}
        onChange={(e) => {
          setText(e.target.value);
        }}
      >
        {standadloneToken.map((token, index) => (
          <MenuItem
            value={time.toFormat(token)}
            onClick={(e) => {
              setClockSetting({
                ...clockSetting,
                format: token,
              });
            }}
          >
            {time.toFormat(token)}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};
