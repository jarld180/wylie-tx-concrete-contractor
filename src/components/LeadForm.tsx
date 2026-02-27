import React, { useState } from 'react';

interface LeadFormProps {
  title?: string;
  phone?: string;
  city?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ 
  title = "Request a Free Quote",
  phone = "(555) 555-5555",
  city = "City"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://app.lowkly.com/api/webhooks/leads/9ba922e2211a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: `${city} TX Concrete Website`,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', address: '', service: '', description: '' });
      } else {
        setError('Something went wrong. Please try again or call us directly.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 p-4 sm:p-8 rounded-[32px] border border-gray-100 shadow-xl">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-6">We've received your request and will contact you within 24 hours.</p>
          <p className="text-sm text-gray-500">Need immediate assistance? Call us at <span className="font-bold text-black">{phone}</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-4 sm:p-8 rounded-[32px] border border-gray-100 shadow-xl">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">Full Address *</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none"
            placeholder="123 Main St, City, TX 75001"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Needed *</label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none bg-white"
          >
            <option value="">Select a service...</option>
            <option value="Driveway">Driveway Installation/Repair</option>
            <option value="Foundation">Concrete Foundation</option>
            <option value="Patio">Stamped Patio</option>
            <option value="Pool Deck">Pool Deck</option>
            <option value="Garage Floor">Garage Floor Coating</option>
            <option value="Sidewalk">Sidewalk/Walkway</option>
            <option value="Other">Other Concrete Work</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">Project Description</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/5 transition-all outline-none resize-none"
            placeholder="Tell us about your project..."
          />
        </div>
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
        </button>
        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to receive calls/texts about your project. Message & data rates may apply.
        </p>
      </form>
      <div className="mt-8 pt-8 border-t border-gray-200">
        <p className="text-sm text-black mb-2">{city}, TX Local Support:</p>
        <p className="text-2xl font-bold">{phone}</p>
      </div>
    </div>
  );
};

export default LeadForm;
