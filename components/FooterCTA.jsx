// components/CoCurricularActivities.js
import { useState } from 'react';
import { 
  FaUsers 
 
} from 'react-icons/fa';
import { 
  HiAcademicCap
} from 'react-icons/hi'

const FooterCTA = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HiAcademicCap className="text-blue-600 w-8 h-8 mr-3" />
            <span className="text-lg font-semibold text-gray-700">
              Beyond Academics
            </span>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to Join Our Community?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
           Don't just learn, experience! Join any of our co-curricular activities 
              and discover new passions, make lifelong friends, and develop skills 
              that will serve you beyond academics.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                <FaUsers className="mr-2" />
                Join Now
              </button>
        
        </div>
      </div>
    </div>
  );
}

export default FooterCTA;