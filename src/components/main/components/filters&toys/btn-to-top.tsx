import * as React from 'react';

type Props = {
  activePage: string;
};

export default function BtnToTop(props: Props) {
  React.useEffect(() => {
    const toTopBtn = document.getElementById('top__btn');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 300) {
        toTopBtn.classList.add('show');
      } else if (window.pageYOffset < 300) {
        toTopBtn.classList.remove('show');
      }
    });
  }, [props.activePage]);

  return (
    <div id="top__btn" className="top__btn-container">
      <a href="#Top">
        <div className="header__btn" title="TOP">
          <div className="arrow__top"></div>
          <div className="top__btn-wrap"></div>
        </div>
      </a>
    </div>
  );
}
