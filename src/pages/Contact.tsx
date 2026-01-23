import { useState, useCallback } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
 
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); 

  // const handleSubmit = useCallback(async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setStatus('');
    
  //   alert('Thank you for your message! We will get back to you soon.');
  //   setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

  // const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxCIuhPuwJeAi7vaPXi68fIhqy6OV0sQ79n8BQ9vebCg7u9hOzCyB42fnugiAwYBFID/exec"; 

  //   const payload = {
  //     ...formData,
  //     timestamp: new Date().toISOString(),
      
  //   };

  //   try {
  //     const response = await fetch(GOOGLE_SCRIPT_URL, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(payload)
  //     });
  //    setStatus('Thank you! Message sent and saved successfully.');
  //     setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset
  //   } catch (error) {
  //     setStatus('Error sending message. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [formData]);


  const handleSubmit = useCallback(async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setStatus('');

  const payload = new FormData();
  payload.append('timestamp', new Date().toISOString());
  payload.append('name', formData.name);
  payload.append('email', formData.email);
  payload.append('phone', formData.phone);
  payload.append('subject', formData.subject);
  payload.append('message', formData.message);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz9fLHhRKwwfcLtFZMKTcqoeaLg0BEazz425bDlhlOGJ2XuGec8_ZACE9JAD4ZxIE-4/exec"; 


  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',  // Bypasses CORS preflight
      body: payload     // No JSON header = no preflight
    });

    setStatus('Thank you! Message sent and saved successfully.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  } catch (error) {
    setStatus('Error sending. Please try again.');
  } finally {
    setLoading(false);
  }
}, [formData]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Real Estate Ave', 'Property City, RE 12345', 'United States'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon - Sat: 9am - 6pm'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@estatepro.com', 'support@estatepro.com', 'sales@estatepro.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed'],
    },
  ];



  return (
    <div className="min-h-screen pt-16">
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team - we're here to help you
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-100 p-4 rounded-full">
                    <info.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-200 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h2>
              {/* "text-3xl font-bold text-gray-900 mb-6" */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="buying">Buying Property</option>
                    <option value="selling">Selling Property</option>
                    <option value="renting">Renting Property</option>
                    <option value="management">Property Management</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button> */}

{status && (
        <div className={`p-4 rounded-lg ${status.includes('successfully') ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
          {status}
        </div>
      )}

        <button
        type="submit"
        disabled={loading}
        className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold disabled:opacity-50"
      >
        <Send className="w-5 h-5" />
        <span>{loading ? 'Sending...' : 'Send Message'}</span>
      </button>

              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us Here</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[500px] mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841974083933!2d-73.98823492346681!3d40.75889797138643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is available to answer your questions and provide personalized assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>

            {/* <a
              href="mailto:info@estatepro.com"
              className="inline-flex items-center justify-center space-x-2 bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors text-lg font-semibold"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a> */}

<button
  onClick={() => {
    const OWNER_WHATSAPP = "9721330481"; // Replace with owner's number
    const propertyName = "3 BHK Flat"; // Change or pass dynamically
    const text = encodeURIComponent(`Hi, I'm interested in this property: ${propertyName}`);
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${text}`, "_blank");
  }}
className="inline-flex items-center justify-center space-x-2 bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors text-lg font-semibold">
  💬 Chat with us
</button>





          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
