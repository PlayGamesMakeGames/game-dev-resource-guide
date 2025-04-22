import Link from "next/link";
// import styles from "./page.module.css";
import HomeButton from "../homebutton";
import ResourceDropdown from "../resourcedropdown";

export default function UnityBook() {

  return (
    <div className="wrapper">
        <HomeButton></HomeButton>
        <ResourceDropdown></ResourceDropdown>
        <h1 className="pageTitle">Game Development Youtubers</h1>
        <h2 className="pageSubheading">Abstract</h2>
        <div className="pageContent">These are two game development youtubers who have a lot of very useful content on their channels. <br></br><br></br>

Brackeys is a professional game developer and wants to make game developement as accessible to as many people as possible. He has created a ton of Unity tutorials and is now starting to create Godot tutorials as well. He also has hosted many game jams, competitions where game developers create a game over a weekend and are ranked. 
<br></br><br></br>
Game Maker’s Toolkit is a game developer who has just released his first game and has been documenting the process on YouTube. His content was mostly dev logs about his game where viewers could learn through his mistakes. He also hosts one of the biggest game jams every year, highlighting a lot of incredible games.</div>
        <ul className="pageTips">
          <h2 className="pageSubheading">Some Tips For Navigating These Game Dev Channels</h2>
          <li>Go to the playlist tab and you’ll find many tutorials, dev logs, and general game design tips.</li>
        </ul>
        <h2 className="pageSubheading">Links</h2>
        <a className="pageLink" href="https://www.youtube.com/@Brackeys/featured" target="_blank" rel="noopener noreferrer">Brackeys</a>
        <br></br><br></br>
        <a className="pageLink" href="https://www.youtube.com/@GMTK/featured" target="_blank" rel="noopener noreferrer">Game Maker’s Toolkit</a>
    </div>
  );
}
