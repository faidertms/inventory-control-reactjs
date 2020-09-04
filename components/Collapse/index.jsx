import React from 'react';

function Collapse({
    isOpen,
    className = '',
    style,
    children
}) {

    return (
        <div className={`collapse ${isOpen ? 'active' : ''} ${className}`} style={style}>
            {children}
        </div>
    )
}

export default Collapse;