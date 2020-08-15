import React from 'react';
import Next from '../projects/next';
import pack from '../../assets/img/pack/hero.jpg';
import pack01 from '../../assets/img/pack/pack (1).jpg';
import pack02 from '../../assets/img/pack/pack (2).jpg';
import pack03 from '../../assets/img/pack/pack (3).jpg';
import pack04 from '../../assets/img/pack/pack (4).jpg';
import pack05 from '../../assets/img/pack/pack (5).jpg';
import pack06 from '../../assets/img/pack/pack (6).jpg';
import pack07 from '../../assets/img/pack/pack (7).jpg';
import pack08 from '../../assets/img/pack/pack (8).jpg';
import pack09 from '../../assets/img/pack/pack (9).jpg';
import pack10 from '../../assets/img/pack/pack (10).jpg';
import pack11 from '../../assets/img/pack/pack (11).jpg';
import pack12 from '../../assets/img/pack/pack (12).jpg';


class Pack extends React.Component {

  render(){
  return (
 
    <div id="pack">
      <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
    <img alt="pack hero" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack}/>
    <div className="intro mb-5">
     <h1 className="text-gray-900 text-3xl title-font font-medium mt-5 mb-2">About the Project</h1>
     <p className="text-xl">This is a project I did for D'source Corona Design Challenge hosted by IDC IIT Bombay along with my friend Maninder.</p>
     <h1 className="text-gray-900 text-3xl title-font font-medium mt-5 mb-2">Project Timeline</h1>
     <p className="text-xl">05 Days : Yess!!! we completed the project in just five days</p>
     </div>
     <h1 className="text-gray-900 text-3xl title-font font-medium mt-5 mb-2">Promo Video</h1>
     <p className="text-xl">This is a cinematic promo video I made for the project to get the insight about the PACK in under one minute.</p>
     <iframe className="mt-2" width="1280" height="630" src="https://www.youtube.com/embed/og0396gUtYc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <div className="documentation mt-5 mb-5">
     <h1 className="text-gray-900 text-3xl title-font font-medium mt-5 mb-2">Case Study</h1>
     <img alt="pack 1" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack01}/>
     <img alt="pack 2" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack02}/>
     <img alt="pack 3" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack03}/>
     <img alt="pack 4" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack04}/>
     <img alt="pack 5" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack05}/>
     <img alt="pack 6" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack06}/>
     <img alt="pack 7" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack07}/>
     <img alt="pack 8" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack08}/>
     <img alt="pack 9" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack09}/>
     <img alt="pack10" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack10}/>
     <img alt="pack11" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack11}/>
     <img alt="pack12" class=" w-full lg:h-auto  object-scale-down object-center rounded" src={pack12}/>
     </div>
     <h1 className="text-gray-900 text-5xl title-font font-medium mt-5 mt-5">Next</h1>
     <Next/>
      </div>
    </div>
      </section>
    </div>
 

  );
  

}
}

export default Pack;
