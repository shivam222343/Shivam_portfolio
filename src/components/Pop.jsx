import React, { useState } from 'react';

const Pop = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={togglePopup}
      >
        Show Details
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 space-y-4">
            <button
              className="text-red-500 hover:text-red-700 text-right w-full"
              onClick={togglePopup}
            >
              X
            </button>
            
            <h2 className="text-xl font-semibold text-center">Details</h2>
            
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="text-md font-bold">Education</h3>
                <p>B.Tech in Computer Science and Business Systems</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="text-md font-bold">Projects</h3>
                <p>To-Do List, Portfolio Website, Weather Checker, etc.</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="text-md font-bold">Skills</h3>
                <p>React, Tailwind CSS, Firebase, JavaScript</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="text-md font-bold">Work Experience</h3>
                <p>Intern at XYZ Company</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="text-md font-bold">Certificates</h3>
                <p>Full-Stack Web Development, Machine Learning</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="text-md font-bold">GitHub</h3>
                <a href="https://github.com/your-github" className="text-blue-500 underline">your-github-link</a>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="text-md font-bold">YouTube</h3>
                <a href="https://youtube.com/your-channel" className="text-blue-500 underline">your-youtube-link</a>
              </div>

              <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="text-md font-bold">Coding Hub</h3>
                <a href="https://discord.gg/bGstAeRt" className="text-blue-500 underline">Coding Hub Discord</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pop;
