import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

class Shared extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      link: '',
      error: false
    }
  }



  handleLink = event => {
    this.setState({
      link: event.target.value
    })
  }

  handleShared = (event) => {
    let user = localStorage.getItem('session')
    let data = JSON.parse(user)
    event.preventDefault();
    const input = {
      username: data.username,
      link: this.state.link,
    }


    const local = localStorage.getItem('videos')
    if (local === null) { //cek local
      let data = []
      data.push(input)
      localStorage.setItem('videos', JSON.stringify(data))
    } else {
      let l = JSON.parse(localStorage.getItem('videos'))
      const cek = l.some(el => el.link === input.link);
      console.log(l);
      if (cek === false) {
        l.push(input)
        localStorage.setItem('videos', JSON.stringify(l))
        this.setState({
          error: false
        })
      } else {
        setTimeout(() => {
          this.setState({
            error: true
          })
        }, 1000);
      }
    }


  }
  render() {
    return (
      <>
        <div style={{ justifyContent: 'center', justifyItems: 'center' }}>
          <div style={{ padding: 50, width: 400, margin: 'auto', height: '100%', borderRadius: 10, backgroundColor: '', border: '1px solid #ddd', marginTop: 60, overflow: 'hidden' }}>

            {this.state.error === true ?
              <p style={{ backgroundColor: 'red', padding: 10, color: '#fff', textAlign: 'center', borderRadius: 5 }}>Link has Already</p>
              : null}
            <TextField onChange={this.handleLink} style={{ width: 400, marginTop: 20 }} id="outlined-basic" label="Share link" variant="outlined" />
            {this.state.link != '' ?
              null
              : <p style={{ color: 'red', fontSize: 13 }}>Please input your link</p>}
            <Button onClick={this.handleShared} style={{ width: 400, marginTop: 20, backgroundColor: 'blue', color: '#fff' }}>
              <p>Share</p>
            </Button>
            <Link style={{ textDecoration: 'none', color: 'blue', marginTop: 100 }} to="/">
              <p>Back Home</p>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
export default Shared;