import "./Projects.css";

const impact = [
  { metric: ">7%", title: "Improved system performance", body: "Developed a solution that reduced Full Self-Driving interventions by more than 7% in a targeted driving scenario." },
  { metric: ">6%", title: "Exceeded project expectations", body: "Delivered results that exceeded project expectations by more than 6% through focused prioritization and execution." },
  { metric: "12%", title: "Increased team effectiveness", body: "Improved overall team effectiveness by 12% by strengthening handoffs, accelerating workflows, and refining team processes." },
];

function Projects() {
  return (
    <section id="project" className="impact">
      <div className="impact__heading">
        <p className="impact__kicker">Selected outcomes</p>
        <h2>Impact at scale</h2>
        <p>Results from working across engineering and quality teams on complex, high-stakes projects.</p>
      </div>
      <div className="impact__grid">
        {impact.map((item) => (
          <article className="impact__card" key={item.title}>
            <p className="impact__metric">{item.metric}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
      <div className="impact__operations">
        <p className="impact__number">20–60</p>
        <div>
          <h3>Cross-functional coordination</h3>
          <p>Partnered primarily with QA and engineering, with regular leadership collaboration. Supported teams of varying sizes, trained new hires, improved handoffs, and increased delivery speed across multiple projects.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
