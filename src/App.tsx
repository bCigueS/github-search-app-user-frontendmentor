import { useState } from 'react';
import './sass/App.scss';
import './sass/variables.scss';
import './sass/reset.scss';

import SearchBar from './components/SearchBar';
import Layout from './Layout/Layout';
import Header from './components/Header';
import ProfilContent from './components/ProfilContent';

export interface githubUser {
	username: string;
	atuser: string;
	joinDate: string;
	description: string;
	profilPic: string;
	repos: number;
	followers: number;
	following: number;
	town: string;
	link: string;
	twitter: string;
	agency: string;
}

function App() {
	const [user, setUser] = useState<githubUser | null>(null);

	const onSaveUser = (user: githubUser | null) => {
		console.log("App-user: ", user);
		setUser(user);
	};
	return (
		<Layout>
			<div className='main-layout'>
				<div className='main-wrapper'>
					<Header />
					<SearchBar onSaveUser={onSaveUser} />
					{user && <ProfilContent user={user} />}
				</div>
			</div>
		</Layout>
	);
}


export default App;
