import React from 'react';

const SingleShow = ({ date, location }) => {
    return (
        <div className="show-wrapper">
            <div>{date}</div>
            <div>{location}</div>
        </div>
    );
};

export default SingleShow;