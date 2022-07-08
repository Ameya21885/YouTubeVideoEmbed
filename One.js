import React, { useState } from "react";
import "./One.css"
import YouTube from "react-youtube";


var getYouTubeID = require("get-youtube-id");


export default function One() {
  const [id, setId] = useState("");

  function handleChange(e) {
    console.log(e.target.value);

    setId(getYouTubeID(e.target.value));
  }
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return (
    <> 
    <div className="App">
      <div className="a"> 
      <input
        type="text"
        onChange={handleChange}
        required
        placeholder="URL..."
      />

      <YouTube videoId={id} opts={opts}  />
      </div>
      <div className="b">
      <h2>Hello</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a 
        type specimen book. </p>
      </div>
    </div>

    </>
  );
}


