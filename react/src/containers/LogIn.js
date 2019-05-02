import React, { Component } from 'react'

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            username
            <input name="username" />
          </label>
          <label>
            password
            <input type="password" name="password" />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}