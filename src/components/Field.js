import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';

    return (
      <div className='field'>
        <label htmlFor='name'>{text}</label>
        <input type='text' />
      </div>
    );
  }
}

export default Field;
