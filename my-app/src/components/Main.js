import React from "react";

export default function Main () {
    return (
     <main>
       <h1 className="main--title font-link">Fun facts about React</h1>
       <ul className="main--facts">
          <li className="font-link">Was original created by some genius</li>
          <li className="font-link">It is maintained by Facebook</li>
          <li className="font-link">Is Composable</li>
       </ul>
     </main>
    );
}