import AddUser from "./AddUser";
import "./app.css"

export default function Users() {
  return (
    <div className="app">
      <header className="App-header">
        <p>User Details</p>
        <AddUser />
      </header>
    </div>
  );
}
