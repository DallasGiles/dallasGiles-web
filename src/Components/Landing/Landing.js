import DarkLine from "../Lines/Dark";
import "./Landing.css";
import LeftSocialMediaIcons from "./LeftSocialMediaIcons";


function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="landing__content">
        <p className="landing__eyebrow"><span aria-hidden="true">✦</span> Tesla Autopilot Engineer</p>
        <h1 className="landing__mainText">I turn complex technical work into measurable progress.</h1>
        <p className="landing__intro">I’m Dallas Giles. I bring engineers, quality teams, and priorities together to move ambitious projects forward—clearly, efficiently, and with results.</p>
        <div className="landing__actions">
          <a className="landing__button landing__button--primary" href="#project">See my impact</a>
          <a className="landing__button" href="/DallasGiles.pdf" target="_blank" rel="noreferrer">View résumé</a>
        </div>
        <p className="landing__availability"><span /> Open to the right project leadership opportunity</p>
      </div>
      
      <LeftSocialMediaIcons />

      <DarkLine />
    </section>
  );
}

export default Landing;
