import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


export const ConsolePanel = ({zoom, lang, pullKey, apiKey, styleID}) => {

	console.log(`lang: ${lang}`);
	const hasPullKey = pullKey !== undefined && pullKey !== null && pullKey !== "";
	const hasStyleID = styleID !== undefined && styleID !== null && styleID !== "";
	const hasAPIKey = apiKey !== undefined && apiKey !== null && apiKey !== "";
	const hasLang = lang !== undefined && lang !== null && lang !== "" && lang !== "EN";

	var genericBaseURL = "https://overlays.rtirl.com/generic.html?";
	var customizedBaseURL = "https://overlays.rtirl.com/mapbox.html?";
	if (hasPullKey) {
		genericBaseURL += "key=" + pullKey;
	}
	if (hasAPIKey) {
		customizedBaseURL += "&access_token" + apiKey;

	}
	if (hasStyleID) {
		customizedBaseURL += "&style=" + styleID;
	}
	if (hasLang) {
		genericBaseURL += "&lang=" + lang;
		customizedBaseURL += "&lang=" + lang;
	}

	genericBaseURL += "&zoom=" + zoom;
	customizedBaseURL += "&zoom=" + zoom;

	return (
			<Stack 
				style={{marginLeft: "16px"}}
				alignSelf="flex-start"
				>
				<aside>
					<h2> Generic URL by Muxable</h2>
					{hasPullKey && 				
						<Typography
							color="inherit"
							component="div"
							style={{textOverflow: "ellipsis"}}>
							{genericBaseURL}
						</Typography>	
					}
					{
						!hasPullKey &&
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
					{hasAPIKey && hasStyleID && hasPullKey &&
						<Typography
							color="inherit"
							component="div"
							style={{textOverflow: "ellipsis"}}>
							{customizedBaseURL}
						</Typography>	
					}
					{!(hasAPIKey && hasStyleID && hasPullKey) &&
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