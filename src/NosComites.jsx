import React from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Footer from './Footer';

function NosComites() {
  return (
    <div className="bg-white">
      <Navbar />
      <Socials />
      <div className="container mx-auto px-6 py-4 mt-20"> 
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Nos Comités</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-blue-900 font-semibold mb-2">CCS : Le Comité Consultatif et de Suivi</h2>
            <p>
              Conformément à l’article 2 du 1er Chapitre de l’organisation administrative du Centre Hospitalo Universitaire Mohammed VI d’Oujda ; il est institué auprès du Directeur Général du CHU un comité consultatif et de suivi composé du Secrétaire général du CHU, les Directeurs des formations hospitalières et des Chefs des divisions de la direction générale du CHU. Ce comité se réunit sur convocation du Directeur Général, chaque fois que le besoin se fait sentir, et au moins, une fois par mois. Il est consulté sur des questions concernant l’organisation et le fonctionnement du Centre en général et émet des avis et des recommandations.
            </p>
          </div>
          <div>
            <h2 className="text-blue-900 font-semibold mb-2">CLIN : Le Comité de Lutte Contre les Infections Nosocomiales</h2>
            <p>
              Créé le 18 Septembre 2014, le CLIN coordonne l’action des professionnels de l’établissement avec l’équipe opérationnelle d’hygiène hospitalière et prépare chaque année le programme du plan d’action de lutte contre les infections nosocomiales. Il définit également les méthodes et les indicateurs adaptés aux activités du CHUO, permettant le suivi et l’analyse des risques infectieux liés aux soins. Le CLIN est consulté lors de la programmation des travaux, d’aménagement des locaux ou l’acquisition des équipements susceptibles d’avoir une répercussion sur la prévention et la transmission des infections nosocomiales dans le CHU. Il a également pour mission de promouvoir les actions de formation et d’évaluation du personnel dans la lutte contre la transmission des infections en milieu hospitalier et leur surveillance.
            </p>
          </div>
          <div>
            <h2 className="text-blue-900 font-semibold mb-2">CGMDM : Le Comité de Gestion des Médicaments et des Dispositifs Médicaux</h2>
            <p>
              Créé le 04 Juin 2014, le comité de gestion des médicaments et dispositifs médicaux a pour principal rôle la définition de la politique du médicament et des dispositifs médicaux à l’intérieur du CHU, et de contribuer au bon usage des produits pharmaceutiques.
            </p>
          </div>
          <div>
            <h2 className="text-blue-900 font-semibold mb-2">CDO : Le Comité de Don d’Organes</h2>
            <p>
              Le 26 Juin 2015, est la date de création du comité de don des organes, celui-ci a pour mission de veiller à l’organisation des activités et à la sensibilisation de l’importance de don des organes au niveau de la région de l’Oriental.
            </p>
          </div>
          <div>
            <h2 className="text-blue-900 font-semibold mb-2">Le Comité de l’Hémovigilance</h2>
            <p>
              Le Comité de l’Hémovigilance a pour mission de contribuer par ses études et ses propositions à l’amélioration de la sécurité des patients qui y sont transfusés. Il veille à la mise en oeuvre des règles et procédures d’hémovigilance prévues par la présente section. Il est notamment chargé de la coordination des actions d’hémovigilance entreprises au sein du CHU. Il a tenu sa première réunion préparatoire le 07 Août 2015.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NosComites;
