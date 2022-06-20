import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import swal from 'sweetalert';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  async handleClick() {
    const { email, password } = this.state;
    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }
    let response = await fetch('/login', options);
    response = await response.json();        
    if (!response) {
      swal({
        title: "Wrong Entry",
        text: "Check your email and password",
        icon: "warning",
        button: "OK",
      });
      return;
    }

    if(response === 'user'){
      await auth.userLogin();
      this.props.history.push('/app/my');
      return;

    }



    options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    let res = await fetch('/team-check', options);
    res = await res.json();
    await auth.login();
    if (!res) {
      this.props.history.push('/choose-teams')
    } else {
      this.props.history.push('/dashboard',{state: { detail: response }})
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
              title="User-Login"
            />
            <TextField
              hintText="Enter your Email"
              floatingLabelText="email"
              onChange = {(event,newValue) => this.setState({email:newValue})}
              />
            <br/>
            <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event,newValue) => this.setState({password:newValue})}
                />
              <br/>
              <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>

          </div>
          <Link to="/forgot-password">Forgot-Password</Link>
          </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;