import Link from "next/link";
// import styles from "./page.module.css";
import HomeButton from "../homebutton";
import ResourceDropdown from "../resourcedropdown";

export default function UnityBook() {

  return (
    <div className="wrapper">
        <HomeButton></HomeButton>
        <ResourceDropdown></ResourceDropdown>
        <h1 className="pageTitle">Blender Tutorial</h1>
        <h2 className="pageSubheading">Abstract</h2>
        <div className="pageContent">If you somehow couldn’t find a model you wanted for your game through an asset store or simply want to create your own 3D models for your games, this Blender tutorial by Blender Guru is the best tutorial out there. Blender is an open source 3D modeling software and works very well with Unity. This video goes over everything like modeling, texture painting, and rendering. The main things that you’ll need to know from this video are modeling and texture painting, although some of the rendering tips come in handy once you bring the model into Unity.</div>
        <ul className="pageTips">
          <h2 className="pageSubheading">Some Tips For Navigating This Blender Tutorial</h2>
          <li>There are chapters of the video for each operation he does, so if you’re looking for a specific technique like texture painting you can skip straight to that part.</li>
          <li>The video is all centered around creating a donut from start to finish, so watching it in chronological order is recommended.</li>
        </ul>
        <h2 className="pageSubheading">Links</h2>
        <a className="pageLink" href="https://www.youtube.com/watch?v=4haAdmHqGOw" target="_blank" rel="noopener noreferrer">Blender Tutorial</a>
    </div>
  );
}
