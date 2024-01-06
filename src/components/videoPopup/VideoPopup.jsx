import React from "react";
import ReactPlayer from "react-player";
import Iframe from 'react-iframe'
import { useParams } from 'react-router-dom';
import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId({episode: 1,season:1});
    };
    if (videoId!=null) {
        console.log(`https://vidsrc.to/embed/tv/${videoId.id}/${videoId.season}/${videoId.episode}`);
    }
    console.log(videoId);   
    const videoKey=useParams()
   
    

    if (videoKey.mediaType=="movie") {
        return (
            <div className={`videoPopup ${show ? "visible" : ""}`}>
                <div className="opacityLayer" onClick={hidePopup}></div>
                <div className="videoPlayer">
                    <span className="closeBtn" onClick={hidePopup}>
                        Close
                    </span>
                    <Iframe
                        url={`https://vidsrc.to/embed/movie/${videoKey.id}`}
                        controls
                        width="100%"
                        height="100%"
                        // playing={true}
                    />
                </div>
            </div>
        );
    }else if(videoId!=null){
        return (
            <div className={`videoPopup ${show ? "visible" : ""}`}>
                <div className="opacityLayer" onClick={hidePopup}></div>
                <div className="videoPlayer">
                    <span className="closeBtn" onClick={hidePopup}>
                        Close
                    </span>
                    <Iframe
                        url={`https://vidsrc.to/embed/tv/${videoKey.id}/${videoId.season}/${videoId.episode}`}
                        
                        controls
                        width="100%"
                        height="100%"
                        // playing={true}
                    />
                </div>
            </div>
        );
    }
    
};

export default VideoPopup;
