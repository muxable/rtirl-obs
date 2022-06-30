import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {
  FontManager,
  FONT_FAMILY_DEFAULT,
  OPTIONS_DEFAULTS,
} from "@samuelmeuli/font-manager";
import React from "react";

function getFontId(fontFamily) {
  return fontFamily.replace(/\s+/g, "-").toLowerCase();
}

/**
 * Based on the no longer mantained https://github.com/samuelmeuli/font-picker-react
 */
export default class FontPicker extends React.PureComponent {
  fontManager;

  static defaultProps = {
    activeFontFamily: FONT_FAMILY_DEFAULT,
    onChange: () => {},
    pickerId: OPTIONS_DEFAULTS.pickerId,
    families: OPTIONS_DEFAULTS.families,
    categories: OPTIONS_DEFAULTS.categories,
    scripts: OPTIONS_DEFAULTS.scripts,
    variants: OPTIONS_DEFAULTS.variants,
    filter: OPTIONS_DEFAULTS.filter,
    limit: OPTIONS_DEFAULTS.limit,
    sort: "popularity",
  };

  state = {
    loadingStatus: "loading",
  };

  constructor(props) {
    super(props);

    const {
      apiKey,
      activeFontFamily,
      pickerId,
      families,
      categories,
      scripts,
      variants,
      filter,
      limit,
      sort,
      onChange,
    } = this.props;

    const options = {
      pickerId,
      families,
      categories,
      scripts,
      variants,
      filter,
      limit,
      sort,
    };

    this.fontManager = new FontManager(
      apiKey,
      activeFontFamily,
      options,
      onChange
    );
  }

  componentDidMount = () => {
    this.fontManager
      .init()
      .then(() => {
        this.setState({
          loadingStatus: "finished",
        });
      })
      .catch((err) => {
        this.setState({
          loadingStatus: "error",
        });
      });
  };

  componentDidUpdate = (prevProps) => {
    const { activeFontFamily, onChange } = this.props;

    if (activeFontFamily !== prevProps.activeFontFamily) {
      this.setActiveFontFamily(activeFontFamily);
    }

    if (onChange !== prevProps.onChange) {
      this.fontManager.setOnChange(onChange);
    }
  };

  onSelection = (e) => {
    const target = e.target;
    const activeFontFamily = target.value;
    if (!activeFontFamily) {
      throw Error(`Missing font family in clicked font button`);
    }
    this.setActiveFontFamily(activeFontFamily);
  };

  setActiveFontFamily = (activeFontFamily) => {
    this.fontManager.setActiveFont(activeFontFamily);
  };

  generateFontList = (fonts) => {
    const { activeFontFamily } = this.props;
    const { loadingStatus } = this.state;

    if (loadingStatus !== "finished") {
      return <div />;
    }

    const fontList = fonts.map((font) => {
      const isActive = font.family === activeFontFamily;
      const fontId = getFontId(font.family);
      return (
        <MenuItem
          id={`font-button-${fontId}${this.fontManager.selectorSuffix}`}
          className={`font-button ${isActive ? "active-font" : ""}`}
          key={fontId}
          value={font.family}
        >
          {font.family}
        </MenuItem>
      );
    });

    return fontList;
  };

  render = () => {
    const { activeFontFamily } = this.props;
    const { loadingStatus } = this.state;

    const fonts = Array.from(this.fontManager.getFonts().values());
    fonts.sort((font1, font2) => font1.family.localeCompare(font2.family));

    return (
      <FormControl color="text" variant="standard">
        <InputLabel id="select-language-label"> Font Family </InputLabel>
        <Select
          disableUnderline
          label="Font Family"
          value={loadingStatus === "finished" ? activeFontFamily : ""}
          onChange={(e) => this.onSelection(e)}
          disabled={loadingStatus !== "finished"}
          MenuProps={{
            style: {
              maxHeight: "65%",
            },
          }}
        >
          {loadingStatus === "finished" && this.generateFontList(fonts)}
        </Select>
        {loadingStatus === "error" && (
          <FormHelperText>An error ocurred loading the fonts.</FormHelperText>
        )}
      </FormControl>
    );
  };
}
