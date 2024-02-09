// pages/teams.js
// pages/teams.js
import { teamMembers } from './teamData';
import Navbar from "@/components/Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const Teams = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <header className="text-4xl font-bold mb-8">Our Team</header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-xs mx-auto">
              <div className="relative overflow-hidden aspect-w-2 aspect-h-2 rounded-full mb-4">
                <img className="object-cover object-center w-full h-full rounded-full" src={member.imageUrl} alt={member.name} />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <div className="flex justify-center mt-2">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 hover:text-blue-700 text-lg" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-gray-700 hover:text-gray-900 text-lg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;