import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Meta from './Meta';
import classNames from 'classnames';
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
import Parallax from './Parallax/Parallax';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/material-kit-react/views/landingPage';
import Footer from './Footer/Footer';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');
 // @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap);
  body, html{
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important; 
  }
`;
const useStyles = makeStyles(styles);

const PageLayout = props => {
  const classes = useStyles();

  React.useEffect(() => {
    document.getElementById('loaded').style.display = 'block';
  });

  return (
    <div id="loaded" style={{ display: 'none' }}>
      <Meta />
      <GlobalStyles />
      <Header
        brand="Mariana Kyrkosh"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: 'white',
        }}
        {...props}
      />
      <Parallax filter>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Software Design and Development</h1>
              <h4 className={classes.subtitle}>
                Building MVPs and POCs for startups with the MERN stack: MongoDB, Express, React,
                Node
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
