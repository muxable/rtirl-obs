import * as React from 'react';
import { useState, useEffect } from 'react';
import { fromJS } from 'immutable';
import MAP_STYLE from '../map-style-basic-v8.json';
import { FormControl, InputLabel } from '@mui/material';
import CountryPicker from './CountryPicker';

const defaultMapStyle = fromJS(MAP_STYLE);
const defaultLayers = defaultMapStyle.get('layers');

const categories = ['labels', 'roads', 'buildings', 'parks', 'water', 'background'];

// Layer id patterns by category
const layerSelector = {
	background: /background/,
	water: /water/,
	parks: /park/,
	buildings: /building/,
	roads: /bridge|road|tunnel/,
	labels: /label|place|poi/
};

// Layer color class by type
const colorClass = {
	line: 'line-color',
	fill: 'fill-color',
	background: 'background-color',
	symbol: 'text-color'
};


function getMapStyle({ visibility, color, language, mapStyle }) {
	mapStyle = fromJS(mapStyle);
	const layers = mapStyle.get('layers')
		// .filter((layer) => {
		// 	const id = layer.get('id');
		// 	return categories.every(name => visibility[name] || !layerSelector[name].test(id));
		// })
		// .map((layer) => {
		// 	const id = layer.get('id');
		// 	const type = layer.get('type');
		// 	const category = categories.find(name => layerSelector[name].test(id));
		// 	if (category && colorClass[type]) {
		// 		return layer.setIn(['paint', colorClass[type]], color[category]);
		// 	}
		// 	return layer;
		// })
		.map((layer) => {
			const id = layer.get('id');
			const layout = layer.get('layout');
			const type = layer.get('type')
			// if (id.indexOf('-label') > 0 && layout) {
			// 	return layer.setIn(['layout', 'text-field'], 
			// 		[
			// 			"coalesce",
			// 			["get","name_en"],
      //       ["get",`name_${language.toLowerCase()}`],
      //     ]
			// 	);
			// }
			if (type && type === 'symbol') { 
				layer.setIn(['layout', 'text-field'], 
					[
						"coalesce",
						["get","name"],
            ["get",`name_${language.toLowerCase()}`],
          ]
				);
				console.log(layer.get('layout'));
				return layer
			}
			return layer;
		})


		// .map((layer) => {
		// 	const type = layer.get('type');
		// 	const layout = layer.get('layout');
		// 	if (layout && layout.get('text-field')) {
		// 		return layer.setIn(['layout', 'text-field'], `{name_${language.toLowerCase()}}`);
		// 	}
		// 	return layer
		// });

	return mapStyle.set('layers', layers);
}

function StyleControls({onChange, language, setLanguage, mapStyle}) {
	console.log(`mapStyle: ${mapStyle}`);
	const [visibility, setVisibility] = useState({
		water: true,
		parks: true,
		buildings: true,
		roads: true,
		labels: true,
		background: true
	});

	const [color, setColor] = useState({
		water: '#DBE2E6',
		parks: '#E6EAE9',
		buildings: '#c0c0c8',
		roads: '#ffffff',
		labels: '#78888a',
		background: '#EBF0F0'
	});

	// useEffect(() => {
	// 	onChange(getMapStyle({ visibility, color, language, mapStyle }));
	// }, [visibility, color, language, onChange]);

	const onColorChange = (name, value) => {
		setColor({ ...color, [name]: value });
	};

	const onVisibilityChange = (name, value) => {
		setVisibility({ ...visibility, [name]: value });
	};

	return (
		<div className="control-panel">
			<FormControl  style={{width: 128}}>
				<InputLabel id="select-language-label"> Language </InputLabel>
					<CountryPicker 
						lang={language}
						setLang={setLanguage}
						countries={["EN", "FR", "JA", "KO", "ZH", "DE", "ES", "PT", "RU"]} />
			</FormControl>
			{/* {categories.map(name => (
				<div key={name} className="input">
					<label>{name}</label>
					<input
						type="checkbox"
						checked={visibility[name]}
						onChange={evt => onVisibilityChange(name, evt.target.checked)}
					/>
					<input
						type="color"
						value={color[name]}
						disabled={!visibility[name]}
						onChange={evt => onColorChange(name, evt.target.value)}
					/>
				</div>
			))}			 */}
		</div>
	);
}

export default React.memo(StyleControls);