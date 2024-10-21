import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Pop = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-tl from-black to-blue-950">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={togglePopup}
      >
        Show Details
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-slate-800 rounded-lg shadow-lg w-11/12 max-w-lg p-6 space-y-4">
            <button
              className="text-red-500 hover:text-red-700 text-right w-full"
              onClick={togglePopup}
            >
              X
            </button>
            
            <h2 className="text-xl font-semibold text-red-700 text-center">Details</h2>
            
            <div className="space-y-3 text-white">
              <div className="bg-slate-900 p-3 rounded-md flex justify-between">
                <h3 className="text-md font-semibold">Education</h3>
              <NavLink to="/Skills">  <button className='h-10 w-auto px-3 cursor-pointer rounded-md text-slate-900 font-semibold bg-green-400'>Veiw</button></NavLink>
              </div>

              <div className="bg-slate-900 p-3 rounded-md">
                <h3 className="text-md font-semibold">Projects</h3>
              </div>

              <div className="bg-slate-900  p-3 rounded-md">
                <h3 className="text-md font-semibold">Skills</h3>
              </div>

              <div className="bg-slate-900  p-3 rounded-md">
                <h3 className="text-md font-semibold">Work Experience</h3>
              </div>

              <div className="bg-slate-900  p-3 rounded-md">
                <h3 className="text-md font-semibold">Certificates</h3>
              </div>

              <div className="bg-slate-900 p-3 rounded-md">
                <h3 className="text-md font-semibold">GitHub</h3>
                <a href="https://github.com/your-github" className="text-blue-500 underline">your-github-link</a>
              </div>

              <div className="bg-slate-900  p-3 rounded-md">
                <h3 className="text-md font-semibold">YouTube</h3>
                <a href="https://youtube.com/your-channel" className="text-blue-500 underline">your-youtube-link</a>
              </div>

              <div className="bg-slate-900  p-3 rounded-md">
                <h3 className="text-md font-semibold">Coding Hub</h3>
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
