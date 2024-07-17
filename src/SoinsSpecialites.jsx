import React from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';
import hopitalDesSpecialitesImg from './assets/hopital-des-specialites.png';
import hopitalMereEnfantImg from './assets/hopital-mere-enfant.png';
import hopitalSanteMentaleImg from './assets/hopital-sante-mentale.png';

function SoinsSpecialite() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20 flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-left">Nos Hôpitaux</h1>

        {/* Hôpital des spécialités */}
        <div className="my-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Hôpital des spécialités</h2>
          <p className="text-lg font-semibold mb-4">Une fiche technique : capacité litière de 380 lits.</p>
          <div className="flex flex-col lg:flex-row items-start lg:items-start">
            <div className="lg:w-2/3 flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <h3 className="text-lg font-semibold text-blue-500 mb-2">Les services médicaux :</h3>
                <ul className="mb-4 space-y-2">
                  <li>Service d'ophtalmologie</li>
                  <li>Service d'Oto-rhino-laryngologie</li>
                  <li>Service de neurologie</li>
                  <li>Service de pneumologie</li>
                  <li>Service de cardiologie</li>
                  <li>Service de néphrologie</li>
                  <li>Service d'urologie</li>
                  <li>Service de la réanimation</li>
                  <li>SAMU</li>
                  <li>Le laboratoire central</li>
                  <li>La consultation</li>
                  <li>Service des explorations fonctionnelles</li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <ul className="mb-4 space-y-2 mt-8 lg:mt-0">
                <li>-</li>
                  <li>Service de la rééducation fonctionnelle</li>
                  <li>Service des urgences</li>
                  <li>Service de médecine interne</li>
                  <li>Service de rhumatologie</li>
                  <li>Service de dermatologie</li>
                  <li>Service d'endocrinologie-diabétologie</li>
                  <li>Service de gastro-entérologie</li>
                  <li>Service de traumatologie-orthopédie</li>
                  <li>La pharmacie</li>
                  <li>Service de l'imagerie médicale</li>
                  <li>Le bloc opératoire</li>
                </ul>
              </div>
              <div className="w-full">
                <h3 className="text-lg font-semibold text-blue-500 mb-2">Les services chirurgicaux :</h3>
                <ul className="space-y-2">
                  <li>Service de neurochirurgie</li>
                  <li>Service de la chirurgie cardiaque</li>
                  <li>Service de la chirurgie viscérale A et B</li>
                  <li>Service de la chirurgie thoracique</li>
                  <li>Service de la chirurgie vasculaire</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center mt-8 lg:mt-0">
              <img src={hopitalDesSpecialitesImg} alt="Hôpital des spécialités" className="rounded-lg shadow-lg max-w-full h-auto" />
            </div>
          </div>
        </div>

        <hr className="my-8" />

        {/* Hôpital Mère Enfant */}
        <div className="my-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Hôpital Mère Enfant</h2>
          <p className="text-lg font-semibold mb-4">Une fiche technique : capacité litière de 140 lits.</p>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-2/3 flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <h3 className="text-lg font-semibold text-blue-500 mb-2">Les Services</h3>
                <ul className="mb-4 space-y-2">
                  <li>Service de la pédiatrie</li>
                  <li>Service de la chirurgie pédiatrique (unité orthopédie, unité uro-viscérale)</li>
                  <li>Service de la gynécologie-obstétrique</li>
                  <li>Service de la réanimation</li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <ul className="mb-4 space-y-2 mt-8 lg:mt-0">
                  <li>Service de la néonatologie</li>
                  <li>Service de l'imagerie médicale</li>
                  <li>Le bloc opératoire</li>
                  <li>Les urgences Mère-Enfant</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center mt-8 lg:mt-0">
              <img src={hopitalMereEnfantImg} alt="Hôpital Mère Enfant" className="rounded-lg shadow-lg max-w-full h-auto" />
            </div>
          </div>
        </div>

        <hr className="my-8" />

        {/* Hôpital de la Santé Mentale et des Maladies Psychiatriques */}
        <div className="my-8">
  <h2 className="text-2xl font-semibold text-blue-900 mb-4">Hôpital de la Santé Mentale et des Maladies Psychiatriques</h2>
  <p className="text-lg font-semibold mb-4">Une fiche technique : capacité litière de 108 lits.</p>
  <div className="flex flex-col lg:flex-row items-center lg:items-start">
    <div className="lg:w-2/3 flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <h3 className="text-lg font-semibold text-blue-500 mb-2">Les Services</h3>
        <ul className="mb-4 space-y-2">
          <li>Service Homme A et B</li>
          <li>Service Femme A et B</li>
          <li>Service de la pédopsychiatrie</li>
          <li>Service des urgences</li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2">
        <ul className="mb-4 space-y-2 mt-8 lg:mt-0">
          <li>Service de l'addictologie</li>
          <li>Service de la gérontopsychiatrie</li>
          <li>Service de la psychophysiologie</li>
          <li>Service de la consultation</li>
        </ul>
      </div>
    </div>
    <div className="lg:w-1/3 flex justify-center mt-8 lg:mt-0 mx-auto">
      <img src={hopitalSanteMentaleImg} alt="Hôpital de la Santé Mentale et des Maladies Psychiatriques" className="rounded-lg shadow-lg max-w-full h-auto" />
    </div>
  </div>
</div>
      </div>
      <Footer />
    </div>
  );
}

export default SoinsSpecialite;
