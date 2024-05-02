import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { GiMeditation, GiFeather, GiBlackBook } from 'react-icons/gi';
import { CgQuoteO } from 'react-icons/cg';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { PiVideo } from 'react-icons/pi';

import ps1 from './ProductImages/ps1.jpg';
import ps2 from './ProductImages/ps2.jpg';
import ps3 from './ProductImages/ps3.jpg';
import ps4 from './ProductImages/ps4.jpg';
import ps5 from './ProductImages/ps5.jpg';
import ps6 from './ProductImages/ps6.jpg';
import ps7 from './ProductImages/ps7.jpg';
import ps8 from './ProductImages/ps8.jpg';
import ps9 from './ProductImages/ps9.jpg';
import ps10 from './ProductImages/p10.jpg';
import ps11 from './ProductImages/p11.jpg';
import ps13 from './ProductImages/p13.jpg';
import ps14 from './ProductImages/p14.jpg';
import ps15 from './ProductImages/p15.jpg';
import ps16 from './ProductImages/p16.jpg';

import rigved from './PDFs/rigved.pdf';
import yajurved from './PDFs/yajurved.pdf';
import samved from './PDFs/samved.pdf';
import atharvaved1 from './PDFs/atharvaved-1.pdf';
import atharvaved2 from './PDFs/atharvaved-2.pdf';
import bhavishyapuran from './PDFs/bavishya-puran.pdf';
import brahamandpuran2 from './PDFs/brahamandp.pdf';
import bramhapuran from './PDFs/bramha.pdf';
import garudapuran from './PDFs/garuda1.pdf';
import kurmapuran from './PDFs/kurma.pdf';
import lingpuran from './PDFs/ling.pdf';
import markendepuran from './PDFs/markende-puran.pdf';
import matsyapuran1 from './PDFs/matsya-puran-1.pdf';
import matsyapuran2 from './PDFs/matsya-puran-2.pdf';
import nardpuran from './PDFs/nard-puran.pdf';
import shivpuran from './PDFs/shiv-puran.pdf';
import vamanpuran from './PDFs/vamanpuran.pdf';
import vishnupuran from './PDFs/vishnu-puran.pdf';
import varahapuran from './PDFs/varaha-puran.pdf';

import उपनिषदोंकीकथाएँ from './PDFs/2015.490020.Upanishhadon-KIi.pdf';
import ऐतरेयोपनिषद्हिंदीमें from './PDFs/Aitareya-Upanishad-in-Hindi.pdf';
import उपनिषदहिंदीमें from './PDFs/hindi-book-108-upanishads-part-2gyan-khanada-pt-shriram-sharma-acharya_2.pdf';
import प्रबोधसुधाकर from './PDFs/PrabodhasudhakaraWithHindiTranslation-MunilalGupta1936gitaPress.pdf';
import तैत्तिरीयोपनिषदहिंदीमें from './PDFs/Taittiriyopanishad-Hindi.pdf';

import श्रीमद्भगवद्गीताअंग्रेजीअनुवाद from './PDFs/455_gita_roman.pdf';
import रामचरितमानसअंग्रेजी from './PDFs/1318_sri-ramchritmanas_roman.pdf';
import कल्किपुराणहिंदीऔरसंस्कृतमें from './PDFs/kalkipuranhindi1.pdf';
import श्रीमद्भागवतगीताहिन्दीसंस्कृत from './PDFs/unencrypted-geeta.pdf';

