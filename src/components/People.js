import { getPeople } from "../api/fetch";
import { useState, useEffect } from "react";

export default function People() {
    const [userSearch, setUserSearch] = useState("")
    const [search, setSearch] = useState("")
    const [people, setPeople] = useState(null)
    
    

      useEffect(() => {
        getPeople()
        .then((data) => {
          setPeople(data);
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
      }, []);

      function handleSubmit(e) {
        e.preventDefault()
      }

      if(search) {
        const person = people.find((p) => 
        )
      }


  }
  
