import React, { useEffect } from 'react';

const Asans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-[3pc] p-6 lg:p-0 lg:flex-row ">
      <div className="  dark:text-blck-200 text-bl rounded-5xl border-7 border-black-800 rounded-md overflow-hidden p-6 w-full lg:w-[84%] lg:m-2 lg:p-6 lg:bg-center relative">
        <h1 className="text-blck text-lg font-bold mb-10 text-center text-[35px] leading-10">आसन के बारे में</h1>
        <p className="mb-4">आसन का शाब्दिक अर्थ है - संस्कृत शब्दकोष के अनुसार आसनम् (नपुं.) - आस् (धातु) +ल्युट (प्रत्यय) । जिसके विभिन्न अर्थ हैं जैसे - 1. बैठना, 2. बैठने का आधार, 3. बैठने की विशेष प्रक्रिया, 4. बैठ जाना इत्यादि।</p>
        <p className="mb-4">अष्टांग योग (यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान, समाधि) में इस क्रिया का स्थान तृतीय है। चित्त की स्थिरता, शरीर एवं उसके अंगों की दृढ़ता और कायिक सुख के लिए इस क्रिया का विधान मिलता है। विभिन्न ग्रन्थों में आसन के लक्षण ये दिए गए हैं- उच्च स्वास्थ्य की प्राप्ति, शरीर के अंगों की दृढ़ता,प्राणायामादि उत्तरवर्ती साधनक्रमों में सहायता, चित्तस्थिरता, शारीरिक एवं मानसिक सुख दायी आदि। पंतजलि ने मन की स्थिरता और सुख को लक्षणों के रूप में माना है।</p>
        <h6 className="text-blck text-lg font-bold mb-5 text-center leading-10">आसन के गुण और लाभ</h6>
        <p className="mb-2">(1) आसन रोग विकारों को नष्ट करते हैं, रोगों से रक्षा करते हैं, शरीर को नीरोग, स्वस्थ एवं बलिष्ठ बनाए रखते हैं।</p>
        <p className="mb-2">(2) आसनों से नेत्रों की ज्योति बढ़ती है। आसनों का निरन्तर अभ्यास करने वाले को चश्में की आवश्यकता समाप्त हो जाती है।</p>
        <p className="mb-2">(3) आसन द्वारा पेट की भली-भांति सुचारु रूप से सफाई होती है और पाचन अंग पुष्ट होते हैं। पाचन-संस्थान में गड़बड़ियां उत्पन्न नहीं होतीं।</p>
        <p className="mb-2">(4) आसन पेशियों को शक्ति प्रदान करते हैं। इससे मोटापा घटता है और दुर्बल-पतला व्यक्ति तंदरुस्त होता है।</p>
        <p className="mb-2">(5) आसन स्त्रियों और पुरुषों को संयमी एवं आहार-विहार में मध्यम मार्ग का अनुकरण करने वाला बनाते हैं, अत: मन और शरीर को स्थाई तथा सम्पूर्ण स्वास्थ्य, मिलता है।</p>
        <p className="mb-2">(6) आसन शारीरिक स्वास्थ्य के लिए वरदान स्वरूप हैं क्योंकि इनमें शरीर के समस्त भागों पर प्रभाव पड़ता है और वह अपने कार्य सुचारु रूप से करते हैं।</p>
        <p className="mb-6">(7) आसन श्वास- क्रिया का नियमन करते हैं, हृदय और फेफड़ों को बल देते हैं, रक्त को शुद्ध करते हैं और मन में स्थिरता पैदा कर संकल्प शक्ति को बढ़ाते हैं।</p>
        <h6 className="text-blck text-lg font-bold mt-8 mb-8 text-center leading-10">आसन</h6>
        <div className="flex flex-col items-center">
          <a className="Clink font-bold " href="https://hi.wikipedia.org/wiki/%E0%A4%86%E0%A4%B8%E0%A4%A8" target="_blank" rel="noopener noreferrer">🔗 Know more about Asanas  🔗 </a><br />
          <a className="Clink font-bold" href="https://timesofindia.indiatimes.com/life-style/health-fitness/fitness/6-yoga-asanas-men-must-not-miss-out-on/photostory/94600744.cms" target="_blank" rel="noopener noreferrer">🔗 Best Asanas For Male 🚹 🔗 </a><br />
          <a className="Clink font-bold" href="https://timesofindia.indiatimes.com/life-style/health-fitness/fitness/yoga-asanas-every-busy-woman-must-do-daily/photostory/81485690.cms?picid=81485711" target="_blank" rel="noopener noreferrer">🔗 Best Asanas For Female 🚺 🔗 </a><br />
          <a className="Clink font-bold" href="https://greatist.com/fitness/yoga-for-flexibility" target="_blank" rel="noopener noreferrer">🔗 Asanas for Flexibility 🔗 </a><br />
          <a className="Clink font-bold" href="https://www.yogajournal.com/poses/types/strength/yoga-poses-for-strength/" target="_blank" rel="noopener noreferrer">🔗 Asanas for Strength 🔗 </a><br />
          <a className="Clink font-bold" href="https://www.amarujala.com/photo-gallery/lifestyle/yoga-and-health/best-4-yoga-asanas-for-weight-loss-quickly-reduce-belly-fat" target="_blank" rel="noopener noreferrer">🔗 Asanas for Weight Loss 🔗 </a><br />
          <a className="Clink font-bold" href="https://liforme.com/blogs/blog/yoga-for-mental-health-17-poses-that-improve-your-well-being" target="_blank" rel="noopener noreferrer">🔗 Asanas for Mental health 🔗 </a><br />
          <a className="Clink font-bold" href="https://ndtv.in/health/yoga-asanas-to-improve-digestion-naturally-5-most-excellent-yoga-poses-that-strengthen-the-digestive-system-natural-ways-to-increase-digestive-power-2427584" target="_blank" rel="noopener noreferrer">🔗 Asanas for Digestion 🔗 </a><br />
          <a className="Clink font-bold" href="https://www.amarujala.com/photo-gallery/lifestyle/yoga-and-health/today-yoga-tips-know-these-yoga-asanas-before-sleeping-for-better-sleep-and-health?pageId=3" target="_blank" rel="noopener noreferrer">🔗 Asanas for Sleep 🔗 </a><br />
          <a className="Clink font-bold" href="https://www.thehealthsite.com/hindi/photo-gallery/yoga-poses-to-relieve-stress-in-hindi-986311/marjasan-986316/" target="_blank" rel="noopener noreferrer">🔗 Asanas for Stress Relief 🔗 </a><br />
        </div>
      </div>
    </div>
  );
};
export default Asans;
