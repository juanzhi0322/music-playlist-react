import "./App.css";
import { useEffect, useState } from "react";
import AllSongs from "./components/AllSongs";
import Listened from "./components/Listened";
import Favorites from "./components/Favorites";
import { fetchPlayList, updateTrack } from "./api";

function App() {
  const [data, setData] = useState([]);
  console.log("data", data);
  useEffect(() => {
    console.log("run");
    fetchPlayList().then((resdata) => {
      console.log("res", resdata);
      setData((prev) => {
        return [...resdata];
      });
    });
  }, []);

  function toggle(id, key, value) {
    console.log("toggle", id);

    updateTrack(id, key, !value)
      .then((res) => res.json())
      .then((resdata) => {
        console.log("res data", resdata);
        setData((prev) => {
          console.log(resdata);
          const cur = prev.map((each) => {
            if (each.id === resdata.id) {
              return { ...each, [key]: !value };
            } else {
              return each;
            }
          });
          return cur;
        });
      });
  }

  return (
    <div className="main">
      <AllSongs playList={data} handelClick={toggle} />
      <Listened playList={data} handelClick={toggle} />
      <Favorites playList={data} handelClick={toggle} />
    </div>
  );
}

export default App;
