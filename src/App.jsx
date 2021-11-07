import React, { useEffect, useState } from 'react';

import SelectCurrency from './components/SelectCurrency';

import './styles/app.scss';

function App() {

  const [rates, setRates] = useState({});
  const [currencyNames, setCurrencyNames] = useState({});
  const [isLoadingRates, setIsLoadingRates] = useState(false);
  const [isLoadingNames, setIsLoadingNames] = useState(false);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
      .then(response => response.json())
      .then((json) => {
        setRates(json.eur);
        setIsLoadingRates(true);
      });

    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
      .then(response => response.json())
      .then((json) => {
        setCurrencyNames(json);
        setIsLoadingNames(true);
      })
  }, []);

  return (
    <div className="app">
      <h1 className='app__title'>Exchange rate</h1>
      <h2 className='app__base-title'>Base currency EUR</h2>
      <div>
        {isLoadingRates && isLoadingNames
          ? <SelectCurrency
            rates={rates}
            currencyNames={currencyNames} />
          : <p className='app__loading'>Loading...</p>}
      </div>
      <div className='app__empty-mob'></div>
    </div>
  );
}

export default App;
