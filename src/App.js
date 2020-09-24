import React from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';





class App extends React.Component {
    state = {
        todos:
            [
                {
                    id: 1,
                    title: 'Grocery shop for the cabin trip',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Send out invitations',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Book a cabin in Gatlinburg',
                    completed: false
                },
            ]

    }
    render() {
        return (
            <div>
                <Header />
                <Todos todos={this.state.todos} />
            </div>
        )
    }
}

export default App;