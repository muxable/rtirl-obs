import * as React from 'react';
import Stack from '@mui/material/Stack';
import { LeafletMapContainer } from '../component/LeafletMapContainer';

export const EditorScreen = (props) => {

	return (
		<Stack>
        <EditorAppbar />
        <Stack direction="row">
          <Settings></Settings>
					<LeafletMapContainer></LeafletMapContainer>
        </Stack>
      </Stack>

	)

}