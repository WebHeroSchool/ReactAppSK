import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';


const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		userInfo: {},
		userStatus: null,
      	repoStatus: null,
		firstPage: 0,
      	nextPage: 2
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'SanSanKon'
		}).then(({ data, status }) => {
			this.setState({
				repoList: data,
				isLoading: false,
				repoStatus: status
			});
		}).catch((error) => {
			this.setState({
				isLoading: false,
				repoStatus: error.status
			})
		})

		octokit.rest.users.getByUsername({
			username: 'SanSanKon'
		}).then(({ data, status }) => {
			this.setState({
				userInfo: data,
				isLoading: false,
				userStatus: status
			});
		}).catch((error) => {
			this.setState({
				isLoading: false,
				userStatus: error.status
			})
		})
	}

	onClickNextPage = () => {
		this.setState({
			firstPage: this.state.firstPage + 2,
			nextPage: this.state.nextPage + 2
		})
	};

	onClickBackPage = () => {
		this.setState({
			firstPage: this.state.firstPage - 2,
			nextPage: this.state.nextPage - 2
		})
	}

	render() {
		const { isLoading, repoList, userInfo, userStatus, repoStatus, firstPage, nextPage } = this.state;

		return (
			<CardContent className = {styles.card}>
		    <h1>{ isLoading ? <CircularProgress /> : 'About me' }</h1>
          {!isLoading && userStatus === 200 &&
		  	<div>
          <img src={userInfo.avatar_url} alt="User-face" className={styles.img}></img>
					<p className={styles.login}>My nickname at Github: {userInfo.login}</p>
					<p className={styles.text}>{userInfo.bio}</p>
			  </div>}
        
        {!isLoading && userStatus !== 200 && <p>User information did not receive</p>}
        
        <h2>{ isLoading ? <CircularProgress /> : 'My repositories:' }</h2>
        {!isLoading && repoStatus === 200 && <ul className = {styles.list}>
          {repoList.slice(firstPage, nextPage).map(repo => (<li key = {repo.id} className = {styles.item}>
            <a href={repo.html_url} className = {styles.link}>{repo.name}</a>
                <div className={styles.repos__info}>
                  <span className={styles.circle}></span>
                    <p className={styles.repos__language}>Language: { repo.language }</p>
                    <p className={styles.repos__update}>Updated: {repo.updated_at}</p>	
                </div>
              </li>))}
            </ul>}
            {!isLoading && repoStatus !== 200 && <p className = {styles.repos}>Error! Information about user repositories did not receive</p>}
            <div className={styles.buttons}>	
						  <ButtonGroup  aria-label="outlined secondary button group">
				        <div className={styles.button}><Button disabled={firstPage === 0} onClick = {() => this.onClickBackPage()}>Back</Button></div>
		      		  <div className={styles.button}><Button disabled={repoList.length - nextPage < 0} onClick = {() => this.onClickNextPage()}>Forward</Button></div>
		      	  </ButtonGroup>
		      	</div>	
	    </CardContent>
		);
	}
}


export default About; 