export const quotesData = {
  1: 'बुरे ‘कर्म’ करने नहीं पड़ते हो जाते है, और अच्‍छे ‘कर्म’ होते नहीं करने पड़ते हैं।',
  2: ' राधा ने श्री कृष्ण से पूछा प्यार का असली मतलब क्या होता है? श्री कृष्णा ने हँस कर कहा, जहाँ मतलब होता है, वहाँ प्यार ही कहा होता है।',
  3: 'जिस इंसान के चारों तरफ नकारात्मक लोग रहते हैं, उस इंसान का मंजिल से भटक जाना तय है।',
  4: 'विश्वास सफलता की कुंजी है।',
  5: 'आत्मा अनंत है, न तो यह कभी जन्म लेती है और न ही यह कभी मरती है।',
  6: 'अपने कर्मों में आसक्ति न करने से ही मोक्ष की प्राप्ति होती है।',
  7: 'अपने साथ रहते हुए ही आपकी शक्तियों का प्रयोग करें।',
  8: 'जीवन में सफलता के लिए निरंतर प्रयत्नशील रहना जरूरी है।',
  9: 'जब तक आप अपनी मनोवृत्ति को नहीं समझते, तब तक आप कोई भी कार्य ठीक से नहीं कर सकते।',
  10: 'जीवन में धर्म और नैतिकता का पालन करना ही सबसे बड़ा धर्म है।',
  11: 'आत्मा अनन्त है, नाश के अवसानी नहीं।',
  12: 'जीवन का अर्थ है सेवा।',
  13: 'जो कर्मों में आसक्ति नहीं रखता, उसे स्वतंत्रता की प्राप्ति होती है।',
  14: 'कर्म का फल केवल समय के साथ ही मिलता है।"',
  15: 'जीवन के हर पल को ध्यान से जीना सीखो।',
  16: 'समय सबसे अच्छा चिकित्सक है।',
  17: 'जिसके मन में संतुलन है, वही अधिकारी है।',
  18: 'जीवन का सबसे बड़ा सिखाना है आत्मा को स्वाधीन रखना।',
  19: 'आपकी शक्ति आपके विश्वास में छिपी है।',
  20: 'जीवन का सर्वोत्तम उद्देश्य है आत्म-समर्पण।',
  21: 'सफलता उसे मिलती है जो अपने कर्मों में आसक्ति नहीं रखता।',
  22: 'जो आत्मा में स्थित है, वह जीवन में स्थित है।',
  23: 'जो कुछ आपका है, वह आपके पास है, और जो कुछ नहीं है, वह आपके लिए कभी नहीं था।',
  24: '"जो काम आपको सच्चे मन से करना हो, उसे करें।',
  25: 'कर्म में आत्मा की आबादी करो, फल की चिंता मत करो।',
  26: 'जो अपने को समर्पित करते हैं, उन्हें उनके कार्यों का फल स्वयं ही मिलता है।',
  27: '"जो लोग अपने कर्मों में आसक्ति नहीं रखते, वे शांति प्राप्त करते हैं।',
  28: 'जिसके मन में आत्मविश्वास है, वह हमेशा सफलता के पथ पर चलता है।',
  29: 'विश्वास का बल स्वयं को पार करने के लिए प्रेरित करता है।',
  30: 'सफलता का राज है सही समय पर सही फैसला।',
  31: 'जिसने आत्मा को जीत लिया है, उसके लिए पूरा जगत ही जीत गया।',
  32: 'अपनी चेतना को जीवन के साथ एकीकृत करो।',
  33: 'कर्म करते रहो, लेकिन उसमें आसक्ति न करो',
  34: 'जिसकी भक्ति में स्थिरता है, वह हमेशा परमात्मा के साथ है।',
  35: 'आत्म-संयम ही सच्चे संतान की निशानी है।',
  36: 'भगवान वही सहारा बनते हैं, जो समर्थ होते हैं।',
  37: 'कभी-कभी तो अपने आपको भूल जाओ, तब ही तुम्हें सही मार्ग प्राप्त होगा।',
  38: 'आपका मन आपके विजय का कारण है, और आपका मन ही आपके पराजय का कारण है।',
  39: 'कर्म का फल सिर्फ एक ही होता है - सीख।',
  40: 'आपके विचार आपके अच्छे संस्कारों का प्रतिबिम्ब होते हैं।',
  41: 'आपका कार्य उस जीवन की तरह होना चाहिए, जो स्वच्छ हो, अलंकृत हो, और उज्ज्वल हो।',
  42: 'जो बीत गया, वो अच्छा ही हुआ। जो हो रहा है, वो अच्छा हो रहा है। जो होगा, वो भी अच्छा ही होगा।',
  43: 'जो आपकी भावना है, वही आपकी सृष्टि होती है।',
  44: 'मन का सुख अपने वश में है, अगर मन नियंत्रित है तो सारा जीवन सुखमय हो जाता है।',
  45: 'अपनी जीवनशैली को विचार करके निर्माण करो।',
  46: 'अपने को पूर्णता के रास्ते पर लाने के लिए निरंतर प्रयत्नशील रहो।',
  47: 'जो कुछ आप देखते हैं, उसे सच मानिए। जो कुछ आप सोचते हैं, वह सच मानिए।',
  48: 'जो आपको डराता है, वही आपको सुधारता है।',
  49: 'कर्म करो, फल की चिंता मत करो।',
  50: 'वह सब कुछ करो जो तुम्हें करना है, लेकिन लालच से नहीं, अहंकार से नहीं, वासना से नहीं, ईर्ष्या से नहीं बल्कि प्रेम, करुणा, नम्रता और भक्ति के साथ।',
  51: 'जो आप जो चाहते हैं उसके लिए नहीं लड़ते हैं; तो जो खोया उसके लिए मत रोओ।',
};
export const Videolink = [
  {
    id: 1,
    link: 'https://youtu.be/ugLcDcMIOPk',
  },
  {
    id: 2,
    link: 'https://youtu.be/pKZK_zeaaDk',
  },
  {
    id: 3,
    link: 'https://youtu.be/Y87Jz-0lcME',
  },
  {
    id: 4,
    link: 'https://youtu.be/JXwgvFTWvW4',
  },
  {
    id: 5,
    link: 'https://youtu.be/c4RJ0m301RQ',
  },
  {
    id: 6,
    link: 'https://youtu.be/Rejetnx6yTs',
  },
  {
    id: 7,
    link: 'https://youtu.be/n_QyxCle6OI',
  },
  {
    id: 8,
    link: 'https://youtu.be/ua1cM5kwRQQ',
  },
  {
    id: 9,
    link: 'https://youtu.be/FvolGWrd4b4',
  },
  {
    id: 10,
    link: 'https://youtu.be/wluvK7QBFyU',
  },
  {
    id: 11,
    link: 'https://youtu.be/n8SRHUGxOTE',
  },
  {
    id: 12,
    link: 'https://youtu.be/25bGXP89UZ4',
  },
  {
    id: 13,
    link: 'https://youtu.be/B7F_PeI7lI4',
  },
  {
    id: 14,
    link: 'https://youtu.be/tclX-WGxI8Q',
  },
  {
    id: 15,
    link: 'https://youtu.be/FqgMpfW83qE',
  },
  {
    id: 16,
    link: 'https://youtu.be/buc7NNwhyTY',
  },
  {
    id: 17,
    link: 'https://youtu.be/7nH2586TPfs',
  },
  {
    id: 18,
    link: 'https://youtu.be/8-akPxjP5p4',
  },
];
export const ProductsData = [
  {
    id: 1,
    name: 'Shri Krishna Classic T-Shirt',
    price: '$17.85',
    category: '⭐4.5',
    image: ps1,
    url: 'https://www.redbubble.com/i/t-shirt/Shri-Krishna-Classic-T-Shirt-by-akshatameta/59931763.WFLAH.XYZ',
  },
  {
    id: 2,
    name: 'Shri Krishna iPhone Case',
    price: '$27.77',
    category: '⭐4.8',
    image: ps13,
    url: 'https://www.redbubble.com/i/iphone-case/Shri-Krishna-by-tssmallshop/123603982.PKFE5',
  },
  {
    id: 3,
    name: 'SHRI KṚṢṆA Sticker',
    price: '$2.83',
    category: '⭐4.6',
    image: ps5,
    url: 'https://www.redbubble.com/i/sticker/SHRI-K%E1%B9%9A%E1%B9%A2%E1%B9%86A-by-Playkites/30512592.JCQM3',
  },
  {
    id: 4,
    name: 'Krishna Spiral Notebook',
    price: '$13.54',
    category: '⭐4.8',
    image: ps9,
    url: 'https://www.redbubble.com/i/notebook/Jai-Shri-Krishna-by-rnmdigital/156088185.WX3NH',
  },
  {
    id: 5,
    name: 'Hare Krishna T-Shirt',
    price: '$22.88',
    category: '⭐4.6',
    image: ps3,
    url: 'https://www.redbubble.com/i/t-shirt/Hare-Krishna-by-UltimateWorld/151621067.WFLAH.XYZ',
  },
  {
    id: 6,
    name: 'Krishna Sketch Metal Print',
    price: '$67.01',
    category: '⭐4.6',
    image: ps6,
    url: 'https://www.redbubble.com/i/metal-print/Lord-Krishna-Sketch-by-Thedigital91/152232789.0JXQP',
  },
  {
    id: 7,
    name: 'Bal Krishna Sticker',
    price: '$2.89',
    category: '⭐4.6',
    image: ps7,
    url: 'https://www.redbubble.com/i/sticker/Lord-Krishna-by-achalsik/44825295.EJUG5',
  },
  {
    id: 8,
    name: 'Krishna Photographic Print',
    price: '$14.64',
    category: '⭐4.7',
    image: ps4,
    url: 'https://www.redbubble.com/i/photographic-print/Lord-Krishna-by-instine2023/146376864.R05IP',
  },
  {
    id: 9,
    name: 'Shri krishna Sticker',
    price: '$2.58',
    category: '⭐4.6',
    image: ps2,
    url: 'https://www.redbubble.com/i/sticker/Shri-krishna-Janmastami-by-pinkpeacock/149921464.JCQM3',
  },
  {
    id: 10,
    name: 'Shri Krishna Classic T-Shirt',
    price: '$22.88',
    category: '⭐4.5',
    image: ps10,
    url: 'https://www.redbubble.com/i/t-shirt/LORD-SHRI-KRISHNA-FEET-by-Playkites/25367853.WFLAH',
  },
  {
    id: 11,
    name: 'GOVINDA Spiral Notebook',
    price: '$13.54',
    category: '⭐4.8',
    image: ps11,
    url: 'https://www.redbubble.com/i/notebook/SHRI-KRISHNA-GOVINDA-by-banothsonu/71070175.WX3NH',
  },
  {
    id: 12,
    name: 'Shri Krishna Samsung Case',
    price: '$27.77',
    category: '⭐4.8',
    image: ps15,
    url: 'https://www.redbubble.com/i/samsung-case/Jai-Shri-Krishna-by-rnmdigital/156088185.5S3YV',
  },
  {
    id: 13,
    name: 'Shri Krishna iPhone Case',
    price: '$24.99',
    category: '⭐4.8',
    image: ps14,
    url: 'https://www.redbubble.com/i/iphone-case/Shri-Krishna-by-Hotandspice/79438070.NK0VL',
  },
  {
    id: 14,
    name: 'Shri Krishna Classic T-Shirt',
    price: '$22.88',
    category: '⭐4.5',
    image: ps8,
    url: 'https://www.redbubble.com/i/t-shirt/Sri-krishna-murari-digital-art-by-SBSRX/145857258.IJ6L0',
  },
  {
    id: 15,
    name: 'Shri Krishna Classic Sticker',
    price: '$2.61',
    category: '⭐4.6',
    image: ps16,
    url: 'https://www.redbubble.com/i/sticker/Shri-Krishna-Classic-T-Shirt-by-akshatameta/59931763.EJUG5',
  },
];

