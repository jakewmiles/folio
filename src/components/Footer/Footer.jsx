import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';

const Footer = () => {
  const networks = [
    { id: 'github', name: 'github', url: 'https://www.github.com/jakewmiles' },
    { id: 'email', name: 'envelope', url: `mailto:jake.w.miles@gmail.com` },
    { id: 'linkedin', name: 'linkedin', url: 'https://www.linkedin.com/in/jakewmiles/' },
    { id: 'instagram', name: 'instagram', url: 'https://www.instagram.com/jakewmiles/' },
    { id: 'twitter', name: 'twitter', url: 'https://www.twitter.com/jakewmiles/' },
  ];

  return (
    <div>
      <footer className="footer navbar-static-bottom">
        <Container>
          <Title title="Like what you see?" />
          <Fade bottom duration={400} delay={400} distance="30px">
            <div className="contact-wrapper">
              <p className="contact-wrapper__text"> Let&apos;s chat! </p>
            </div>
          </Fade>
        </Container>
        <Container>
          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;
                return (
                  <a
                    key={id}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    <i className={`fa fa-${name} fa-inverse`} />
                  </a>
                );
              })}
          </div>
          <hr />
          <span className="back-to-top">
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </span>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
