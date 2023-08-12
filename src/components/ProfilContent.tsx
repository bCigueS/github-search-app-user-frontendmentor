import React from 'react';
import '../sass/components/ProfilContent.scss';

import iconCompagny from '../assets/icon-company.svg';
import iconLocation from '../assets/icon-location.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconWebsite from '../assets/icon-website.svg';

interface githubUser {
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

const ProfilContent: React.FC<{ user: githubUser | null }> = ({ user }) => {

	return (
		<>
			<div className='profil-wrapper'>
				<div className='profil-info'>
					<div className='profil-info__picture'>
						<img src={user?.profilPic} alt='' />
					</div>
					<div className='profil-info__user'>
						<div className='profil-info__user--title'>
							<h1>{user?.username}</h1>
							<p className='profil-info__user--login'>
								{user?.atuser}
							</p>
						</div>
						<p className='profil-info__user--date'>
							{user?.joinDate}
						</p>
					</div>
					<p className='profil-info__description'>
						{user?.description}
					</p>
				</div>
				<div className='profil-stats'>
					<div>
						<h4>Repos</h4>
						<h2>{user?.repos}</h2>
					</div>
					<div>
						<h4>Followers</h4>
						<h2>{user?.followers}</h2>
					</div>
					<div>
						<h4>Following</h4>
						<h2>{user?.following}</h2>
					</div>
				</div>
				<div className='profil-links'>
					<div className='profil-links__info'>
						<img src={iconLocation} alt='' />
						<p
							className={
								user?.town === 'Not Available'
									? 'profil-info__links__info--unvailable'
									: ''
							}
						>
							{user?.town}
						</p>
					</div>
					<div className='profil-links__info'>
						<img src={iconWebsite} alt='' />
						<a href={user?.link}>{user?.link.slice(8)}</a>
					</div>
					<div className='profil-links__info'>
						<img src={iconTwitter} alt='' />
						<p
							className={
								user?.town === 'Not Available'
									? 'profil-links__info--unvailable'
									: ''
							}
						>
							{user?.twitter}
						</p>
					</div>
					<div className='profil-links__info'>
						<img src={iconCompagny} alt='' />
						<p
							className={
								user?.town === 'Not Available'
									? 'profil-links__info--unvailable'
									: ''
							}
						>
							{user?.agency}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilContent;

{
}
