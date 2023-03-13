import React, { useEffect, useState } from 'react'
import ShowAnimals from './ShowAnimals';

function getAnimal(){
    const animalArr = ['dog', 'horse', 'cow', 'gator', 'cat', 'bird'];
    return animalArr[Math.round(Math.random() * animalArr.length)]
}
console.log("random animals", getAnimal());

export default function App() {
    // console.log("useState", useState(0));
    const [animal, setAnimal] = useState([]);

    const handleClick = () => {
        setAnimal([...animal, getAnimal()])
    }

  return (
    <div>{console.log("html render", animal)}
        <button onClick={handleClick}>Add Animal</button>
        <p>Show animal</p>
        { animal && animal.map((itm, i) => <ShowAnimals type={itm} key={i} />) }
    </div>
  )
}
