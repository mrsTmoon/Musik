import React from 'react';
import styled from 'styled-components';

export default function Login() {
	const handleClick = () => {
		const clientId = '3fa05c05d9a643d9ad342aa941d62091';
		const redirectUrl = 'http://localhost:3000/';
		const apiUrl = 'https://accounts.spotify.com/authorize';
		const scope = [
			'playlist-read-collaborative',
			'playlist-modify-public',
			'playlist-read-private',
			'playlist-modify-private',
			'app-remote-control',
			'streaming',
			'user-read-email',
			'user-read-private',
			'user-library-modify',
			'user-library-read',
			'user-top-read',
			'user-read-playback-position',
			'ugc-image-upload',
			'user-modify-playback-state',
			'user-read-playback-state',
			'user-read-currently-playing',
			'user-follow-modify',
			'user-follow-read',
			'user-read-recently-played'
		];
		window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
			''
		)}&response_type=token&show_daialog=true`;
	};
	return (
		<Container>
			<img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="logo" />
			<button onClick={handleClick}>Login to Spotify</button>
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background-color: #39a22f;
	gap: 80px;
	img {
		height: 20vh;
	}
	button {
		pedding: 18px 80px;
		border-radius: 80px;
		border: none;
		background-color: #111211;
		color: #3ede3e;
		font-size: 18px;
		cursor: pointer;
	}
`;
