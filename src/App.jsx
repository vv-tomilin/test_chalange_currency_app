import React, {useEffect, useState} from 'react';

function App() {

  const [rates, setRates] = useState({});
  const [currensyNames, setCurrensyNames] = useState({});

  console.log(Object.keys(rates));
  console.log(currensyNames);

  useEffect(() => {
    fetch('http://localhost:3001/currencys')
          .then(response => response.json())
          .then((json) => {
            setRates(json[0].rates);
            setCurrensyNames(json[1].symbols)
          })
  }, []);


  return (
    <div>
      <h1>Currency</h1>
    </div>
  );
}

export default App;
