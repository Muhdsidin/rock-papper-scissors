
// import { useQuery } from '@tanstack/react-query'
// import './App.css'
// import axios from 'axios'

import { useState } from "react";

// function App() {

//   type User ={
//     username : string
//     id : number,
//     email : string
//   }
//   const API_URL = "https://jsonplaceholder.typicode.com/users"

//  const {data,isLoading  }= useQuery({
//     queryKey: ["users"],
//     queryFn : async ()=>{
//       const response = await axios(API_URL)
//       return response.data
//     }
    

//   })
//   console.log(data)

//   return (
//     <>   
//     Hello world 

//     {/* {isLoading ? <>Loading...</> : <ul>
//       {data?.map((user :User) => (
//         <li>{user.username}</li>
//       ))}
//     </ul> } */}

   
//     </>
//   )
// }

// export default App




const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() : string {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice : any, computerChoice : any) {
  if (playerChoice === computerChoice) {
    return 'It\'s a draw!';
  }
  if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handlePlayerChoice = (choice : any) => {
    const computer = getComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(computer);
    const gameResult = determineWinner(choice, computer);
    setResult(gameResult);
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>

      <div>
        <button onClick={() => handlePlayerChoice('Rock')}>Rock</button>
        <button onClick={() => handlePlayerChoice('Paper')}>Paper</button>
        <button onClick={() => handlePlayerChoice('Scissors')}>Scissors</button>
      </div>

      <div>
        <h2>Player's Choice: {playerChoice}</h2>
        <h2>Computer's Choice: {computerChoice}</h2>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
};

export default RockPaperScissors;
