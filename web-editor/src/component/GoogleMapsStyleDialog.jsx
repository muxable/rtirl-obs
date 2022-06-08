import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  List,
  ListItem,
} from "@mui/material";
import * as React from "react";

export const GoogleMapsStyleDialog = ({ open, setOpen }) => {
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle onClose={() => setOpen(false)}>
          About Google Maps Styles
        </DialogTitle>
        <DialogContent>
          In order to preview and generate this overlay, you need to provide a
          style string, you can generate one in these sites:
          <br />
          <List>
            <ListItem>
              <Link href="https://mapstyle.withgoogle.com/" target="_blank">
                Style with Google
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://snazzymaps.com/" target="_blank">
                Style with Snazzymaps
              </Link>
            </ListItem>
          </List>
          You can use [] to use the default style. <br />
          {"Please review the "}
          <Link
            href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#required-attribution"
            target="_blank"
          >
            Google attribution requirements
          </Link>
          .
        </DialogContent>

        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};
