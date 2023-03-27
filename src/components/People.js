import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const People = () => {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const results = people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
    setShowNotFound(results.length === 0 && searchTerm.length > 0);
    setSearchTerm('');
  };
  
  const handleClear = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowNotFound(false);
  };
  

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/people")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="people">
      <Container className="my-3">
        <h2 className="text-center mb-3">Search for a Person</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-end mb-3">
            <Col xs={12} sm={8} md={9}>
              <Form.Control type="text" value={searchTerm} onChange={handleSearch} placeholder="Enter a name" />
            </Col>
            <Col xs={6} sm={2} md={1}>
              <Button variant="secondary" type="submit" block>Search</Button>
            </Col>
            <Col xs={6} sm={2} md={1}>
              <Button variant="secondary" type="button" onClick={handleClear} block>Clear</Button>
            </Col>
          </Row>
        </Form>
        {showNotFound && <Alert variant="warning" className="text-center">Not Found</Alert>}
        <Row>
          {searchResults.map((person) => (
            <Col xs={12} sm={6} md={4} key={person.id}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Name: {person.name}</h5>
                  <p className="card-text"><strong>Age:</strong> {person.age}</p>
                  <p className="card-text"><strong>Eye Color:</strong> {person.eye_color}</p>
                  <p className="card-text"><strong>Hair Color:</strong> {person.hair_color}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default People;
