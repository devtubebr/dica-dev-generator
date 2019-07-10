import React from 'react';
import './App.css';
import classnames from 'classnames';
import logo from './assets/images/logo-devtube.png';
import html2canvas from 'html2canvas';
import { languages, getLanguageById, LANGUAGE_PHP } from './data/languages';
import { saveAs } from 'file-saver';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: getLanguageById(LANGUAGE_PHP),
      record: {
        title: '',
        language: LANGUAGE_PHP,
        description: '',
        screenshot: '',
        snippet: ''
      }
    };
  }

  handleChange = e => {
    this.setState({
      record: {
        ...this.state.record,
        [e.target.name]: [e.target.value]
      },
    });

    if (e.target.name === 'language') {
      const value = e.target.value;
      const selectedLanguage = (value !== '' ? getLanguageById(value) : {});

      this.setState({ selectedLanguage });
    }

    if (e.target.name === 'screenshot') {
      const fileReader = new FileReader();

      fileReader.onload = e => {
        this.setState({
          record: {
            ...this.state.record,
            screenshot: e.target.result
          }
        })
      }

      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const divStage = document.querySelector('div.stage');

    html2canvas(divStage)
      .then(canvas => canvas.toBlob(blob => saveAs(blob, 'dica-do-dev.png')))
  }

  removeScreenshot = e => {
    this.setState({
      record: {
        ...this.state.record,
        screenshot: ''
      }
    })
  }

  render () {
    return (
      <div className="container">
        <h1 className="main-title text-center">
          Gerador de Dica do Dev
        </h1>

        <hr />

        <div className="row">
          <div className="col-md-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <select
                  autoFocus
                  name='language'
                  value={this.state.record.language}
                  onChange={this.handleChange}
                  required
                  className='form-control'>
                  <option value=''>:: Linguagem da Dica ::</option>
                  {
                    languages.map(lang => <option key={lang.id} value={lang.id}>{lang.name}</option>)
                  }
                </select>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name='title'
                  value={this.state.record.title}
                  onChange={this.handleChange}
                  required
                  className='form-control'
                  placeholder='Título da dica...' />
              </div>

              <div className="form-group">
                <textarea
                  name='description'
                  required
                  value={this.state.record.description}
                  onChange={this.handleChange}
                  className='form-control'
                  placeholder='Descrição da dica...' />

                  <small className="form-text text-muted">
                    <i className="fa fa-info-circle"></i> É recomendado no máximo de <strong>3 LINHAS</strong> de descrição na imagem final.
                  </small>
              </div>

              <div className="form-group">
                <input
                  type='file'
                  accept="image/*"
                  ref='screenshotInput'
                  onChange={this.handleChange}
                  name='screenshot'
                  required
                  className='form-control'
                  placeholder='Screenshot da dica...' />

                  <button
                    type='button'
                    onClick={this.removeScreenshot}
                    className={classnames('btn btn-link btn-sm text-danger', {'d-none': this.state.record.screenshot === ''})}>
                      <i className="fa fa-trash"></i> Remover Screenshot
                  </button>
              </div>

              {/* <div className="form-group">
                <textarea
                  name='snippet'
                  required
                  value={this.state.record.snippet}
                  onChange={this.handleChange}
                  className='form-control'
                  placeholder='Snippet de código...' />
              </div> */}

              <button type='submit' className="btn btn-primary btn-block btn-lg">
                <i className="fa fa-download"></i> Download
              </button>
            </form>
          </div>

          <div className="col-md-8">
            <div className="stage">
              <header>
                <img
                  src={this.state.selectedLanguage.src}
                  width={this.state.selectedLanguage.width}
                  alt={this.state.selectedLanguage.name} />
                <h2 className="dica-title">
                  { this.state.record.title }
                </h2>
              </header>
              <div className='body'>
                <p>{ this.state.record.description }</p>
                <div className={classnames('screenshot', { 'd-none': this.state.record.screenshot === '' })}>
                  <img src={this.state.record.screenshot} alt="Code" />
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
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
