import LightLine from "../Lines/Light";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <p className="about__kicker">Technical context. Project focus.</p>
        <h2 className="about__heading">About me</h2>
        <p className="about__body">
          I’m an Autopilot Engineer at <span className="about__specialText">Tesla</span>, where I’ve worked on the Full Self-Driving team in a fast-moving, highly technical environment. My strongest work happens where execution, coordination, and continuous improvement meet.
        </p>
        <p className="about__body">
          I’ve coordinated with quality and engineering teams ranging from roughly 20 to 60 people, helped align priorities, improved handoffs, trained new hires, and kept work moving across multiple projects. I’m comfortable understanding technical detail, but I’m most energized by <span className="about__specialText">creating clarity and momentum</span> around it.
        </p>
        <p className="about__body">
          I’m interested in project management opportunities where I can help technical teams plan well, communicate clearly, and deliver meaningful outcomes. I’m particularly drawn to tech-adjacent work with ambitious people and difficult problems. <NavHashLink className="about__externLink" smooth to="#contact">Let’s talk.</NavHashLink>
        </p>
      </div>
      <img
        className="about__headshot"
        src="/images/headshot.jpeg"
        alt="Portrait of Dallas Giles"
        width="268"
        height="400"
        loading="lazy"
      />
      <LightLine />
    </section>
  );
}

export default About;
