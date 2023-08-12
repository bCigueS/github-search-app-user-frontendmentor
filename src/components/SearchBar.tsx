	import React, { useRef, useState } from 'react';
	import '../sass/components/SearchBar.scss';
	import { githubUser } from '../App';



	const SearchBar: React.FC<{ onSaveUser: (user: githubUser | null) => void }> = ({
		onSaveUser,
	}) => {
		const [error, setError] = useState<string>('');
		const [userInput, setUserInput] = useState<string>('');

		const searchInputRef = useRef<HTMLInputElement>(null);

		const buttonHandler = async () => {
			setError('');
			const userFound = await fetchUser(userInput);
			onSaveUser(userFound ? userFound : null);
		};

		const userInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
			setError('');
			setUserInput(event.target.value);
		};

		const handleKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === 'Enter') buttonHandler();
		};

		const focusInputHandler = () => {
			searchInputRef.current?.focus();
		};

		const convertDate = (date: string) => {
			const parse = new Date(date);
			console.log(parse);
			let month = parse.toLocaleDateString('en-US', { month: 'long' });
			month = month.charAt(0).toUpperCase() + month.slice(1, 3);
			const str =
				'Joined ' +
				parse.getDate() +
				' ' +
				month +
				' ' +
				parse.getFullYear();
			return str;
		};

		const fetchUser = async (userInput: string) => {
			// setIsLoading(true);
			if (!userInput) {
				return;
			}
			try {
				const response = await fetch(
					`https://api.github.com/users/${userInput}`
				);
				if (response.ok) {
					const data = await response.json();

					console.log(data);

					const userFound: githubUser = {
						username: data.name,
						atuser: '@' + data.login,
						joinDate: convertDate(data.created_at),
						description: data.bio,
						profilPic: data.avatar_url,
						repos: data.public_repos,
						followers: data.followers,
						following: data.following,
						town: data.location ? data.location : 'Not Available',
						link: data.html_url,
						twitter: data.twitter
							? data.twitter_username
							: 'Not Available',
						agency: data.company ? data.company : 'Not Available',
					};
					return userFound;
				} else if (response.status === 404) {
					throw new Error("User doesn't exist");
				} else {
					throw new Error('Failed to fetch User');
				}
			} catch (error: any) {
				setError('No Results');
				console.error(error.message);
			}
		};

		return (
			<div className='search-bar' onClick={focusInputHandler}>
				<div className='search-bar__search'>
					<i className='fa-solid fa-magnifying-glass'></i>
					<input
						ref={searchInputRef}
						type='text'
						name='search'
						id='search'
						placeholder='Search Github username...'
						onChange={userInputHandler}
						onKeyDown={handleKeyEnter}
					/>
				</div>
				<div className='search-bar__action'>
					{error.length !== 0 && <p>No results</p>}
					<button onClick={buttonHandler}>Search</button>
				</div>
			</div>
		);
	};

	export default SearchBar;
