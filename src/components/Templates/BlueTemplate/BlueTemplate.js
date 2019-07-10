import React from 'react';
import classnames from 'classnames';
import logo from '../../../assets/images/logo-devtube.png';
import PropTypes from 'prop-types';
import './BlueTemplate.css';

const BlueTemplate = props => {
  return (
    <>
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
        <img src={logo} width="120" alt='Logo Devtube' />
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
  selectedLanguage: PropTypes.object
};

BlueTemplate.defaultValues = {
  selectedLanguage: {}
};

export default BlueTemplate;
