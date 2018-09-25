import React, { Component } from 'react';
import GifSearch from './GifSearch';
import GifList from './GifList';

export default class GifListContainer extends Component {

    state = {
        images: [],
    }

    fetchImgs = searchStr => {
       
        const url = `http://api.giphy.com/v1/gifs/search?q=${searchStr}&api_key=dc6zaTOxFJmzC&rating=g`

        fetch(url)
        .then(data => data.json())
        .then(({data}) => {
            let images = data.slice(0,3).map(image => image.images.original.url)
            this.setState({ images })
        })
    }

    render() {
        return (
            <div>
                <GifSearch handleSearch={this.fetchImgs} />
                { this.state.images.length ? <GifList images={this.state.images} /> : null }
            </div>
        )
    }
}