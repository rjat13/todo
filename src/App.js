import React, { useState } from 'react'
import 'bulma/css/bulma.min.css'
import './styles.css'
import SearchBar from './SearchBar';
import { getImage } from './Apis';
import ImageList from './ImageList';

export default function App() {
  const [imgList, setImgList] = useState([])

  const handleSubmit = async (searchTxt) => {
    console.log("called api", searchTxt)
    const result = await getImage(searchTxt);
    console.log('result', result)
    setImgList(result?.results);
  }

  return (
    <section className='section'>
    <div className='container'>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList imgList={imgList} />
    </div>
    </section>
  )
}
