import React, {memo} from 'react'
import ShowImage from './ShowImage'

function ImageList({imgList}) {
    console.log("imglist", imgList)

    return (
        <>
            <div style={{marginTop: 15}}>
                <h3 className='bd-snippet-title'>ImageList : {imgList.length}</h3>
            </div>
            <div className='mainImg'>
                { imgList && imgList.map((itm, i) =>  <ShowImage key={itm.id} item={itm}/>) }
            </div>
        </>
    )
}

export default memo(ImageList)