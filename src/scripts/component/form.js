import React from 'react';
import axios from 'axios';
class Form extends React.Component {
    constructor(){
        super();
        this.state = { companyName: '' }
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.companyName}`);
        this.props.onSubmit(resp.data);
        this.setState({ companyName: '' });
      };

	render() {
  	return (
    	<form onSubmit={this.handleSubmit} >
          <input
          className="form-input" 
          type="text"
          value={this.state.companyName} 
          onChange={event => this.setState({ companyName: event.target.value })}
          placeholder="Enter Company Name" 
          required 
        />
        <button>Go!</button>
    	</form>
    );
  }
}

export default Form;