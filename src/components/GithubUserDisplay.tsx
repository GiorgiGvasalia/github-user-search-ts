import React from "react";
import "./GithubUserDisplay.css";
import UserSocialProfile from "./UserSocialProfile";

interface UserDataProps {
  userData: {
    avatarUrl: string;
    userName: string;
    userBio: string;
    userJoinDate: string;
    userFollowers: string;
    userFollowing: string;
    userRepos: string;
    userLocation: string;
    userTwitter: string;
    userBlog: string;
  };
  userProfile: {
    twitterLink: string;
    userLocation: string;
    githubBlogLink: string;
    userWorkPlace: string;
  };
}

const GithubUserDisplay: React.FC<UserDataProps> = ({
  userData,
  userProfile,
}) => {
  return (
    <div className="user-display-container">
      <img className="avatar" src={userData.avatarUrl} alt="user avatar" />
      <div className="basic-info">
        <p className="username">
          {userData.userName}{" "}
          <span className="create-date">{userData.userJoinDate} </span>
        </p>
        {!userData.userBio ? (
          <span className="bio">This profile has no bio</span>
        ) : (
          <span className="bio">{userData.userBio}</span>
        )}
        <div className="social-activity-and-repos">
          <div>
            <span className="activity-label">repos</span>
            <p className="activity">{userData.userRepos}</p>
          </div>
          <div>
            <span className="activity-label">followers</span>
            <p className="activity">{userData.userFollowers}</p>
          </div>
          <div>
            <span className="activity-label">following</span>
            <p className="activity">{userData.userFollowing}</p>
          </div>
        </div>
        <UserSocialProfile userProfile={userProfile} />
      </div>
    </div>
  );
};

export default GithubUserDisplay;
