import React from 'react';
import "./SectionTop.scss";
import Button from '../sharedComponents/Button';

function SectionTop({click}) {
    return (
        <section className="SectionTop">
            <h2>Welcome to My Blog</h2>
            <div className="top_box">
                <p>Container for showing application messages</p>                
            </div>
            <Button click={click} label="Add post"/>            
        </section>
    )
}

export default SectionTop;
