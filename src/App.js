import { useState } from 'react';
import displayPicture from './dp.png';

const designProjects = [
  {
    title: 'Fixed Wing UAV',
    image: 'images/fixedwing.png',
    mobile_image: 'images/fixedwingmobile.png',
    summary: 'I conducted Multi-Disciplinary Optimization, with an emphasis on electric propulsion, by implementing governing equations in MATLAB to optimize airfoil parameters, wing size, sweep, tail size, and position for balanced UAV cruise and takeoff performance.',
    portfolio: {start: 4, end: 14}
  },  
  {
    title: 'Recumbent Bicycle',
    image: 'images/raftaar.png',
    mobile_image: 'images/raftaarmobile.png',
    summary: 'The project focused on designing a fully faired recumbent bicycle, achieving a 40% reduction in frontal area while optimizing ergonomics, aerodynamics, and handling. An aerodynamic fairing based on the NACA airfoil was designed. Additionally, a 60% cost reduction in mold manufacturing was achieved by using styrofoam for pattern production.',
    portfolio: {start: 15, end: 26}
  },
  {
    title: 'Quadcopter',
    image: 'images/uav.png',
    mobile_image:  'images/uavmobile.png',
    summary: 'The project involved designing the quadcopter frame based on industry standards, conducting topology optimization for weight and structure optimization, and using additive manufacturing for fabrication. This ensured a high-performance, lightweight quadcopter design aligned with industry standards.',
    portfolio: {start: 27, end: 36}
  },
  {
    title: 'Mobile Robotic Arm',
    image: 'images/robot.png',
    mobile_image:  'images/robotmobile.png',
    summary: 'Developed a cost-efficient mobile robotic arm system tailored for Small and Medium Enterprises (SMEs), designed to execute pick-up and place operations. Enhanced the arms design for weight and strength optimization using Topology Optimization techniques, resulting in a 30% reduction in the overall weight of the robotic arm.',
    portfolio: {start: 37, end: 41}
  }
];
const researchProjects = [
  {
    title: 'FSP Parameter Optimization',
    image: 'images/fsp.png',
    mobile_image:  'images/fsp.png',
    summary: 'In this project, I evaluated the effect of process parameters on Friction Stir Processing (FSP) of the Al5083 alloy using ANSYS 18.1. By constructing a 3-D thermomechanical model, I identified the optimal conditions for desired stir zone properties and published the findings in *Annales de Chimie - Science des Matériaux* in 2021.',
    portfolio: {start: 42, end: 52}
  }
];

const courseProjects = [
  {
    title: 'Impact of Wing Sweep',
    image: 'images/sweep.png',
    mobile_image: 'images/sweep.png',
    summary: 'In this project, I investigated the impact of wing sweep on aerodynamic factors using the Hess and Smith Panel Method in Python. The study analyzed the effects of sweep angle (𝝠) on lift, drag, and pitching moment coefficients and included a boundary layer code for thickness and transition point calculations, aiding in wing design optimization.',
    portfolio: {start: 53, end: 56}
  },
   {
    title: 'Beam Impact Test',
    image: 'images/stresstest.png',
    mobile_image: 'images/stresstest.png',
    summary: 'In my experimental stress analysis course, I conducted a beam impact test of PVC pipes using strain gauges. We examined impact resistance under quasi-static and dynamic loading by analyzing strain profiles on a simply supported PVC pipe. The findings revealed complex mechanical behaviors, enhancing predictive models for engineering applications.',
    portfolio: {start: 57, end: 63}
   }
];

