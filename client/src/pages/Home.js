import React, { Component } from "react";
import Search from '../components/Search/Search';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      genreSearch: "",
    };
    console.log("RESULTS and GENRE: ", this.state)
  }

  handleGenre = (genre) => {
    console.log("passing : ", genre);
    this.setState({ 
      genreSearch: genre 
    }, function () {
      console.log("genreSearch: ", this.state.genreSearch);
    });
  };

    render() {
      return (
        <div className="divApp" >
          <Search
            send={(prop) => {   
              this.handleGenre(prop)
            }}
          />
        </div>
      );
    }
  }

  export default Home;