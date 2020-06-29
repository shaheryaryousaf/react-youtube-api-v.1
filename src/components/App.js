import React from "react";
import Searchbar from "./Searchbar";
import youtube from "../api/youtube";
import VideosList from "./videos/VideosList";
import VideoDetail from "./videos/VideoDetail";
const KEY = "AIzaSyAiyBb9pna775fbRn-KGCcNrJPch3NXM8Q";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onSearchSubmit("buildings");
  }
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  selectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="app">
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-md-12">
              <Searchbar onSubmit={this.onSearchSubmit} />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-md-4">
              <VideosList
                videos={this.state.videos}
                selectedVideo={this.selectVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
