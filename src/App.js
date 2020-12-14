import './App.css';
import Form from './form.js'
import React from 'react';

class App extends React.Component {

  doSomething(companyinfo) {
    console.log(companyinfo);
  };

 render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Name</h1>
      </header>
      <Form  onSubmit={this.doSomething} />
    </div>
  );
  }
  
}


export default App;
