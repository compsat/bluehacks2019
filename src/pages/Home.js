import React from "react";

export default class Home extends React.Component {
	render() {
		return (
			<div class="main-container">
				<div id="home-container">
					<div id="home-logo-container">
						<img
							alt="Blue Hacks Logo"
							src={require("../assets/Logo - Light Blue - With Name.png")}
							id="home-bh-logo"
						/>
					</div>
					<p>
						<span class="cyan">
							{" "}
							February 22, 2020 (8:00 AM) to February 23, 2020
							(6:00 PM){" "}
						</span>
						<span class="white">
							{" "}
							5th Floor, New Rizal Library{" "}
						</span>
						<span class="white"> Ateneo de Manila University </span>
					</p>
					<div id="center-div">
						<div id="register-button-container">
							<div>
								<a href="http://bit.ly/BH2020RegForm">
									<button
										id="register-button"
										href="http://bit.ly/BH2020RegForm"
									>
										Register
									</button>
								</a>
							</div>
							<span id="register-deadline">
								{" "}
								Early Registration Deadline: February 14, 2020, 11:59PM<br />
								Late Registration Deadline: February 18, 2020, 11:59PM{" "}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
