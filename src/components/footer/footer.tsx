import * as React from 'react';
import { Component, Fragment } from 'react';
import './footer.scss'

class Footer extends Component {
  render(): React.ReactNode {
    return (
      <Fragment>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer__column">
              <a href="https://github.com/ConstantineTU" target="_blank">
                <div className="footer__github"></div>
              </a>
            </div>
            <p className="footer__copyright">Работу выполнил: Терентьев Константин</p>
            <div className="footer__column">
              <a href="https://rs.school/js/" target="_blank">
                <div className="footer__rss"></div>
              </a>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
