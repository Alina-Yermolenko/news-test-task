import * as React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactElement;
}

export const PrivateRoute:React.FC<Props> = ({ children }) => {
	const userData = JSON.parse(localStorage.getItem('userData'));
	
	if(userData){
		const username = userData.username === 'admin';
		const password = userData.password === '12345';

		if (!username || !password) {
			return <Navigate to='/' />;
		}
		return children;
	}

	return <Navigate to='/' />;
};