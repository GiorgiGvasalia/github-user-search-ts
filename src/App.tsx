import React, { useEffect, useState } from "react";
import "./App.css";
import GithubUserSearchForm from "./components/GithubUserSearchForm";
import axios from "axios";
import GithubUserDisplay from "./components/GithubUserDisplay";
import AppHeader from "./components/AppHeader";

interface UserData {
  avatarUrl: string;
  userName: string;
  userFollowers: string;
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
          const newData: UserData = {
            avatarUrl: data['avatar_url'],
            userName: data['login'],
            userFollowers: data['followers'].toString()
          };
          console.log(data)
          console.log(newData);
          setUserData(newData);
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
     {/* <AppHeader /> */}
      <GithubUserSearchForm
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
     {userData && <GithubUserDisplay userData={userData} />}
    </div>
  );
}

export default App;
