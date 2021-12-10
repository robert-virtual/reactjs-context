import "./App.css";
import Profile from "./components/Profile";
import UsersList from "./components/UsersList";
import { UserState } from "./context/user/UserState";

function App() {
  return (
    <UserState>
      <UsersList />
      <Profile />
    </UserState>
  );
}

export default App;
