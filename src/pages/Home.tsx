import CountUp from 'react-countup';
import { ArrowRight, Users, Building, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transforming Spaces into
            <span className="text-primary"> Extraordinary</span> Experiences
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We specialize in creating innovative spatial solutions that enhance human experiences and drive business success.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors group"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-dark-lighter py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-4xl font-bold">
                <CountUp end={500} duration={2.5} />+
              </h3>
              <p className="text-gray-400">Satisfied Clients</p>
            </div>
            <div className="space-y-4">
              <Building className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-4xl font-bold">
                <CountUp end={1000} duration={2.5} />+
              </h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="space-y-4">
              <Award className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-4xl font-bold">
                <CountUp end={25} duration={2.5} />+
              </h3>
              <p className="text-gray-400">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;