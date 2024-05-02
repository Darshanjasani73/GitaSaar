import React, { useEffect } from 'react';

const Pranayam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-[3pc] p-6 lg:p-0 lg:flex-row ">
      <div className="  dark:text-blck-200 text-bl rounded-5xl border-7 border-black-800 rounded-md overflow-hidden p-6 w-full lg:w-[84%] lg:m-2 lg:p-6 lg:bg-center relative">
        <h1 className="text-blck text-lg font-bold mb-10 text-center text-[35px] leading-10">प्राणायाम के बारे में</h1>
        <p className="mb-4">प्राणायाम योग के आठ अंगों में से एक है। अष्टांग योग में आठ प्रक्रियाएँ होती हैं- यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान, तथा समाधि । प्राणायाम = प्राण + आयाम । इसका शाब्दिक अर्थ है -  प्राण या श्वसन को लम्बा करना  या फिर   जीवनी शक्ति  को लम्बा करना । प्राणायाम का अर्थ कुछ हद तक श्वास को नियंत्रित करना हो सकता है | परन्तु स्वास को कम करना नहीं होता है | प्राण या श्वास का आयाम या विस्तार ही प्राणायाम कहलाता है |</p>
        <p className="mb-4">प्राणायाम का योग में बहुत महत्व है। आदि शंकराचार्य श्वेताश्वतर उपनिषद पर अपने भाष्य में कहते हैं, &quot; प्राणायाम के द्वारा जिस मन का मैल धुल गया है वही मन ब्रह्म में स्थिर होता है। इसलिए शास्त्रों में प्राणायाम के विषय में उल्लेख है। &quot;</p>
        <p className="mb-4"> स्वामी विवेकानंद इस विषय में अपना मत व्यक्त करते हैं, &quot; इस प्राणायाम में सिद्ध होने पर हमारे लिए मानो अनंत शक्ति का द्वार खुल जाता है। मान लो, किसी व्यक्ति की समझ में यह प्राण का विषय पूरी तरह आ गया और वह उस पर विजय प्राप्त करने में भी कृतकार्य हो गया , तो फिर संसार में ऐसी कौन-सी शक्ति है, जो उसके अधिकार में न आए? उसकी आज्ञा से चन्द्र-सूर्य अपनी जगह से हिलने लगते हैं, क्षुद्रतम परमाणु से वृहत्तम सूर्य तक सभी उसके वशीभूत हो जाते हैं, क्योंकि उसने प्राण को जीत लिया है। &quot;</p>
        <h6 className="text-blck text-lg font-bold mb-5 text-center leading-10">प्राणायाम के गुण और लाभ</h6>
        <p className="mb-2">(1) प्राणायाम के अभ्यास से सांसों को नियंत्रित करना संभव होता है, जिससे सांस की गहराई और लंबाई में सुधार होता है।</p>
        <p className="mb-2">(2) प्राणायाम आसनों का अभ्यास करना श्वासनली को संतुलित करने में मदद कर सकता है, जिससे श्वासनली के साथ संबंधित समस्याओं का समाधान हो सकता है।</p>
        <p className="mb-2">(3) प्राणायाम के अभ्यास से प्राणशक्ति को बढ़ावा मिलता है, जिससे शारीरिक और मानसिक ऊर्जा में वृद्धि होती है।</p>
        <p className="mb-2">(4) प्राणायाम के अभ्यास से शारीरिक और मानसिक समर्थता में वृद्धि होती है, जिससे व्यक्ति को संजीवनी शक्ति मिलती है।</p>
        <p className="mb-2">(5) प्राणायाम के अभ्यास से सिरदर्द, माइग्रेन, गुर्दे की पथरी, और अन्य शारीरिक समस्याओं का समाधान हो सकता है।</p>
        <p className="mb-2">(6) शारीरिक और मानसिक स्वास्थ्य को सुधारना: प्राणायाम के अभ्यास से शारीरिक और मानसिक स्वास्थ्य में सुधार होता है, जिससे स्ट्रेस, चिंता, और थकान का समाधान होता है।</p>
        <h6 className="text-blck text-lg font-bold mt-8 mb-8 text-center leading-10">प्राणायाम</h6>
        <div className="flex flex-col items-center">
          <a className="Clink font-bold cursor-pointer" href="https://www.wikihow.com/Do-Pranayam" target="_blank" rel="noopener noreferrer">🔗 Modern Techniques of Pranayama 🔗 </a><br />
          <a className="Clink font-bold" href="https://www.thepinkvilla.in/2023/06/The-Power-of-Pranayama-in-Hindi---.html" target="_blank" rel="noopener noreferrer">🔗 Power of Pranayama 🔗 </a><br />
        </div>
      </div>
    </div>
  );
};
export default Pranayam;
