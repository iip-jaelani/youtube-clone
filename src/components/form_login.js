import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Hidden } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { postData } from '../redux/actions/users';
import { connect } from "react-redux";
import { default as localforage } from 'localforage'
import '../styles/global.css'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: false
    }
    this.handlePAssword = this.handlePAssword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleRegister = this.handleRegister.bind(this)
  }
  componentDidMount() {
    this.props.postData();
  }
  handleUsername = event => {
    this.setState(
      {
        username: event.target.value
      }
    )
  }
  handlePAssword = event => {
    this.setState({
      password: event.target.value
    })
  }



  handleRegister = (event) => {
    event.preventDefault();
    const input = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }



    const local = localStorage.getItem('user')
    let l = JSON.parse(localStorage.getItem('user'))
    const cekuser = l.some(el => el.username === input.username);
    console.log(cekuser);
    if (cekuser === false) {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        error: false
      })
      const cekpass = l.some(el => el.password === input.password);
      console.log(cekpass);
      if (cekpass === false) {
        this.setState({
          error: true
        })
      } else {
        localStorage.setItem('session', JSON.stringify(input))
        window.location.replace('/')
      }

    }

  }
  render() {
    return (
      <div>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <img style={{ height: 40 }} src={require('../images/logo.svg')} />
          <p style={{ fontSize: 30 }}>Sign in</p>
          <form noValidate autoComplete="off">
            {this.state.error === true ?
              <p style={{ backgroundColor: 'red', padding: 10, color: '#fff', }}>Please check your username</p>
              : null}
            <TextField style={{ width: 400, marginTop: 20 }} onChange={this.handleUsername} id="outlined-basic" label="Username" variant="outlined" />
            {this.state.username != '' ?
              null
              : <p style={{ color: 'red', fontSize: 10 }}>Please input username</p>}
            <TextField style={{ width: 400, marginTop: 20 }} onChange={this.handlePAssword} id="outlined-basic" label="Password" variant="outlined" />
            {this.state.password != '' ?
              null
              : <p style={{ color: 'red', fontSize: 10 }}>Please input Password</p>}
            {this.state.password != '' ?
              <Button onClick={this.handleRegister} style={{ backgroundColor: 'blue', color: '#fff', width: 400, marginTop: 20 }}>
                <p style={{ textTransform: 'none', fontSize: 16, alignSelf: 'center' }}>Login</p>
              </Button>
              : <Button disabled onClick={this.handleRegister} style={{ backgroundColor: '#ddd', color: '#fff', width: 400, marginTop: 20 }}>
                <p style={{ textTransform: 'none', fontSize: 16, alignSelf: 'center' }}>Login</p>
              </Button>}
          </form>
        </div>
      </div >
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postData: (users) => {
      dispatch(postData(users));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);

