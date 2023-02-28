import './Home.scss';
import * as React from 'react';
import { useTranslation } from "react-i18next";


export const Home = () => {
	const { t } = useTranslation();
	const verse = t(`home.text`, { returnObjects: true })

	return (
		<>
			<h1>{t(`header.home`)}</h1>
			{
				Object.values(verse).map((one) =>
					<div key={one}>
						{one} <br />
					</div>
				)}
		</>
	)
}