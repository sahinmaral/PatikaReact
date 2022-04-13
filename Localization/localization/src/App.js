import React, { useState, useEffect } from 'react';
import './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl'

function App() {

  const messages = {
    'tr-TR': {
      'title': 'Merhaba Dünya',
      'description': '{count} yeni mesajınız var'
    },
    'en-US': {
      'title': 'Hello World',
      'description': 'You have {count} new messages'
    }
  }

  const defaultLocale =
    localStorage.getItem('locale') ? localStorage.getItem('locale')
      : navigator.language

  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider messages={messages[locale]} locale='en-US'>
        <FormattedMessage id='title' /> <br /><br />
        <FormattedMessage id='description' values={{'count':5}}/> <br /><br />
        <button onClick={() => setLocale('en-US')}>English</button>
        <button onClick={() => setLocale('tr-TR')}>Türkçe</button>
      </IntlProvider>
    </div>
  );
}

export default App;
