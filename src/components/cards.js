import React from 'react';
import './cards.css';

export default function Cards(props){
    return (
        <div className='card--container'>
            <h1 className='card--title'>{props.nome}</h1>
            <p className='card--preco'>{props.preco}</p>
            <p className='card--categoria'>{props.categoria}</p>
        </div>
    );
}