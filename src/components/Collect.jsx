import React from 'react';
import './collect.css';
import bb1 from './assets/des1.jpeg';
import bb2 from './assets/des2.jpeg';
import bb3 from './assets/des3.jpeg';
const Collect = () => {
    return (<>
        <div className='collect'>
            <div className='collect1'>
                <img src={bb1} alt="toshika" />
            </div>
            <div className='collect1'>
                <img src={bb2} alt="toshika" />
            </div>
            <div className='collect1'>
                <img src={bb3} alt="toshika" />
            </div>
        </div>

        <div className='collect'>
            <div className='collect1'>
                <img src={bb1} alt="toshika" />
            </div>
            <div className='collect1'>
                <img src={bb2} alt="toshika" />
            </div>
            <div className='collect1'>
                <img src={bb3} alt="toshika" />
            </div>
        </div>
        </>
    );
};


export default Collect;