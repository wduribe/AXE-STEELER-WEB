import { Header, Banner, Biografia, Discografia, Galeria, Footer } from "./components";


export const App = () => {
	return (
		<div
			className="w-full"
		>
			<Header />
			<Banner />
			<Biografia />
			<Discografia />
			<Galeria />
			<Footer />
		</div>
	)
}
