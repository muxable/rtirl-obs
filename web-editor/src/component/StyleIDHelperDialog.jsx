import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
} from "@mui/material";
import * as React from "react";

export const StyleIDHelperDialog = ({ open, setOpen }) => {
  return (
    <div>
      <Dialog
        style={{ width: "800px" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle onClose={() => setOpen(false)}>StyleID Dialog</DialogTitle>
        <DialogContent>
          In order to preview the map, you need to provide a styleID. <br />
          The default for our preview is <code> mapbox/streets-v11 </code>
          <br /> <br />
          Other options are: <br />
          <code>mapbox/outdoors-v11</code> <br />
          <code>mapbox/light-v10</code> <br />
          <code>mapbox/dark-v10</code> <br />
          <code>adoucett/cjf5k84bp0p7t2rmiwvwikhyn</code> <br />
          <br />
          We can only preview styleID's that are either public or accesible with
          your Mapbox API access token. <br />
          Supply your own styleID in the format of: <br />
          <code>account/styleID </code>
          <br />
          <br />
          <b>A note on the map watermarks</b>: it's tempting to crop them out
          with OBS, however most mapping providers require displaying
          attribution, even when used in non-interactive video. Verify you are
          meeting the relevant attribution requirements for your mapping
          provider. RealtimeIRL does not provide legal support if you are
          contacted regarding an attribution violation.
          <br />
          <br />
          Please review the <br />
          <Link href="https://docs.mapbox.com/help/getting-started/attribution/#static--print">
            Mapbox attribution requirements
          </Link>
          .
        </DialogContent>

        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};
