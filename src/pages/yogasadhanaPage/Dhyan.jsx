import React, { useEffect } from 'react';

const Dhyan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-[3pc] p-6 lg:p-0 lg:flex-row ">
      <div className="dark:text-blck-200 text-bl rounded-5xl border-7 border-black-800 rounded-md overflow-hidden p-6 w-full lg:w-[84%] lg:m-2 lg:p-6 lg:bg-center relative">
        <h1 className="text-blck text-lg font-bold mb-10 text-center text-[35px] leading-10">ध्यान के बारे में</h1>
        <p className="mb-4">ध्यान एक क्रिया है जिसमें व्यक्ति अपने मन को चेतना की एक विशेष अवस्था में लाने का प्रयत्न करता है। ध्यान का उद्देश्य कोई लाभ प्राप्त करना हो सकता है या ध्यान करना अपने-आप में एक लक्ष्य हो सकता है। &apos;ध्यान&apos; से अनेकों प्रकार की क्रियाओं का बोध होता है। इसमें मन को विश्रांति देने की सरल तकनीक से लेकर आन्तरिक ऊर्जा या जीवन-शक्ति (की, प्राण आदि) का निर्माण तथा करुणा, प्रेम, धैर्य, उदारता, क्षमा आदि गुणों का विकास आदि सब समाहित हैं।</p>
        <p className="mb-4">अलग-अलग सन्दर्भों में &apos;ध्यान&apos; के अलग-अलग अर्थ हैं। ध्यान का प्रयोग विभिन्न धार्मिक क्रियाओं के रूप में अनादि काल से किया जाता रहा है।</p>
        <h6 className="text-blck text-lg font-bold mb-5 text-center leading-10">ध्यान के गुण और लाभ</h6>
        <p className="mb-2">(1) ध्यान करने से मन की शांति और स्थिरता में सुधार होता है। यह मानसिक स्थिति को संतुलित करता है और चिंता और अवसाद से निजात दिलाता है।</p>
        <p className="mb-2">(2) ध्यान करने से शारीरिक और मानसिक स्वास्थ्य में सुधार होता है। यह स्ट्रेस को कम करता है, इम्यून सिस्टम को मजबूत करता है, और अच्छी नींद की गारंटी प्रदान करता है।</p>
        <p className="mb-2">(3) ध्यान करने से व्यक्ति की संचेतना में वृद्धि होती है। यह उसकी जागरूकता और संवेदनशीलता को बढ़ाता है, जिससे उसे अपने आसपास के वातावरण को बेहतर ढंग से समझने में मदद मिलती है।</p>
        <p className="mb-2">(4) ध्यान करने से व्यक्ति के जीवन में सामंजस्य और संतुलन की भावना आती है। यह उसे अपने काम और व्यक्तिगत जीवन के बीच संतुलन बनाए रखने में मदद करता है।</p>
        <p className="mb-2">(5) ध्यान करने से व्यक्ति अपनी आत्मा को और अधिक गहराई से जानने और समझने में सक्षम होता है। यह उसे अपने असीमित शक्तियों और क्षमताओं के प्रति उत्साहित करता है।</p>
        <h6 className="text-blck text-lg font-bold mt-8 mb-8 text-center leading-10">ध्यान</h6>
        <div className="flex flex-col items-center">
          <a className="Clink font-bold cursor-pointer" href="https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-meditate-for-beginners/" target="_blank" rel="noopener noreferrer">🔗 Getting Started with Meditation 🔗 </a><br />
          <a className="Clink font-bold cursor-pointer" href="https://www.verywellmind.com/different-meditation-techniques-for-relaxation-3144696" target="_blank" rel="noopener noreferrer">🔗 Meditation Techniques 🔗 </a><br />
          <a className="Clink font-bold cursor-pointer" href="https://www.wikihow.com/Meditate-for-Self-Discovery" target="_blank" rel="noopener noreferrer">🔗 Meditation and Self-Discovery 🔗 </a><br />
          <a className="Clink font-bold cursor-pointer" href="https://themindfulsteward.com/mindfulness/how-to-incorporate-meditation-into-your-busy-routine/" target="_blank" rel="noopener noreferrer">🔗 Integrating Meditation into Daily Life 🔗 </a><br />
          <a className="Clink font-bold cursor-pointer" href="https://hi.wikipedia.org/wiki/%E0%A4%86%E0%A4%B8%E0%A4%A8" target="_blank" rel="noopener noreferrer">🔗 Advanced Meditation Practices 🔗 </a><br />
        </div>
      </div>
    </div>
  );
};
export default Dhyan;
