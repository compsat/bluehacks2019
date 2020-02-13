import React from 'react'

export default class Testimonials extends React.Component {
	render(){
		return(
			<div id="sponsors-container">
				<h1 class="pink">Sponsors</h1>
				<h3>Co-Presenters</h3>
				<div class="logos logos-big">
					<img alt="Accenture" class="logo-white-bg" src={require('../assets/accenture-major1.png')} />
					<img alt="IBM" id="ibm" src={require('../assets/IBM.png')} />
					<img alt="Angat IO" id="angat" src={require('../assets/angatio-major2.png')} />
					<img alt="Zalora" id="zalora" src={require('../assets/zalora.png')} />
				</div>
				<h3>Major Sponsor</h3>
				<div class="logos logos-big">
					<img alt="ClinkIT logo" id="clinkit" class="logo-white-bg" src={require('../assets/clink-medium1.png')} />
					<img alt="JP Morgan & Chase" id="jpmorgan" src={require('../assets/jpm-medium2.png')} />
					<img alt="Samsung" id="samsung" src={require('../assets/samsung.png')} />
				</div>
				<h3>Minor Sponsors</h3>
				<div class="logos logos-small">
					<img alt="Pacific Laser Mark Co." src={require('../assets/pacific-minor1.jpg')} />
					<img alt="Ambidextr" class="logo-white-bg" src={require('../assets/ambidextr.png')} />
				</div>
				<h1 class="pink">Partners</h1>
				<div class="logos logos-small">
					<img alt="Rizal Library" src={require('../assets/partner-rizal-lib.png')} />
					<img alt="AIPO" src={require('../assets/aipo-logo.png')} />
					<img alt="Developer Student Club" src={require('../assets/dsc-logo.png')} />
					<img alt="Habitat for Humanity" src={require('../assets/hfh-logo.png')} />
				</div>
			</div>
		);
	}
}