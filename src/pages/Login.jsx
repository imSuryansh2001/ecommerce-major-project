import React, { useState } from "react";

const Login = () => {
	// 👉 States and Variables
	const [isLoginBool, setIsLoginBool] = useState(true);
	const [authInputValues, setAuthInputValues] = useState({
		email: "",
		password: "",
		username: "",
	});

	// 👉 Functions and useEffects
	const handleChangeLoginBool = () => setIsLoginBool((prev) => !prev);
	const handleAuthChange = (evt) => {
		const { name, value } = evt.target;
		setAuthInputValues((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<section className="flex h-full min-h-screen w-full items-center justify-center">
			<section className="m-4 flex w-full max-w-lg flex-col items-center md:max-w-2xl md:gap-6">
				<div className="flex h-20 w-full items-center justify-center text-center">
					<p className="text-xl font-semibold md:text-3xl">{isLoginBool ? "Log In" : "Sign Up"}</p>
				</div>

				<section className="w-full border-2">
					<div className="border-b-2 p-4">
						<p className="text-lg md:text-xl">{isLoginBool ? "Log In" : "Sign Up"}</p>
					</div>

					<section className="flex h-full w-full flex-col gap-y-0">
						{/* Inputs */}
						<section className="flex w-full flex-col gap-4 p-4">
							{!isLoginBool && (
								<div className="flex w-full flex-col gap-2">
									<label htmlFor="email">User Name :</label>
									<input
										type="text"
										placeholder="Username"
										name="username"
										value={authInputValues?.username}
										onChange={handleAuthChange}
										className="rounded-bl-3xl rounded-tr-3xl border border-gray-300 p-2 px-4 outline-none placeholder:font-light focus:border-gray-400"
									/>
								</div>
							)}
							<section className="flex w-full flex-wrap items-center gap-4 md:flex-nowrap">
								<div className="flex w-full flex-col gap-2">
									<label htmlFor="email">E-mail :</label>
									<input
										type="text"
										placeholder="Email"
										name="email"
										value={authInputValues?.email}
										onChange={handleAuthChange}
										className="rounded-bl-3xl rounded-tr-3xl border border-gray-300 p-2 px-4 outline-none placeholder:font-light focus:border-gray-400"
									/>
								</div>
								<div className="flex w-full flex-col gap-2">
									<label htmlFor="email">Password :</label>
									<input
										type="text"
										placeholder="Password"
										name="password"
										value={authInputValues?.password}
										onChange={handleAuthChange}
										className="rounded-bl-3xl rounded-tr-3xl border border-gray-300 p-2 px-4 outline-none placeholder:font-light focus:border-gray-400"
									/>
								</div>
							</section>
						</section>

						{/* Buttons */}
						<section className="mt-6 flex w-full flex-col">
							<div className="flex w-full justify-center border-y-2 p-4">
								<button className="rounded-bl-3xl rounded-tr-3xl bg-primary-work p-2 px-16 text-white">
									{isLoginBool ? "Log In" : "Sign Up"}
								</button>
							</div>

							<div className="flex w-full justify-center p-4">
								<span>{isLoginBool ? "Does not have Account?" : "Already have Account?"}</span>
								<span onClick={handleChangeLoginBool} className="ml-1 cursor-pointer font-semibold">
									{isLoginBool ? "Sign Up" : "Log In"}
								</span>
							</div>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Login;
