import { useEffect, useState } from "react";
import "./App.css";
import GithubUserSearchForm from "./components/GithubUserSearchForm";
import axios from "axios";
import GithubUserDisplay from "./components/GithubUserDisplay";
import AppHeader from "./components/AppHeader";

interface UserData {
  avatarUrl: string;
  userFollowers: string;
  userName: string;
  userBio: string;
  userJoinDate: string;
  userFollowing: string;
  userRepos: string;
  userLocation: string;
  userTwitter: string;
  userBlog: string;
  githubBlogLink: string;
  userWorkPlace: string;
}

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (inputValue.trim() !== "" && inputValue.length >= 3) {
          const response = await axios.get(
            `https://api.github.com/users/${inputValue}`
          );

          const data = await response.data;
          const newUserData: UserData = {
            avatarUrl: data["avatar_url"],
            userName: data["login"],
            userFollowers: data["followers"].toString(),
            userBio: data["bio"],
            userJoinDate: data["created_at"],
            userLocation: data["location"],
            userBlog: data["blog"],
            userRepos: data["public_repos"].toString(),
            userFollowing: data["following"].toString(),
            userTwitter: data["twitter_username"],
            githubBlogLink: data["blog"],
            userWorkPlace: data["company"],
          };

          setUserData(newUserData);
          console.log(data);
        }
      } catch (error) {
        console.error("Failed to fetch data");
      } finally {
        setSubmit(false);
      }
    };

    if (submit) {
      fetchUser();
    }
  }, [inputValue, submit]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") return;
    setSubmit(true);
  };

  return (
    <div className="application">
      <AppHeader />
      <GithubUserSearchForm
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      {userData && (
        <GithubUserDisplay
          userData={userData}
          userProfile={{
            twitterLink: userData.userTwitter || "",
            userLocation: userData.userLocation || "",
            githubBlogLink: userData.githubBlogLink || "",
            userWorkPlace: userData.userWorkPlace,
          }}
        />
      )}
    </div>
  );
}

export default App;
