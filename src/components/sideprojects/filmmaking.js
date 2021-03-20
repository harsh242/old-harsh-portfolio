import React from "react";
import Techniti from "../../assets/img/films/Techniti.jpg";
import Auli from "../../assets/img/films/Auli.jpg";
import ToshValley from "../../assets/img/films/Tosh_Valley.jpg";
import Richa from "../../assets/img/films/Richa.jpg";
import Utkansh from "../../assets/img/films/Utkansh.jpg";
import Card from "../projects/card";

function Filmmaking() {
  return (
    <div className="grid md:grid-cols-2 gap-16 fade-in">
      <Card
        name="Techniti Aftermovie |Techno-Managerial Fest | NIT Jalandhar"
        image={Techniti}
        url="https://www.youtube.com/watch?v=dFC98MLN4Rc&ab_channel=TheHODOPHILES"
        button="Watch"
      />
      <Card
        name="Unexplored Cinematic Auli"
        image={Auli}
        url="https://www.youtube.com/watch?v=eOfwFyae8cw&t=841s&ab_channel=TheHODOPHILES"
        button="Watch"
      />
      <Card
        name="Tosh Valley"
        image={ToshValley}
        url="https://www.youtube.com/watch?v=8g0n9NVZp8o&ab_channel=TheHODOPHILES"
        button="Watch"
      />
      <Card
        name="SpeakerBox x Richa"
        image={Richa}
        url="https://www.instagram.com/p/B11DHiRhd44/"
        button="Watch"
      />
      <Card
        name="UTKANSH '19 || Official Aftermovie || NIT Jalandhar"
        image={Utkansh}
        url="https://www.youtube.com/watch?v=fDOFBJrPecc&ab_channel=TheHODOPHILES"
        button="Watch"
      />
    </div>
  );
}

export default Filmmaking;
