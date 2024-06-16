import { useState } from 'react';
import displayPicture from './dp.png';

const designProjects = [
  {
    title: 'Fixed Wing UAV',
    image: 'images/fixedwing.png',
    summary: 'Explore the meticulous process of designing and optimizing a Fixed Wing UAV (Unmanned Aerial Vehicle). Through iterative weight estimations and airfoil selections, this project focuses on precision engineering and aerodynamic efficiency. Join us as we delve into innovative design concepts and simulation techniques aimed at creating a versatile aerial platform for various missions.',
    portfolio: {start: 4, end: 14}
  },  
  {
    title: 'Recumbent Bicycle',
    image: 'images/raftaar.png' /*'images/recumbent-bicycle.jpg'*/,
    summary: 'Dive into the world of human-powered vehicles with the design and development of a fully faired recumbent bicycle. Witness the integration of ergonomics, aerodynamics, and mechanical design in Team Raftaar\'s creation. From optimized riding postures to advanced fairing designs, this project showcases the pursuit of speed and efficiency in human-centric engineering.',
    portfolio: {start: 15, end: 26}
  },
  {
    title: 'Quadcopter',
    image: 'images/uav.png' /*'images/quadcopter.jpg'*/,
    summary: 'Delve into the intricacies of aerial robotics through the design and optimization of a quadcopter. This project involves refining weight distribution, enhancing propulsion efficiency, and fine-tuning control algorithms. By prioritizing stability and maneuverability, the quadcopter aims to achieve precise flight dynamics and reliable autonomous control systems.',
    portfolio: {start: 27, end: 36}
  },
  {
    title: 'Mobile Robotic Arm',
    image: 'images/robot.png' /*'images/robotic-arm.jpg' */,
    summary: 'Enter the realm of automation with the design and optimization of a mobile robotic arm. Explore structural design, topology optimization, and performance enhancement to achieve precise robotic manipulation. Through CAD modeling and finite element analysis, this project highlights the convergence of mechanical prowess and technological innovation in robotics.',
    portfolio: {start: 37, end: 41}
  }
];
const researchProjects = [
  {
    title: 'Evaluating The Effect Of Process Parameters On Fsp Of Al5083 Alloy',
    image: 'images/fsp.png' /* 'images/ai5083.jpg'*/,
    summary: 'Uncover the intricacies of solid-state metal processing through an analysis of Friction Stir Processing (FSP) of Al5083 alloy. Investigate the influence of process parameters on material behavior through numerical simulations and experimental trials. This study provides insights into optimizing metal joining techniques through an understanding of temperature gradients and stress distributions.',
    portfolio: {start: 42, end: 52}
  }
];

const courseProjects = [
  {
    title: 'Impact of Wing Sweep',
    image: 'images/sweep.png' /*'images/wing-sweep.jpg' */,
    summary: 'Delve into aerodynamics research by investigating the impact of wing sweep using the Hess-Smith Panel method implemented in Python. This project focuses on computational analysis to understand how wing sweep affects lift, drag, and overall aerodynamic performance. Through simulation and analysis, the goal is to provide insights into the design and optimization of swept-wing configurations for various aerospace applications.',
    portfolio: {start: 53, end: 56}
  },
   {
    title: 'Beam Impact Test',
    image: 'images/stresstest.png' /*'images/pipes.jpg' */,
    summary: 'Explore the mechanical behavior of PVC pipes under different loading conditions through a beam impact test. This project involves studying the responses of PVC pipes to both quasi-static and dynamic loading using strain gauge measurements. By analyzing the deformation and failure modes under various loading scenarios, the aim is to enhance understanding of the structural performance of PVC pipes and inform engineering practices for their design and application.',
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
    summary: 'In my course projects, I apply theoretical concepts learned in academia to practical scenarios, honing my problem-solving skills and deepening my understanding of core engineering principles. From finite element analysis to circuit design, these projects offer hands-on experience and reinforce my academic learning.',
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
              <h1 className='text-xl'>{openProject.title}</h1>
              <button onClick={() => setOpenProject(null)}>Close</button>
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
          <img className='p-8 pb-0 sm:w-[50%] sm:p-16' src={displayPicture} alt="Shourya Sahdev" />
          <span className='flex flex-1 flex-col gap-4 overflow-hidden'>
            <span className='flex flex-col items-center sm:items-start'>
              <h3 className='text-xl'>Hello, I'm</h3>
              <h1 className='text-3xl font-bold md:text-5xl'>Shourya Sahdev</h1>
              <h2 className='text-xl md:text-3xl'>Mechanical Engineer</h2>
            </span>
            <p className='mt-2 text-base text-center  sm:text-left'>Lorem ipsum dolorsitamet,consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaliqua.Quisipsum suspendisseultricesgravida.facilisis.</p>
            <a href="#" className='bg-black text-white py-3 px-6 pr-4 self-center sm:self-start rounded-xl mt-4 flex gap-1'>
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
            <h1 className='text-4xl'>{pt.title}</h1>
            <p className='text-lg pt-4'>{pt.summary}</p>
              {
                pt.projects.map(
                  project => 
                  (
                    <div key={project.title} className='relative max-w-full py-20 flex flex-col-reverse md:flex-row flex-nowrap items-center gap-4'>
                      <span className='z-10 md:min-w-80 md:max-w-80 flex flex-col gap-2 relative'>
                        <h2 className='text-lg uppercase tracking-wide'>{project.title}</h2>
                        <p className='text-xl text-black/50'>{project.summary}</p>
                        <button onClick={() => setOpenProject(project)} className='bg-black text-white rounded-xl self-start p-2 px-10 mt-2'>See More</button>
                      </span>
                      <span>
                        <img className='flex-1' src={project.image} alt={project.title} />
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
