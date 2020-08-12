import React from 'react';


function Header() {
    return (
        <div style={headerStyle}>
            <h1>Todo List </h1>
        </div>
    );
}

const headerStyle = {
    textAlign: 'center',
    background: '#696969',
    color: 'white',
    padding: '10px',
}




export default Header;