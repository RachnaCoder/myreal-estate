import { Target, Eye, Award, Heart, Shield, TrendingUp, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your satisfaction and success are at the heart of everything we do',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results and service quality',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients and partners to achieve shared goals',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years of real estate experience',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Sales',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specializes in luxury properties',
    },
    {
      name: 'Emma Williams',
      role: 'Property Manager',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in property management',
    },
    {
      name: 'David Rodriguez',
      role: 'Investment Advisor',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Real estate investment specialist',
    },
  ];

  const achievements = [
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: Users, value: '10,000+', label: 'Happy Clients' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating' },
    { icon: TrendingUp, value: '$2B+', label: 'Property Value Sold' },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About EstatePro</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Committed to excellence in every property we handle.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2009, EstatePro began with a simple vision: to revolutionize the way people buy, sell, and invest in real estate. What started as a small local agency has grown into one of the most trusted names in the industry.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the years, we've helped thousands of clients find their dream homes, make smart investments, and achieve their real estate goals. Our success is built on a foundation of expertise, integrity, and an unwavering commitment to client satisfaction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to innovate and adapt to the changing market, ensuring that our clients always receive the best possible service and results.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our office"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Target className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals and families to achieve their real estate dreams through expert guidance, innovative solutions, and personalized service. We strive to make the real estate journey seamless, transparent, and rewarding for every client we serve.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Eye className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading real estate agency known for setting industry standards in service excellence, innovation, and customer satisfaction. We envision a future where finding the perfect property is effortless and accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-100 p-4 rounded-full">
                    <value.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <achievement.icon className="w-12 h-12" />
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.value}</div>
                <div className="text-gray-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have achieved their real estate goals with EstatePro
          </p>
          <Link
            to="/contact"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-semibold"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
