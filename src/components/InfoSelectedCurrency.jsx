import React from 'react';

import '../styles/_info-select.scss';

function InfoSelectedCurrency({ flagURL, label, fullName, value, selected, className }) {

    const name = `${fullName} (${label.toUpperCase()})`;

    return (
        <>
            {selected &&
                <div className={className}>
                    <div className="info-select">
                        <div className='info-select__img'>
                            <img src={flagURL} alt="contry flag" />
                        </div>
                        <p className='info-select__name'>{name}</p>
                        <p className='info-select__rate'>{value}</p>
                    </div>
                </div>
            }

            {!selected &&
                <div className={className}>
                    <p className="info-select">Select currency please...</p>
                </div>
            }
        </>
    )
}

export default InfoSelectedCurrency;
