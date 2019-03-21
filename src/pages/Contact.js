import React from 'react';

export default class Contact extends React.Component {

	render(){
		return(
			<div id="contact-container">
				<div class="contact-form-container">
					<h1 class="orange">Contact us</h1>
					<p>If you have any inquiries regarding this event, please contact us: </p>
					<div class="contact-info ">
						<h2 class="purple">Luigi Reyes</h2>
						Project Head <br/>
						+63 977 860 8008 <br />
						<span class="blue"><a href="mailto:lorenzoreyes099@gmail.com">lorenzoreyes099@gmail.com</a></span>
						
					</div>
					<div class="contact-info ">
						<h2 class="purple">Carlo Mendoza</h2>
						Project Head <br/>
						+63 915 649 0074 <br />
						<span class="blue"><a href="mailto:carlo.mendoza@compsat.org">carlo.mendoza@compsat.org</a></span>
					</div>
				</div>
			</div>
		);
	}
}