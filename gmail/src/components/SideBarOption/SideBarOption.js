import React from 'react';
import './SideBarOption.css';

function SideBarOption({ Icon, title, count, selected }) {
    return (
        <div className={`sideBarOption ${selected && "sideBarOption__active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{count}</p>
        </div>
    )
}

export default SideBarOption;
