import React, { useState, useEffect } from 'react';

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [avatar, setAvatar] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/thecephushaslanded/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error(error));

    fetch('https://api.github.com/users/thecephushaslanded')
      .then(response => response.json())
      .then(data => setAvatar(data.avatar_url))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Welcome to my React Final Assessment</h1>
      <div>
        <img src={avatar} alt="My avatar" />
        <br></br>
        <button onClick={() => setShowDropdown(!showDropdown)}>My Repositories</button>
        {showDropdown && (
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
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
