import AddUser from "./AddUser";
import UserList from "./Users";

export default async function ServerPage() {
  return (
    <div className="app">
      <header className="App-header">
        <UserList />
        <AddUser  />
      </header>
    </div>
  );
}
