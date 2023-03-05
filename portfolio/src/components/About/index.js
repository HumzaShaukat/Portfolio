import React from "react";
import HeadShot from "../../assets/headshot/headshot.jpg";

export default function AboutMe() {
  return (
    <section className="about">
      <img
        className="headshot "
        src={HeadShot}
        alt="Headshot of Humza Shaukat"
      />
      <p>
        My name is Humza Shaukat. I currently live in Franklin Park, New Jersey
        and am currently working on completing the Rutgers Coding Bootcamp
        focused on web development. I graduated from the University of Michigan
        with a Bachelor of Science in Neuroscience in 2018 while completing
        coursework learning C++ and R. While conducting research in the
        University of Michigan Department of Pharmacology, I taught myself
        Python and MATLAB to create scripts to analyze electrophysiology and
        immunohistochemistry data. After briefly working as a medical assistant,
        I began my current position as a Scientist for Parexel working onsite at
        Merck in Kenilworth, New Jersey. I am currently looking for positions in
        Data Science, Data Engineering, Backend Development, and Full-Stack
        Development.
      </p>
    </section>
  );
}
