export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  longDescription?: string;
  features?: string[];
  link?: string;
  category: 'mobile' | 'web' | 'design';
}

export const projects: Project[] = [
  {
    id: 'lockstars',
    title: 'LockStars',
    description: 'Innovative social media sports gambling app, that brings a community approach to betting.',
    longDescription: 'LockStars revolutionizes sports betting by combining social media elements with gambling insights. Users can follow top performers, share their picks, and engage with a community of sports enthusiasts.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    features: [
      'Real-time odds tracking',
      'Social feed with betting insights',
      'Performance analytics dashboard',
      'Secure payment integration',
      'Live chat and notifications'
    ],
    category: 'mobile'
  },
  {
    id: 'vision-pro',
    title: 'Vision Pro Gaming',
    description: 'Feature-rich gaming experience in the ground breaking realm of spatial computing.',
    longDescription: 'An immersive gaming platform built specifically for Apple Vision Pro, leveraging spatial computing to create unprecedented gaming experiences.',
    image: 'src/Image folder/vision pro cover photo.jpg',
    technologies: ['RealityKit', 'SwiftUI', 'ARKit', 'Metal'],
    features: [
      'Spatial awareness gaming',
      'Hand gesture controls',
      'Multiplayer support',
      'Dynamic environment mapping',
      'Voice commands integration'
    ],
    category: 'mobile'
  },
  {
    id: 'social-app',
    title: 'Social Media App',
    description: 'Real-time messaging and content sharing platform.',
    longDescription: 'A modern social media application focused on real-time communication and seamless content sharing, built with Swift and SwiftUI.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    technologies: ['Swift', 'SwiftUI', 'Firebase', 'CloudKit'],
    features: [
      'Real-time messaging',
      'Story sharing',
      'Rich media support',
      'Push notifications',
      'User profiles'
    ],
    category: 'mobile'
  },
  {
    id: '3d-modeling',
    title: '3D Modeling',
    description: 'Custom 3D assets, used for mobile apps, web design, and game design.',
    longDescription: 'Creating high-quality 3D models and animations for various digital platforms, focusing on realistic rendering and optimal performance.',
    image: 'src/Image folder/Screenshot 2025-02-24 at 12.34.59 AM.png',
    technologies: ['Blender', 'Cinema 4D', 'Substance Painter'],
    features: [
      'High-poly modeling',
      'Texture creation',
      'Animation rigging',
      'Lighting setup',
      'Scene composition'
    ],
    category: 'design'
  },
  {
    id: 'cover-arts',
    title: 'Cover Arts',
    description: 'Engaging social media content.',
    longDescription: 'Creating eye-catching cover art and social media content that captures attention and conveys brand messages effectively.',
    image: 'src/Image folder/IMG_0028.jpg',
    technologies: ['Photoshop', 'Illustrator', 'After Effects'],
    features: [
      'Brand identity design',
      'Social media templates',
      'Motion graphics',
      'Visual storytelling',
      'Campaign design'
    ],
    category: 'design'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centered interface and experience design for digital products.',
    longDescription: 'Crafting intuitive and engaging user interfaces that prioritize user experience while maintaining aesthetic appeal.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c',
    technologies: ['Figma', 'Sketch', 'Principle'],
    features: [
      'Wireframing',
      'Prototyping',
      'User research',
      'Interaction design',
      'Design systems'
    ],
    category: 'design'
  },
  {
    id: 'az-properties',
    title: 'AZ Properties',
    description: 'A modern e-commerce platform with seamless user experience and responsive design.',
    longDescription: 'A comprehensive real estate platform that streamlines property searching, viewing, and purchasing processes.',
    image: 'src/Image folder/AZ site SS.jpg',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    features: [
      'Advanced property search',
      'Virtual tours',
      'Appointment scheduling',
      'Secure payments',
      'Property comparisons'
    ],
    category: 'web'
  },
  {
    id: 'vahn-visuals',
    title: 'Vahn Visuals Website',
    description: 'A creative portfolio showcasing work with smooth animations and interactive elements.',
    longDescription: 'A dynamic portfolio website featuring interactive 3D elements and smooth animations to showcase creative work and services.',
    image: 'src/Image folder/VVS Site Home Page SS.png',
    technologies: ['Vue.js', 'GSAP', 'Three.js', 'WebGL'],
    features: [
      '3D interactive elements',
      'Custom animations',
      'Responsive design',
      'Portfolio gallery',
      'Contact integration'
    ],
    category: 'web'
  }
];