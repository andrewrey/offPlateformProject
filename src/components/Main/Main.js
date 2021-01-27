import classes from "./Main.module.scss";
import video from "../../assets/video/excursion.mp4";

const Main = () => (
  <main className={classes.Main}>
    <video src={video} autoPlay loop typeof="movie/mp4">
      Your Browser does not support this video
    </video>
    <h2>Your personal travel guide</h2>
    <p>
      Excursion remembers places you like, and recommends new points of interst
      around you.
    </p>
    <figure>
      <img
        src="https://content.codecademy.com/programs/freelance-one/excursion/images/camp.jpg"
        alt="yellow tent at night with ambient light"
      />
    </figure>
    <figure className={classes.Icon}>
      <img
        src="https://content.codecademy.com/programs/freelance-one/excursion/images/phone.png"
        alt="phone icon"
      />
    </figure>
    <h2>Coming Soon for iPhone and Android</h2>
    <a href="/">Downbload Excursion (Coming soon!)</a>
  </main>
);

export default Main;
