import React from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';

function ChartePatient() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20 flex-grow">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 text-left">Charte du patient</h1>
        <div className="space-y-8">
          <div>
            <p className="text-gray-700">
              Pour garantir la qualité des services, chaque patient, les membres de sa famille, ses accompagnateurs et ses visiteurs doivent respecter les recommandations suivantes :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Fournir des informations précises :</strong> Afin de garantir l'efficacité du diagnostic et du traitement, il est demandé de fournir des informations précises sur les données personnelles, les antécédents médicaux ou les traitements reçus par le patient.
              </li>
              <li>
                <strong>Respecter les autres :</strong> Pour le confort de tous, veuillez traiter les autres patients et les visiteurs avec respect et adopter un comportement civilisé.
              </li>
              <li>
                <strong>Suivre les instructions :</strong> Respecter l'équipe médicale, infirmière et administrative, et suivre leurs instructions conformément aux règlements en vigueur au sein du centre hospitalier.
              </li>
              <li>
                <strong>Respecter les rendez-vous :</strong> Respecter les rendez-vous et informer le personnel en cas d'impossibilité de se présenter afin qu'un autre patient puisse bénéficier de ce créneau.
              </li>
              <li>
                <strong>Respecter les files d'attente :</strong> Respecter les files d'attente pour un meilleur service.
              </li>
              <li>
                <strong>Maintenir le calme :</strong> Maintenir le calme dans les salles d'attente et pendant les heures de visite, par respect pour l'état de santé des patients.
              </li>
              <li>
                <strong>Maintenir la propreté :</strong> Maintenir la propreté du centre hospitalier en utilisant les poubelles mises à disposition.
              </li>
              <li>
                <strong>Préserver les équipements du centre hospitalier :</strong> Préserver les équipements du centre hospitalier, éviter de les utiliser de manière excessive ou inappropriée.
              </li>
              <li>
                <strong>S'abstenir de fumer :</strong> S'abstenir de fumer à l'intérieur du centre hospitalier afin de promouvoir les objectifs de l'initiative "Hôpital sans tabac".
              </li>
              <li>
                <strong>Visiter le patient :</strong> Pour le confort des patients, veuillez limiter le nombre de visiteurs et respecter les heures de visite. Le nombre de visiteurs est limité à deux par patient.
              </li>
              <li>
                <strong>Respecter le régime alimentaire du patient :</strong> Respecter le régime alimentaire du patient et les quantités prescrites par le médecin. Les repas apportés de l'extérieur sont soumis à la supervision du médecin ou du nutritionniste.
              </li>
              <li>
                <strong>Préserver les effets personnels :</strong> Lors de l'admission, apporter un nécessaire de toilette personnel (dentifrice et brosse à dents, peigne, serviette, vêtements et sandales) et ne pas les prêter à d'autres patients.
              </li>
              <li>
                <strong>Quitter le centre hospitalier :</strong> Les patients hospitalisés ne doivent quitter le centre hospitalier qu'avec l'autorisation du médecin responsable. En cas de départ souhaité, le patient signe une décharge après explication des conséquences de son départ.
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-700 mt-8">
          La charte du patient ci-dessus montre les droits et responsabilités des patients au sein de notre centre hospitalier. Chaque point est important pour assurer la qualité des soins et la satisfaction des patients.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default ChartePatient;
