import { motion } from 'framer-motion';
import { Target, Lightbulb, Compass } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mokaya Cris',
    role: 'Principal Architect',
    bio: 'With over 5 years of experience in spatial design, Mokaya leads our creative vision and strategic planning initiatives.',
    image: '/src/public/mokaya.jpeg'
  },
  {
    name: 'Dancun Lusomo',
    role: 'Senior Consultant',
    bio: 'Dan\'s specializes in urban planning and sustainable design, bringing innovative solutions to complex spatial challenges.',
    image: '/src/public/Dan.jpeg'
  },
  {
    name: 'Bosire Saul',
    role: 'Design Director',
    bio: 'Saul\'s expertise in web Design and Development has earned him recognition in creating harmonious and functional pages.',
    image: 'https://res.cloudinary.com/dzq0v3cjh/image/upload/v1732439087/WhatsApp_Image_2024-11-24_at_10.41.12_apr3me.jpg'
  }
];

const About = () => {
  return (
    <div className="space-y-20 py-20">
      {/* History Section */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Founded in 2024, SpatialScope has been at the forefront of innovative spatial design and consulting,
            helping businesses and organizations optimize their spaces for maximum impact and efficiency.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-lighter p-8 rounded-lg text-center"
          >
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-400">Pushing boundaries to create unique spatial solutions that exceed expectations.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-lighter p-8 rounded-lg text-center"
          >
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
            <p className="text-gray-400">Creating spaces that are environmentally conscious and future-proof.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-dark-lighter p-8 rounded-lg text-center"
          >
            <Compass className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p className="text-gray-400">Delivering exceptional quality in every project we undertake.</p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-dark-lighter py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the experts behind SpatialScope's success. Our diverse team brings together years of experience
              and innovative thinking to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                className="bg-dark p-6 rounded-lg overflow-hidden group"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;