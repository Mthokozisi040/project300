'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  Megaphone,
  BookOpen,
  FileText,
  School,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Activity,
  ClipboardCheck,
  Trophy,
  BarChart2,
  Notebook,
  User,
  Shield
} from 'lucide-react';
import HeroHomepage from '@/components/Herohomepage';
import Testimonials from '@/components/Testimonials';
import Testimontialshome from '@/components/Testimonialshome';  
import FAQSection from '@/components/FAQSection';
import FooterCTA from '@/components/FooterCTA';
import AIAssistant from '@/components/AIAssistant';
import Guidehome from '@/components/Guidehome';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import Activitieshome from '@/components/Activitieshome';


// Backend API base URL
const API_BASE_URL = 'http://localhost:3001'; // Update with your backend URL

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [data, setData] = useState({
    activities: [],
    events: [],
    userData: null
  });

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/check-auth`, {
          credentials: 'include'
        });
        
        if (response.ok) {
          const authData = await response.json();
          if (authData.authenticated) {
            setUser(authData.user);
            await fetchUserData(authData.user.uid);
          }
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const fetchUserData = async (userId) => {
    try {
      // Fetch user data from backend (Neon database)
      const userResponse = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
        credentials: 'include'
      });
      
      if (userResponse.ok) {
        const userData = await userResponse.json();
        setData(prev => ({ ...prev, userData: userData.user }));
      }

      // Fetch user's activities from backend (Neon database)
      const activitiesResponse = await fetch(`${API_BASE_URL}/api/user-activities?uid=${userId}`, {
        credentials: 'include'
      });
      
      if (activitiesResponse.ok) {
        const activitiesData = await activitiesResponse.json();
        setData(prev => ({ ...prev, activities: activitiesData.activities || [] }));
      }

      // Fetch events from backend (Neon database)
      const eventsResponse = await fetch(`${API_BASE_URL}/api/events`, {
        credentials: 'include'
      });
      
      if (eventsResponse.ok) {
        const eventsData = await eventsResponse.json();
        setData(prev => ({ ...prev, events: eventsData.events || [] }));
      }

    } catch (error) {
      console.error("Error fetching data from Neon database:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        setUser(null);
        router.push('/');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      {user ? (
        // Logged-in Dashboard View with Sidebar
        <div className="flex h-screen bg-gray-50">
          {/* Mobile sidebar backdrop */}
          {mobileSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside 
            className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out`}
          >
            <div className="flex flex-col h-full p-4 border-r border-gray-200">
              {/* User profile */}
              <div className="flex items-center p-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
                  {user?.firstName?.charAt(0) || 'U'}
                </div>
                <div>
                  <p className="font-medium">{user?.firstName || 'User'}</p>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1">
                <ul className="space-y-1">
                  <SidebarItem 
                    icon={<LayoutDashboard size={18} />}
                    title="Dashboard"
                    active={activeTab === 'dashboard'}
                    onClick={() => setActiveTab('dashboard')}
                  />
                  <SidebarItem 
                    icon={<ClipboardList size={18} />}
                    title="Your Applications"
                    active={activeTab === 'applications'}
                    onClick={() => setActiveTab('applications')}
                  />
                  <SidebarItem 
                    icon={<CalendarDays size={18} />}
                    title="Calendar"
                    active={activeTab === 'calendar'}
                    onClick={() => setActiveTab('calendar')}
                  />
                  <SidebarItem 
                    icon={<Megaphone size={18} />}
                    title="Announcements"
                    active={activeTab === 'announcements'}
                    onClick={() => setActiveTab('announcements')}
                  />
                  <SidebarItem 
                    icon={<BookOpen size={18} />}
                    title="Courses"
                    active={activeTab === 'courses'}
                    onClick={() => setActiveTab('courses')}
                  />
                  <SidebarItem 
                    icon={<FileText size={18} />}
                    title="Resources"
                    active={activeTab === 'resources'}
                    onClick={() => setActiveTab('resources')}
                  />
                  <SidebarItem 
                    icon={<School size={18} />}
                    title="Academic Records"
                    active={activeTab === 'records'}
                    onClick={() => setActiveTab('records')}
                  />
                </ul>

                <div className="mt-8 pt-4 border-t border-gray-200">
                  <ul className="space-y-1">
                    <SidebarItem 
                      icon={<Settings size={18} />}
                      title="Settings"
                      active={activeTab === 'settings'}
                      onClick={() => setActiveTab('settings')}
                    />
                    <SidebarItem 
                      icon={<HelpCircle size={18} />}
                      title="Help & Support"
                      active={activeTab === 'help'}
                      onClick={() => setActiveTab('help')}
                    />
                    <SidebarItem 
                      icon={<LogOut size={18} />}
                      title="Logout"
                      onClick={handleLogout}
                    />
                  </ul>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile header */}
              <div className="lg:hidden flex items-center justify-between mb-6">
                <button 
                  onClick={() => setMobileSidebarOpen(true)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h1 className="text-xl font-semibold text-gray-800 capitalize">{activeTab.replace('-', ' ')}</h1>
                <div className="w-6"></div> {/* Spacer */}
              </div>

              {/* Dashboard Content */}
              {activeTab === 'dashboard' && (
                <DashboardView 
                  user={user}
                  activities={data.activities}
                  events={data.events}
                  router={router}
                  setActiveTab={setActiveTab}
                />
              )}

              {/* Applications Tab */}
              {activeTab === 'applications' && (
                <ApplicationsView 
                  activities={data.activities}
                  router={router}
                />
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <SettingsView user={user} userData={data.userData} />
              )}

              {/* Help & Support Tab */}
              {activeTab === 'help' && (
                <HelpSupportView />
              )}

              {/* Other tabs */}
              {['announcements', 'courses', 'resources', 'records', 'calendar'].includes(activeTab) && (
                <div className="flex items-center justify-center h-64">
                  <p className="text-gray-500">No {activeTab.replace('-', ' ')} data available yet</p>
                </div>
              )}
            </div>
          </main>
        </div>
      ) : (
        // Public Homepage View
        <div>
          <HeroHomepage/>
          <Activitieshome/>
          <Guidehome />
          <FAQSection />
          <Timeline/>
          {/*<Eventshome />*/}
          <Testimonials />
          <Testimontialshome/>
          <FooterCTA />
          <AIAssistant />
        </div>
      )}
      
      <Footer />
    </>
  );
}

