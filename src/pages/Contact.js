import React from 'react';

export default class Contact extends React.Component {

	render(){
		return(
			<div id="contact-container">
				<div class="contact-form-container">
					<h1 class="orange">Contact us</h1>
					<p>If you have any inquiries regarding this event, please contact us: </p>
					<div class="contact-info ">
						<h2 class="purple">Jaymie Antonio</h2>
						Project Head <br/>
						+63 921 474 6107 <br />
						<span class="blue"><a href="mailto:trey.antonio@obf.ateneo.edu">trey.antonio@obf.ateneo.edu</a></span>

					</div>
					<div class="contact-info ">
						<h2 class="purple">Morgan Yao</h2>
						Project Head <br/>
						+63 949 994 8641 <br />
						<span class="blue"><a href="mailto:morgan.yao@obf.ateneo.edu">morgan.yao@obf.ateneo.edu</a></span>
					</div>
				</div>
			</div>
		);
	}
}
