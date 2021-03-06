import React from 'react';
import classnames from 'classnames';
import logo from '../../../assets/images/logo-devtube.png';
import logoFabweb from '../../../assets/images/logo-fabweb.png';
import PropTypes from 'prop-types';
import './BlueTemplate.css';

const BlueTemplate = props => {
  return (
    <>
      <div className={classnames('arrow', {'d-none': props.hideArrow})}>
        <img src="/assets/images/seta.png" alt="seta" width="60" />
        <p>Deslize para<br />ver mais...</p>
      </div>
      <header>
        <img
          src={props.selectedLanguage.src}
          width={props.selectedLanguage.width}
          alt={props.selectedLanguage.name} />
        <h2 className="dica-title">
          { props.record.title }
        </h2>
      </header>
      <div className='body'>
        <p>{ props.record.description }</p>
        <div className={classnames('screenshot', { 'd-none': props.record.screenshot === '' })}>
          <img src={props.record.screenshot} alt="Code" />
        </div>
      </div>
      <div className='hashtag'>
        #dica<strong>Do</strong>Dev
      </div>
      <footer>
        <img src={logo} id='footer-logo' width="120" alt='Logo Devtube' />

        <section id="fabweb">
          <p>Patrocínio</p>
          <img src={logoFabweb} width="80" alt="Logo Fabweb"/>
        </section>

        <ul>
          <li>
            <i className="fa fa-facebook-square"></i>
            <span>fb.com/devtubebr</span>
          </li>
          <li>
            <i className="fa fa-twitter-square"></i>
            <span>@DevTube2</span>
          </li>
          <li>
            <i className="fa fa-instagram"></i>
            <span>devtubebr</span>
          </li>
        </ul>
      </footer>
    </>
  )
};

BlueTemplate.propTypes = {
  record: PropTypes.object.isRequired,
  selectedLanguage: PropTypes.object,
  hideArrow: PropTypes.bool
};

BlueTemplate.defaultValues = {
  selectedLanguage: {},
  hideArrow: true
};

export default BlueTemplate;
