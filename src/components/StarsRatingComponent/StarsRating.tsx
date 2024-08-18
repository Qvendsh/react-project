import React, {FC} from 'react';

import './stars.css'


interface IProps{
    rating: number
}
const StarsRating:FC<IProps> = ({rating}) => {
    
    const starPercentage = (rating / 10) * 100;
    return (
        <div>
            <div className="stars-outer">
                <div className="stars-inner" style={{width: `${starPercentage}%`}}/>
            </div>
        </div>
    );
};

export default StarsRating;