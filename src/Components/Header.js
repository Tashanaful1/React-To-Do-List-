import React from 'react';



function Header() {
    return (
        <Header style={headerStyle}>
            <h1>Todo List</h1>
        </Header>
    )
}


const headerStyle = {
    color: 'white',
    backgroundColor: 'gray',
    textAlign: 'center',
    padding: '10px'
}

export default Header;