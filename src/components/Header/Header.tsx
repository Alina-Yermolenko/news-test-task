import './Header.scss';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Button from '@mui/material/Button';

export const Header = () => {
	const { t } = useTranslation();
	const { pathname } = useLocation()
	const [lang, setLang] = useState('en')
	const [isProfile, setIsProfile] = useState(false);
	const changeLanguage = (lng: string) => {
		setLang(lng);
		i18n.changeLanguage(lng);
	}

	useEffect(() => {
		const userData = localStorage.getItem('userData')
		if (userData) {
			setIsProfile(true)
			return
		}

		setIsProfile(false)
	}, [pathname, lang])

	return (
		<header className='header'>
			<nav className="header-navigation">
				<ul className="header-navigation__list">
					<li
						className="header-navigation__item">
						<NavLink
							to='/'
						>{t(`header.home`)}</NavLink>
					</li>
					<li
						className="header-navigation__item">
						<NavLink
							to='/news'
						>{t(`header.news`)}</NavLink>
					</li>
					{isProfile
							? <li
								className="header-navigation__item">
								<NavLink
									to='/profile'
								>{t(`header.profile`)}</NavLink>
							</li>
							: <li
								className="header-navigation__item">
								<NavLink to='/login'>
									<Button
										variant="outlined"
										size="small"
									>
										{t(`header.login`)}
									</Button>
								</NavLink>
							</li>
					}
				</ul>
				<div className="header__lang-change">
					<Button
						variant={lang === 'uk' ? "contained" : "outlined"}
						size="small"
						onClick={() => changeLanguage('uk')}
					>uk</Button>
					<Button
						variant={lang === 'en' ? "contained" : "outlined"}
						size="small"
						onClick={() => changeLanguage('en')}
					>en</Button>
				</div>
			</nav>
		</header>
	)
}