import React, { useEffect } from 'react';
import UpanishadContent from './UpanishadContent';

const Upanishad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-[3pc] p-6 lg:p-0 lg:flex-col ">
      <div className="  dark:text-blck-200 text-bl rounded-5xl border-7 border-black-800 rounded-md overflow-hidden p-6 w-full lg:w-[84%] lg:m-2 lg:p-6 lg:bg-center relative">
        <h1 className="text-blck text-lg font-bold mb-10 text-center text-[35px] leading-10">उपनिषद् के बारे में</h1>
        <p className="mb-4">उपनिषद् भारतीय दर्शन के प्रमुख ग्रंथ हैं जो वेदांत के तत्त्वों का विस्तृत वर्णन करते हैं। ये ग्रंथ वेदों के अन्तिम भाग माने जाते हैं और उन्हें &apos;उपनिषद्&apos; भी कहा जाता है। उपनिषद् का अर्थ होता है &apos;बातचीत&apos; या &apos;गोपनीय ज्ञान&apos;। ये ग्रंथ अत्यंत गहन हैं और अध्यात्मिक ज्ञान को समझने के लिए महत्वपूर्ण माने जाते हैं।</p>
        <p className="mb-2"><span className="font-bold">(1) ब्रह्मविद्या:</span> उपनिषद् ब्रह्मविद्या का महत्वपूर्ण स्रोत हैं, जो अध्यात्मिक ज्ञान का प्रमुख विषय है। ये ग्रंथ ब्रह्म के अस्तित्व, ब्रह्म की प्रकृति, और आत्मा के तत्त्व का वर्णन करते हैं।</p>
        <p className="mb-2"><span className="font-bold">(2) उपासना:</span> उपनिषद् में उपासना के विभिन्न प्रकारों का विवरण है, जो वेदान्ती दर्शन की महत्वपूर्ण भाग है। इनमें उपासना के लिए विभिन्न उपायों की चर्चा की गई है।</p>
        <p className="mb-2"><span className="font-bold">(3) मोक्ष:</span> उपनिषद् मोक्ष या मुक्ति के सिद्धांत पर विचार करते हैं और मनुष्य के आत्मगत शांति और स्वतंत्रता के मार्ग का विवेचन करते हैं।</p>
        <p className="mb-2"><span className="font-bold">(4) ज्ञान के प्राप्ति का मार्ग: </span>उपनिषद् में आत्मज्ञान के प्राप्ति के विभिन्न मार्गों का विवरण है, जिनमें गुरुकुल की परंपरा, तपस्या, ध्यान, और सेवा शामिल हैं।</p>
        <p className="mb-4"><span className="font-bold">(5) अनंतता का सिद्धांत:</span> उपनिषद् में अनंतता के सिद्धांत का विस्तार से वर्णन है, जो आत्मा के अनंत स्वरूप और ब्रह्म की अनंतता को बताता है।</p>
        <p className="mb-4">उपनिषद् के ग्रंथों में कई धार्मिक, दार्शनिक, और आध्यात्मिक सिद्धांत हैं जो मानव जीवन की गहराईयों को समझने में सहायक होते हैं। इन ग्रंथों का अध्ययन और उनके सिद्धांतों का समझना आत्मज्ञान और सच्चे धर्म की खोज में मदद करता है।</p>
      </div>
      <div className="p mt-4 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl overflow-hidden w-[83%] lg:w-100 p-0 m-1 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <UpanishadContent />
      </div>
    </div>
  );
};
export default Upanishad;
