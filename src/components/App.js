import React, {Component} from 'react'
import SearchBar from './SeachBar'
import youtube from '../apis/youtube'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import '../index.css'

class App extends Component {
  state = {
    searchResults : [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onSearchSubmit('buildings')
  }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('search', {
      params: { q : term }
    })
    this.setState({
      searchResults : response.data.items,
      selectedVideo: response.data.items[0]
    })  
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo : video})
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="lower">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            onVideoSelect={this.onVideoSelect} 
            searchResults={this.state.searchResults} />
        </div>
      </div>
    )
  }
}

export default App