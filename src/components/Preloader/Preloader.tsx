import React from 'react';
import preloader from './Preloader.gif'
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.wrapper}>
            <img src={preloader} alt=""/>
        </div>
    );
};

export default Preloader;