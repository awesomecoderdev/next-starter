import Cookies from "@/components/Cookies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata = {
	title: {
		default:
			process.env.APP_NAME + " |  Map to Quality Products and Deals!",
		template: "%s | " + process.env.APP_NAME,
	},
};

export default function RootLayout(props) {
	const { children, params } = props;
	// console.log("params", params);

	return (
		<html lang="en">
			<body className="antialiased text-slate-500 dark:text-slate-400  bg-white dark:bg-slate-900 h-full min-h-screen flex flex-col justify-between items-center ">
				<Header {...props} title="Hello world" />

				{children}

				<Cookies />
				<Footer />
			</body>
		</html>
	);
}
