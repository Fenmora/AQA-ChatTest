import { useEffect } from "react";
import Chat from "./components/chats/Chat";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notifications from "./components/notifications/Notifications";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useUserStore } from "../lib/userStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;


  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          <Chat />
        </>
      ) : (
        <Login />
      )}
      <Notifications/>
    </div>
  );
};

export default App;
