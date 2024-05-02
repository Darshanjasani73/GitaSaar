import React, { useEffect } from 'react';

const Mudra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-[3pc] p-6 lg:p-0 lg:flex-row ">
      <div className="  dark:text-blck-200 text-bl rounded-5xl border-7 border-black-800 rounded-md overflow-hidden p-6 w-full lg:w-[84%] lg:m-2 lg:p-6 lg:bg-center relative">
        <h1 className="text-blck text-lg font-bold mb-10 text-center text-[35px] leading-10">योग मुद्रा के बारे में</h1>
        <p className="mb-4">योग प्राकृतिक उपचार के प्राचीन भारतीय दर्शन का अनुसरण करता है और आसन के अलावा, योग में मुद्राओं का भी बहुत महत्व है। ऐसा माना जाता है कि शरीर प्रकृति के 5 तत्वों द्वारा निर्मित और संचालित होता है और इन तत्वों के बीच असंतुलन के परिणामस्वरूप मानव रोग और व्याधियां उत्पन्न होती हैं। योग मुद्राएं शरीर की ऊर्जा को ब्रह्मांड की ऊर्जा से जोड़ने में मदद करती हैं जिससे इस संतुलन को बनाए रखने में योगदान मिलता है।</p>
        <p className="mb-4">&quot; मुद्रा &quot; एक संस्कृत शब्द है जिसे हाथ के इशारों के रूप में परिभाषित किया गया है। जब कोई भी योग मुद्रा की जाती है, तो हाथ और उंगलियों की स्थिति बहुत महत्वपूर्ण होती है क्योंकि यह सही ऊर्जा को आकर्षित करने में महत्वपूर्ण भूमिका निभाती है जो पूर्ण उपचार में योगदान देती है।</p>
        <p className="mb-4">जैसा कि नीचे बताया गया है, प्रत्येक उंगली एक तत्व का प्रतिनिधित्व करती है और जब उंगलियों को मुद्राओं के माध्यम से जोड़ा जाता है, तो इससे राहत मिलती है।</p>
        <p className="mb-2">🔥 अंगूठा अग्नि का प्रतिनिधित्व करता है।</p>
        <p className="mb-2">🍃 तर्जनी अंगुली वायु का प्रतिनिधित्व करती है।</p>
        <p className="mb-2">🌌 मध्यमा उंगली अंतरिक्ष का प्रतिनिधित्व करती है।</p>
        <p className="mb-2">🌏 अनामिका उंगली पृथ्वी का प्रतिनिधित्व करती है।</p>
        <p className="mb-2">💦 छोटी उंगली जल का प्रतिनिधित्व करती है।</p>
        <h6 className="text-blck text-lg font-bold mb-5 text-center leading-10">योग मुद्रा के गुण और लाभ</h6>
        <p className="mb-2">(1) मुद्राएँ शारीरिक लाभ प्रदान करती हैं जैसे कि रक्तचालना को बढ़ावा देना, शारीरिक दुर्बलता को कम करना, मांसपेशियों को मजबूत करना, और शरीर की उत्थान को बढ़ाना।</p>
        <p className="mb-2">(2) मुद्राओं को आयुर्वेद में एक प्रमुख उपचार के रूप में माना जाता है जो विभिन्न रोगों और रोगों के इलाज में सहायक हो सकती हैं।</p>
        <p className="mb-2">(3) मुद्राएँ ध्यान, प्रार्थना और आध्यात्मिक साधना में आध्यात्मिक अनुभव को बढ़ाने का माध्यम हो सकती हैं।</p>
        <p className="mb-6">(4) मुद्राएँ मानसिक स्थिति को संतुलित करने में मदद करती हैं, मानसिक तनाव को कम करने में सहायक होती हैं, चिंता को दूर करने में मदद करती हैं, और मानसिक शांति और सामंजस्य प्रदान करती हैं।</p>
        <h6 className="text-blck text-lg font-bold mt-8 mb-8 text-center leading-10">योग मुद्रा</h6>
        <div className="flex flex-col items-center">
          <a className="Clink font-bold cursor-pointer" href="https://www.dragonfly-yoga.org/blog/ten-yoga-mudras-and-their-benefits-1" target="_blank" rel="noopener noreferrer">🔗 Types of Mudras 🔗 </a><br />
          <a className="Clink font-bold cursor-pointer" href="https://www.mindbodygreen.com/articles/7-mudras-to-unlock-your-7-chakras" target="_blank" rel="noopener noreferrer">🔗 Mudras for Chakras 🔗 </a><br />
          <a className="Clink font-bold cursor-pointer" href="https://www.wikihow.com/Mudras-for-Healing" target="_blank" rel="noopener noreferrer">🔗 Mudras for Healing 🔗 </a><br />
        </div>
      </div>
    </div>
  );
};
export default Mudra;
