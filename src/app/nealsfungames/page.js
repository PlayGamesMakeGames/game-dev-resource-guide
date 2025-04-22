import Link from "next/link";
// import styles from "./page.module.css";
import HomeButton from "../homebutton";
import ResourceDropdown from "../resourcedropdown";

export default function NealsFunGames() {

  return (
    <div className="wrapper">
        <HomeButton></HomeButton>
        <ResourceDropdown></ResourceDropdown>
        <h1 className="pageTitle">Neal's Fun Games</h1>
        <h2 className="pageSubheading">Abstract</h2>
        <div className="pageContent">Neal Agarwal is a college student who has made a ton of web development projects, mostly games, on this website. Some are very viral games such as the password game and infinite craft. The entire website can be a great source for brainstorming. It's also interesting to see the evolution of Neal’s coding skills as he made more and more games which is very inspiring. It’s easy to see how he took a simple concept and expanded on it to learn something new. For example, in “sun vs moon” he took the most basic app – a counter app – and turned it into a voting system where people would vote on the sun or the moon and the background would move based on who’s winning. This idea is a great example of how to come up with projects, start with something simple and add a twist to it.</div>
        <ul className="pageTips">
          <h2 className="pageSubheading">Some Tips For Navigating Neal's Fun Games</h2>
          <li>The games are in order from top to bottom as most recent to least recent.</li>
          <li>There is a Neal.Fun logo in the top left of the screen once you enter a game that always brings you back to the home screen with all of the games on it.</li>
        </ul>
        <h2 className="pageSubheading">Links</h2>
        <a className="pageLink" href="https://neal.fun" target="_blank" rel="noopener noreferrer">Neal's Fun Games</a>
    </div>
  );
}
