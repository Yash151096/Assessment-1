import React, { useState } from 'react';

// Accordion component
const Accordion = ({ title, content }) => {
    // State to track if the accordion is open or closed
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the accordion
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={accordionContainerStyle}>
            {/* Accordion Header */}
            <div style={headerStyle} onClick={toggleAccordion}>
                <h3>{title}</h3>
                {/* Icon to indicate open/close */}
                <span>{isOpen ? '-' : '+'}</span>
            </div>

            {/* Accordion Body, visibility toggled using inline styles */}
            <div style={isOpen ? bodyVisibleStyle : bodyHiddenStyle}>
                <p>{content}</p>
            </div>
        </div>
    );
};

// Styles for Accordion component
const accordionContainerStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    overflow: 'hidden',
};

const headerStyle = {
    background: '#205ce9',
    padding: '10px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '18px',
    color: '#fff',
};

const bodyVisibleStyle = {
    display: 'block',
    padding: '10px',
    borderTop: '1px solid #ccc',
    background: '#fff',
};

const bodyHiddenStyle = {
    display: 'none',
};

// App Component to render multiple Accordions
const App = () => {
    return (
        <div style={{ width: '50%', margin: '0 auto', marginTop: '50px' }}>
            <h1>Accordion Example</h1>
            <Accordion title="Accordion 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <Accordion title="Accordion 2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
            <Accordion title="Accordion 3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>
    );
};

export default App;