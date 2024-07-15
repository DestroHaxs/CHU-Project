import React from 'react';

const Footer = () => {
  return (
    <div className="bg-blue-50 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-blue-900">CHU Oujda</h4>
            <p className="text-gray-700 mt-2">
              <a href="#" className="text-blue-500 hover:text-blue-700 underline">Qui sommes-nous?</a>
            </p>
            <p className="text-gray-700 mt-1">
              <a href="#" className="text-blue-500 hover:text-blue-700 underline">Qu'est ce qu'on fait</a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-900">Contact</h4>
            <p className="text-gray-700 mt-2"><span className="font-semibold">Email:</span> contact@chuoujda.ma</p>
            <p className="text-gray-700 mt-1"><span className="font-semibold">Téléphone:</span> +212 5 36 53 91 00</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-900">Localisation du CHU</h4>
            <div className="mt-2">
              <a 
                href="https://maps.app.goo.gl/uq8dWMt7Y4tj15bp6" 
                className="text-blue-500 hover:text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
