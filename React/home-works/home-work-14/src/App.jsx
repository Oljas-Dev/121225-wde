import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import User from "./components/user";
import UserForm from "./components/userForm";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>User Management</h1>

        <div className="user">
          <User />
        </div>

        <div className="form">
          <UserForm />
        </div>
      </div>
    </Provider>
  );
}

export default App;
