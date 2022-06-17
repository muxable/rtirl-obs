import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  Typography,
} from "@mui/material";
import * as React from "react";

export const AttributionDialog = ({ open, setOpen }) => {
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle onClose={() => setOpen(false)}>
          About Map Attribution
        </DialogTitle>
        <DialogContent>
          <Typography paragraph>
            Please be aware that if you disable the map attribution, you might
            need to add attribution manually to your stream.
          </Typography>
          <Typography paragraph>
            {"Please review the "}
            <Link href="https://docs.mapbox.com/help/getting-started/attribution/#static--print">
              Mapbox attribution requirements
            </Link>
            .
          </Typography>
          <Typography paragraph>
            Muxable does not provide legal support if you are contacted
            regarding an attribution violation.
          </Typography>
        </DialogContent>

        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};
