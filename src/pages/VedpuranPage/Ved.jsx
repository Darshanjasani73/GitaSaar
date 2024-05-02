import React, { useEffect } from 'react';
import VedContent from './VedContent';

const Ved = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-[3pc] p-6 lg:p-0 lg:flex-col ">
      <div className="  dark:text-blck-200 text-bl rounded-5xl border-7 border-black-800 rounded-md overflow-hidden p-6 w-full lg:w-[84%] lg:m-2 lg:p-6 lg:bg-center relative">
        <h1 className="text-blck text-lg font-bold mb-10 text-center text-[35px] leading-10">वेद के बारे में</h1>
        <p className="mb-4">वेद भारतीय संस्कृति के प्राचीनतम और प्रमुख धार्मिक ग्रंथ हैं। इन्हें अपौरुषेय (अमानुष, अज्ञेय) माना जाता है, यानी कि इन्हें किसी व्यक्ति द्वारा नहीं रचा गया है, बल्कि इन्हें आदिकाल से ही अनंत ज्ञान का स्रोत माना जाता है। वेदों का संकलन और संरक्षण आर्य समाज के द्वारा किया गया था।</p>
        <h6 className="text-blck text-lg font-bold mb-5 text-center leading-10">वेदों के चार प्रमुख संग्रह हैं:</h6>
        <p className="mb-2"><span className="font-bold">(1) ऋग्वेद:</span> सबसे प्राचीन वेद है, जिसमें चार्या या गान की रचनाएँ हैं।</p>
        <p className="mb-2"><span className="font-bold">(2) यजुर्वेद:</span> यज्ञों की विधियों का संग्रह है।</p>
        <p className="mb-2"><span className="font-bold">(3) सामवेद:</span> सामगानों का संग्रह है, जो ऋग्वेद से लिए गए मंत्रों को गाया जाता है।</p>
        <p className="mb-6"><span className="font-bold">(4) अथर्ववेद:</span> इसमें विभिन्न प्रकार के यन्त्र, मंत्र, और कवच दिए गए हैं जिनका उपयोग शारीरिक और मानसिक रोगों के उपचार में किया जाता है।</p>
        <p className="mb-6">वेदों में धार्मिक, सामाजिक, और आर्थिक जीवन के विभिन्न पहलुओं का विस्तृत विवरण है। इनमें मंत्र, आर्यों की आचार्यकुलीन संस्कृति, धर्म, विज्ञान, और जीवन की सभी पहलुओं पर व्याख्या की गई है। वेदों का अध्ययन, उनके मंत्रों की उच्चारण, और उनकी समझ मनुष्य के जीवन को प्रेरित करने में मदद करता है। वेदों को &apos;अपौरुषेय&apos; अर्थात् &apos;मनुष्य के बनाए गए नहीं&apos; माना जाता है, जिसका अर्थ है कि वेदों की रचना किसी व्यक्ति द्वारा नहीं की गई, बल्कि इनका उत्पादन अज्ञात श्रोताओं द्वारा हुआ।</p>
      </div>
      <div className="p mt-4 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl overflow-hidden w-[83%] lg:w-100 p-0 m-1 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <VedContent />
      </div>
    </div>
  );
};
export default Ved;
