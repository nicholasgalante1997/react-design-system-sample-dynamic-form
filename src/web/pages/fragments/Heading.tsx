import classNames from 'classnames';
import React from 'react';

function HeadingComponent() {
    const containerClassName = classNames('p-300', 'heading-container');
    return (
        <nav className={containerClassName}>
            <span className="heading-300">Spectrum Dynamic Form</span>
            
        </nav>
    );
}