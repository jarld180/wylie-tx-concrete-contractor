import React from 'react';
import { MapPin } from 'lucide-react';

interface CityServiceLinksProps {
  serviceSlug: string;
  serviceName: string;
}

const cities = [
  { name: 'Garland' },
  { name: 'Mesquite' },
  { name: 'Rowlett' },
  { name: 'Rockwall' },
  { name: 'Forney' },
  { name: 'Wylie' }
];

const CityServiceLinks: React.FC<CityServiceLinksProps> = ({ serviceSlug, serviceName }) => {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-black mb-4">Local {serviceName} Experts Near You</h2>
          <p className="text-black max-w-2xl mx-auto">We provide professional {serviceName.toLowerCase()} services across the greater Wylie area and surrounding Texas communities.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city) => (
            <div
              key={city.name}
              className="flex items-center justify-center space-x-2 p-4 bg-white rounded-2xl border border-gray-100"
            >
              <MapPin className="w-4 h-4 text-black" />
              <span className="font-bold text-black">{city.name}, TX</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityServiceLinks;
