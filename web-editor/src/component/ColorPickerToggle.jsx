import React from "react";
import { SketchPicker } from "react-color";

class ColorPickerToggle extends React.Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.props.setColor(color.rgb);
  };

  render() {
    return (
      <>
        <div
          style={{
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={this.handleClick}
        >
          <div
            style={{
              width: "94px",
              height: "100%",
              borderRadius: "1px",
              borderColor: "primary.main",
              boxShadow:
                "rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, #545454 0px 0px 4px inset",
              background: this.props.color,
            }}
          />
        </div>
        {this.state.displayColorPicker ? (
          <div style={{ position: "absolute", zIndex: "2" }}>
            <div
              style={{
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              }}
              onClick={this.handleClose}
            />
            <SketchPicker
              color={this.props.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </>
    );
  }
}

export default ColorPickerToggle;
