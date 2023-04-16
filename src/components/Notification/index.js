// Write your code here
import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'
import {MdInfo, MdWarning} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'
import {GrFormClose} from 'react-icons/gr'

const Notification = () => (
  <div className="alert-list-container">
    <li className="list-item-container">
      <AiFillCheckCircle className="success" />
      <div className="title-description-container">
        <h1 className="heading1">Success</h1>
        <p className="paragraph">You can access all the files in the folder</p>
      </div>
      <div className="cancel-icon-container">
        <GrFormClose className="cancel-icon" />
      </div>
    </li>
    <li className="list-item-container">
      <RiErrorWarningFill className="error" />
      <div className="title-description-container">
        <h1 className="heading2">Error</h1>
        <p className="paragraph">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
      <div className="cancel-icon-container">
        <GrFormClose className="cancel-icon" />
      </div>
    </li>
    <li className="list-item-container">
      <MdWarning className="warning" />
      <div className="title-description-container">
        <h1 className="heading3">Warning</h1>
        <p className="paragraph">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
      <div className="cancel-icon-container">
        <GrFormClose className="cancel-icon" />
      </div>
    </li>
    <li className="list-item-container">
      <MdInfo className="info" />
      <div className="title-description-container">
        <h1 className="heading4">Info</h1>
        <p className="paragraph">Anyone on the internet can view these files</p>
      </div>
      <div className="cancel-icon-container">
        <GrFormClose className="cancel-icon" />
      </div>
    </li>
  </div>
)

export default Notification
