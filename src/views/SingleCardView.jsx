// import { useEffect, useState } from "react";
// import "../styles/single.css";

// export default function SingleCardView({
//   data = [],
//   bgColors = [],
//   CardComponent,
//   showMasu,
// }) {
//   const [index, setIndex] = useState(0);
//   const [bg, setBg] = useState(bgColors[0] || "#eee");

//   useEffect(() => {
//     setIndex(0);
//   }, [data]);

//   useEffect(() => {
//     setBg(bgColors[index] || "#eee");
//   }, [index, bgColors]);

//   const next = () => setIndex((i) => (i + 1) % data.length);
//   const prev = () => setIndex((i) => (i - 1 + data.length) % data.length);

//   const item = data[index];

//   return (
//     <div className="single-wrapper">
//       <div className="single-card" style={{ background: bg }}>
//         <CardComponent
//           item={item}
//           showMasu={showMasu}
//           styleType="single"
//           bgColor={bg}
//         />
//         {data.length > 1 && (
//           <div className="single-controls">
//             <button className="nav-btn" onClick={prev}>
//               ← Prev
//             </button>
//             <div style={{ margin: "0 12px", color: "#222", fontWeight: 700 }}>
//               {index + 1} / {data.length}
//             </div>
//             <button className="nav-btn" onClick={next}>
//               Next →
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { getRandomColor } from "../hooks/randomColer"; // make sure this returns a valid color
import "../styles/single.css";

export default function SingleCardView({ data = [], CardComponent, showMasu }) {
  const [index, setIndex] = useState(0);
  const [bg, setBg] = useState("#aa6b6bff"); // will be set to random

  useEffect(() => {
    setIndex(0);
  }, [data]);

  useEffect(() => {
    // pick a new random color every time the index changes
    setBg(getRandomColor());
  }, [index]);

  const next = () => setIndex((i) => (i + 1) % data.length);
  const prev = () => setIndex((i) => (i - 1 + data.length) % data.length);

  const item = data[index];

  return (
    <div className="single-wrapper">
      <div className="single-card" style={{ background: bg }}>
        <CardComponent
          item={item}
          showMasu={showMasu}
          styleType="single"
          bgColor={bg} // pass to card if it needs the same color
        />
        {data.length > 1 && (
          <div className="single-controls">
            <button className="nav-btn" onClick={prev}>
              ← Prev
            </button>
            <div style={{ margin: "0 12px", color: "#222", fontWeight: 700 }}>
              {index + 1} / {data.length}
            </div>
            <button className="nav-btn" onClick={next}>
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
