import React, { useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import Stepper from "react-stepper-horizontal";
import OtpInput from "react-otp-input";
import "./login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const [steplvl, setSteplvl] = useState(0);
	const [isOtp, setIsOtp] = useState(false);
	const navigate = useNavigate();

	return (
		<div style={{ backgroundColor: "white" }} className={"loginpage"}>
			<Navbar />
			<div className="logincontainer">
				<Stepper
					completeColor="#1890ff"
					defaultBorderColor="1890ff"
					// defaultBorderWidth={10}
					steps={[
						{ title: "Verify Mobile No" },
						{ title: "Student Details" },
						{ title: "Academic Details" },
						{ title: "Need of Laptop" }
					]}
					activeStep={steplvl}
				/>
			</div>
			{steplvl == 0 ? (
				<div className="lvl1">
					<div className="lvl1inner">
						<span style={{ marginTop: "10px" }}>Register</span>
						<div
							style={{
								backgroundColor: "#1890ff",
								width: "70px",
								height: "5px",
								borderRadius: "10px",
								marginTop: "10px"
							}}
						></div>
						{isOtp ? (
							<i
								class="fa-solid fa-message"
								style={{ marginTop: "70px", marginBottom: "20px" }}
							></i>
						) : (
							<i
								class="fa-solid fa-mobile-screen"
								style={{ marginTop: "70px", marginBottom: "20px" }}
							></i>
						)}

						{/* <p>Enter Mobile No</p> */}
						{isOtp ? (
							<div>
								<OtpInput
									value={4}
									onChange={() => {}}
									numInputs={4}
									separator={<span>-</span>}
									inputStyle={{
										height: "35px",
										width: "35px"
									}}
								/>
								<p>Resend OTP</p>
							</div>
						) : (
							<input
								type="number"
								// className="lvl1innerinput"
								placeholder="Enter Mobile No"
							/>
						)}

						{/* <input type="number" placeholder="Enter Mobile No" /> */}

						{isOtp ? (
							<button
								onClick={() => {
									navigate(setSteplvl(1));
								}}
							>
								Verify
							</button>
						) : (
							<button
								onClick={() => {
									setIsOtp(true);
								}}
							>
								Sent OTP
							</button>
						)}
					</div>
				</div>
			) : (
				<div></div>
			)}
			{steplvl == 1 ? (
				<div className="lvl1">
					<div className="lvl2inner" style={{ marginBottom: "130px" }}>
						<div
							className="lvl2header"
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start"
							}}
						>
							<span>Student Details</span>
							<div
								style={{
									backgroundColor: "#1890ff",
									width: "70px",
									height: "5px",
									borderRadius: "10px",
									marginTop: "10px"
								}}
							></div>
							<div style={{ width: "100%", marginTop: "24px" }}>
								<div className="lvl2input1">
									<input type="text" placeholder="Name" />
									<input type="text" placeholder="Email id" />
									<input type="text" placeholder="Roll Number" />
									<input type="text" placeholder="Native" />
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center"
										}}
									>
										<textarea
											name=""
											id=""
											cols="30"
											rows="10"
											placeholder="Address"
										></textarea>
										<input type="text" placeholder="DOB (DD-MM-YYYY)" />
									</div>
									<div
										className="lvl2btn"
										style={{
											display: "flex",
											justifyContent: "space-between",
											width: "100%",
											marginTop: "20px"
										}}
									>
										<button
											className="lvl2innerbtn"
											style={{ marginLeft: "40px" }}
											onClick={() => {
												navigate("/");
											}}
										>
											Home
										</button>
										<button
											className="lvl2innerbtn"
											style={{ marginRight: "40px" }}
											onClick={() => {
												setSteplvl(2);
											}}
										>
											Next
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			{steplvl == 2 ? (
				<div className="lvl1">
					<div className="lvl2inner" style={{ marginBottom: "130px" }}>
						<div
							className="lvl2header"
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start"
							}}
						>
							<span>Academic Details</span>
							<div
								style={{
									backgroundColor: "#1890ff",
									width: "70px",
									height: "5px",
									borderRadius: "10px",
									marginTop: "10px"
								}}
							></div>
							<div style={{ width: "100%", marginTop: "24px" }}>
								<div className="lvl2input1">
									<input type="text" placeholder="Department" />
									<input type="text" placeholder="Batch" />
									<input type="text" placeholder="CGPA (Ex:8.2)" />
									<input type="text" placeholder="Interest" />
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: "100%"
										}}
									>
										<textarea
											name=""
											id=""
											cols="30"
											rows="10"
											placeholder="About Yourself"
										></textarea>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												width: "30%",
												marginRight: "60px"
											}}
										>
											<input
												type="text"
												placeholder="10th Percentage (Ex: 95)"
												style={{ width: "100%" }}
											/>
											<input
												type="text"
												placeholder="12th Percentage (Ex: 85)"
												style={{ width: "100%" }}
											/>
											<div className="lvl2upbtns">
												
											</div>
											<input
												type="text"
												placeholder=""
												style={{ width: "100%" }}
											/>
										</div>
									</div>
									<div
										className="lvl2btn"
										style={{
											display: "flex",
											justifyContent: "space-between",
											width: "100%",
											marginTop: "20px"
										}}
									>
										<button
											className="lvl2innerbtn"
											style={{ marginLeft: "40px" }}
											onClick={() => {
												navigate("/");
											}}
										>
											Back
										</button>
										<button
											className="lvl2innerbtn"
											style={{ marginRight: "40px" }}
											onClick={() => {
												setSteplvl(2);
											}}
										>
											Next
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};
