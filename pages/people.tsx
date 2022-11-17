import { useDispatch, useSelector } from 'react-redux';
import { updatePeople } from "../store/actions/peopleActions";
import { useEffect, useState } from "react";

function People() {


  // global states (redux)
  const dispatch = useDispatch();
  const people = useSelector((state: any) => state.peopleReducer.people)


  // functions
  const newPerson = () => {
    getPerson();
  }
  
  // API fetch and updating the array in redux
  const getPerson = () => {    
    fetch("https://randomuser.me/api/", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        const newPeople = [result.results[0], ...people];
        dispatch(updatePeople(newPeople));
      })
      .catch(error => console.log('error', error));
  }

  // initial fetch
  useEffect(() => {
    if (people.length != 0) return;
    getPerson();
  }, [])


  return (
    <main className="people">
      <h1>Welcome to the people page</h1>
      <h4>Generate random people data</h4>

      <div className="button-container">
        <button onClick={newPerson}>New Person</button>
      </div>

      <div className="people-details">
        <p>Title</p>
        <p>Name</p>
        <p>Family</p>
        <p>Gender</p>
        <p>Phone</p>
        <p>City</p>
        <p>State</p>
        <p>Country</p>
        <p>Image</p>
      </div>

      {
        people.length != 0 && people.map((person, index) => 
          <div className="people-details" key={index}>
            <p>{person.name.title}</p>
            <p>{person.name.first}</p>
            <p>{person.name.last}</p>
            <p>{person.gender}</p>
            <p>{person.phone}</p>
            <p>{person.location.city}</p>
            <p>{person.location.state}</p>
            <p>{person.location.country}</p>
            <span><img src={person.picture.thumbnail} alt="Profile picture" /></span>
          </div>
        )
      }
    </main>
  )
}

export default People