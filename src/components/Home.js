import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/thecephushaslanded/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error(error));

    fetch("https://api.github.com/users/thecephushaslanded")
      .then((response) => response.json())
      .then((data) => setAvatar(data.avatar_url))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home">
      <h1>
        <a href="https://github.com/9-4-pursuit/assessment-final-react">
          Welcome to the React Final Assessment
        </a>
      </h1>
      <div>
        <h3 className="cephus">Presented by Christina Ann Cephus</h3>
        <h4 className="lkhn"><i>Founder of LKHiTechNews</i></h4>
        <img src={avatar} alt="My avatar" />
        <br></br>
        <button
          className="btn-secondary"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          My Repositories
        </button>
        {showDropdown && (
          <ul style={{ height: "200px", overflowY: "scroll" }}>
            {repos.map((repo) => (
              <li className="repo" key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
