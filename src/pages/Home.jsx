import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchdata() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }
  useEffect(() => {
    setTimeout(() => {
      fetchdata();
    }, 2000);
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
            />
          </Link>
        ))
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}

export default Home;
