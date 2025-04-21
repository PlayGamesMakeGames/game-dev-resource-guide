import Link from "next/link";

export default function ResourceDropdown() {
  
//     const style = {
//     resourceDropdown: {
//       padding: '8px',
//       backgroundColor: 'var(--gray-alpha-100)',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     },
//     title: {
//       fontSize: '18px',
//       fontWeight: 'bold',
//       marginBottom: '8px',
//     },
//   };

  return (
    <div className="resourceDropdown">
      <h2 className="title" style={{ margin: "0px", padding: "8px" }}>Resources</h2>
      <ul className="resourceList">
        <li className="resourceLink"><Link href="/nealsfungames">Neal's Fun Games</Link></li>
        <li className="resourceLink"><Link href="/nealsfungames">Neal's Fun Games</Link></li>
        <li className="resourceLink"><Link href="/nealsfungames">Neal's Fun Games</Link></li>
        <li className="resourceLink"><Link href="/nealsfungames">Neal's Fun Games</Link></li>
        <li className="resourceLink"><Link href="/nealsfungames">Neal's Fun Games</Link></li>
      </ul>
    </div>
  );
}
