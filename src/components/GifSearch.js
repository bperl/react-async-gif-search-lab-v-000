import React, { Component } from 'react';

export default class GifSearch extends Component {

    state = {
        searchStr: ''
    }


    handleSubmit = e => {
        e.preventDefault()
        this.props.handleSearch(this.state.searchstr)
    }

    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <label htmlFor="searchstr">Enter a search term</label>
                    <input type="text" value={this.state.searchStr} onChange={(e) => this.setState({searchStr: e.target.value})} placeholder="Find" name="searchstr" className="form-control" />
                    <input type="submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}