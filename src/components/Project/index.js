import React from 'react'
import './project.css'

import { tweakName } from '../../utils/helpers.js';
 
export default function Project(
     { project }
    ) {
    const { name, repo, link, description, image } = project;

     return (  
         <div className="all p-6">
<div className="mx-auto project" key={name}>
  <div className="bg-white shadow-md border border-gray-200 rounded-lg text-gray-700 ">
      {/* <a href={link} target="_blank"> */}
          <img className="rounded-t-lg cursor-auto" src={image} alt={tweakName(name)}/>
      {/* </a> */}
      <div className="p-5 card">
          <a href={link} target="_blank">
              <h5 className="text-gray-700 font-bold text-2xl tracking-tight mb-2">{tweakName(name)} Active Link</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">{description}</p>
          <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={repo} target="_blank">
              Github Link
          </a>
      </div>
  </div>

</div>
</div>

     )
 }


// export default function Project() {
//     return (
//         <div>
      
//     </div>
//     )
// }
