import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


export const ConsolePanel = ({zoom, lang, pullKey, apiKey, styleID}) => {

	

	const hasPullKey = pullKey !== undefined && pullKey !== null && pullKey !== "";
	const hasStyleID = styleID !== undefined && styleID !== null && styleID !== "";
	const hasAPIKey = apiKey !== undefined && apiKey !== null && apiKey !== "";
	const hasLang = lang !== undefined && lang !== null && lang !== "";

	
	const genericBaseURL = "https://overlays.rtirl.com/generic.html?";
	const genericBaseParamsString = "key=YOUR_PULL_KEY&zoom=YOUR_ZOOM_LEVEL&lang=YOUR_LANGUAGE";
	const genericBaseParams = new URLSearchParams(genericBaseParamsString);

	const customizedBaseURL = "https://overlays.rtirl.com/mapbox.html?";
	const customizeBaseParamsString = "key=YOUR_PULL_KEY&access_token=YOUR_MAPBOX_ACCESS_TOKEN&style=MAPBOX_STYLE_ID&zoom=YOUR_ZOOM_LEVEL&lang=YOUR_LANGUAGE";
	const customizeBaseParams = new URLSearchParams(customizeBaseParamsString);
	
	if (hasPullKey) {
		genericBaseParams.set('key', pullKey);
		customizeBaseParams.set('key', pullKey);
	}

	if (hasAPIKey) {
		customizeBaseParams.set('access_token', apiKey);
	}
	if (hasStyleID) {
		customizeBaseParams.set('style', styleID);
	}
	if (hasLang) {
		genericBaseParams.set('lang', lang.toLowerCase());
		customizeBaseParams.set('lang', lang.toLowerCase());
	}

	genericBaseParams.set('zoom', zoom);
	customizeBaseParams.set('zoom', zoom);

	return (
			<Stack 
				style={{marginLeft: "16px"}}
				alignSelf="flex-start"
				>
				<aside>
					<h2> Generic URL by Muxable</h2>
					{hasPullKey ? 				
						<Typography
							color="inherit"
							component="div"
							style={{textOverflow: "ellipsis"}}>
							{genericBaseURL + genericBaseParams.toString()}
						</Typography>	 : 	
						<Typography
							color="inherit"
							component="div"
							style={{textOverflow: "ellipsis"}}>
							Pull key is required for a generic overlay URL
						</Typography>	
					}
				</aside>
				<aside>
					<h2> Your Customized Mapbox Style</h2>
					{hasAPIKey && hasStyleID && hasPullKey ?
						<Typography
							color="inherit"
							component="div"
							style={{textOverflow: "ellipsis"}}>
							{customizedBaseURL + customizeBaseParams.toString()}
						</Typography>	:
						<Typography
							color="inherit"
							component="div"
							style={{textOverflow: "ellipsis"}}>
							Pull key and Mapbox token and style ID are required for a customized overlay URL
						</Typography>	
					}
				</aside>

			</Stack>
	
	)

}