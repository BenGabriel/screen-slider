import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const initialState = {
    skew: 1000,
    delta: 0,
  };

  const [stuff, setStuff] = useState(initialState);

  const [X, setX] = useState(0);

  const wrapper = useRef(null);
  const handle = useRef(null);
  const topLayer = useRef(null);

  useEffect(() => {
    handleMove(X);
  }, []);

  const handleMove = (e) => {
    setX(e.clientX);
    setStuff({
      ...stuff,
      delta: (X - window.innerWidth / 2) * 0.5,
    });
    handle.current.style.left = e.clientX + stuff.delta + "px";
    topLayer.current.style.width = e.clientX + stuff.skew + stuff.delta + "px";
  };
  return (
    <section
      id="wrapper"
      className="skewed"
      onMouseMove={handleMove}
      ref={wrapper}
    >
      <div className="layer bottom">
        <div className="content-wrap">
          <div className="content-body">
            <h1>Look Sharp</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem consequuntur iure alias praesentium eligendi et ab
              adipisci sit dignissimos ipsum!
            </p>
          </div>
          <img src="img/icon-logo.png" alt="" />
        </div>
      </div>

      <div className="layer top" ref={topLayer}>
        <div className="content-wrap">
          <div className="content-body">
            <h1>Stay Cool</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem consequuntur iure alias praesentium eligendi et ab
              adipisci sit dignissimos ipsum!
            </p>
          </div>
          <img src="img/icon-logo333.png" alt="" />
        </div>
      </div>

      <div className="handle" ref={handle}></div>
    </section>
  );
};

export default Slider;
