import React from 'react';
import './App.css';
import html2canvas from 'html2canvas';
import { languages, languagesToArray, languagesEnum } from './data/languages';
import { saveAs } from 'file-saver';
import Form from './components/Form/Form';
import BlueTemplate from './components/Templates/BlueTemplate/BlueTemplate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: languages[languagesEnum.PHP],
      record: {
        title: '',
        language: languagesEnum.PHP,
        description: '',
        screenshot: '',
        fileInputKey: new Date(),
        snippet: '',
        has_next: false
      }
    };
  }

  handleChange = e => {
    const value = (e.target.type === 'checkbox' ? e.target.checked : e.target.value);

    this.setState({
      record: {
        ...this.state.record,
        fileInputKey: (e.target.name === 'screenshot' ? e.target.value : new Date()),
        [e.target.name]: value
      },
    });

    if (e.target.name === 'language') {
      const value = e.target.value;
      const selectedLanguage = (value !== '' ? languages[value] : {});

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
            <Form
              languages={languagesToArray()}
              record={this.state.record}
              onSubmit={this.handleSubmit}
              removeScreenshot={this.removeScreenshot}
              handleChange={this.handleChange} />
          </div>

          <div className="col-md-8">
            <div className="stage">
              <BlueTemplate
                hideArrow={!this.state.record.has_next}
                record={this.state.record}
                selectedLanguage={this.state.selectedLanguage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
