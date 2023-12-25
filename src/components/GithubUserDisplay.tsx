import React from "react";
import './GithubUserDisplay.css'

interface UserDataProps {
  userData:  {
    avatarUrl: string;
    userName: string;
    userFollowers: string
  }
}


const GithubUserDisplay: React.FC<UserDataProps> = ({userData}) => {

  return (
    <div className="user-display-container">
      <img className="avatar" src={userData.avatarUrl} alt="user avatar" />
      <p>{userData.userName}</p>
    </div>
  )
}

export default GithubUserDisplay