import React from "react";
import Dip from "../../assets/img/animation/Dip.jpg";
import Heer from "../../assets/img/animation/Heer.jpg";
import Jalebi from "../../assets/img/animation/Jalebi_Baby.jpg";
import TumJab from "../../assets/img/animation/Tum_Jab_Pass.jpg";
import Card from "../projects/card";

function Animation() {
  return (
    <div className="grid md:grid-cols-2 gap-16 fade-in">
      <Card
        name="Dip x Buttsss"
        image={Dip}
        url="https://www.instagram.com/p/CDD8uEZpWEq/"
        button="Watch Animation"
      />
      <Card
        name="Heer aur Ranjha"
        image={Heer}
        url="https://www.instagram.com/p/CDovdOsgnb1/"
        button="Watch Animation"
      />
      <Card
        name="Jalebi Baby"
        image={Jalebi}
        url="https://www.instagram.com/p/CDOrk5WpS6s/"
        button="Watch Animation"
      />
      <Card
        name="Tum Jab Pass"
        image={TumJab}
        url="https://www.instagram.com/p/CAaowPijluZ/"
        button="Watch Animation"
      />
    </div>
  );
}

export default Animation;
