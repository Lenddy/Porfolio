import React from "react";
import logo from "../assets/LM.svg";

function Navbar() {
	return (
		<div>
			<div className="container">
				<div className="navBar">
					<nav className="items">
						<ul>
							<li>
								<button className="btn1">About</button>{" "}
							</li>
							<li>
								<button className="btn1">Resume</button>{" "}
							</li>
							<li>
								<button className="btn1">
									<img
										src={logo}
										alt="Logo"
										className="logo"
									/>
								</button>
							</li>
							<li>
								<button className="btn1">Projects</button>
							</li>
							<li>
								<button className="btn1">Socials</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
