import "./background.css";
import video1 from "../../assets/video/video1.mp4";
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";

const Background = ({ playstatus, herocount }) => {
  if (playstatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (herocount === 0) {
    return <img src={img1} alt="" className="background fade-in" />;
  } else if (herocount === 1) {
    return <img src={img2} alt="" className="background fade-in" />;
  } else if (herocount === 2) {
    return <img src={img3} alt="" className="background fade-in" />;
  }
};

export default Background;
