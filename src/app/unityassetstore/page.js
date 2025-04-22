import Link from "next/link";
// import styles from "./page.module.css";
import HomeButton from "../homebutton";
import ResourceDropdown from "../resourcedropdown";

export default function UnityBook() {

  return (
    <div className="wrapper">
        <HomeButton></HomeButton>
        <ResourceDropdown></ResourceDropdown>
        <h1 className="pageTitle">Unity Asset Store</h1>
        <h2 className="pageSubheading">Abstract</h2>
        <div className="pageContent">The Unity Asset Store is a large collection of assets game developers can use to jump start their projects. Game development requires so many skills, but the Unity Asset Store makes that barrier of entry so much lower! It is composed of assets for games like characters, enemies, backgrounds, sound effects, music, and even tools to help you develop! I suggest using free assets for your first game since the hardest part about game development is finishing your first project. These assets will give you that confidence you need to finish your first game!</div>
        <ul className="pageTips">
          <h2 className="pageSubheading">Some Tips For Navigating The Unity Asset Store</h2>
          <li>There is a navigation bar at the top of the screen which leads to any category of asset that you may need; it appears anytime you scroll up.</li>
          <li>If you click on the AssetStore text in the top left of the navigation bar it brings you to the home page with popular assets and sales.</li>
        </ul>
        <h2 className="pageSubheading">Links</h2>
        <a className="pageLink" href="https://assetstore.unity.com" target="_blank" rel="noopener noreferrer">Unity Asset Store</a>
    </div>
  );
}
