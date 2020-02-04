import React, { Component } from 'react';
import Tabs from '../components/tabs';
class Login extends Component {
  render() {
    return (
      <>
        <div style={{ justifyContent: 'center', justifyItems: 'center' }}>
          <div style={{ width: 600, margin: 'auto', height: "100%", borderRadius: 10, backgroundColor: '', border: '1px solid #ddd', marginTop: 60, overflow: 'hidden' }}>
            <Tabs />
          </div>
        </div>
      </>
    )
  }
}
export default Login;