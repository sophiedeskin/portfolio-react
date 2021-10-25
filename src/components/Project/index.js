import React from 'react'
import codingjobs from '../../assets/projects/coding-jobs.png';
import { tweakName } from '../../utils/helpers.js';
 
export default function Project(
     { project }
    ) {
    const { name, repo, link, description } = project;

     return (  
<div className="max-w-lg mx-auto project" key={name}>
  <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
      <a href={link}>
          <img className="rounded-t-lg" src={require(`../../assets/projects/${name}.png`)} alt={tweakName(name)}/>
      </a>
      <div className="p-5 card">
          <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{tweakName(name)}</h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">{description}</p>
          <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={repo}>
              Github Link
          </a>
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
