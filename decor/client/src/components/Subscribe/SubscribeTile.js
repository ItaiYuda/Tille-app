import React, {Component } from 'react';
import './subscribeStyle.css';

class SubscribeTile extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            invalidEmail: '',
            id: sessionStorage.getItem('id')
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email} = this.state;
        
        if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) { 
            this.setState({invalidEmail: 'Invalid Email, try again'});
            return;
        }
        
        this.setState({invalidEmail: ''});
        const data = {
            email: email
        }
        fetch('http://localhost:4000/subscribe', {
            method: 'post',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }).then((response) => {
            return response.json();
        }).then((response) => {
            
            sessionStorage.setItem('id', response.user_id);
            this.setState({id: response.user_id});
        });
    }

    render(){
        const {id} = this.state;
        
        return (
            <div className='tile'>
                {id === 'null'? (
                    <>    
                        <h2>Subscribe for updates</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input 
                                    type='email'
                                    placeholder='your@email.com'
                                    onChange={(e) => this.setState({email: e.target.value})}
                                    value={this.state.email}
                                />
                            </div>       
                            <div className='error-message'>
                                {this.state.invalidEmail}
                            </div>
                            <input type='submit' value='SEND' />
                        </form>
                    </>
                ): (
                    <h2>You are Subscribe</h2>
                )}
                
            </div>
        )
    }
   
}

export default SubscribeTile;
