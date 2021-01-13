/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link, graphql, StaticQuery } from 'gatsby';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/iconsв
import { Apps, CloudDownload, Facebook, LinkedIn, Instagram } from '@material-ui/icons';

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import Button from '../CustomButtons/Button';

import styles from '../../assets/jss/material-kit-react/components/headerLinksStyle';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  let defaultWidth;

  if (typeof window !== `undefined`) {
    defaultWidth = window.innerWidth;
  }

  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Main Navigation" } }) {
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
          <ListItem className={classes.listItem}>
            <Link to="/" className={classes.navLink}>
              Home
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText="About me"
              buttonProps={{
                className: classes.navLink,
                color: 'transparent',
              }}
              buttonIcon={Apps}
              dropdownList={props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                <Link to={`/${item.object_slug}`} key={item.title} className={classes.dropdownLink}>
                  {item.title}
                </Link>
              ))}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="https://drive.google.com/file/d/1DMt5uCH5EOfo_BG_pzXlJwGzWBh32x3R/view?usp=sharing"
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
             Download CV
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Tooltip
              id="linkedin-tooltip"
              title="Follow me on Linkedin"
              placement={defaultWidth > 959 ? 'top' : 'left'}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                href="https://www.linkedin.com/in/marianakyrkosh"
                target="_blank"
                color="transparent"
                className={classes.navLink}
              >
                <LinkedIn />
              </Button>
            </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Tooltip
              id="facebook-tooltip"
              title="Follow me on Facebook"
              placement={defaultWidth > 959 ? 'top' : 'left'}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.facebook.com/mariana.kyrkosh"
                target="_blank"
                className={classes.navLink}
              >
                <Facebook />
              </Button>
            </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Tooltip
              id="instagram-tooltip"
              title="Follow me on Instagram"
              placement={defaultWidth > 959 ? 'top' : 'left'}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.instagram.com/mariana.kyrkosh"
                target="_blank"
                className={classes.navLink}
              >
                <Instagram />
              </Button>
            </Tooltip>
          </ListItem>
        </List>
      )}
    />
  );
}
