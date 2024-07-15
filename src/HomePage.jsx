import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';
import { FaArrowRight, FaUserMd, FaProcedures, FaHospitalAlt, FaBriefcase } from 'react-icons/fa'; 
import chuVideo from './assets/chu-video.mp4';
import travauxImg from './assets/travaux.jpg';
import resultsImg from './assets/results.jpg';
import appelImg from './assets/Appelcandidature.jpg';
import event1Img from './assets/event1.jpeg';
import event2Img from './assets/event2.jpg';
import event3Img from './assets/event3.jpeg';

function HomePage() {
  const [videoSrc, setVideoSrc] = useState('');
  const [currentSection, setCurrentSection] = useState('actualites'); 

  useEffect(() => {
    setVideoSrc(chuVideo);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      <Navbar />
      <div className="flex flex-1 relative" style={{ paddingTop: '85px' }}>
        <Socials />
        <div className="flex flex-1">
          <div className="w-1/3 flex items-center justify-center bg-white">
            <div className="text-center p-6 transform translate-x-14"> 
              <h1 className="text-2xl font-bold text-blue-900 mb-4 animate-fadeIn">
                Bienvenue sur le site du
              </h1>
              <h2 className="text-xl font-semibold text-blue-700 mb-4 animate-fadeIn delay-1">
                CHU de Oujda, votre hôpital public...
              </h2>
              <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center ml-12">
                Découvrez le CHU <FaArrowRight className="ml-2" /> 
              </button>
            </div>
          </div>
          <div className="w-2/3 relative overflow-hidden flex items-center justify-center p-4" style={{ marginTop: '10px' }}>
            <div className="relative w-[95%] h-[95%] rounded-lg overflow-hidden shadow-lg animate-shadowPulse">
              {videoSrc && (
                <video
                  className="w-full h-full object-fill rounded-lg"
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
              <div className="absolute inset-0 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Accès directs Section */}
      <div id="acces-directs" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Accès directs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer hover:bg-blue-500 transform hover:scale-105 duration-300 group">
              <FaUserMd className="text-blue-500 text-4xl mb-4 group-hover:text-white" />
              <h3 className="text-xl font-semibold text-blue-900 group-hover:text-white">Consultation</h3>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer hover:bg-blue-500 transform hover:scale-105 duration-300 group">
              <FaProcedures className="text-blue-500 text-4xl mb-4 group-hover:text-white" />
              <h3 className="text-xl font-semibold text-blue-900 group-hover:text-white">Visiter un patient</h3>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer hover:bg-blue-500 transform hover:scale-105 duration-300 group">
              <FaHospitalAlt className="text-blue-500 text-4xl mb-4 group-hover:text-white" />
              <h3 className="text-xl font-semibold text-blue-900 group-hover:text-white">Soins et spécialités</h3>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer hover:bg-blue-500 transform hover:scale-105 duration-300 group">
              <FaBriefcase className="text-blue-500 text-4xl mb-4 group-hover:text-white" />
              <h3 className="text-xl font-semibold text-blue-900 group-hover:text-white">Recrutement</h3>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="border-t-2 border-blue-100 my-12 mx-auto w-full max-w-6xl"></div>
      
      <div className="bg-white-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <button 
              className={`px-4 py-2 ${currentSection === 'actualites' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded-md hover:bg-blue-700 hover:text-white transition duration-300`}
              onClick={() => setCurrentSection('actualites')}
            >
              Actualités
            </button>
            <button 
              className={`px-4 py-2 ml-4 ${currentSection === 'evenements' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded-md hover:bg-blue-700 hover:text-white transition duration-300`}
              onClick={() => setCurrentSection('evenements')}
            >
              Événements
            </button>
          </div>
          {currentSection === 'actualites' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={travauxImg} alt="Travaux" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Travaux | Perturbations sur les sites du CHU</h3>
                <p className="text-gray-600 mb-4">02/07/2024</p>
                <p className="text-gray-700">Perturbations sur les sites du CHU</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={resultsImg} alt="Paroles" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Résultat des travaux de l'entretien</h3>
                <p className="text-gray-600 mb-4">01/07/2024</p>
                <p className="text-gray-700">Résultat des travaux de la commission chargée de l'entretien de sélection aux postes Majors.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={appelImg} alt="Don d'organes" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Appel à candidature d'infirmerie</h3>
                <p className="text-gray-600 mb-4">22/06/2024</p>
                <p className="text-gray-700">Appel à candidature pour occuper le poste d'infirmier major des services hospitaliers</p>
              </div>
            </div>
          )}
          {currentSection === 'evenements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={event1Img} alt="Événement 1" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Événement culturel</h3>
                <p className="text-gray-600 mb-4">17 juin - 26 juin</p>
                <p className="text-gray-700">Programme | Semaine de la musique</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={event2Img} alt="Événement 2" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Cycle de conférence-débat</h3>
                <p className="text-gray-600 mb-4">20 juin</p>
                <p className="text-gray-700">Étude des facteurs de résilience à l'auto-stigmatisation chez les personnes infectées par le VIH</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={event3Img} alt="Événement 3" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Cinema day</h3>
                <p className="text-gray-600 mb-4">07 juillet</p>
                <p className="text-gray-700">Oppenheimer | Interstellar</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
