// // import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import {
//   faHome,
//   faBell,
//   faEnvelope,
//   faBookmark,
//   faListAlt,
//   faUser,
//   faEllipsisH,
// } from "@fortawesome/free-solid-svg-icons";
// // import "./style.css";
// // import styles from "./Sidebar.module.css";
// import styles from "../pages/sidebar.module.css"

// const Sidebar = () => {
//   return (
//     <div className={styles.twitter_sidebar}>
//       <FontAwesomeIcon icon={faTwitter} className={styles.twitter_icon} />
//       <div className={styles.twitter_menu}>
//         <ul>
//           <li>
//             <FontAwesomeIcon icon={faHome} />
//             <span>Home</span>
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faBell} />
//             <span>Notifications</span>
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faEnvelope} />
//             <span>Messages</span>
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faBookmark} />
//             <span>Bookmarks</span>
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faListAlt} />
//             <span>Lists</span>
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faUser} />
//             <span>Profile</span>
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faEllipsisH} />
//             <span>More</span>
//           </li>
//           <li className={styles.twitter_button}>
//             <FontAwesomeIcon icon={faTwitter} />
//             <span>Twitter</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBell,
  faEnvelope,
  faBookmark,
  faListAlt,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
// import "./style.css";
import "../pages/sidebar.css"

const Sidebar = () => {
  return (
    <div className="twitter-sidebar">
      <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
      <div className="twitter-menu">
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} />
            <span>Notifications</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Messages</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBookmark} />
            <span>Bookmarks</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faListAlt} />
            <span>Lists</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEllipsisH} />
            <span>More</span>
          </li>
          <li className="twitter-button">
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
