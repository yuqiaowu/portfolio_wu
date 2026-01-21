import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CoreAbilities } from "./components/CoreAbilities";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Thinking } from "./components/Thinking";
import { OtherWritings } from "./components/OtherWritings";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { SocialFloatingPanel } from "./components/SocialFloatingPanel";
import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("zh");

  return (
    <div className="min-h-screen">
      <Navigation currentLang={language} onLangChange={setLanguage} />
      {/* <SocialFloatingPanel /> */}
      <div id="hero">
        <Hero language={language} />
      </div>
      <div id="about">
        <About language={language} />
      </div>
      <div id="abilities">
        <CoreAbilities language={language} />
      </div>
      <div id="projects">
        <FeaturedProjects language={language} />
      </div>
      <div id="thinking">
        <Thinking language={language} />
      </div>
      <div id="other">
        <OtherWritings language={language} />
      </div>
      <div id="contact">
        <Contact language={language} />
      </div>
    </div>
  );
}