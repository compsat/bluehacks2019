import React from 'react'

export default class Map extends React.Component {
	render(){
		return(
			<div id="map-container">
				<div class="map-title blue">
					<h1>Map to Blue Hacks 2020</h1>
					<h2>
						<span class="white">New Rizal Library </span> <br />
						<span class="white">Ateneo de Manila University </span>
					</h2>
				</div>
				<iframe id="osm" title="Blue Hacks Map" src="https://www.openstreetmap.org/export/embed.html?bbox=121.07236683368684%2C14.638332273940081%2C121.07960879802705%2C14.642012159178616&amp;layer=mapnik&amp;marker=14.640172224276876%2C121.07598781585693" class="map"></iframe>
			</div>
		);
	}
}
