import React from 'react';

const Login = () => {
	return (
		<section className="flex h-full min-h-screen w-full items-center justify-center bg-red-200">
			<section className="flex h-screen max-h-[560px] w-full max-w-2xl flex-col items-center gap-6 bg-blue-400">
				<div>
					<p className="text-xl font-semibold md:text-3xl">Log In</p>
				</div>

				<section className="h-full w-full border-2 bg-yellow-400">
					<div className="border-b-2 p-4">
						<p className="text-lg md:text-xl">Log In</p>
					</div>
				</section>
			</section>
		</section>
	);
};

export default Login;
