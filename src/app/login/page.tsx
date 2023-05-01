import AuthForm from "@/components/AuthForm";
import { getServerAuthSession } from "@/utils/auth";
import { redirect } from "next/navigation";

const Login = async () => {
	//session
	const session = await getServerAuthSession();

	//if session exists, redirect to dashboard
	if (session) {
		redirect("/dashboard");
	}

	return (
		<main className="flex-grow flex flex-col items-center justify-center component-style-default">
			<AuthForm />
		</main>
	);
};

export default Login;
