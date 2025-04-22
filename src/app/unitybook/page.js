import Link from "next/link";
// import styles from "./page.module.css";
import HomeButton from "../homebutton";
import ResourceDropdown from "../resourcedropdown";

export default function UnityBook() {

  return (
    <div className="wrapper">
        <HomeButton></HomeButton>
        <ResourceDropdown></ResourceDropdown>
        <h1 className="pageTitle">Unity For Game Development Book</h1>
        <h2 className="pageSubheading">Abstract</h2>
        <div className="pageContent">Alan Thorn, author of Learn Unity for 2D Game Development and experienced game developer, will teach you everything you need to know about cross-platform game development in C# for Unity, one of the most popular game engines, in this book. He covers all the basics for someone’s first game: design, event handling, player controller, enemies, weapons, power-ups, graphical user interfaces (GUIs), etc. It is a very in-depth look into the right way to create these major components of your game. Making sure you create these core parts of your game correctly is important because if the game blows up and you decide to add more to it, you want it to be easily editable for future updates.</div>
        <ul className="pageTips">
          <h2 className="pageSubheading">Some Tips For Navigating The Unity For Game Development Book</h2>
          <li>The table of contents at the start of the book will allow you to jump to the part of the book that you’d like to read.</li>
          <li>In the digital version there is also a sidebar that has a built in table of contents as well as a highlights section that shows anything that you’ve highlighted in the book.</li>
        </ul>
        <h2 className="pageSubheading">Links</h2>
        <a className="pageLink" href="https://learning.oreilly.com/library/view/pro-unity-game/9781430267461/9781430267461_Contents_at_a_Glance.xhtml" target="_blank" rel="noopener noreferrer">Unity For Game Development Book</a>
    </div>
  );
}
