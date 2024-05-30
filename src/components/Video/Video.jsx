import React from "react"
import "./Video.css"
import videoImg from "../../assets/video.png";
import TLgradient from "../../assets/vid-top-left-gradient.png"
import BRgradient from "../../assets/vid-bottom-right-gradient.png"


const Video = () => {
  return (
    <section className="video">
      <img src={videoImg} alt="" className="video__image" />
      <button className="video__play"></button>
      <div className="video__overlay"></div>
      <img src={TLgradient} alt="" className="video-gradient video__tl-gradient" />
      <img src={BRgradient} alt="" className="video-gradient video__br-gradient" />
    </section>
  )
}

export default Video