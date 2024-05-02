import React, { useEffect } from 'react';
import OtherBooksContent from './OtherBooksContent';

const OtherBooks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-[3pc] p-6 lg:p-0 lg:flex-col ">
      <div className="  dark:text-blck-200 text-bl rounded-5xl border-7 border-black-800 rounded-md overflow-hidden p-6 w-full lg:w-[84%] lg:m-2 lg:p-6 lg:bg-center relative">
        <h1 className="text-blck text-lg font-bold mb-10 text-center text-[35px] leading-10">&ldquo; ग्रंथों का जीवन में योगदान: ज्ञान, अनुभव, और बुद्धिमत्ता की यात्रा &ldquo;</h1>
        <p className="mb-4">ग्रंथों का महत्व हमारे जीवन में अत्यंत महत्वपूर्ण है। ये हमें ज्ञान, अनुभव, समृद्धि, और समझ के स्रोत प्रदान करते हैं। निम्नलिखित कुछ तत्त्व ग्रंथों के महत्व को समझाते हैं</p>
        <p className="mb-2"><span className="font-bold">(1) ज्ञान का स्रोत:</span> ग्रंथ हमें ज्ञान के स्रोत के रूप में सेवारत हैं। वेद, उपनिषद्, और पुराण जैसे धार्मिक ग्रंथ हमें अध्यात्मिक ज्ञान प्रदान करते हैं, जबकि वैज्ञानिक और साहित्यिक ग्रंथ हमें विज्ञान, साहित्य, कला, और समाज के विषय में जानकारी प्रदान करते हैं।</p>
        <p className="mb-2"><span className="font-bold">(2) अनुभव का संग्रह:</span> ग्रंथों में विभिन्न लोगों के अनुभव, विचार, और जीवन की कहानियाँ होती हैं, जो हमें जीवन के विभिन्न पहलुओं को समझने में मदद करती हैं।</p>
        <p className="mb-2"><span className="font-bold">(3) आदर्श और सीख:</span> ग्रंथों में आदर्श, नैतिकता, और जीवन के सिद्धांतों का विवरण होता है जो हमें सही और सफल जीवन जीने के लिए मार्गदर्शन करते हैं।</p>
        <p className="mb-2"><span className="font-bold">(4) संगठन और व्यवस्था:</span> ग्रंथों में विषयों को संगठित और व्यवस्थित रूप में प्रस्तुत किया जाता है, जो हमें विचारों को समझने में मदद करता है।</p>
        <p className="mb-4"><span className="font-bold">(5) संवेदनशीलता:</span> कविताएँ, कहानियाँ, और कला संग्रहों जैसे ग्रंथ हमें संवेदनशीलता, सृजनात्मकता, और साहित्यिक रसों का अनुभव कराते हैं।</p>
        <p className="mb-4">ग्रंथों का अध्ययन, समीक्षा, और सम्मान करना हमारे जीवन को समृद्ध, सहज, और प्रेरणादायक बनाता है। ये हमें नए विचारों को समझने, नए अनुभवों को प्राप्त करने, और जीवन को सही दिशा में देखने के लिए प्रेरित करते हैं।</p>
      </div>
      <div className="p mt-4 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl overflow-hidden w-[83%] lg:w-100 p-0 m-1 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <OtherBooksContent />
      </div>
    </div>
  );
};
export default OtherBooks;
