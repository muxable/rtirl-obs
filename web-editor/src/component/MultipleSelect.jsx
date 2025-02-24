import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
} from "@mui/material";
import * as React from "react";

function MultipleSelect({ selected, setSelected, inputLabel, fullSet }) {
  const handleSelectChange = (event) => {
    setSelected([...event.target.value]);
  };

  const rest = fullSet.filter((item) => !selected.includes(item));

  return (
    <Box sx={{ paddingTop: "15px", paddingLeft: "12px" }}>
      <FormControl fullWidth>
        <InputLabel> {inputLabel} </InputLabel>
        <Select
          multiple
          value={selected}
          onChange={handleSelectChange}
          input={<Input />}
          disableUnderline
          renderValue={(select) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  onMouseDown={(e) => e.stopPropagation()}
                  key={value}
                  label={value}
                  onDelete={() => {
                    setSelected(selected.filter((item) => item !== value));
                  }}
                />
              ))}
            </Box>
          )}
        >
          {rest.map((element) => (
            <MenuItem key={element} value={element}>
              {element}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default MultipleSelect;
