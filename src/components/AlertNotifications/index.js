// Write your code here
import {Component} from 'react'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="main-heading">Alert Notifications</h1>
        <ul className="list-container">
          <Notification />
        </ul>
      </div>
    )
  }
}

export default AlertNotifications
