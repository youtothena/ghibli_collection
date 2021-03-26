import React from 'react';
import './Picture.css';

const Picture = ({picture,title}) => {
    return (
        <section>
            <div className="imageBox">
                <img src={picture} alt="지브리 포스터"/>
                <h3>&lsaquo;&nbsp;{title}&nbsp;&rsaquo;</h3>
            </div>
        </section>
    );
};

export default Picture;

