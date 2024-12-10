import "./styles.css";
import { useState } from 'react';
export default function App() {
  return (
    <div>
      {/* TextExpander with Arial font */}
      <TextExpander fonttext="Arial">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      {/* TextExpander with Georgia font */}
      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="blue"
        fonttext="TimesNewRoman"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      {/* TextExpander with Courier New font */}
      <TextExpander expanded={true} className="box" fonttext="Courier New">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander> 
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "show less",
  buttonColor = "blue",
  expanded = false, 
  className,
  fonttext = 'Roboto',
  children })
  
  {

const [isexpanded, setexpaned]  =useState(expanded)

const displaytext = isexpanded ? children : children.split(' ').slice(0, collapsedNumWords).join(' ') + "...";

const buttonstyle = {
  background : 'none',
  border : 'none',
  font: 'inherit',
  cursor : 'pointer',
  marginLeft : '6px',
  color : buttonColor,
}

  return <div className = {className} style  = {{
    border : "1px solid black",
    borderRadius : "5px",
    margin  : "3px"
  }}> 
  <span
  style = {{ margin : "2px",
    font : fonttext,
  }}>{displaytext}</span>
  <button onClick = {() => setexpaned((exp) => !exp )} style = {buttonstyle}>{isexpanded ? collapseButtonText  : expandButtonText}</button>
  </div>;
}