const projectTypes = [
  {
    title: 'Design Projects',
    summary: 'In my design projects, I focus on creating innovative solutions that address real-world challenges. Leveraging my engineering expertise, I\'ve developed functional prototypes and conceptual designs across various domains, including robotics, electronics, and mechanical systems.',
    projects: designProjects
  },
  {
    title: 'Research Projects',
    summary: 'My research projects delve into the depths of scientific inquiry, where I explore cutting-edge topics in fields such as aerodynamics, material science, and structural engineering. Through rigorous experimentation and computational analysis, I seek to uncover new insights and push the boundaries of knowledge in these areas.',
    projects: researchProjects
  },
  {
    title: 'Course Projects',
    summary: 'In my course projects, I apply theoretical concepts learned in academia to practical scenarios, honing my problem-solving skills and deepening my understanding of core engineering principles. These projects provide hands-on experience and reinforce my academic learning.',
    projects: courseProjects
  }

]
function App() {
  const [openProject, setOpenProject] = useState(null);
  return (
    <div className={'relative h-full' + (openProject ? ' overflow-hidden' : ' overflow-y-auto')}>
      {
        openProject && 
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-white z-50 h-full overflow-y-auto">
          <div className='flex flex-col gap-4 max-w-screen-lg m-auto'>
            <div className='flex items-center justify-between sticky bg-white w-full top-0 p-6'>
              <h4 className='text-xl font-bold'>{openProject.title}</h4>
              <button onClick={() => setOpenProject(null)} className='flex gap-2 bg-stone-800 text-white rounded-2xl self-start p-2 pr-4 pl-4 mt-2 hover:bg-white hover:text-black transition-all duration-300 border-2 border-black'>Close</button>
            </div>
            <p className='text-lg p-6'>{openProject.summary}</p>
            {
              Array.from({length: openProject.portfolio.end - openProject.portfolio.start + 1}, (_, i) => i + openProject.portfolio.start).map(i => (
                <img src={'images/portfolio/portfolio_page-00'+( i < 10 ? ('0'+i) :i )+'.jpg'}/>
              ))
            }
            
          </div>
        </div>
      }
      <header className='w-full p-6 py-10 max-w-screen-lg m-auto pb-40'>
        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 max-w-full overflow-hidden'>
          <img className='p-8 pb-0 sm:w-[40%] sm:p-0' src={displayPicture} alt="Shourya Sahdev" />
          <span className='flex flex-1 flex-col gap-4 overflow-hidden'>
            <span className='flex flex-col items-center sm:items-start'>
              <h3 className='text-lg md:text-3xl'>Hello, I'm</h3>
              <h1 className='text-3xl font-bold md:text-6xl'>Shourya Sahdev</h1>
              <h2 className='text-xl md:text-4xl'>Mechanical Engineer</h2>
            </span>
            <p className='mt-2 text-xl text-base text-center  sm:text-left'>Driven mechanical engineer with expertise in design, robotics, and UAVs. Passionate about innovation, problem-solving, and creating impactful solutions.</p>
            <a href="/resume.pdf" target="_blank" className='bg-stone-800 text-white py-3 px-6 pr-4 self-center sm:self-start rounded-xl mt-4 flex gap-1 hover:bg-white hover:text-black transition-all duration-300 border-2 border-black'>
              View CV
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </a>
            {/* <span className='flex flex-col'>
              <h3>ssahdev2@illinois.edu</h3>
              <h3>+1 447 902 0879</h3>
            </span> */}
          </span>
        </div>
      </header>
      {
        projectTypes.map(
          pt => (
          <section className='max-w-screen-lg m-auto p-6'>
            <h1 className='text-4xl font-bold'>{pt.title}</h1>
            <p className='text-lg pt-4'>{pt.summary}</p>
              {
                pt.projects.map(
                  project => 
                  (
                    <div key={project.title} className='overflow-hidden relative max-w-full my-20 flex flex-col-reverse md:flex-row flex-nowrap items-center gap-4 bg-gradient-to-br from-gray-50 to-neutral-100 rounded-3xl'>
                      <span className='md:self-start p-6 z-10 md:pl-10 md:py-10 md:min-w-96 md:max-w-96 flex flex-col gap-2 relative'>
                        <h4 className='text-2xl font-bold'>{project.title}</h4>
                        <p className='text-lg text-black/60'>{project.summary}</p>
                        <button onClick={() => setOpenProject(project)} className='flex gap-2 bg-stone-800 text-white rounded-xl self-start p-2 pr-2 pl-4 mt-2 hover:bg-neutral-100 hover:text-black transition-all duration-300 border-2 border-black'>
                          Explore
                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                        </button>
                      </span>
                      <span className='hidden md:block flex-1 md:self-end'>
                        <img className='flex-1 md:self-end' src={project.image} alt={project.title} />
                      </span>
                      <span className='md:hidden flex-1 md:self-end'>
                        <img className='flex-1 md:self-end' src={project.mobile_image} alt={project.title} />
                      </span>
                    </div>
                  )
                )
              }
          </section>
          )
      )
    }

    </div>
  );
}

export default App;
