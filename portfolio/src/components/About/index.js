import React from "react";
import HeadShot from "../../assets/headshot/headshot.jpg";

//very simple about me component that returns my picture and a short bio.
export default function AboutMe() {
  return (
    <section className="about">
      <img
        className="headshot "
        src={HeadShot}
        alt="Headshot of Humza Shaukat"
      />
      <p>
        My name is Humza Shaukat and I am a detail-oriented developer with 4
        years’ experience programming and conducting research in academia and at
        Merck & Co. I Received a Certificate in Full Stack Development from
        Rutgers University Coding Bootcamp with focus on the MERN stack and
        MySQL. Experienced with scripting for data analysis in Python and MATLAB
        as well as bioinformatics tools such as STAR Alignment, FASTQC,
        Trimmomatic, Samtools, as well as the Nextflow RNA-seq pipeline. I
        graduated from the University of Michigan with a Bachelor of Science in
        Neuroscience in 2018 while completing coursework learning C++ and R.
        While conducting research in the University of Michigan Department of
        Pharmacology, I taught myself Python and MATLAB to create scripts to
        analyze electrophysiology and immunohistochemistry data. After briefly
        working as a medical assistant, I began my current position as a
        Scientist for Parexel working onsite at Merck in Kenilworth, New Jersey.
        I am currently looking for positions within Software Engineering, Data
        Science, Data Engineering, and Bioinformatics.
      </p>
    </section>
  );
}
