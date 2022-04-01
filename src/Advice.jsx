import { useState } from 'react';
import Loading from './Loading'
import './Advice.css'

export default function Advice() {
    const [advice, setAdvice] = useState()

    function getNewAdvice() {
        fetch('https://api.adviceslip.com/advice')
        .then(reponse => reponse.json())
        .then(({slip}) => {
            setAdvice(slip)
        })
    }

    if (!advice) {
        getNewAdvice()
        return <Loading />
    }

    return (
        <div className='Advice'>
            <h2>advice #{advice?.id}</h2>
            <p><q>{advice?.advice}</q></p>
            <div className='separator'>
                <hr />
                <i className="fa-solid fa-grip-lines-vertical"></i>
                <hr />
            </div>
            <button onClick={getNewAdvice}><i className="fa-solid fa-dice"></i></button>
        </div>
    )
}