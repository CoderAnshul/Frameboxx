import { useState, useEffect } from 'react';
import CustomSelect from './CustomSelect';

const QuickApply = () => {
  const [centers, setCenters] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fetch branches on mount
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        console.log("Fetching branches from Classtrix...");
        const response = await fetch("https://api.classtrix.in/v1/campaign/list-branch/113");
        console.log("Branches API response status:", response.status);
        if (response.ok) {
          const data = await response.json();
          console.log("Branches dynamic data received:", data);
          if (Array.isArray(data) && data.length > 0) {
            setCenters(data);
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch branches:", error);
      }
      // Fallback branches
      console.log("Using fallback branches");
      setCenters([
        { branchId: 101, name: "Swargate" },
        { branchId: 102, name: "Hadapsar" },
        { branchId: 103, name: "Kharadi" }
      ]);
    };
    fetchBranches();
  }, []);

  // Fetch courses dynamically based on selected branch's branchId
  useEffect(() => {
    console.log("Course fetch effect. Selected center is:", selectedCenter);

    // Only fetch courses when a center is actually selected
    if (!selectedCenter) {
      setCourses([]);
      return;
    }

    const branchId = selectedCenter.branchId;

    const fetchCourses = async () => {
      try {
        const url = `https://api.classtrix.in/v1/campaign/list-course/${branchId}/113`;
        console.log("Fetching courses from URL:", url);
        const response = await fetch(url);
        console.log("Courses API response status:", response.status);
        if (response.ok) {
          const data = await response.json();
          console.log("Courses dynamic data received:", data);
          if (Array.isArray(data) && data.length > 0) {
            setCourses(data);
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
      // Fallback courses
      console.log("Using fallback courses");
      setCourses([
        { courseId: 1, name: "Animation & VFX" },
        { courseId: 2, name: "Game Art & Design" },
        { courseId: 3, name: "UI/UX Design" },
        { courseId: 4, name: "Virtual Reality" },
        { courseId: 5, name: "Motion Graphics" },
        { courseId: 6, name: "Graphic Design" }
      ]);
    };

    fetchCourses();
  }, [selectedCenter]);

  const handleCenterChange = (center) => {
    console.log("handleCenterChange called with:", center);
    setSelectedCenter(center);
    setSelectedCourse(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCenter) {
      alert("Please select a center.");
      return;
    }
    if (!selectedCourse) {
      alert("Please select a course.");
      return;
    }
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const fullName = formData.get("name") || "";
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";

    // Extract UTM parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "";
    const utmMedium = urlParams.get("utm_medium") || "";
    const utmCampaign = urlParams.get("utm_campaign") || "";
    const utmTerm = urlParams.get("utm_term") || "";
    const utmContent = urlParams.get("utm_content") || "";

    const payload = {
      firstName,
      lastName,
      email,
      mobile: phone,
      courseId: selectedCourse ? parseInt(selectedCourse.courseId, 10) : 0,
      courseName: selectedCourse ? selectedCourse.name : "",
      branchId: selectedCenter ? parseInt(selectedCenter.branchId, 10) : 0,
      remark: "Quick Apply Submission",
      leadSource: "Website Quick Apply",
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
      verificationType: "",
      verificationCode: ""
    };

    try {
      const response = await fetch("https://api.classtrix.in/v1/campaign/submit-embed-form/SpwwHbZRfGupyVIxUXSCDMossgLUI7dO", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();
        setSelectedCenter(null);
        setSelectedCourse(null);
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative z-20 -mt-12 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-black/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.5)] overflow-visible">
          
          {/* Success Overlay */}
          {isSuccess && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-dark/95 backdrop-blur-xl animate-in fade-in duration-500 rounded-[2.5rem]">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/50 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-3xl font-heading text-white uppercase mb-2">Application Sent!</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest">We will contact you shortly.</p>
            </div>
          )}

          {/* Header */}
          <div className="mb-8">
            <h3 className="text-2xl font-heading text-white uppercase tracking-wider mb-2">Quick Admission Apply</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Secure your admission in simple steps</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name*" 
                className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-all"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email*" 
                className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-all"
                required
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Your Phone*" 
                className="w-full bg-[#1a1425] border border-white/5 rounded-full px-8 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-all"
                required
              />
              
              <CustomSelect 
                options={centers} 
                placeholder="Select Center" 
                value={selectedCenter} 
                onChange={handleCenterChange} 
              />

              <CustomSelect 
                options={courses} 
                placeholder="Select Course *" 
                value={selectedCourse} 
                onChange={setSelectedCourse} 
              />
            </div>

            {/* Bottom Bar: Auth & Button */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-4 border-t border-white/5">
              <div className="flex gap-4 items-start max-w-2xl">
                <input 
                  type="checkbox" 
                  className="mt-1 w-5 h-5 rounded border-white/10 bg-white/5 text-primary focus:ring-primary/20 cursor-pointer"
                  defaultChecked
                />
                <p className="text-white text-[10px] md:text-[11px] leading-relaxed uppercase tracking-normal opacity-70">
                  I authorize Frameboxx Institute of Emerging Media and/or its representatives to contact me via Phone, Email, SMS, WhatsApp, or any other means of communication.
                </p>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full lg:w-auto px-12 py-5 rounded-2xl bg-gradient-to-r from-primary to-orange-500 text-dark font-black uppercase tracking-[0.2em] text-sm shadow-[0_10px_40px_rgba(255,149,0,0.3)] hover:shadow-primary/50 transform hover:-translate-y-1 transition-all active:scale-95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Apply Now '}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  );
};

export default QuickApply;
