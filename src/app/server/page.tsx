import UserList from "./UserList";
// Import new line
import AddUser from "./AddUser";
import "./App.css"

export default async function ServerPage() {
  return (
    <div className="app">
      <header className="App-header">
        <UserList  />
        {/* insert Add User here */}
        <AddUser />
      </header>
    </div>
  );
}