export const links = [
  {
    links: [
      {
        name: 'home',
        icon: <IoHomeOutline />,
      },
      {
        name: 'about',
        icon: <GiFeather />,
      },
      {
        name: 'videos',
        icon: <PiVideo />,
      },
      {
        name: 'quotes',
        icon: <CgQuoteO />,
      },
      {
        name: 'store',
        icon: <MdOutlineLocalGroceryStore />,
      },
      {
        name: 'yogasadhana',
        icon: <GiMeditation />,
      },
      {
        name: 'vedpuran',
        icon: <GiBlackBook />,
      },
    ],
  },
];
export const BoxData = [
  {
    name: 'आसन',
    nav: '/yogasadhana/asans',
  },
  {
    name: 'योग मुद्रा',
    nav: '/yogasadhana/mudra',
  },
  {
    name: 'प्राणायाम',
    nav: '/yogasadhana/yoga',
  },
  {
    name: 'ध्यान',
    nav: '/yogasadhana/dhyan',
  },
];
export const VBoxData = [
  {
    name: 'वेद',
    nav: '/vedpuran/ved',
  },
  {
    name: 'पुराण',
    nav: '/vedpuran/puran',
  },
  {
    name: 'उपनिषद्',
    nav: '/vedpuran/upanishad',
  },
  {
    name: 'अन्य ग्रंथ',
    nav: '/vedpuran/otherscripture',
  },
];
export const PuranData = [
  {
    name: 'विष्णु पुराण',
    pdf: vishnupuran,
  },
  {
    name: 'शिव पुराण',
    pdf: shivpuran,
  },
  {
    name: 'ब्रह्म पुराण',
    pdf: bramhapuran,
  },
  {
    name: 'मार्कण्डेय पुराण ',
    pdf: markendepuran,
  },
  {
    name: 'ब्रह्माण्ड पुराण-2',
    pdf: brahamandpuran2,
  },
  {
    name: 'नारद पुराण',
    pdf: nardpuran,
  },
  {
    name: 'भविष्य पुराण',
    pdf: bhavishyapuran,
  },
  {
    name: 'लिङ्ग पुराण',
    pdf: lingpuran,
  },
  {
    name: 'वाराह पुराण',
    pdf: varahapuran,
  },
  {
    name: 'वामन पुराण',
    pdf: vamanpuran,
  },
  {
    name: 'कूर्म पुराण',
    pdf: kurmapuran,
  },
  {
    name: 'मत्स्य पुराण-1',
    pdf: matsyapuran1,
  },
  {
    name: 'मत्स्य पुराण-2',
    pdf: matsyapuran2,
  },
  {
    name: 'गरुड़ पुराण',
    pdf: garudapuran,
  },
];
export const UpnsData = [
  {
    name: 'उपनिषदों की कथाएँ ',
    pdf: उपनिषदोंकीकथाएँ,
  },
  {
    name: 'ऐतरेयोपनिषद् हिंदी में',
    pdf: ऐतरेयोपनिषद्हिंदीमें,
  },
  {
    name: '108-उपनिषद हिंदी में',
    pdf: उपनिषदहिंदीमें,
  },
  {
    name: 'प्रबोधसुधाकर',
    pdf: प्रबोधसुधाकर,
  },
  {
    name: 'तैत्तिरीयोपनिषद हिंदी में',
    pdf: तैत्तिरीयोपनिषदहिंदीमें,
  },
];
export const OtherData = [
  {
    name: 'श्रीमद्भगवद्गीता (अंग्रेजी-अनुवाद)',
    pdf: श्रीमद्भगवद्गीताअंग्रेजीअनुवाद,
  },
  {
    name: 'रामचरितमानस (अंग्रेजी)',
    pdf: रामचरितमानसअंग्रेजी,
  },
  {
    name: 'कल्कि पुराण हिंदी और संस्कृत में',
    pdf: कल्किपुराणहिंदीऔरसंस्कृतमें,
  },
  {
    name: 'श्रीमद्भागवत गीता हिन्दी-संस्कृत',
    pdf: श्रीमद्भागवतगीताहिन्दीसंस्कृत,
  },
];
export const VedData = [
  {
    name: 'ऋग्वेद',
    pdf: rigved,
  },
  {
    name: 'यजुर्वेद',
    pdf: yajurved,
  },
  {
    name: 'सामवेद',
    pdf: samved,
  },
  {
    name: 'अथर्ववेद-1',
    pdf: atharvaved1,
  },
  {
    name: 'अथर्ववेद-2',
    pdf: atharvaved2,
  },
];
