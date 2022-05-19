import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


export const ConsolePanel = ({zoom, lang, pullKey, apiKey, styleID, mapProvider, googleStyleJSON}) => {

	apiKey = apiKey === "pk.eyJ1Ijoia2V2bW8zMTQiLCJhIjoiY2oyMDFlMGpsMDN3bTJ4bjR1MzRrbDFleCJ9.7XEB3HHBGr-N6ataUZh_6g" ? "" : apiKey;

	const hasPullKey = pullKey !== undefined && pullKey !== null && pullKey !== "";
	const hasStyleID = styleID !== undefined && styleID !== null && styleID !== "";
	const hasAPIKey = apiKey !== undefined && apiKey !== null && apiKey !== "";
	const hasLang = lang !== undefined && lang !== null && lang !== "";

	 
  googleStyleJSON = JSON.parse(googleStyleJSON) ?? {};
  const styleB64 = encodeURIComponent(window.btoa(JSON.stringify(googleStyleJSON)));
	console.log(styleB64);
	const googleMapBaseURL = "https://overlays.rtirl.com/googlemaps.html?"
	const googleMapBaseParamsString= "key=<YOUR_PULL_KEY>&api_key=<YOUR_GOOGLE_MAPS_API_KEY>";
	const customizeGoogleMapBaseParams = new URLSearchParams(googleMapBaseParamsString);
	
	const genericBaseURL = "https://overlays.rtirl.com/generic.html?";
	const genericBaseParamsString = "key=YOUR_PULL_KEY&zoom=YOUR_ZOOM_LEVEL&lang=YOUR_LANGUAGE";
	const genericBaseParams = new URLSearchParams(genericBaseParamsString);

	const customizedBaseURL = "https://overlays.rtirl.com/mapbox.html?";
	const customizeBaseParamsString = "key=YOUR_PULL_KEY&access_token=YOUR_MAPBOX_ACCESS_TOKEN&style=MAPBOX_STYLE_ID&zoom=YOUR_ZOOM_LEVEL&lang=YOUR_LANGUAGE";
	const customizeBaseParams = new URLSearchParams(customizeBaseParamsString);

	if (hasPullKey) {
		genericBaseParams.set('key', pullKey);
		customizeBaseParams.set('key', pullKey);
		customizeGoogleMapBaseParams.set('key', pullKey);
	}

	if (hasAPIKey) {
		customizeBaseParams.set('access_token', apiKey);
		customizeGoogleMapBaseParams.set('api_key', apiKey);
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


	const MapboxResult = (
		<Box
				style={{width: "80vw", backgroundColor: "#ADD8E6", marginTop: "8px", position: "relative", padding: "8px"}}
			>
				<Stack 
					style={{marginLeft: "16px"}}
					alignSelf="flex-start"
					>
					<aside>
						<h2> Generic URL by Muxable </h2>
						<h4> API Key is supplied by Muxable in the generic URL </h4>
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
			</Box>
	)

	const GoogleMapResult = (
			<Box
				style={{width: "80vw", backgroundColor: "#ADD8E6", marginTop: "8px", position: "relative", padding: "8px"}}
			>
				<Stack 
					style={{marginLeft: "16px"}}
					alignSelf="flex-start"
				>
					<h2> Your Customized Google Map Overlay </h2>
					{hasAPIKey && hasPullKey ?
						<p> {googleMapBaseURL + customizeGoogleMapBaseParams.toString() + "&style=" + styleB64}</p> :
						<p> Pull key and Google API key is requried for a customized overlay URL</p>
					}
				</Stack>
			</Box>
	)


	return (
		<>
			{
				mapProvider === "mapbox" ? MapboxResult : GoogleMapResult
			}
		</>
	)

}