import './Profile.scss'
import * as React from "react";
import { useTranslation } from "react-i18next";

export const Profile = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1>
				{t(`header.profile`)}
			</h1>
			<div className="profile">
				<img src="https://via.placeholder.com/150" alt="Profile Picture" />
				<div className='profile__text'>
					<h3>{t(`profile.name`)}</h3>
					<p>{t(`profile.age`)}</p>
					<p>{t(`profile.location`)}</p>
					<p>{t(`profile.description`)}</p>
				</div>
			</div>
		</>
	)
};
