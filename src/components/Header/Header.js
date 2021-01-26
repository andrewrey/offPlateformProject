import classes from "./header.module.scss";

const Header = () => (
  <header class={classes.Headerstyles}>
    <h1>Discover hidden places in the world around you</h1>
    <a href="/" class={classes.Aqua}>
      Download Excursion (Coming soon!)
    </a>
  </header>
);

export default Header;
