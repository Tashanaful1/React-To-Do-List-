import React from 'react';


class AddTodo extends React.Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input
                        style={{ flex: '12', padding: '5px' }}
                        type='text'
                        name='title'
                        placeholder='Add task...'
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input
                        type='submit'
                        value='submit'
                        className='btn'
                        style={{ flex: '1' }} />
                </form>

            </div>
        )
    }
}

export default AddTodo;