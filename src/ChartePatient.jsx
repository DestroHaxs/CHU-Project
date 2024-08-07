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
        <h1 className="text-3xl font-bold mb-8 text-blue-900 text-center">ميثاق المريض</h1>
        <div className="space-y-12">
          <div className="rtl text-right">
            <p className="text-gray-700 text-lg mb-8">
              من أجل جودة الخدمات، يتوجب على كل مريض، أفراد عائلته، مرافقيه وزائريه الالتزام بالتوصيات التالية:
            </p>
            <ul className="list-disc list-inside space-y-8 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">الإدلاء بمعلومات دقيقة:</strong>
                  <span className="block mt-1">ضمانا لنجاعة التشخيص والعلاج، المرجو الإدلاء بمعلومات دقيقة حول البيانات الشخصية أو التاريخ الصحي للمريض أو العلاج الذي يتلقاه.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">احترام الآخرين:</strong>
                  <span className="block mt-1">من أجل راحة الجميع، المرجو التعامل باحترام واتباع سلوك حضاري مع المرضى الآخرين أو الزائرين.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">الالتزام بالتعليمات:</strong>
                  <span className="block mt-1">احترام الفريق الطبي، التمريضي والإداري، والالتزام بتعليماتهم ضمن القوانين الجاري بها العمل بالمركز الاستشفائي.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">المحافظة على المواعيد:</strong>
                  <span className="block mt-1">المحافظة على المواعيد وإبلاغ العاملين في حالة عدم التمكن من الحضور حتى يتمكن مريض آخر من الاستفادة من هذا الوقت.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">احترام طوابير الانتظار:</strong>
                  <span className="block mt-1">احترام طوابير الانتظار من أجل خدمة أفضل.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">الحفاظ على الهدوء:</strong>
                  <span className="block mt-1">الحفاظ على الهدوء بقاعات الانتظار وخلال أوقات الزيارة، احتراما للحالة الصحية للمرضى.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">الحفاظ على النظافة:</strong>
                  <span className="block mt-1">الحفاظ على نظافة المركز الاستشفائي، وذلك باستخدام سلة المهملات الموضوعة لهذا الغرض.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">الحفاظ على معدات المركز الاستشفائي:</strong>
                  <span className="block mt-1">الحفاظ على معدات المركز الاستشفائي، أي عدم الإفراط في استخدامها أو استخدامها في غير محلها.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">الامتناع عن التدخين:</strong>
                  <span className="block mt-1">الامتناع عن التدخين داخل المركز الاستشفائي، و ذلك ترسيخا لأهداف مبادرة "مستشفى بدون تدخين".</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">زيارة المريض:</strong>
                  <span className="block mt-1">من أجل راحة المرضى، المرجو زيارة المريض بأعداد قليلة وخلال أوقات الزيارة المحددة. ويحدد عدد الزوار زائرين لكل مريض.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">احترام النظام الغذائي للمريض:</strong>
                  <span className="block mt-1">احترام النظام الغذائي للمريض والمقادير التي يصفها له الطبيب. وتخضع الوجبات المحمولة من الخارج للمراقبة من طرف الطبيب أو الاختصاصي في التغذية.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">الحفاظ على الأشياء الخاصة:</strong>
                  <span className="block mt-1">اصطحاب، عند الدخول للاستشفاء، محفظة بها أدوات النظافة الشخصية (معجون الأسنان وفرشاة، مشط، منشفة، ملابس وصندل)، وعدم إعارتها للمرضى الآخرين.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <div>
                  <strong className="text-xl">مغادرة المركز الاستشفائي:</strong>
                  <span className="block mt-1">بالنسبة للمرضى المستفيدين من الاستشفاء، لا يتوجب عليهم مغادرة المركز الاستشفائي إلا بإذن من الطبيب المسؤول. في حالة رغبته المغادرة يوقع المريض تعهد خاص، بعد أن تفسر له النتائج المترتبة عن مغادرته.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-700 mt-12 leading-loose rtl text-lg">
          الميثاق أعلاه يعرض حقوق وواجبات المرضى داخل مركزنا الاستشفائي. كل نقطة مهمة لضمان جودة الرعاية ورضا المرضى.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default ChartePatient;
