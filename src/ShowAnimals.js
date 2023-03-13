import React from 'react'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'

const animalImg = {bird, cat, cow, dog, gator, horse}
export default function ShowAnimals({type}) {
    console.log('type', type);
  return (
    <img alt={`animals image ${type} ${animalImg[type]}`} src={animalImg[type]} width={100}/>
  )
}
