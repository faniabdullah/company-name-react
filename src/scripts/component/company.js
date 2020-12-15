import React from 'react';

class Company extends React.Component {
	render() {
  	const p = this.props;
  	return (
    	<div className="company">
    	  <img className="companyimage" src={p.avatar_url} alt="avatar company" />
        <div className="companyinfo">
          <div>Name: {p.name}</div>
          <div>Email: {p.email}</div>
          <div>Bio: {p.bio}</div>
          <div>Repos: {p.public_repos}</div>
        </div>
    	</div>
    );
  }
}


class CompanyList extends React.Component {
    render() {
        const p = this.props;
        return (
            <div className="companylist">
            {p.companyinfoarray.map(companyinfo => <Company key={companyinfo.id} {...companyinfo}/>).reverse()}
            </div>
        );
    }
  }

export default CompanyList;
  
  