import React from 'react';
import './App.css';
import logo from './assets/images/logo-devtube.png';
import demoEditor from './assets/images/demo-code.png';
import html2canvas from 'html2canvas';
import languages from './data/languages';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: {},
      record: {
        title: '',
        language: '',
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
      const selectedLanguage = languages.find(lang => lang.id === parseInt(e.target.value));
      this.setState({ ...this.state, selectedLanguage });
    }
  };

  download() {
    const divStage = document.querySelector('div.stage');

    html2canvas(divStage).then(function(canvas) {
      document.body.appendChild(canvas);
    });
  }

  render () {
    return (
      <div className="container">
        <h1 className="text-center">Gerador de Dica do Dev</h1>

        <div className="row">
          <div className="col-md-4">
            <form>
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
                <select
                  name='language'
                  value={this.state.record.language}
                  onChange={this.handleChange}
                  required
                  className='form-control'>
                  <option>:: Linguagem da Dica ::</option>
                  {
                    languages.map(lang => <option key={lang.id} value={lang.id}>{lang.name}</option>)
                  }
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name='description'
                  required
                  value={this.state.record.description}
                  onChange={this.handleChange}
                  className='form-control'
                  placeholder='Descrição da dica...' />
              </div>

              <div className="form-group">
                <input
                  type='file'
                  value={this.state.record.screenshot}
                  onChange={this.handleChange}
                  name='screenshot'
                  required
                  className='form-control'
                  placeholder='Screenshot da dica...' />
              </div>

              <div className="form-group">
                <textarea
                  name='snippet'
                  required
                  value={this.state.record.snippet}
                  onChange={this.handleChange}
                  className='form-control'
                  placeholder='Snippet de código...' />
              </div>

              <button type='submit' onClick={this.download} className="btn btn-primary btn-block btn-lg">
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
                <div className='screenshot'>
                  <img src={demoEditor} alt="Code" />
                </div>
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
