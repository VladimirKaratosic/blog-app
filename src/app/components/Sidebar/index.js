import React from 'react'
import './Sidebar.scss';


function Sidebar() {
    return (
        <div className="Sidebar">
            <h3>Blog categories</h3>
            <div className="category_box">
                <p>Category 1</p>
                <p>Category 2</p>
                <p>Category 3</p>
            </div>                                    
        </div>
    )
}

export default Sidebar
