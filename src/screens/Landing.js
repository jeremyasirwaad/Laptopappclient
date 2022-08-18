import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import lapgif from "./Laptopgif2.gif";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
	const navigate = useNavigate();

	return (
		<div>
			<Navbar></Navbar>
			<div className="landcont">
				<div
					className="backcontainer"
					style={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						// marginTop: "100px",
						flexDirection: "column",
						height: "100%"
					}}
				>
					<div
						style={{
							width: "100%",
							display: "flex",
							// paddingRight: "100px",
							// paddingLeft: "100px",
							alignItems: "center"
						}}
					>
						<div
							style={{
								width: "50%",
								paddingLeft: "100px",
								paddingRight: "100px",

								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start"
							}}
						>
							<span
								className="spanslanding"
								style={{ textAlign: "start", marginBottom: "25px" }}
							>
								lsdfhl sdlfjh slkd skdjf hlskdjf sdk
							</span>
							<p style={{ paddingLeft: "40px", paddingRight: "40px" }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Quibusdam dolore maiores dolores! Debitis consequuntur aliquam
								minus, accusantium aperiam, ullam unde tempora officiis
								veritatis amet illo ea, est eligendi quae reprehenderit! Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
								dolore maiores dolores! Debitis consequuntur aliquam minus,
								accusantium aperiam, ullam unde tempora officiis veritatis amet
								illo ea, est eligendi quae reprehenderit!
							</p>
							<div
								className="landbuttons"
								style={{ paddingLeft: "20px", paddingRight: "20px" }}
							>
								<button>Track Request</button>
								<button
									onClick={() => {
										navigate("/login");
									}}
									style={{ backgroundColor: "#1890ff", color: "white	" }}
								>
									Apply Now
								</button>
							</div>
						</div>
						<img src={lapgif} alt="" style={{ width: "43%" }} />
					</div>
				</div>
			</div>
		</div>
	);
};
