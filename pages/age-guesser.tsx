import { useState } from "react";
import Spinner from "../components/Spinner";

function AgeGuesser() {


  // local states
  const [nameInputValue, setNameInputValue] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [fetchResult, setFetchResult] = useState({});


  // functions
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(e.target.value);
  }

  const clearField = () => {
    setNameInputValue("");
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSpinner(true);
    clearField();
    guessAge(nameInputValue);
  }

  const guessAge = (name: string) => {
    fetch(`https://api.agify.io?name=${name}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        setFetchResult(result);
        setShowSpinner(false);
      })
      .catch(error => console.log('error', error));
  }


  return (
    <main className="age-guesser">
      <h1>Welcome to the Age Guesser</h1>
      <h4>Submit your name and let the API guess your age!</h4>

      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Please type in your name" onChange={changeHandler} onClick={() => clearField()} value={nameInputValue} />
        <button>Guess my age!</button>
      </form>

      {
        showSpinner &&
          <Spinner />
      }

      {
        !showSpinner && Object.entries(fetchResult).length != 0 &&
        <>
          <h2>Here are your results:</h2>
          <div className="result-container">
            <p>You requested the name <b>{fetchResult.name}</b></p>
            <p>This name was requested <b>{fetchResult.count}</b> times</p>
            <p>Your guessed age is <b>{fetchResult.age}</b> years old</p>
          </div>
        </>
      }

    </main>
  )
}

export default AgeGuesser