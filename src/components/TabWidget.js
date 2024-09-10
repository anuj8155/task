import React, { useState } from 'react';
import Question from '../asset/Vector.png';
import Frame from '../asset/Frame.png';
const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('aboutMe');

  return (
    <div className="w-full p-4 flex  rounded-lg shadow-md text-white" style={{ backgroundColor: '#363C43', color: '#FFFFFF' , boxShadow:'6px 8px 7px -1px black'}}>
      <div className='flex flex-col mx-2 items-center justify-between h-40'>
         <img className='w-96' src={Question} alt='' />
         <img className='w-96' src={Frame} alt='' />
      </div>
      <div className='flex flex-col'>
      <div className="flex border-b border-gray-700 bg-black rounded-[15px] items-center justify-evenly py-1">
        <button
          className={`px-4 py-2 ${activeTab === 'aboutMe' ? 'border-[#363C43] bg-[#363C43]  rounded-[13px] shadow-[10px_13px_25px_-1px_#000000] ' : ''
            }`}
          onClick={() => setActiveTab('aboutMe')}
        >
          About Me
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'experiences' ? 'border-[#363C43] bg-[#363C43] rounded-[13px] shadow-[10px_13px_25px_-1px_#000000]' : ''
            }`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'recommended' ? 'border-[#363C43] bg-[#363C43] rounded-[13px] shadow-[10px_13px_25px_-1px_#000000]' : ''
            }`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="p-4 custom-scrollbar my-2">
        {activeTab === 'aboutMe' &&
          <div className='flex text-[#969696] h-h-12  px-1 overflow-y-scroll'>
           I am pursuing a B.E. in Information Technology at UIET, Panjab University, Chandigarh, with a focus on full-stack 
web development. I have strong experience in the MERN stack (MongoDB, Express.js, React.js, Node.js) for 
building dynamic, scalable web applications. Proficient in Data Structures and Algorithms (C++), Object
Oriented Programming (OOP), and RESTful API development, I specialize in both front-end and back-end 
development, creating responsive web designs and optimizing user interfaces (UI). I have worked on database 
management, cloud deployment, and version control systems like Git/GitHub. Actively participating in 
hackathons has sharpened my ability to solve real-world problems with technology


          </div>}
        {activeTab === 'experiences' &&
          <div className='flex text-[#969696] h-h-12  px-1 overflow-y-scroll'>
            Web Developer Intern
            Company: Infotech
            Duration: June 2024 – Present
            Location: [Your City]
            Key Responsibilities:

            Developed and maintained web applications using React.js, Node.js, and Express.
            Implemented user authentication and real-time messaging features in a chat application.
            Collaborated with the design team to improve UI/UX based on user feedback.
            Assisted in debugging and resolving issues to ensure smooth functionality.
            Experience 2: Full-Stack Developer (Project-based)
            Project: Rooftop Solar Energy Potential Map
            Duration: July 2024 – August 2024
            Technologies: MERN Stack, Machine Learning, GIS
            Key Responsibilities:

            Developed a geospatial web portal to estimate solar energy generation using satellite data.
            Integrated machine learning models for building footprint extraction.
            Created interactive visualizations to display solar energy potential and building data.
            Experience 3: Full-Stack Developer (Personal Project)
            Project: Fitness Tracker with AI-Powered Recommendations
            Duration: August 2024 – September 2024
            Technologies: React.js, Node.js, TensorFlow
            Key Responsibilities:

            Designed and developed a web application for virtual workout training with real-time feedback.
            Integrated AI models for exercise form correction and recommendation.
            Implemented a community page for users to share workout streaks and achievements.
            Experience 4: Academic Projects
            Project: 7-Segment Display Interface
            Duration: September 2024
            Technologies: Arduino
            Key Responsibilities:

            Programmed an Arduino to interface with a 7-segment display for counting and displaying numbers.
            Designed and implemented the control logic for digit display and button inputs.
            Experience 5: Hackathon Participation
            Event: ISRO Hackathon
            Duration: July 2024
            Project: Rooftop Solar Energy Potential Map
            Key Responsibilities:

            Contributed to developing a comprehensive solution for solar energy estimation.
            Collaborated with a team to create a geospatial web portal integrating satellite data and machine learning.
          </div>}
        {activeTab === 'recommended' &&
          <div className='flex text-[#969696] h-h-12  px-1 overflow-y-scroll'>
            Endorsement by Supervisor
            Name: [Supervisor's Name]
            Title: [Supervisor's Title]
            Company: Infotech
            Recommendation:
            "Ayush has been an invaluable asset to our team at Infotech. His skills in web development and his proactive approach to problem-solving have greatly contributed to our projects. His dedication and ability to quickly grasp new technologies are impressive. I highly recommend Ayush for any role that requires a talented and motivated developer."

            2. Peer Review
            Name: [Peer's Name]
            Title: [Peer's Title]
            Company: [Your Company or Project]
            Recommendation:
            "Working with Ayush has been a pleasure. His enthusiasm for full-stack development and his ability to integrate complex systems into seamless applications is outstanding. His contributions to our project have been crucial, and his collaborative nature makes him a great team player. I recommend Ayush without hesitation for any future endeavors."

            3. Mentor Endorsement
            Name: [Mentor's Name]
            Title: [Mentor's Title]
            Company: [Mentor's Company or Academic Institution]
            Recommendation:
            "Ayush's technical skills and commitment to excellence have always stood out. His ability to tackle challenging projects and his innovative approach to problem-solving make him a valuable asset to any team. His growth as a developer is evident in his work, and I strongly endorse him for roles that require a skilled and forward-thinking developer."

            4. Client Testimonial
            Name: [Client's Name]
            Title: [Client's Title]
            Company: [Client's Company]
            Recommendation:
            "Ayush's work on our project was exemplary. He delivered high-quality solutions that met our needs and exceeded our expectations. His professionalism, technical expertise, and attention to detail were evident throughout the project. I highly recommend Ayush for any future projects or roles in development."
          </div>}
      </div>
      </div>
    </div>
  );
};

export default TabsWidget;
