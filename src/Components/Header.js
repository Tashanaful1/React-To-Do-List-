import React from 'react';



function Header() {
    return (
        <div style={headerStyle}>
            <h1>Todo List </h1>
        </div>
    )
}


const headerStyle = {
    color: 'white',
    backgroundColor: 'gray',
    textAlign: 'center',
    padding: '10px'
}

export default Header;