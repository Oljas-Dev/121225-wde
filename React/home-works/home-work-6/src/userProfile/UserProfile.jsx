import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./UserProfile.module.css";
import UserProfileCard from "../UserProfileCard/UserProfileCard";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUser() {
    try {
      setIsLoading(true);
      const response = await axios.get("https://randomuser.me/api/0.8");

      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке пользователя:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main className={styles.container}>
      <UserProfileCard
        user={user}
        fetchUser={fetchUser}
        isLoading={isLoading}
      />
    </main>
  );
}

export default UserProfile;
