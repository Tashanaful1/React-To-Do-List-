import React from 'react';




function Header() {

    return (
        <header style={headerStyle} >
            <h1>Todo List</h1>
        </header>
    )

}


const headerStyle = {
    background: '#36454f',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    textSize: 'large'



}

export default Header;
