import React from 'react';
import injectSheet from 'react-jss';
import styles from '../style/HomeStyle';

const Home = ({ classes }) => (
    <div className={classes.home}>
        <div className={classes.home__logo}>
            <img src="" alt=""/>
        </div>
        <div className={classes.home__links}>
            <div className={classes.home__linkWrapper}>
                <a className={classes.home__link} href="/uploadPhoto"> Upload Photo</a>
            </div>
            <div className={classes.home__linkWrapper}>
                <a className={classes.home__link} href="/vote"> Vote</a>
            </div>
        </div>
    </div>
);


const StyledHome = injectSheet(styles)(Home);

const Test = () => <StyledHome></StyledHome>;

export default Test;
