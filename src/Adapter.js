import React from "react"

class Adapter extends React.Component {
  static getShows () {
    return fetch("http://api.tvmaze.com/shows").then(res => res.json())
  }

  static getShowEpisodes (showID){
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`).then(res => res.json)
  }
}

export default Adapter
