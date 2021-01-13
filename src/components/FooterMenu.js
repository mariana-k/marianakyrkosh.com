import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { List, ListItem, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/material-kit-react/components/footerStyle';
const useStyles = makeStyles(styles);

const FooterMenu = () => {
  const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Footer Menu" } }) {
            edges {
              node {
                name
                items {
                  title
                  object_slug
                }
              }
            }
          }
        }
      `}
      render={props => (
        <List className={classes.list}>
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <ListItem className={classes.inlineBlock}>
              <Link href={`/${item.object_slug}`} key={item.title} className={classes.block}>
                {item.title}
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    />
  );
};

export default FooterMenu;
