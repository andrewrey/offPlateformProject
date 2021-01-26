import classes from "./Main.module.scss";

const Main = () => (
  <main className={classes.Main}>
    <video
      src="./../../assets/video/roadVideo.mp4"
      autoPlay
      loop
      controls
      typeof="movie/mp4"
    >
      Your Browser does not support this video
    </video>
  </main>
);

export default Main;
