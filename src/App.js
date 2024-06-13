import { useState } from 'react';
import displayPicture from './dp.jpg';

const designProjects = [
  {
    title: 'Fixed Wing UAV',
    image: 'images/fixed-wing-uav.jpg',
    summary: 'Explore the meticulous process of designing and optimizing a Fixed Wing UAV (Unmanned Aerial Vehicle). Through iterative weight estimations and airfoil selections, this project focuses on precision engineering and aerodynamic efficiency. Join us as we delve into innovative design concepts and simulation techniques aimed at creating a versatile aerial platform for various missions.',
    portfolio: {start: 4, end: 14}
  },  
  {
    title: 'Recumbent Bicycle',
    image: 'images/recumbent-bicycle.jpg',
    summary: 'Dive into the world of human-powered vehicles with the design and development of a fully faired recumbent bicycle. Witness the integration of ergonomics, aerodynamics, and mechanical design in Team Raftaar\'s creation. From optimized riding postures to advanced fairing designs, this project showcases the pursuit of speed and efficiency in human-centric engineering.',
    portfolio: {start: 15, end: 26}
  },
  {
    title: 'Quadcopter',
    image: 'images/quadcopter.jpg',
    summary: 'Delve into the intricacies of aerial robotics through the design and optimization of a quadcopter. This project involves refining weight distribution, enhancing propulsion efficiency, and fine-tuning control algorithms. By prioritizing stability and maneuverability, the quadcopter aims to achieve precise flight dynamics and reliable autonomous control systems.',
    portfolio: {start: 27, end: 36}
  },
  {
    title: 'Mobile Robotic Arm',
    image: 'images/robotic-arm.jpg',
    summary: 'Enter the realm of automation with the design and optimization of a mobile robotic arm. Explore structural design, topology optimization, and performance enhancement to achieve precise robotic manipulation. Through CAD modeling and finite element analysis, this project highlights the convergence of mechanical prowess and technological innovation in robotics.',
    portfolio: {start: 37, end: 41}
  }
];
const researchProjects = [
  {
    title: 'Evaluating The Effect Of Process Parameters On Fsp Of Al5083 Alloy',
    image: 'images/ai5083.jpg',
    summary: 'Uncover the intricacies of solid-state metal processing through an analysis of Friction Stir Processing (FSP) of Al5083 alloy. Investigate the influence of process parameters on material behavior through numerical simulations and experimental trials. This study provides insights into optimizing metal joining techniques through an understanding of temperature gradients and stress distributions.',
    portfolio: {start: 42, end: 52}
  }
];

const courseProjects = [
  {
    title: 'Impact of Wing Sweep',
    image: 'images/wing-sweep.jpg',
    summary: 'Delve into aerodynamics research by investigating the impact of wing sweep using the Hess-Smith Panel method implemented in Python. This project focuses on computational analysis to understand how wing sweep affects lift, drag, and overall aerodynamic performance. Through simulation and analysis, the goal is to provide insights into the design and optimization of swept-wing configurations for various aerospace applications.',
    portfolio: {start: 53, end: 56}
  },
   {
    title: 'Beam Impact Test',
    image: 'images/pipes.jpg',
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
        <div className='flex flex-col sm:flex-row sm:items-center gap-8'>
          <img className='w-40' src={displayPicture} alt="Shourya Sahdev" />
          <span className='flex flex-col gap-4'>
            <span>
              <h1 className='text-3xl font-medium md:text-5xl'>Shourya Sahdev</h1>
              <h2 className='text-xl md:text-2xl'>Work Portfolio</h2>
            </span>
            <span className='flex flex-col'>
              <h3>ssahdev2@illinois.edu</h3>
              <h3>+1 447 902 0879</h3>
            </span>
          </span>
        </div>
          <p className='mt-8 text-base'>I'm an engineer and researcher deeply passionate about unraveling the complexities of mechanical systems. From exploring the aerodynamic performance of quadcopters to analyzing the impact responses of PVC pipes, my work spans a diverse range of projects. Using computational methods like the Hess-Smith Panel method in Python, I delve into the intricacies of aerodynamics, while my expertise in strain gauge measurements offers valuable insights into material behavior under dynamic loading conditions. Through meticulous experimentation and theoretical analysis, I strive to advance engineering knowledge and contribute to enhancing the reliability of structural systems across various applications.</p>
      </header>
      {projectTypes.map(pt => (<section className='max-w-screen-lg m-auto p-6'>
        <h1 className='text-4xl'>{pt.title}</h1>
        <p className='text-lg pt-4'>{pt.summary}</p>
          {pt.projects.map(project => (
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
          ))}
      </section>))}

    </div>
  );
}

export default App;
