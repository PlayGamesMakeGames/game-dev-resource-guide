import Image from "next/image";
import styles from "./page.module.css";
import ResourceDropdown from "./resourcedropdown";
import Link from "next/link";
import HomeButton from "./homebutton";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeButton></HomeButton>
      <ResourceDropdown title="Resources"></ResourceDropdown>
     {/* <div className="scrollTopButton">
     <a href="#0">
      <button className="scrollTopButton">
          ↑
      </button>
     </a>
     </div> */}
     <h1 className="title" id="0" style={{ paddingRight: "5vw", marginTop: "0px", paddingTop: "0px"}}>
        Adding Projects To Your Resume as a Tech Major Through Game Development
     </h1>
     <div className="tableOfContents section">
        <h1 className="title">Table of Contents</h1>
        <div>
        <ul className="tableOfContentsLinks">
          <li><a href="#1">What's in the guide?</a></li>
          <li><a href="#2">Who is the Guide for?</a></li>
          <li><a href="#3">What should you already know?</a></li>
          <li><a href="#4">How is the guide organized?</a></li>
          <li><a href="#5">Tips for navigating this site</a></li>
        </ul>
        </div>
     </div>
     <div className="whatInGuide section" id="1">
       <h1 className="title">What's in the guide?</h1>
       This guide contains all of the resources you will need to fully develop your first video game! Starting off with some brainstorming there is a website with a bunch of example projects on it as well as some YouTube channels with a lot of great game dev content. We will be focusing on the Unity game engine and C# for coding, Blender and the Unity Asset Store for assets, and Itch.io for publishing. 
     </div>
     <div className="whoGuideFor section" id="2">
       <h1 className="title">Who is the guide for?</h1>
       This guide is for anyone in a tech major like Computer Science or Information System Technology who wants to add projects to their resume and wants to do it through game development.
     </div>
     <div className="assumptions section" id="3">
       <h1 className="title">What should you already know?</h1>
       Before using this guide, you should know at least 1 coding language like Java or Python. This will ensure you have an easy time learning how to use a game engine.
     </div>
     <div className="organized section" id="4">
       <h1 className="title">How is the guide organized?</h1>
       This guide is organized as 6 unique resources that can help you become a game developer. They are in order of what you need to know to create your first game! It starts with brainstorming ideas, then jumps right into starting to make the game, following with asset information, and finally a free publishing site.
     </div>
     <div className="tips section" id="5">
        <h1 className="title">Tips for navigating this site</h1>
        <ul>
          <li>
            If you want to return to the home screen or the top of this screen, click the video game controller icon in the top left!
          </li>
        </ul>
     </div>
    </div>
  );
}
