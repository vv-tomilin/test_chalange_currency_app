import React, {useEffect, useState} from 'react';

import SelectCurrency from './components/SelectCurrency';

import './styles/app.scss';

function App() {
  
  const [rates, setRates] = useState({});
  const [currencyNames, setCurrencyNames] = useState({});
  const [isLoadingRates, setIsLoadingRates] = useState(false);
  const [isLoadingNames, setIsLoadingNames] = useState(false);

  useEffect(() => {
    fetch('http://data.fixer.io/api/latest?access_key=7736be7008dd10910ea6e2ac4a8c1dae')
          .then(response => response.json())
          .then((json) => {
            setRates(json.rates);
            setIsLoadingRates(true);
          });
    
    fetch('http://data.fixer.io/api/symbols?access_key=7736be7008dd10910ea6e2ac4a8c1dae')
          .then(response => response.json())
          .then((json) => {
            setCurrencyNames(json.symbols);
            setIsLoadingNames(true);
          })
  }, []);

  return (
      <div className="app">
        <h1 className='app__title'>Exchange rate</h1>
        <div>
          {isLoadingRates && isLoadingNames
            ? <SelectCurrency
            rates={rates}
            currencyNames={currencyNames}/>
            : <p className='app__loading'>Loading...</p>}
        </div>
      </div>
  );
}

export default App;
