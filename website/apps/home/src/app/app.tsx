// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useMoralis } from "react-moralis";
import {Routes, Route} from 'react-router-dom';

// Importing components
import Navbar from './components/Navbar'
import Marketplace from './components/Marketplace/Marketplace'
import Hero from './components/Hero/Hero';
import MainMarket from './components/MainMarket';
import MainArticle from './components/MainArticle';
import MainDonate from './components/MainDonate';
import MainCollaborate from './components/MainCollaborate';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';

export function App() {

  
	return (
    	<>
    		<Navbar/>
			<Routes>
				{/* Route and element for main page */}
				<Route path='/' element={
					<>
						<Marketplace/>
					</>
				}/>
				<Route path='/marketplace' element={
					<MainMarket/>
				}/>
				<Route path='/article' element={
					<MainArticle/>
				}/>
				<Route path='/donate' element={
					<MainDonate/>
				}/>
				<Route path='/collaborate' element={
					<MainCollaborate/>
				}/>
				<Route path='/article/:articleId' element = {
					<Article/>
				}/>
			</Routes>
			{/* <Footer/> */}
    	</>
  	);
}

export default App;
