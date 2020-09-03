import React from 'react';


function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    )
}


const headerStyle = {
    textAlign: 'center',
    padding: '10px',
    color: 'white',
    backgroundColor: '#1f1f1f'
}

export default Header;