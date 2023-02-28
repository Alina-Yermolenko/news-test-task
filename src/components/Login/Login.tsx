import './Login.scss';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";


export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isEmail, setIsEmail] = useState(true);
	const [isPassword, setIsPassword] = useState(true);
	const { t } = useTranslation();
	const navigate = useNavigate();


	const handleSubmit = (event) => {
		event.preventDefault();
		new FormData(event.currentTarget);
	};

	const setUser = async() => {
		const user = JSON.stringify({ username: email, password: password });
		setIsEmail(email === 'admin')
		setIsPassword(password === '12345')
	
		if (email === 'admin' && password === '12345') {
			localStorage.setItem('userData', user);
			navigate('/profile')
		}
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				</Avatar>
				<Typography component="h1" variant="h5">
					{t("login.login")}
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						error={!isEmail}
						helperText={!isEmail && "Incorrect entry."}
						margin="normal"
						required
						fullWidth
						id="email"
						label={t("login.email")}
						name="email"
						autoComplete="email"
						autoFocus
						onChange={(event) => {
							setEmail(event.target.value);
							setIsEmail(true)
						}}
					/>
					<TextField
						error={!isPassword}
						helperText={!isPassword && "Incorrect entry."}
						margin="normal"
						required
						fullWidth
						name="password"
						label={t("login.password")}
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={(event) => {
							setPassword(event.target.value);
							setIsPassword(true)

						}}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={setUser}
						disabled={!email || !password}
					>
						{t("login.login")}
					</Button>
				</Box>
			</Box>
		</Container>
	);
}