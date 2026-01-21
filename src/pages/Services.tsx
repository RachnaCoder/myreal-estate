import { ShoppingCart, Home, Key, Building2, TrendingUp, FileCheck, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'Buy Property',
      description: 'Find your dream home from our extensive collection of properties. We guide you through every step of the buying process.',
      features: [
        'Personalized property recommendations',
        'Virtual and in-person tours',
        'Negotiation support',
        'Legal documentation assistance',
      ],
    },
    {
      icon: Home,
      title: 'Sell Property',
      description: 'Get the best value for your property with our expert marketing and sales strategies.',
      features: [
        'Free property valuation',
        'Professional photography',
        'Multi-channel marketing',
        'Quick and efficient closing',
      ],
    },
    {
      icon: Key,
      title: 'Rent Property',
      description: 'Discover rental properties that fit your budget and lifestyle preferences.',
      features: [
        'Wide range of rental options',
        'Tenant screening services',
        'Flexible lease terms',
        'Maintenance coordination',
      ],
    },
    {
      icon: Building2,
      title: 'Property Management',
      description: 'Comprehensive management solutions for property owners and landlords.',
      features: [
        'Rent collection and accounting',
        'Property maintenance',
        'Tenant relations',
        '24/7 emergency support',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Investment Consulting',
      description: 'Expert advice on real estate investments to maximize your returns.',
      features: [
        'Market analysis and trends',
        'ROI calculations',
        'Portfolio diversification',
        'Risk assessment',
      ],
    },
    {
      icon: FileCheck,
      title: 'Legal Services',
      description: 'Complete legal support for all your real estate transactions.',
      features: [
        'Contract review',
        'Title verification',
        'Due diligence',
        'Compliance management',
      ],
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We start with understanding your needs and preferences',
    },
    {
      step: 2,
      title: 'Property Search',
      description: 'Our experts find properties that match your criteria',
    },
    {
      step: 3,
      title: 'Site Visits',
      description: 'Schedule tours of your shortlisted properties',
    },
    {
      step: 4,
      title: 'Closing Deal',
      description: 'We handle all paperwork and finalize your transaction',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From buying to selling, renting to managing, we cover all aspects of real estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-emerald-100 p-4 rounded-full">
                    <service.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-emerald-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and transparent steps to your perfect property
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-emerald-200" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div> */}


{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
  {process.map((item, index) => (
    <div key={index} className="text-center relative">
      <div className="relative mb-6">
        <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto z-10">
          {item.step}
        </div>
        
        {index < process.length - 1 && (
          <div className="hidden lg:block absolute top-1/2 -right-4 w-20 h-0.5 bg-emerald-200" />
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  ))}
</div> */}



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
  {process.map((item, index) => (
    <div key={index} className="text-center relative">
      <div className="relative mb-6">
        {/* Circle with higher z-index */}
        <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto z-20 relative">
          {item.step}
        </div>
        
        {/* Line starts from RIGHT edge of THIS circle, extends to next */}
        {index < process.length - 1 && (
          <div className="hidden lg:block absolute top-1/2 right-8 -translate-y-1/2 w-24 h-px bg-emerald-200 z-10" />
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  ))}
</div>



        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-2xl p-12 text-center text-white">
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Professional Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team of experienced real estate professionals is ready to help you achieve your property goals
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with years of experience in the real estate market
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Market Insights</h3>
              <p className="text-gray-600">
                Stay informed with the latest market trends and property valuations
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <FileCheck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Support</h3>
              <p className="text-gray-600">
                Complete legal assistance to ensure smooth and secure transactions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
