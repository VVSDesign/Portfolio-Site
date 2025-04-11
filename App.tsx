import React, { useState, useEffect } from 'react';
import { Smartphone, Palette, Github, Linkedin, Mail, ExternalLink, ChevronDown, FileText, Globe, Code, PaintBucket } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { Project, projects } from './data/projects';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Spline events
  const onLoad = (spline: any) => {
    // Set zoom level (2x closer)
    spline.setZoom(3);

    // Get the camera
    const camera = spline.camera;
    
    // Offset the camera to the right
    if (camera) {
      camera.position.x += 1000; // Adjust this value to move right
    }

    // Get the canvas element
    const canvas = spline.canvas;
    
    // Prevent all mouse wheel events
    canvas.addEventListener('wheel', (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    }, { passive: false });

    // Prevent mousewheel DOMMouseScroll (for older browsers)
    canvas.addEventListener('mousewheel', (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    }, { passive: false });

    canvas.addEventListener('DOMMouseScroll', (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    }, { passive: false });

    // Disable pinch-to-zoom on touch devices
    canvas.addEventListener('touchmove', (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, { passive: false });
  };

  const mobileApps = projects.filter(p => p.category === 'mobile');
  const designProjects = projects.filter(p => p.category === 'design');
  const webProjects = projects.filter(p => p.category === 'web');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <nav className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
          <div className="px-6">
            <div className="flex items-center justify-between h-16">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                DB
              </span>
              <div className="hidden md:flex space-x-8">
                <a href="#resume" className="text-gray-300 hover:text-green-400 transition-colors">Resume</a>
                <a href="#mobile-apps" className="text-gray-300 hover:text-green-400 transition-colors">Mobile Apps</a>
                <a href="#graphic-design" className="text-gray-300 hover:text-green-400 transition-colors">Graphic Design</a>
                <a href="#web-design" className="text-gray-300 hover:text-green-400 transition-colors">Web Design</a>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
              </div>
              <div className="md:hidden">
                <button className="text-gray-300 hover:text-green-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Spline
            scene="https://prod.spline.design/Xo390RgILmnH2tpF/scene.splinecode"
            className="w-full h-full"
            onLoad={onLoad}
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Davahn Brown
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center">
                <Smartphone className="w-6 h-6 mr-2 text-green-400" />
                <span>Mobile/Web Developer</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center">
                <Palette className="w-6 h-6 mr-2 text-emerald-400" />
                <span>Graphic Designer</span>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Crafting beautiful mobile experiences and creating stunning visual designs. 
              With over 5 years of experience in bringing ideas to life.
            </p>
            <p className="text-l text-gray-300 max-w-2xl mx-auto mb-12">
              (Have a little fun, click and drag)
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="www.linkedin.com/in/davahn-brown-b7872a10a" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </header>

      {/* Resume Section */}
      <section id="resume" className="bg-gradient-main py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <FileText className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-3xl font-bold">Resume</h2>
          </div>
          
          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Experience</h3>
            <div className="space-y-8">
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">Field Design Engineer</h4>
                <p className="text-green-400 mb-2">Apple • January 2023 - July 2023</p>
                <p className="text-gray-400">
                  End to end testing of cellular technologies that includes functional and stability testing, log analysis & debugging issues. 
                  App maintenance to assist in the automation of logs and reporting to improve workflow speed and quality.     
                  Scripting commands in shell and Python.
                </p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">Digital Strategy & Innovation</h4>
                <p className="text-green-400 mb-2">Miami Heat • April 2021 - August 2023</p>
                <p className="text-gray-400">
                  Serve as highly visible expert on the Miami HEAT app and overall IT troubleshooting, engaging with fans and troubleshooting any issues
                </p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">Technical Expert</h4>
                <p className="text-green-400 mb-2">Apple • October 2021 - Present</p>
                <p className="text-gray-400">
                  Perform modular hardware repair on iphones, run testing and diagnostics using extensive knowledge of both hardware, software, and design aspects of iphone
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="font-bold mb-4">Development</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Swift</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>React Native</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-[80%] h-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Three.js</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-[70%] h-full bg-green-400"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="font-bold mb-4">Design</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Photoshop</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Premiere Pro</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-[75%] h-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Blender</span>
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-[80%] h-full bg-green-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://docs.google.com/document/d/1OrYUzQEhCTT9FChdAhVVAfWGsJKpq6LgyiLYM-FsAM0/edit?usp=sharing" 
              className="inline-flex items-center px-6 py-3 bg-green-400 text-black rounded-full font-semibold hover:bg-green-500 transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Full Resume
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section id="mobile-apps" className="bg-gradient-main py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Smartphone className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-3xl font-bold">Mobile Apps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobileApps.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section id="graphic-design" className="bg-gradient-main py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <PaintBucket className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-3xl font-bold">Graphic Design</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Web Design Section */}
      <section id="web-design" className="bg-gradient-main py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Globe className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-3xl font-bold">Web Design</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {webProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-main py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <Mail className="w-8 h-8 text-green-400 mr-3" />
            <h2 className="text-3xl font-bold">Let's Create Together</h2>
          </div>
          <p className="text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a href="#" className="bg-black/50 backdrop-blur-sm p-6 rounded-lg hover:bg-black/60 transition-colors">
              <Github className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-gray-400">Check out my code</p>
            </a>
            <a href="#" className="bg-black/50 backdrop-blur-sm p-6 rounded-lg hover:bg-black/60 transition-colors">
              <Linkedin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </a>
            <a href="mailto:contact@example.com" className="bg-black/50 backdrop-blur-sm p-6 rounded-lg hover:bg-black/60 transition-colors">
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-400">Send me a message</p>
            </a>
          </div>
          <a 
            href="mailto:Davahn24@gmail.com" 
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2025 Davahn Brown. All rights reserved.</p>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
}

export default App;