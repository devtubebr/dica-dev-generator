import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <select
          autoFocus
          name='language'
          value={props.record.language}
          onChange={props.handleChange}
          required
          className='form-control'>
          <option value=''>:: Linguagem da Dica ::</option>
          {
            props.languages.map((lang, key) =>
              <option key={key} value={lang.id}>{lang.name}</option>)
          }
        </select>
      </div>

      <div className="form-group">
        <input
          type='text'
          name='title'
          value={props.record.title}
          onChange={props.handleChange}
          required
          className='form-control'
          placeholder='Título da dica...' />
      </div>

      <div className="form-group">
        <textarea
          name='description'
          required
          value={props.record.description}
          onChange={props.handleChange}
          className='form-control'
          placeholder='Descrição da dica...' />

          <small className="form-text text-muted">
            <i className="fa fa-info-circle"></i> É recomendado no máximo de <strong>3 LINHAS</strong> de descrição na imagem final.
          </small>
      </div>

      <div className="form-group form-check">
        <input
          type="checkbox"
          checked={props.record.has_next}
          onChange={props.handleChange}
          className="form-check-input"
          name='has_next'
          id="has_next" />

        <label className="form-check-label" htmlFor="has_next">Essa dica será múltipla.</label>
      </div>

      <div className="form-group">
        <input
          type='file'
          accept="image/*"
          onChange={props.handleChange}
          name='screenshot'
          required
          className='form-control'
          placeholder='Screenshot da dica...' />

          <button
            type='button'
            onClick={props.removeScreenshot}
            className={classnames('btn btn-link btn-sm text-danger', {'d-none': props.record.screenshot === ''})}>
              <i className="fa fa-trash"></i> Remover Screenshot
          </button>
      </div>

      {/* <div className="form-group">
        <textarea
          name='snippet'
          required
          value={props.record.snippet}
          onChange={props.handleChange}
          className='form-control'
          placeholder='Snippet de código...' />
      </div> */}

      <button type='submit' className="btn btn-primary btn-block btn-lg">
        <i className="fa fa-download"></i> Download
      </button>
    </form>
  );
};

Form.propTypes = {
  record: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  removeScreenshot: PropTypes.func.isRequired,
  languages: PropTypes.array
};

Form.defaultValues = {
  languages: []
};

export default Form;
