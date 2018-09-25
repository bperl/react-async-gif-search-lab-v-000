import React from 'react'

const GifList = ({images}) => {
    return (
        <div>{images.map(img => <img src={img} alt="img" key={img} />)}</div>
    )
}

export default GifList;