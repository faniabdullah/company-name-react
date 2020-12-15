import '../style/App.css';
import Form from './component/form.js'
import CompanyList from './component/company.js'
import React from 'react';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      companyinfoarray: [],
    }
  }

  addCompany = (companyinfo) => {
  	this.setState(prevState => ({
    	companyinfoarray: [...prevState.companyinfoarray, companyinfo],
    }));
  };

 render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Name</h1>
      </header>
      <Form onSubmit={this.addCompany} />
      <CompanyList companyinfoarray={this.state.companyinfoarray} />
    </div>
  );
  }
  
}


export default App;
