import React, { useEffect } from 'react';
import PuranContent from './PuranContent';

const Puran = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-[3pc] p-6 lg:p-0 lg:flex-col ">
      <div className="  dark:text-blck-200 text-bl rounded-5xl border-7 border-black-800 rounded-md overflow-hidden p-6 w-full lg:w-[84%] lg:m-2 lg:p-6 lg:bg-center relative">
        <h1 className="text-blck text-lg font-bold mb-10 text-center text-[35px] leading-10">पुराण के बारे में</h1>
        <p className="mb-4">पुराण, हिन्दुओं के धर्म-सम्बन्धी आख्यान ग्रन्थ हैं, जिनमें संसार - ऋषियों - राजाओं के वृत्तान्त आदि हैं। ये वैदिक काल के बहुत समय बाद के ग्रन्थ हैं। भारतीय जीवन-धारा में जिन ग्रन्थों का महत्त्वपूर्ण स्थान है उनमें पुराण प्राचीन भक्ति-ग्रन्थों के रूप में बहुत महत्त्वपूर्ण माने जाते हैं। अठारह पुराणों में अलग-अलग देवी-देवताओं को केन्द्र मानकर पाप और पुण्य, धर्म और अधर्म, कर्म और अकर्म की गाथाएँ कही गयी हैं। कुछ पुराणों में सृष्टि के आरम्भ से अन्त तक का विवरण दिया गया है।</p>
        <p className="mb-4">पुराणों में वर्णित विषयों की कोई सीमा नहीं है। इसमें ब्रह्माण्डविद्या, देवी-देवताओं, राजाओं, नायकों, ऋषि-मुनियों की वंशावली, लोककथाएँ, तीर्थयात्रा, मन्दिर, चिकित्सा, खगोल शास्त्र, व्याकरण, खनिज विज्ञान, हास्य, प्रेमकथाओं के साथ-साथ धर्मशास्त्र और दर्शन का भी वर्णन है। [3] विभिन्न पुराणों की विषय-वस्तु में बहुत अधिक असमानता है। इतना ही नहीं, एक ही पुराण के कई-कई पाण्डुलिपियाँ प्राप्त हुई हैं जो परस्पर भिन्न-भिन्न हैं।</p>
        <p className="mb-4">हिन्दू पुराणों के रचनाकार अज्ञात हैं और ऐसा लगता है कि कई रचनाकारों ने कई शताब्दियों में इनकी रचना की है। इसके विपरीत जैन पुराण हैं।</p>
        <p className="mb-4">पुराणों की संख्या प्राचीन काल से अठारह मानी गयी है। &apos;विष्णुपुराण&apos; के अनुसार अठारह पुराणों के नाम इस प्रकार हैं—<span className="font-bold">ब्रह्म, पद्म, विष्णु, ब्रह्माण्ड, भागवत, नारद, मार्कण्डेय, अग्नि, भविष्य, ब्रह्मवैवर्त, लिङ्ग, वाराह, स्कन्द, वामन, कूर्म, मत्स्य, गरुड और शिव   </span></p>
      </div>
      <div className="p mt-4 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl overflow-hidden w-[83%] lg:w-100 p-0 m-1 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <PuranContent />
      </div>
    </div>
  );
};
export default Puran;
