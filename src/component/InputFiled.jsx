import React, { useState } from 'react';
import './InputFields.css';

const InputFields = () => {
    const [firstInputError, setFirstInputError] = useState('');
    const [secondInputResult, setSecondInputResult] = useState([]);
    const [thirdInputResult, setThirdInputResult] = useState([]);

    const handleFirstInputChange = (e) => {
        const value = Number(e.target.value);
        if (value < 0) {
            setFirstInputError('Enter a positive value');
        } else {
            setFirstInputError('');
        }
    };

    const handleSecondInputChange = (e) => {
        const value = Number(e.target.value);
        if (value % 2 === 0) {
            const nextThreeEvens = [value + 2, value + 4, value + 6];
            setSecondInputResult(nextThreeEvens);
        } else {
            setSecondInputResult([]);
        }
    };

    const handleThirdInputChange = (e) => {
        const value = Number(e.target.value);
        if (value % 2 !== 0) {
            const nextThreeOdds = [value + 2, value + 4, value + 6].filter((n) => n % 2 !== 0);
            setThirdInputResult(nextThreeOdds);
        } else {
            setThirdInputResult([]);
        }
    };

    return (
        <div className="input-container">
            <div className="input-field">
                <label>First Input (Positive Only):</label>
                <input type="number" onChange={handleFirstInputChange} />
                {firstInputError && <p className="error">{firstInputError}</p>}
            </div>

            <div className="input-field">
                <label>Second Input (Even Numbers):</label>
                <input type="number" onChange={handleSecondInputChange} />
                {secondInputResult.length > 0 && (
                    <p className="result">
                        Next 3 even numbers: {secondInputResult.join(', ')}
                    </p>
                )}
            </div>

            <div className="input-field">
                <label>Third Input (Odd Numbers):</label>
                <input type="number" onChange={handleThirdInputChange} />
                {thirdInputResult.length > 0 && (
                    <p className="result">
                        Next 3 odd numbers: {thirdInputResult.join(', ')}
                    </p>
                )}
            </div>
        </div>
    );
};

export default InputFields;
