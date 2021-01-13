import { container, title } from '../../material-kit-react';

const landingPageStyle = {
  loaded: {
    display: FilterNone,
  },
  container: {
    zIndex: '12',
    color: '#000000',
    ...container,
  },
  title: {
    ...title,
    display: 'block',
    textAlign: 'center',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#ffffff',
    textDecoration: 'none',
  },
  subtitle: {
    fontSize: '1.313rem',
    display: 'block',
    textAlign: 'center',
    maxWidth: '700px',
    margin: '10px auto 0',
    color: '#ffffff',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    padding: '15px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
};

export default landingPageStyle;
