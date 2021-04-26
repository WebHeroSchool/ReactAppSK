import React from 'react';
import styles from './Contacts.module.css'; 
import email from './img/email.png';
import github from './img/github.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';

const Contacts = () => (
	// <CardContent>
	// 	<h1>Contacts</h1>
	// </CardContent>
	<div className={styles.contacts}>
		<div>
			<p className={styles.email}>
				<img src={email} alt="email" className={styles.email__img}></img>
				<a href="mailto:kaba100@yandex.ru" className={styles.email__address}>kaba100@yandex.ru</a>
			</p>
		</div>
		<div>
			<a href="https://github.com/SanSanKon" className={styles.socialnetwork}><img src={github} alt="github" className={styles.socialnetwork__img}></img></a>
			<a href="https://www.instagram.com/alex_beard18287/" className={styles.socialnetwork}><img src={instagram} alt="instagram" className={styles.socialnetwork__img}></img></a>
			<a href="https://www.facebook.com/profile.php?id=100002003872815" className={styles.socialnetwork}><img src={facebook} alt="facebook" className={styles.socialnetwork__img}></img></a>
		</div>
	</div>
);

export default Contacts;