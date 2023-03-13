import React from 'react'

export default function ShowImage({item}) {
  return (
    <>
        <figure className="image" style={{padding: 10}}>
            <img src={item?.urls?.thumb}  alt={item.description} />
        </figure>
    </>
  )
}
