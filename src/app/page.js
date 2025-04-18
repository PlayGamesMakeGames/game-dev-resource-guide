import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
     <h1 className="title">
        Adding Projects To Your Resume as a Tech Major Through Game Development
     </h1>
     <div className="resourceDropdown">
        Resources
     </div>
     <div className="tableOfContents">
        <h1 className="title">Table of Contents</h1>
        <ul className="tableOfContentsLinks">
          <li><a href="#1">What's in the guide?</a></li>
          <li><a href="#2">Who is the Guide for?</a></li>
          <li><a href="#3">What should you already know?</a></li>
          <li><a href="#4">How is the guide organized?</a></li>
          <li><a href="#5">Tips for navigating this site</a></li>
        </ul>
     </div>
     <div className="whatInGuide section" id="1">
       <h1 className="title">What's in the guide?</h1>
       Here is what is in the guide
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
       This guide is organized as 6 unique resources that can help you become a game developer. They are in order of what you need to know to create your first game!
     </div>
     <div className="tips section" id="5">
       <h1 className="title">Tips for navigating this site</h1>
       Some tips for navigating this website: If you want to return to the top of the page, click the video game controller icon in the top left!
     </div>
    </div>
  );
}