// View Components
function DashboardView({ user, activities, events, router, setActiveTab }) {
  const stats = {
    activities: activities?.length || 0,
    approved: activities?.filter(a => a.status === 'approved').length || 0,
    pending: activities?.filter(a => a.status === 'pending').length || 0,
    eventsAttended: events?.filter(e => e.attended).length || 0,
  };

  return (
    <>
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.firstName || 'Student'}!</h1>
        <p className="opacity-90">Here's your dashboard overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<Activity size={24} />} 
          title="Total Activities" 
          value={stats.activities} 
          color="blue" 
        />
        <StatCard 
          icon={<ClipboardCheck size={24} />} 
          title="Approved" 
          value={stats.approved} 
          color="green" 
        />
        <StatCard 
          icon={<Clock size={24} />} 
          title="Pending" 
          value={stats.pending} 
          color="yellow" 
        />
        <StatCard 
          icon={<Trophy size={24} />} 
          title="Events Attended" 
          value={stats.eventsAttended} 
          color="purple" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2">
          <SectionHeader 
            title="Recent Applications" 
            actionText="View All" 
            onAction={() => setActiveTab('applications')} 
          />
          {activities?.length > 0 ? (
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {activities.slice(0, 3).map((activity) => (
                      <tr key={activity.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{activity.activity_name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={activity.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(activity.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
              No applications found
            </div>
          )}
        </div>

        {/* Upcoming Events */}
        <div>
          <SectionHeader 
            title="Upcoming Events" 
            actionText="View All" 
            onAction={() => setActiveTab('calendar')} 
          />
          {events?.length > 0 ? (
            <div className="space-y-4">
              {events.slice(0, 2).map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
              No upcoming events
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickAction 
            title="Apply for Activity" 
            onClick={() => router.push('/activities')}
            color="blue"
            icon={<ClipboardList size={18} />}
          />
          <QuickAction 
            title="View Calendar" 
            onClick={() => setActiveTab('calendar')}
            color="purple"
            icon={<CalendarDays size={18} />}
          />
          <QuickAction 
            title="Check Records" 
            onClick={() => setActiveTab('records')}
            color="green"
            icon={<BarChart2 size={18} />}
          />
          <QuickAction 
            title="Resources" 
            onClick={() => setActiveTab('resources')}
            color="orange"
            icon={<Notebook size={18} />}
          />
        </div>
      </div>
    </>
  );
}

function ApplicationsView({ activities, router }) {
  return (
    <div>
      <SectionHeader 
        title="Your Applications" 
        actionText="Apply for New Activity" 
        onAction={() => router.push('/activities')} 
      />
      {activities?.length > 0 ? (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{activity.activity_name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={activity.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(activity.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4">View</button>
                      {activity.status === 'pending' && (
                        <button className="text-red-600 hover:text-red-900">Cancel</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
          No applications found
        </div>
      )}
    </div>
  );
}

function SettingsView({ user, userData }) {
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    contact: userData?.contact || '',
    course: userData?.course || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/profile`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <User className="mr-2" size={18} /> Account Information
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                disabled
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="pt-2">
              <button 
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function HelpSupportView() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-8 text-white shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Help & Support</h1>
        <p className="opacity-90">We're here to help you with any questions or issues</p>
      </div>

      <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
        Help content will be displayed here once the database is set up
      </div>
    </div>
  );
}

// Reusable Components
function SidebarItem({ icon, title, active = false, onClick }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center p-3 rounded-lg transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
      >
        <span className={`mr-3 ${active ? 'text-blue-500' : 'text-gray-400'}`}>
          {icon}
        </span>
        <span className="font-medium">{title}</span>
      </button>
    </li>
  );
}

function StatCard({ icon, title, value, color }) {
  const colors = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-start">
      <div className={`p-3 rounded-lg mr-4 ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
    </div>
  );
}

function SectionHeader({ title, actionText, onAction }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button 
        onClick={onAction}
        className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center"
      >
        {actionText} <ChevronRight size={16} className="ml-1" />
      </button>
    </div>
  );
}

function StatusBadge({ status }) {
  const statusMap = {
    approved: { color: 'bg-green-100 text-green-800', icon: <CheckCircle2 size={14} className="mr-1" /> },
    pending: { color: 'bg-yellow-100 text-yellow-800', icon: <Clock size={14} className="mr-1" /> },
    rejected: { color: 'bg-red-100 text-red-800', icon: <AlertTriangle size={14} className="mr-1" /> },
  };

  const statusConfig = statusMap[status] || { color: 'bg-gray-100 text-gray-800', icon: <Clock size={14} className="mr-1" /> };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
      {statusConfig.icon}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-1">{event.event_name}</h3>
          <p className="text-gray-600 text-sm mb-2">
            {new Date(event.event_date).toLocaleDateString()} • {event.location}
          </p>
        </div>
        {event.attended && (
          <span className="h-6 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
            Attended
          </span>
        )}
      </div>
      <button 
        className={`mt-3 w-full py-2 rounded-lg text-sm font-medium ${event.attended ? 
          'bg-gray-100 text-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      >
        {event.attended ? 'View Details' : 'Register Now'}
      </button>
    </div>
  );
}

function QuickAction({ title, onClick, color, icon }) {
  const colors = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
  };

  return (
    <button 
      onClick={onClick}
      className={`p-4 rounded-xl text-white text-left ${colors[color]} transition-colors shadow flex items-center`}
    >
      <span className="mr-3">{icon}</span>
      <span className="font-medium">{title}</span>
    </button>
  );
}

/* Placeholder components (you'll need to create these)
function Navbar() {
  return <nav className="bg-white shadow-sm">Navigation Bar</nav>;
}

function Footer() {
  return <footer className="bg-gray-800 text-white p-4">Footer</footer>;
}*/