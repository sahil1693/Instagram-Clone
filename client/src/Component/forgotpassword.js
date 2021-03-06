import React,{Component} from 'react';
import M from 'materialize-css';

// sendgrid api key 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
export default class SignUp extends Component{
	
	constructor(props){
		super(props);
		this.state={
			password:""	
		}
		this.passwordchange=this.passwordchange.bind(this);
		this.submit=this.submit.bind(this);
	}
	passwordchange(e){
		this.setState({password:e.target.value});	
	}
	submit(e){
	e.preventDefault();
		const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({token:window.location.pathname.split("/")[2],
				password:this.state.password,})
    };
	fetch(`http://localhost:5000/changepassword`,requestOptions)
		.then(res=>res.json())
		.then(data=>{
			if(data.error){
				M.toast({html: "An error occured, please retry after sometime",classes:'#c62828 red darken-3'})			
			}	
			else{
				M.toast({html: "password successfully updated",classes:"#388e3c green darken-2"});
				window.location='/signin';	
			}
		})
		.catch(err=>{
			console.log(err);		
		})		

	}
	render(){
		return<div class="mycard">
      <div className="card authcard input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="Password" value={this.state.value} onChange={this.passwordchange}/>
          <button className="btn waves-effect waves-light #1e88e5 blue darken-1" type="submit" name="action" onClick={this.submit}>
    <i className=" right #1e88e5 blue darken-1">Reset Password</i></button>
  </div>
		</div>
	}
}
