import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function App() {
  const [table, setTable] = useState([]);
  const fetchUser = async () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    const data = await fetch(`https://swapi.dev/api/people/${randomNumber}`);
    const parseData = await data.json();
    setTable((pre) => [{ id: randomNumber, ...parseData }, ...pre]);
  };

  const deleteUser = (ind) => {
    setTable((prev) => prev.filter((_, i) => i !== ind));
  };
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  console.log(table);
  return (
    <div>
      <button className="btn add-btn" onClick={fetchUser}>
        Add Record
      </button>
      <div className="table">
        <div className="table-head">
          <p>Name</p>
          <p>Action</p>
        </div>
        <div className="table-body">
          {table &&
            table.map((user, ind) => {
              return (
                <div className="user-row" key={ind}>
                  <p>{user.name}</p>
                  <button
                    className="btn delete"
                    onClick={() => deleteUser(ind)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
