import React from 'react'

export default class Testimonials extends React.Component {
	render(){
		return(
			<div id="sponsors-container">
				<h1 class="pink">Sponsors</h1>
				<h3>Co-Presenters</h3>
				<div class="logos logos-big">
					<img alt="Wideout Logo" src={require('../assets/sponsor-wideout.png')} />
					<img alt="Saperium Logo" src={require('../assets/sponsor-saperium.png')} />
				</div>
				{/*<h3>Major Sponsor</h3>
				<div class="logos logos-big">
				</div>*/}
				<h3>Minor Sponsors</h3>
				<div class="logos logos-small">
					<img alt="Secret6 Logo" src={require('../assets/sponsor-secret6.png')} />
					<img alt="Freelancer Logo" src={require('../assets/sponsor-freelancer-whitebg.png')} />	
				</div>
				<h3>Yearlong Sponsors</h3>
				<div class="logos logos-small">
					<img alt="Factset Logo" src={require('../assets/sponsor-factset.png')} />
					<img alt="Azeus Logo" src={require('../assets/sponsor-azeus-whitebg.png')} />
					<img alt="Samsung Logo" src={require('../assets/sponsor-samsung-whitebg.png')} />
					<img alt="Tanda Logo" src={require('../assets/sponsor-tanda.png')} />
					<img alt="Accenture Logo" src={require('../assets/sponsor-accenture.png')} />
				</div>
				<h1 class="pink">Partners</h1>
				<div class="logos logos-small">
					<img alt="Rizal Library Logo" src={require('../assets/partner-rizal-lib.png')} />
					<img alt="UXPH Logo" src={require('../assets/partner-uxph.png')} />
				</div>
			</div>
		);
	}
}