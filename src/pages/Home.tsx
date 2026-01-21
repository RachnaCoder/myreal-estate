import { Search, MapPin, Home as HomeIcon,TrendingUp, Award, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import agentpic from "/agentpic.jpg";

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Villa with Pool',
      price: '$850,000',
      location: 'Beverly Hills, CA',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      type: 'For Sale',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Downtown Apartment',
      price: '$3,500/mo',
      location: 'Manhattan, NY',
      beds: 2,
      baths: 2,
      sqft: '1,450',
      type: 'For Rent',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cozy Family House',
      price: '$520,000',
      location: 'Austin, TX',
      beds: 3,
      baths: 2,
      sqft: '2,100',
      type: 'For Sale',
    },
  ];

  const stats = [
    { icon: HomeIcon, value: '5,000+', label: 'Properties Listed' },
    { icon: Users, value: '10,000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover the perfect property that matches your lifestyle and budget
          </p>

          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Enter location or property name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              
<div className="relative w-full">
  <select
    className="w-full px-4 py-3 border border-gray-300 rounded-lg
               appearance-none pr-10 focus:outline-none
               focus:ring-2 focus:ring-emerald-500"
               defaultValue=""
  >
    <option value="" disabled hidden>Property Type</option>
    <option>House</option>
    <option>Apartment</option>
    <option>Villa</option>
    <option>Condo</option>
  </select>

  
  <span className="pointer-events-none absolute left-32 top-1/2 -translate-y-1/2 text-xs text-gray-500">
    ▼
  </span>

</div>

              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Featured Properties
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our handpicked selection of premium properties
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProperties.map((property) => (
        <div
          key={property.id}
          className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:scale-105 transition-transform duration-200">
              {property.type}
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {property.title}
            </h3>
            <div className="text-2xl font-bold text-emerald-600 mb-4">
              {property.price}
            </div>
            <div className="flex justify-between text-gray-600 text-sm border-t pt-4">
              <span>{property.beds} Beds</span>
              <span>{property.baths} Baths</span>
              <span>{property.sqft} sqft</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link
        to="/services"
        className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
      >
        View All Properties
      </Link>
    </div>
  </div>
</section>

<section className="py-12 bg-emerald-600 text-white">  {/* py-16 → py-12 */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">  {/* gap-12 → gap-8 */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">  {/* 3xl/4xl → 2xl/3xl, mb-6 → mb-4 */}
          Why Choose EstatePro?
        </h2>
        <div className="space-y-3">  {/* space-y-4 → space-y-3 */}
          {[
            'Extensive property listings across prime locations',
            'Expert real estate agents with local market knowledge',
            'Transparent pricing and no hidden fees',
            'Personalized service tailored to your needs',
            'End-to-end support from search to closing',
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />  {/* w-6 h-6 → w-5 h-5 */}
              <span className="text-base leading-relaxed">  {/* text-lg → text-base */}
                {item}
              </span>
            </div>
          ))}
        </div>
        <Link
          to="/about"
          className="inline-block mt-6 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold"  
        >
          Learn More About Us
        </Link>
      </div>
      <div className="relative">

      
      {/* <img src="https://images.pexels.com/photos/7641824/pexels-photo-7641824.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Real estate agent"
          className="w-full h-64 md:h-72 object-cover rounded-lg shadow-2xl "  
        /> */}

<img src={agentpic}
  alt="Real estate agent"
  className="w-full h-64 md:h-72 object-contain rounded-lg shadow-2xl bg-emerald-700"
 />

      </div>
    </div>
  </div>
</section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you find your perfect property today
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-semibold"
          >
            <span>Contact Us</span>
            {/* <DollarSign className="w-5 h-5" /> */}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
