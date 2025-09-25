import { useState, useEffect } from 'react';
import Button from '@/components/Button';

const Timeline = ({
  heading = "Upcoming Events & Activities",
  description = "Discover exciting events and activities happening on campus. Join us to learn, connect, and grow with your university community.",
  buttons = {
    primary: {
      text: "View All Events",
      url: "/events",
    }
  },
  features = [
    {
      image: "/images/events/default-event.jpg",
      title: "Sample Event",
      description: "This is a sample event that appears when the database is unavailable.",
    },
  ],
}) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/check-auth', {
          credentials: 'include'
        });
        
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.authenticated);
        }
      } catch (err) {
        console.error("Failed to check auth status:", err);
      }
    };

    checkAuth();
  }, []);

  // Fetch events from the database (limit to 6 most recent)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3001/api/events');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        // Sort by date (newest first) and limit to 6 events
        const sortedEvents = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        const limitedEvents = sortedEvents.slice(0, 6);
        setEvents(limitedEvents);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError(err.message);
        // Fallback to default features if API fails
        setEvents(features.slice(0, 6));
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Handle event registration with authentication check
  const handleEventRegistration = (eventId) => {
    if (!isAuthenticated) {
      // Redirect to login page with return URL using window.location
      window.location.href = `/login?returnUrl=${encodeURIComponent(window.location.pathname)}`;
      return;
    }
    
    // If authenticated, proceed with registration
    registerForEvent(eventId);
  };

  // Register for event function
  const registerForEvent = async (eventId) => {
    try {
      const response = await fetch('http://localhost:3001/api/events/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ eventId })
      });
      
      if (response.ok) {
        alert('Successfully registered for the event!');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to register for the event.');
      }
    } catch (err) {
      console.error('Registration error:', err);
      alert('An error occurred during registration.');
    }
  };

  // Format time function
  const formatTime = (timeString) => {
    if (!timeString) return '';
    
    // Handle both full datetime strings and time-only strings
    try {
      // If it's a full datetime string
      if (timeString.includes('T') || timeString.includes(' ')) {
        const date = new Date(timeString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      } else {
        // If it's just a time string (HH:MM:SS)
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(parseInt(hours), parseInt(minutes));
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
    } catch (error) {
      console.error('Error formatting time:', error);
      return timeString; // Return original if formatting fails
    }
  };

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString; // Return original if formatting fails
    }
  };

  // Get event image with fallback
  const getEventImage = (event) => {
    if (event.image) return event.image;
    
    // Return different placeholder images based on event type or category
    const placeholders = [
      '/images/events/academic-event.jpg',
      '/images/events/sports-event.jpg',
      '/images/events/cultural-event.jpg',
      '/images/events/social-event.jpg'
    ];
    
    // Simple hash to get consistent image for same event
    const index = event.id ? event.id % placeholders.length : 0;
    return placeholders[index];
  };

  if (loading) {
    return (
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error && events.length === 0) {
    return (
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center text-red-500 p-4 bg-red-50 rounded-lg">
            <p>Error loading events: {error}</p>
            <Button 
              className="mt-4" 
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="relative grid gap-16 md:grid-cols-2">
          <div className="top-40 h-fit md:sticky">
            <h2 className="mt-4 mb-6 text-4xl font-semibold md:text-5xl">
              {heading}
            </h2>
            <p className="font-medium text-gray-600 md:text-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-4 lg:flex-row">
              <Button className="gap-2" size="lg" asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-12 md:gap-20">
            {events.map((event, index) => (
              <div key={index} className="rounded-xl border bg-white p-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-dashed">
                  <img
                    src={getEventImage(event)}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/images/events/default-event.jpg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-semibold">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {event.date && (
                      <div>
                        <p className="font-medium text-gray-500">Date</p>
                        <p className="text-gray-800">{formatDate(event.date)}</p>
                      </div>
                    )}
                    
                    {event.start_time && (
                      <div>
                        <p className="font-medium text-gray-500">Start Time</p>
                        <p className="text-gray-800">{formatTime(event.start_time)}</p>
                      </div>
                    )}
                    
                    {event.end_time && (
                      <div>
                        <p className="font-medium text-gray-500">End Time</p>
                        <p className="text-gray-800">{formatTime(event.end_time)}</p>
                      </div>
                    )}
                    
                    {event.location && (
                      <div className="col-span-2">
                        <p className="font-medium text-gray-500">Location</p>
                        <p className="text-gray-800">{event.location}</p>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full mt-4"
                    onClick={() => handleEventRegistration(event.id)}
                  >
                    {isAuthenticated ? 'Register for Event' : 'Login to Register'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;