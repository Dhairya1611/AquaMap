// import React from "react";
// import Map from "./components/Map/Map";
// import Json from "./components/fetch_data/json_dis";
// import { List } from "@material-ui/core";
// import List1 from "./components/List/List";
// import { useState } from "react";
// import useJsonData from './components/useJsonData';

// console.log("hi");
// const App= ()=>{

//     const [childClicked, setChildClicked]=useState(null);
//     const markers = useJsonData();

//     const[isLoading,setIsLoading]=useState(false);


//     return(
//         <div style={{display:'flex'}}>
//             <List1 childClicked={childClicked} markers={markers} isLoading={isLoading}/>
//             <Map setChildClicked={setChildClicked}/>
//         </div>

//     );

// }
// export default App;
import React, { useState } from "react";
import Map from "./components/Map/Map";
import Json from "./components/fetch_data/json_dis";
import { List } from "@material-ui/core";
import List1 from "./components/List/List";
import useJsonData from './components/useJsonData';

const App = () => {
  const [childClicked, setChildClicked] = useState(null);
  const markers = useJsonData();
  const [isLoading, setIsLoading] = useState(false);

  const handleHomeClick = () => {
    // Handle the click event for the home button
    document.location='index.html';
    console.log("Home button clicked!");
    // Add your logic for navigating to the home or any other action
  };

  return (
    <div style={{ display: "flex", position: "relative" }}>
      {/* Home Button */}
      <button
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "#3498db",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
          textDecoration: "none",
          transition: "background-color 0.3s",
        }}
        onClick={handleHomeClick}
      >
        Home
      </button>

      {/* List and Map components */}
      <List1 childClicked={childClicked} markers={markers} isLoading={isLoading} />
      <Map setChildClicked={setChildClicked} />
    </div>
  );
};

export default App;
