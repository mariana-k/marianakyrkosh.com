import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import styles from '../assets/jss/material-kit-react/components/footerStyle';

const StyledDiv = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
`;
const useStyles = makeStyles(styles);
const IndexPage = () => {
  const classes = useStyles();
  const aClasses = classNames({
    [classes.a]: true,
  });
  return (
    <PageLayout>
      <StaticQuery
        query={graphql`
          {
            allWordpressPage {
              edges {
                node {
                  id
                  title
                  path
                }
              }
            }
          }
        `}
        render={props => (
          <StyledDiv>
            {props.allWordpressPage.edges.map(page => (
              <h3 key={page.node.id}><Link className={aClasses} to={page.node.path}>{page.node.title}</Link></h3>
            ))}  
          </StyledDiv>
        )}
      />
    </PageLayout>
  );
};

export default IndexPage;
