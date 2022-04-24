import React from "react";
import { MenuItem, Select } from "@mui/material";

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

function CountryPicker({ countries }: { countries: string[] }) {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      // value={age}
      label="Zoom level"
      // onChange={handleChange}
    >
      {countries.map((country) => (
        <MenuItem> {getFlagEmoji(country)} EN </MenuItem>
      ))}
    </Select>
  );
}

export default CountryPicker;
