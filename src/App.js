import React,{useEffect, useState} from 'react';
import './App.scss';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return() => window.removeEventListener("scroll", handleScroll);
  },[])

  const renderContent = () => (
    <>
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">Closure</h1>
        <h2 className="Parallax__content__heading__caption">
          This is a good heading caption yeahhh!
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>1. Like the video</b> Because of the video
        </p>
        <p>
          <b>2. Like the video</b> Look at me wee
        </p>
        <p>
          <b>3. Like the video</b> Lets go
        </p>
      </div>
    </>
  )
  return (
    <section className="Parallax">
      <div className="Parallax__background" style={{transform: `translateY(${offsetY * 0.5}px)`}}/>
      <div className="Parallax__background-triangles" />
      <div className="Parallax__content">{renderContent()}</div>
    </section>
  );
}

export default App;
