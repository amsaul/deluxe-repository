import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'Commercial',
    location: 'Buruburu, Nairobi',
    description: 'A sustainable office complex designed to maximize natural light and employee wellness.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    challenge: 'Integrating sustainable features while maintaining aesthetic appeal',
    outcome: 'Achieved LEED Platinum certification and 30% reduction in energy costs'
  },
  {
    id: 2,
    title: 'Urban Park Renovation',
    category: 'Public Space',
    location: 'Westlands, Nairobi',
    description: 'Revitalization of a historic urban park with modern amenities and accessibility features.',
    image: 'https://images.unsplash.com/photo-1496147539180-13929f8aa03a?auto=format&fit=crop&q=80',
    challenge: 'Preserving historical elements while adding modern functionality',
    outcome: 'Increased visitor engagement by 150% within first year'
  },
  {
    id: 3,
    title: 'Retail Experience Center',
    category: 'Retail',
    location: 'Kisumu, Kenya',
    description: 'An innovative retail space designed to enhance customer experience through spatial design.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
    challenge: 'Creating an immersive shopping experience in a limited space',
    outcome: '40% increase in customer dwell time and sales'
  }
];

const categories = ['All', 'Commercial', 'Public Space', 'Retail'];
const locations = ['All', 'New York', 'Chicago', 'Los Angeles'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const locationMatch = selectedLocation === 'All' || project.location === selectedLocation;
    return categoryMatch && locationMatch;
  });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise
            in creating innovative spatial solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 space-y-4 md:space-y-0 md:flex md:space-x-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-dark-lighter border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-2 bg-dark-lighter border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
          >
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-lighter rounded-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                 />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-primary text-sm">{project.category}</span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-primary font-semibold">Location: </span>
                    <span className="text-gray-400">{project.location}</span>
                  </div>
                  <div>
                    <span className="text-primary font-semibold">Challenge: </span>
                    <span className="text-gray-400">{project.challenge}</span>
                  </div>
                  <div>
                    <span className="text-primary font-semibold">Outcome: </span>
                    <span className="text-gray-400">{project.outcome}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;