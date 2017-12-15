// 37E-1 37E-2

import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';

class AddBook extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            genre: '',
            description: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleUserInput2 = this.handleUserInput2.bind(this);
        this.handleUserInput3 = this.handleUserInput3.bind(this);
        this.handleUserInput4 = this.handleUserInput4.bind(this);
    }

    handleUserInput(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleUserInput2(e) {
        this.setState({
            author: e.target.value
        })
    }

    handleUserInput3(e) {
        this.setState({
            genre: e.target.value
        })
    }

    handleUserInput4(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleSubmit(e) {
        let body = {
            title: this.state.title,
            author: this.state.author,
            genre: this.state.genre,
            description: this.state.description
        }
        axios.post('/api/create_book', body).then(res=>res);
        alert('Your fucking book has been created in the shitties db ever.');
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className='main_container'>
                    AddBook
                <div className='beige_container'>
    
                        <div>
                            <textarea type='text' name="deck" placeholder="Shitty title" value={this.state.title}  onChange={this.handleUserInput} required />
                            <textarea type='text' name="deck" placeholder="Author" value={this.state.author}  onChange={this.handleUserInput2} required />
                            <textarea type='text' name="deck" placeholder="Genre" value={this.state.genre}  onChange={this.handleUserInput3} required />
                            <textarea type='text' name="deck" placeholder="Description" value={this.state.description}  onChange={this.handleUserInput4} required />
                        </div>
    
                        <div>
                            <button>Submit New Book</button>
                        </div>
    
                    </div>
                </div>
            </div>
        )
    }
}

    export default AddBook;