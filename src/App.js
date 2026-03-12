import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showResponse, setShowResponse] = useState(false);
  const [musicPlayed, setMusicPlayed] = useState(false);

  // Play music on first click
  useEffect(() => {
    const handleClick = () => {
      if (!musicPlayed) {
        const music = document.getElementById("music");
        if (music) {
          music.volume = 0.4;
          music.play().catch(() => console.log("Music blocked by browser"));
        }
        setMusicPlayed(true);
      }
    };
    document.addEventListener("click", handleClick, { once: true });
    return () => document.removeEventListener("click", handleClick);
  }, [musicPlayed]);

  // Floating roses
  useEffect(() => {
    const interval = setInterval(() => {
      const r = document.createElement("div");
      r.className = "rose";
      r.innerHTML = "🌹";
      r.style.left = Math.random() * 100 + "vw"; // random horizontal
      r.style.animationDuration = (6 + Math.random() * 6) + "s"; // random speed
      r.style.setProperty('--drift', (Math.random() * 100 - 50) + "px"); // random sideways
      document.body.appendChild(r);
      setTimeout(() => r.remove(), 12000);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  // Floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      const h = document.createElement("div");
      h.className = "heart";
      h.innerHTML = "💖";
      h.style.left = Math.random() * 100 + "vw";
      h.style.animationDuration = (7 + Math.random() * 5) + "s";
      h.style.setProperty('--drift', (Math.random() * 120 - 60) + "px");
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 12000);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <audio id="music" loop>
        <source
          src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8e2e7c87c.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Fullscreen background */}
      <img src={process.env.PUBLIC_URL + '/sunset.jpg'} alt="Sunset river" className="background" />

      <div className="overlay">
        <div className="intro">
          <h1>For Someone Truly Special…</h1>
          <p>Racheal Bucher</p>
        </div>

        <div className="card">
          <p>
            If the world had only <b>one hour left</b>,  
            my first instinct would be to hold my mom close,  
            and silently thank her for everything she has done for me.
          </p>

          <p>But then… my thoughts would turn to you.</p>

          <p>
            I would want to ask you to spend that hour together 
            nothing grand, nothing complicated,  
            just something real, something gentle, something that feels like <b>us</b>.
          </p>

          <p>
            Maybe we would go to <b>White Rock Lake</b>,  
            where the sky melts into shades of gold and pink,  
            and the water mirrors the sunset perfectly.
          </p>

          <p>
            We could run slowly along the shore,  
            laugh at silly things, share quiet secrets,  
            and watch the world glow as it fades into twilight.
          </p>

          <p>And maybe, just for that hour,  
          we would forget that time is even running out.</p>

          <div className="question">
            If the world had only one hour left…<br />
            <b>would you spend it with me?</b>
          </div>

          <button onClick={() => setShowResponse(true)}>
            🌅 Yes, let's run together at White Rock
          </button>

          {showResponse && (
            <div className="response">
              <p>If you'd like, write down what your last hour would look like with me…</p>
              <textarea placeholder="Your answer..." />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;