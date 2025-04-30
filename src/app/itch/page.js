import Link from "next/link";
// import styles from "./page.module.css";
import HomeButton from "../homebutton";
import ResourceDropdown from "../resourcedropdown";

export default function UnityBook() {

  return (
    <div className="wrapper">
        <HomeButton></HomeButton>
        <ResourceDropdown></ResourceDropdown>
        <h1 className="pageTitle">Itch.io For Publishing</h1>
        <h2 className="pageSubheading">Abstract</h2>
        <div className="pageContent">Itch.io is a website for game developers to post their games to entirely for free! There are a ton of game jams, competitions that force developers to create a game in a short timeframe based around a theme, on itch for game developers to compete in and get some feedback on their games. This can also act as a platform for marketing as your game may blow up on itch itself! Itch has a lot of things to do on it like play other developers’ games, get assets from the asset store, and compete in game jams. I’d recommend doing a game jam at least once, since it forces you to finish a game in a short timeframe, which is very motivating. Some of the most popular game jams are Ludum Dare, which happens twice a year, and GMTK, which happens once a year, so keep an eye out for those!
          <img className="pageSS" src="/Screenshot 2025-04-30 141127.png" alt="Itch.io Screenshot"></img>
        </div>
        <ul className="pageTips">
          <h2 className="pageSubheading">Some Tips For Navigating Itch.io</h2>
          <li>The navigation bar at the top of the screen leads to the main things to do on itch.</li>
          <li>If you click the itch icon in the top left of the screen it will always bring you back to the home page.</li>
          <li>On the left of the homepage is a vertical bar with a bunch of more niche categories to navigate to.</li>
        </ul>
        <h2 className="pageSubheading">Links</h2>
        <a className="pageLink" href="https://itch.io" target="_blank" rel="noopener noreferrer">Itch.io</a>
    </div>
  );
}
