import React, {useState} from 'react';

import InfoSelectedCurrency from './InfoSelectedCurrency';

import '../styles/_select-currency.scss';

function SelectCurrency({rates, currencyNames}) {

    let currFullInfo = [];

    const currFullNames = Object.values(currencyNames);

    const currLabels = Object.keys(rates);
    const currValues = Object.values(rates);

    for(let i = 0; i < currLabels.length; i++) {
        currFullInfo.push({
            id: i,
            label: currLabels[i],
            value: currValues[i],
            fullName: currFullNames[i]
        });
    }

    const [flagURL, setFlagURL] = useState('Select currency pease...');
    const [label, setLabel] = useState('Select currency pease...');
    const [fullName, setFullName] = useState('Select currency pease...');
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState(false);

    const [isOpenList, setIsOpenList] = useState(false);

    const openCloseList = () => {setIsOpenList(!isOpenList)};

    const changeInfoValues = (label, fullName, value) => {
        const flagSym = label.slice(0, 2).toLowerCase();

        setFlagURL(`https://flagcdn.com/${flagSym}.svg`);
        setLabel(label);
        setFullName(fullName);
        setValue(value);
        openCloseList();
        setSelected(true);
    };

    return (
        <div className='select-currency__wrapper'>

            <InfoSelectedCurrency
                className='select-currency__info-block'
                flagURL={flagURL}
                label={label}
                fullName={fullName}
                value={value}
                selected={selected}/>

            <div className='select-currency'>
                <button 
                    onClick={openCloseList}
                    className='select-currency__button'>
                        SELECT CURRENCY
                </button>

                {isOpenList &&
                    <ul className="curr-list">
                        {
                            currFullInfo && currFullInfo.map((rate) => (
                                <li
                                    className='curr-list__item'
                                    key={rate.id}
                                    value={rate.label}
                                    onClick={() => changeInfoValues(rate.label, rate.fullName, rate.value)} >
                                        {rate.fullName}
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default SelectCurrency
