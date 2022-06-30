/* this function just makes some random data.
NOT A PART OF ACTUAL CODE */

// const data = [];

// // Generating random integer in range [x, y]
// // Both values are inclusive
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // program to generate random strings
// function getRandomString() {
//   return Math.random().toString(36).substring(2, 9);
// }

// // program to generate random coordinate
// function getRandomLatLng() {
//   //   var bounds = [
//   //       [-20.505, -100.09],
//   //       [70.505, 150.09],
//   //     ],
//   //     // southWest = bounds.getSouthWest(),
//   // northEast = bounds.getNorthEast(),
//   let lngSpan = 150 + 100,
//     latSpan = 70.5 + 20.505;
//   return new Object({
//     lat: -20.505 + latSpan * Math.random(),
//     lng: -100.09 + lngSpan * Math.random(),
//   });
// }
// let obj = {
//   name: getRandomString(),
//   values: {
//     insights: getRandomInt(0, 100),
//     mentions: getRandomInt(0, 100),
//     rating: getRandomInt(0, 5),
//   },
// };

// for (let i = 0; i < 500; i++) {
//   let obj = {
//     name: getRandomString(),
//     values: {
//       insights: getRandomInt(0, 100),
//       mentions: getRandomInt(0, 100),
//       rating: getRandomInt(0, 5),
//     },
//     position: getRandomLatLng(),
//   };
//   data.push(obj);
// }
//below point is to illustrate overlapping marker spiderfier.
// data.push({...obj,position:{ lng: -79.3831843, lat: 43.653225 }})
// data.push({...obj,position:{ lng: -79.3831843, lat: 43.653225 }})
// data.push({...obj,position:{ lng: -79.3831843, lat: 43.653225 }})
// data.push({...obj,position:{ lng: -79.3831843, lat: 43.653225 }})
const data = [
  {
    name: "2febst0",
    values: { insights: 3, mentions: 88, rating: 1 },
    position: { lat: -1.0005132957885685, lng: 145.79342196034224 },
  },
  {
    name: "wzgv6qu",
    values: { insights: 56, mentions: 38, rating: 2 },
    position: { lat: 57.982021527216304, lng: -53.52671617584497 },
  },
  {
    name: "pwga1tq",
    values: { insights: 80, mentions: 96, rating: 1 },
    position: { lat: -3.4753388604185105, lng: 76.95107867673397 },
  },
  {
    name: "yyvi7kc",
    values: { insights: 88, mentions: 36, rating: 3 },
    position: { lat: 70.37286527308781, lng: 71.68691979285592 },
  },
  {
    name: "r2ewn38",
    values: { insights: 40, mentions: 62, rating: 1 },
    position: { lat: -7.330187238338755, lng: 27.678862138588613 },
  },
  {
    name: "szowh5o",
    values: { insights: 41, mentions: 25, rating: 3 },
    position: { lat: 24.262045750314737, lng: 32.9754469698766 },
  },
  {
    name: "rgg735z",
    values: { insights: 21, mentions: 63, rating: 1 },
    position: { lat: -6.6678417376505354, lng: 28.73584195876512 },
  },
  {
    name: "z82i1pw",
    values: { insights: 31, mentions: 36, rating: 3 },
    position: { lat: 7.827577950817499, lng: 113.48819445660746 },
  },
  {
    name: "qpkle0d",
    values: { insights: 64, mentions: 51, rating: 1 },
    position: { lat: 58.3781775232884, lng: 70.25534389434424 },
  },
  {
    name: "as2mb0y",
    values: { insights: 78, mentions: 84, rating: 4 },
    position: { lat: 21.86946410321352, lng: 124.36027123601235 },
  },
  {
    name: "v219xb5",
    values: { insights: 90, mentions: 94, rating: 0 },
    position: { lat: -0.42624807818948796, lng: -91.0139093506349 },
  },
  {
    name: "qlgpgml",
    values: { insights: 99, mentions: 79, rating: 0 },
    position: { lat: 40.993599303860876, lng: 39.17205694188732 },
  },
  {
    name: "mawms1c",
    values: { insights: 42, mentions: 46, rating: 1 },
    position: { lat: 39.542696014174865, lng: -3.145074639673936 },
  },
  {
    name: "6zil1ko",
    values: { insights: 100, mentions: 81, rating: 4 },
    position: { lat: 1.7166757171636178, lng: 26.476841902684853 },
  },
  {
    name: "rzwxsi0",
    values: { insights: 60, mentions: 36, rating: 5 },
    position: { lat: 58.517485552714135, lng: 33.80720574365222 },
  },
  {
    name: "k6ncj5t",
    values: { insights: 87, mentions: 1, rating: 4 },
    position: { lat: 32.863539063710306, lng: 37.60685750804387 },
  },
  {
    name: "2w9xfnz",
    values: { insights: 29, mentions: 76, rating: 0 },
    position: { lat: 38.42651694123457, lng: 42.03465978428841 },
  },
  {
    name: "pd6fbhi",
    values: { insights: 95, mentions: 85, rating: 4 },
    position: { lat: 45.79441743358569, lng: 26.091601739775214 },
  },
  {
    name: "qq8y90r",
    values: { insights: 93, mentions: 56, rating: 3 },
    position: { lat: 23.426177021912803, lng: -92.99594636266305 },
  },
  {
    name: "3udud0g",
    values: { insights: 73, mentions: 60, rating: 0 },
    position: { lat: 20.965471092322115, lng: 94.04708844556555 },
  },
  {
    name: "ir42h3m",
    values: { insights: 84, mentions: 16, rating: 5 },
    position: { lat: 10.702001849149308, lng: 54.35848397787646 },
  },
  {
    name: "tu9lic2",
    values: { insights: 7, mentions: 31, rating: 5 },
    position: { lat: 50.116426595830035, lng: -47.74784898071854 },
  },
  {
    name: "feqzf0k",
    values: { insights: 1, mentions: 70, rating: 1 },
    position: { lat: 68.65182647672565, lng: 89.98377083598314 },
  },
  {
    name: "6re6kyx",
    values: { insights: 17, mentions: 96, rating: 1 },
    position: { lat: 18.50709064548452, lng: 99.34912545617831 },
  },
  {
    name: "qizo5re",
    values: { insights: 43, mentions: 89, rating: 5 },
    position: { lat: 42.44601754716726, lng: 42.580684423906064 },
  },
  {
    name: "ryku4h7",
    values: { insights: 15, mentions: 3, rating: 4 },
    position: { lat: 36.12485774861749, lng: 143.74231040209136 },
  },
  {
    name: "zi83c6e",
    values: { insights: 82, mentions: 17, rating: 5 },
    position: { lat: 61.45360176055274, lng: -91.13106297460709 },
  },
  {
    name: "1v8tvdl",
    values: { insights: 4, mentions: 13, rating: 3 },
    position: { lat: -8.013563860670617, lng: 32.68769743189043 },
  },
  {
    name: "fvpx2cd",
    values: { insights: 75, mentions: 19, rating: 2 },
    position: { lat: 49.827422179975514, lng: -13.058552697946965 },
  },
  {
    name: "4z20a3n",
    values: { insights: 99, mentions: 80, rating: 4 },
    position: { lat: 29.87334537340664, lng: 50.81226050901205 },
  },
  {
    name: "ua1t3vj",
    values: { insights: 42, mentions: 23, rating: 0 },
    position: { lat: -14.540783162566608, lng: -48.406218551102874 },
  },
  {
    name: "9hbulsu",
    values: { insights: 42, mentions: 44, rating: 1 },
    position: { lat: 49.02592783391914, lng: 126.1232890807907 },
  },
  {
    name: "ryk93jg",
    values: { insights: 32, mentions: 94, rating: 0 },
    position: { lat: 9.427146755948382, lng: -58.13841942402225 },
  },
  {
    name: "5gdn4df",
    values: { insights: 59, mentions: 51, rating: 1 },
    position: { lat: 48.030190537055205, lng: 90.41935545982062 },
  },
  {
    name: "lj6atdt",
    values: { insights: 65, mentions: 24, rating: 5 },
    position: { lat: 47.895478948512945, lng: -23.53977210836932 },
  },
  {
    name: "nsf9oub",
    values: { insights: 8, mentions: 96, rating: 0 },
    position: { lat: -16.318824534607852, lng: -83.49117688798046 },
  },
  {
    name: "804fdvn",
    values: { insights: 11, mentions: 35, rating: 1 },
    position: { lat: -1.142060897495604, lng: 73.5343301979577 },
  },
  {
    name: "nqhbgfd",
    values: { insights: 64, mentions: 12, rating: 3 },
    position: { lat: 15.75593163335343, lng: 117.51711450156577 },
  },
  {
    name: "kxicnso",
    values: { insights: 35, mentions: 76, rating: 4 },
    position: { lat: -7.971517510619899, lng: -98.69568072895223 },
  },
  {
    name: "l0jwf1n",
    values: { insights: 81, mentions: 27, rating: 3 },
    position: { lat: 62.95777638055381, lng: 5.826054304286075 },
  },
  {
    name: "4ry1o2k",
    values: { insights: 58, mentions: 85, rating: 1 },
    position: { lat: 0.6414826761431343, lng: -61.093233596833656 },
  },
  {
    name: "i03lv9z",
    values: { insights: 31, mentions: 55, rating: 0 },
    position: { lat: 48.22243246383242, lng: 59.94502717412166 },
  },
  {
    name: "z6b6bk6",
    values: { insights: 98, mentions: 17, rating: 4 },
    position: { lat: 28.161019060647032, lng: -86.25897454079272 },
  },
  {
    name: "pasuzi4",
    values: { insights: 23, mentions: 93, rating: 4 },
    position: { lat: 59.71301922705722, lng: 58.57842794551357 },
  },
  {
    name: "vm45xyo",
    values: { insights: 68, mentions: 5, rating: 5 },
    position: { lat: -13.733398185937613, lng: -4.372822993136012 },
  },
  {
    name: "tadmqom",
    values: { insights: 91, mentions: 24, rating: 5 },
    position: { lat: 11.55151501510542, lng: 75.97386644146886 },
  },
  {
    name: "tbwbvvf",
    values: { insights: 62, mentions: 40, rating: 0 },
    position: { lat: 13.507857779877892, lng: -88.18038799806531 },
  },
  {
    name: "amfx8ub",
    values: { insights: 77, mentions: 73, rating: 2 },
    position: { lat: -16.81552975397595, lng: 132.17942816408035 },
  },
  {
    name: "cmx6iqu",
    values: { insights: 25, mentions: 32, rating: 4 },
    position: { lat: 2.3816166126392915, lng: 38.45954782048696 },
  },
  {
    name: "clpline",
    values: { insights: 68, mentions: 76, rating: 0 },
    position: { lat: 57.82772452106988, lng: 148.17366224874917 },
  },
  {
    name: "lqtael4",
    values: { insights: 64, mentions: 26, rating: 2 },
    position: { lat: -8.093534617067892, lng: -24.20145339324796 },
  },
  {
    name: "0g91ftg",
    values: { insights: 36, mentions: 24, rating: 4 },
    position: { lat: 11.902895078652282, lng: 100.4855351021059 },
  },
  {
    name: "3bcvkio",
    values: { insights: 39, mentions: 60, rating: 3 },
    position: { lat: 59.243764034953145, lng: 101.02845957461028 },
  },
  {
    name: "1ihthjz",
    values: { insights: 27, mentions: 2, rating: 4 },
    position: { lat: 59.91156492326226, lng: 16.75037260573137 },
  },
  {
    name: "hk97kh0",
    values: { insights: 84, mentions: 34, rating: 5 },
    position: { lat: 9.887414410775882, lng: 23.75053538054246 },
  },
  {
    name: "xymepnb",
    values: { insights: 60, mentions: 95, rating: 2 },
    position: { lat: -17.741463957632707, lng: 68.13081663970146 },
  },
  {
    name: "lgod308",
    values: { insights: 36, mentions: 20, rating: 2 },
    position: { lat: 50.586089370963336, lng: 19.68591831001605 },
  },
  {
    name: "fn5fjd8",
    values: { insights: 65, mentions: 43, rating: 3 },
    position: { lat: 30.47549354013351, lng: -10.264955591946276 },
  },
  {
    name: "h5y6es0",
    values: { insights: 22, mentions: 34, rating: 0 },
    position: { lat: 57.21169093815904, lng: -33.689540028873296 },
  },
  {
    name: "kztdt2j",
    values: { insights: 4, mentions: 77, rating: 5 },
    position: { lat: 35.376293745767725, lng: 36.660010454567015 },
  },
  {
    name: "6i07pa9",
    values: { insights: 10, mentions: 87, rating: 3 },
    position: { lat: -11.480760749365313, lng: 85.75233979456638 },
  },
  {
    name: "9hv8hv8",
    values: { insights: 28, mentions: 12, rating: 0 },
    position: { lat: 33.5232051717052, lng: 45.14971403362907 },
  },
  {
    name: "ibc29pw",
    values: { insights: 14, mentions: 22, rating: 3 },
    position: { lat: -11.109995163270595, lng: 85.23641078290706 },
  },
  {
    name: "sh4rtba",
    values: { insights: 42, mentions: 64, rating: 1 },
    position: { lat: 46.737126994526335, lng: -2.3337657793271376 },
  },
  {
    name: "a07sv1t",
    values: { insights: 75, mentions: 50, rating: 5 },
    position: { lat: -11.60463893251057, lng: 101.83516423838375 },
  },
  {
    name: "vi1upvm",
    values: { insights: 91, mentions: 61, rating: 2 },
    position: { lat: 45.74876275315462, lng: 82.5789368135425 },
  },
  {
    name: "69qxf1r",
    values: { insights: 54, mentions: 82, rating: 4 },
    position: { lat: 32.30076166566613, lng: 34.5674613900477 },
  },
  {
    name: "2pg61zq",
    values: { insights: 27, mentions: 59, rating: 4 },
    position: { lat: 0.3212495287597896, lng: 1.6687370915332593 },
  },
  {
    name: "vht91b4",
    values: { insights: 83, mentions: 47, rating: 1 },
    position: { lat: 21.146397351874487, lng: 123.21828444475304 },
  },
  {
    name: "83lokos",
    values: { insights: 47, mentions: 50, rating: 3 },
    position: { lat: 25.85230204683624, lng: 39.48358980662377 },
  },
  {
    name: "ihmphf2",
    values: { insights: 68, mentions: 73, rating: 2 },
    position: { lat: 25.882925643708123, lng: 129.1834113045084 },
  },
  {
    name: "8zlg2s6",
    values: { insights: 39, mentions: 45, rating: 2 },
    position: { lat: 59.82625912962925, lng: 73.09499486777622 },
  },
  {
    name: "gsxe9rb",
    values: { insights: 32, mentions: 0, rating: 5 },
    position: { lat: 70.27891685830093, lng: -77.17260898031047 },
  },
  {
    name: "lftyaod",
    values: { insights: 8, mentions: 92, rating: 0 },
    position: { lat: 47.806012282812404, lng: -45.17460551072282 },
  },
  {
    name: "i9eifu6",
    values: { insights: 48, mentions: 74, rating: 3 },
    position: { lat: -17.027953870957518, lng: 28.15657661853183 },
  },
  {
    name: "jgykewo",
    values: { insights: 15, mentions: 84, rating: 2 },
    position: { lat: 45.55562133527715, lng: 58.12079774676644 },
  },
  {
    name: "865oszz",
    values: { insights: 42, mentions: 74, rating: 0 },
    position: { lat: 11.240086169544657, lng: -48.82016239577724 },
  },
  {
    name: "e679s7t",
    values: { insights: 19, mentions: 58, rating: 4 },
    position: { lat: 6.637184714522768, lng: 46.47517255974893 },
  },
  {
    name: "mqqzopu",
    values: { insights: 95, mentions: 86, rating: 4 },
    position: { lat: 5.453556817809332, lng: 60.92214789102903 },
  },
  {
    name: "ofkocke",
    values: { insights: 90, mentions: 98, rating: 3 },
    position: { lat: -16.428239551969437, lng: 106.67304248468753 },
  },
  {
    name: "arf7f74",
    values: { insights: 95, mentions: 54, rating: 5 },
    position: { lat: -18.199007680353585, lng: -85.58386862196076 },
  },
  {
    name: "baon4qt",
    values: { insights: 71, mentions: 38, rating: 1 },
    position: { lat: 28.0886985047204, lng: -21.50297579326798 },
  },
  {
    name: "faqgrkj",
    values: { insights: 12, mentions: 38, rating: 5 },
    position: { lat: -0.09164611456554894, lng: 135.26860091944255 },
  },
  {
    name: "pcrqbhr",
    values: { insights: 51, mentions: 56, rating: 2 },
    position: { lat: -5.324084133008286, lng: -94.00545524024072 },
  },
  {
    name: "san9kah",
    values: { insights: 10, mentions: 41, rating: 5 },
    position: { lat: 14.549226322883005, lng: 130.87258494060063 },
  },
  {
    name: "47tvg6k",
    values: { insights: 28, mentions: 87, rating: 1 },
    position: { lat: 67.52517336679786, lng: 142.38918248039053 },
  },
  {
    name: "voqe10s",
    values: { insights: 54, mentions: 100, rating: 3 },
    position: { lat: 28.73087545998212, lng: 39.786769772277154 },
  },
  {
    name: "07m9qml",
    values: { insights: 49, mentions: 8, rating: 5 },
    position: { lat: -6.075245869959305, lng: -69.04361640504347 },
  },
  {
    name: "bcv0iwy",
    values: { insights: 28, mentions: 42, rating: 1 },
    position: { lat: 48.98556984516671, lng: -22.35568608800469 },
  },
  {
    name: "2he3sf3",
    values: { insights: 77, mentions: 85, rating: 2 },
    position: { lat: 37.834405596137984, lng: -63.79479765258455 },
  },
  {
    name: "u66eys1",
    values: { insights: 66, mentions: 33, rating: 5 },
    position: { lat: -14.678112296745272, lng: 13.386804516406457 },
  },
  {
    name: "4v6tqgh",
    values: { insights: 77, mentions: 92, rating: 5 },
    position: { lat: 42.45618307608218, lng: 83.65874993389167 },
  },
  {
    name: "4c5lo7r",
    values: { insights: 9, mentions: 30, rating: 1 },
    position: { lat: 57.343644830680034, lng: 128.05296166998576 },
  },
  {
    name: "6wbl6io",
    values: { insights: 91, mentions: 47, rating: 1 },
    position: { lat: 36.19465200787526, lng: -87.31318866121522 },
  },
  {
    name: "vza7co7",
    values: { insights: 96, mentions: 76, rating: 2 },
    position: { lat: 40.83957701311191, lng: -39.42673160466952 },
  },
  {
    name: "vsi2qdo",
    values: { insights: 64, mentions: 94, rating: 2 },
    position: { lat: 34.91462471931199, lng: -41.37802439615689 },
  },
  {
    name: "p8hve2v",
    values: { insights: 50, mentions: 9, rating: 2 },
    position: { lat: 59.54603571866281, lng: 16.439762165500085 },
  },
  {
    name: "jnptwwk",
    values: { insights: 49, mentions: 19, rating: 2 },
    position: { lat: 26.279211805026026, lng: 88.61389757043025 },
  },
  {
    name: "xcdgk30",
    values: { insights: 9, mentions: 61, rating: 5 },
    position: { lat: 22.67004368719233, lng: -90.58843526877114 },
  },
  {
    name: "n2kqucs",
    values: { insights: 24, mentions: 88, rating: 1 },
    position: { lat: -19.82213348138608, lng: -8.080295189881838 },
  },
  {
    name: "f19htlj",
    values: { insights: 16, mentions: 19, rating: 3 },
    position: { lat: 42.90306458622848, lng: 57.29465052118121 },
  },
  {
    name: "0rgvrp6",
    values: { insights: 1, mentions: 94, rating: 2 },
    position: { lat: 2.2788817273122177, lng: 67.31759316284925 },
  },
  {
    name: "c61r98t",
    values: { insights: 68, mentions: 68, rating: 2 },
    position: { lat: 15.399638953242391, lng: -82.995357597827 },
  },
  {
    name: "4tpizee",
    values: { insights: 89, mentions: 34, rating: 5 },
    position: { lat: -19.408997486900127, lng: -24.448913782321327 },
  },
  {
    name: "qiitucs",
    values: { insights: 90, mentions: 48, rating: 0 },
    position: { lat: 15.963403558590226, lng: -45.41256374273022 },
  },
  {
    name: "ncnmejy",
    values: { insights: 24, mentions: 71, rating: 0 },
    position: { lat: 37.247064560936025, lng: 45.09645777547195 },
  },
  {
    name: "oll37df",
    values: { insights: 67, mentions: 67, rating: 0 },
    position: { lat: 29.519117887647543, lng: -70.90432898511523 },
  },
  {
    name: "tbmeong",
    values: { insights: 48, mentions: 65, rating: 1 },
    position: { lat: 66.82974627034244, lng: -50.73389891909063 },
  },
  {
    name: "7cb955i",
    values: { insights: 89, mentions: 47, rating: 2 },
    position: { lat: -2.1689612298429317, lng: -90.8041232917222 },
  },
  {
    name: "d0bb87x",
    values: { insights: 55, mentions: 4, rating: 4 },
    position: { lat: 47.20716464088976, lng: -2.379289680468119 },
  },
  {
    name: "7qa7ykk",
    values: { insights: 48, mentions: 60, rating: 4 },
    position: { lat: -4.320812119431299, lng: 127.45160938556111 },
  },
  {
    name: "m06jtoe",
    values: { insights: 71, mentions: 5, rating: 3 },
    position: { lat: 39.03746504672867, lng: 4.941144967827668 },
  },
  {
    name: "09sb9jy",
    values: { insights: 16, mentions: 28, rating: 0 },
    position: { lat: 29.14793871579452, lng: 68.85603466304443 },
  },
  {
    name: "8perqpo",
    values: { insights: 73, mentions: 96, rating: 1 },
    position: { lat: 29.524357878415405, lng: 123.69275517519742 },
  },
  {
    name: "7g2bpky",
    values: { insights: 46, mentions: 1, rating: 2 },
    position: { lat: 69.85929608879378, lng: -70.07320325176296 },
  },
  {
    name: "qo176i9",
    values: { insights: 85, mentions: 78, rating: 1 },
    position: { lat: 30.0661097942227, lng: 34.49383697038613 },
  },
  {
    name: "7dc6hr6",
    values: { insights: 35, mentions: 45, rating: 2 },
    position: { lat: 62.67196487808873, lng: -42.397545001478676 },
  },
  {
    name: "8ni2pv5",
    values: { insights: 68, mentions: 14, rating: 4 },
    position: { lat: 5.701398878096967, lng: 50.832968072504315 },
  },
  {
    name: "ja0xcie",
    values: { insights: 5, mentions: 37, rating: 4 },
    position: { lat: 15.174900959297727, lng: -53.252922600999774 },
  },
  {
    name: "hvosqm5",
    values: { insights: 42, mentions: 16, rating: 2 },
    position: { lat: -5.428833994478092, lng: 48.53539857721839 },
  },
  {
    name: "p7rbp4l",
    values: { insights: 15, mentions: 49, rating: 5 },
    position: { lat: 46.02982782507341, lng: -71.60192226858086 },
  },
  {
    name: "868tttu",
    values: { insights: 51, mentions: 16, rating: 5 },
    position: { lat: 29.65879766754131, lng: 126.15700353916 },
  },
  {
    name: "039eg6x",
    values: { insights: 24, mentions: 67, rating: 1 },
    position: { lat: 28.86803974839192, lng: -40.960556293390006 },
  },
  {
    name: "ii4cj2n",
    values: { insights: 27, mentions: 54, rating: 2 },
    position: { lat: 36.9126332085271, lng: 90.56160184054752 },
  },
  {
    name: "dqwm0qt",
    values: { insights: 13, mentions: 63, rating: 0 },
    position: { lat: -20.227495463168765, lng: 141.5694920344775 },
  },
  {
    name: "el9xiug",
    values: { insights: 14, mentions: 76, rating: 4 },
    position: { lat: 2.9714849746551018, lng: 82.747045332276 },
  },
  {
    name: "yik8hxa",
    values: { insights: 37, mentions: 60, rating: 5 },
    position: { lat: -17.528789553593228, lng: -30.047513110429904 },
  },
  {
    name: "0ofitri",
    values: { insights: 60, mentions: 38, rating: 4 },
    position: { lat: 69.76244819619077, lng: -0.2187115544144831 },
  },
  {
    name: "1nhc23p",
    values: { insights: 27, mentions: 95, rating: 1 },
    position: { lat: 44.525152867545785, lng: 44.390807728564255 },
  },
  {
    name: "ouhrmg3",
    values: { insights: 57, mentions: 62, rating: 0 },
    position: { lat: 32.64662899473586, lng: -22.28469109360624 },
  },
  {
    name: "pxz2hrd",
    values: { insights: 20, mentions: 88, rating: 1 },
    position: { lat: -9.31859712606831, lng: 56.267303545928456 },
  },
  {
    name: "ob29x4h",
    values: { insights: 61, mentions: 64, rating: 3 },
    position: { lat: 12.792424285643957, lng: -56.79977724812034 },
  },
  {
    name: "gu0a0um",
    values: { insights: 2, mentions: 61, rating: 5 },
    position: { lat: -13.516648336288196, lng: -19.662961708267304 },
  },
  {
    name: "8cviozk",
    values: { insights: 44, mentions: 63, rating: 5 },
    position: { lat: 12.464912995482987, lng: -12.521837700711686 },
  },
  {
    name: "2r0kr2t",
    values: { insights: 97, mentions: 13, rating: 4 },
    position: { lat: 22.38297327561131, lng: -47.32074006058528 },
  },
  {
    name: "60bu3bd",
    values: { insights: 35, mentions: 37, rating: 2 },
    position: { lat: 42.69700999689945, lng: 4.823435498526493 },
  },
  {
    name: "ngy0krt",
    values: { insights: 83, mentions: 80, rating: 2 },
    position: { lat: 55.45939255742512, lng: -36.31843156807933 },
  },
  {
    name: "yn5j9z5",
    values: { insights: 90, mentions: 94, rating: 0 },
    position: { lat: -7.711602573776929, lng: 106.0524201403988 },
  },
  {
    name: "j4kjsq7",
    values: { insights: 1, mentions: 67, rating: 3 },
    position: { lat: 10.067496114162992, lng: 99.15301164787721 },
  },
  {
    name: "1xb9fnu",
    values: { insights: 93, mentions: 93, rating: 2 },
    position: { lat: 70.10004849874734, lng: 80.71533055344972 },
  },
  {
    name: "tim8dip",
    values: { insights: 97, mentions: 93, rating: 0 },
    position: { lat: 57.97516992153355, lng: 82.37258430606872 },
  },
  {
    name: "zspcus2",
    values: { insights: 41, mentions: 50, rating: 4 },
    position: { lat: 69.29033511095102, lng: 101.02464308052274 },
  },
  {
    name: "yydfcv1",
    values: { insights: 68, mentions: 83, rating: 2 },
    position: { lat: 59.93698517102183, lng: -46.90260902656528 },
  },
  {
    name: "asljjm4",
    values: { insights: 34, mentions: 15, rating: 2 },
    position: { lat: 58.94333980850584, lng: -20.236053144143497 },
  },
  {
    name: "pafpuxb",
    values: { insights: 35, mentions: 27, rating: 5 },
    position: { lat: -17.7135292503228, lng: -31.889363130327467 },
  },
  {
    name: "ivlg4yi",
    values: { insights: 71, mentions: 28, rating: 0 },
    position: { lat: 6.108605839477438, lng: -38.799247178119714 },
  },
  {
    name: "20oi4uu",
    values: { insights: 69, mentions: 56, rating: 1 },
    position: { lat: 14.607036429381193, lng: -3.0791113030698654 },
  },
  {
    name: "j0ohpzl",
    values: { insights: 99, mentions: 67, rating: 3 },
    position: { lat: 45.93293185202164, lng: -26.92299175821327 },
  },
  {
    name: "tawaebu",
    values: { insights: 81, mentions: 31, rating: 0 },
    position: { lat: 20.106727475041804, lng: 48.43555995515061 },
  },
  {
    name: "3on1vdq",
    values: { insights: 9, mentions: 40, rating: 1 },
    position: { lat: -9.10318194268441, lng: 37.93506032462918 },
  },
  {
    name: "j1sww2m",
    values: { insights: 99, mentions: 37, rating: 1 },
    position: { lat: 49.60620711502581, lng: -50.258288159305934 },
  },
  {
    name: "90iy40o",
    values: { insights: 23, mentions: 53, rating: 1 },
    position: { lat: -7.352524223617937, lng: -56.603460147064126 },
  },
  {
    name: "crdiqw3",
    values: { insights: 20, mentions: 67, rating: 1 },
    position: { lat: -4.912066417834486, lng: 62.474984813622854 },
  },
  {
    name: "ja028uh",
    values: { insights: 2, mentions: 65, rating: 0 },
    position: { lat: 17.420893564721663, lng: 134.44621845702676 },
  },
  {
    name: "i7mjroc",
    values: { insights: 61, mentions: 42, rating: 2 },
    position: { lat: 0.04700394161574195, lng: -20.868598966163376 },
  },
  {
    name: "vnpz2k2",
    values: { insights: 88, mentions: 57, rating: 3 },
    position: { lat: 49.91905084367062, lng: 30.299327296980493 },
  },
  {
    name: "q63uwe2",
    values: { insights: 7, mentions: 98, rating: 5 },
    position: { lat: 57.22758542028815, lng: 142.47857612495864 },
  },
  {
    name: "mwncb8h",
    values: { insights: 20, mentions: 45, rating: 5 },
    position: { lat: 66.88925118777226, lng: 12.795189531968404 },
  },
  {
    name: "oq9yz4f",
    values: { insights: 31, mentions: 98, rating: 2 },
    position: { lat: 36.71250328917843, lng: 37.665838230329655 },
  },
  {
    name: "vr6l8cv",
    values: { insights: 56, mentions: 32, rating: 4 },
    position: { lat: 60.03772745268324, lng: 141.51137308793662 },
  },
  {
    name: "2dr2clb",
    values: { insights: 43, mentions: 7, rating: 5 },
    position: { lat: 31.291050252533825, lng: 77.07804104942451 },
  },
  {
    name: "ri7isp7",
    values: { insights: 52, mentions: 4, rating: 4 },
    position: { lat: 33.03418809344373, lng: -33.90499874987384 },
  },
  {
    name: "20vhhsf",
    values: { insights: 59, mentions: 68, rating: 4 },
    position: { lat: 6.174534016165033, lng: -80.43740794194403 },
  },
  {
    name: "73yff9v",
    values: { insights: 10, mentions: 100, rating: 0 },
    position: { lat: 1.8057724361882137, lng: 54.57313145721949 },
  },
  {
    name: "ezibruq",
    values: { insights: 63, mentions: 53, rating: 5 },
    position: { lat: -1.3336239267978307, lng: -12.477439618702334 },
  },
  {
    name: "jsrbu33",
    values: { insights: 71, mentions: 70, rating: 2 },
    position: { lat: 52.40224305072245, lng: 18.07113805368749 },
  },
  {
    name: "sdze5pu",
    values: { insights: 89, mentions: 31, rating: 1 },
    position: { lat: 57.60217863765291, lng: 110.21882907133659 },
  },
  {
    name: "wudeopt",
    values: { insights: 88, mentions: 88, rating: 4 },
    position: { lat: 40.46189083846291, lng: 138.2045693428362 },
  },
  {
    name: "45k3ny9",
    values: { insights: 40, mentions: 46, rating: 5 },
    position: { lat: 46.09336736448789, lng: 90.78990081784428 },
  },
  {
    name: "4jcc8cf",
    values: { insights: 70, mentions: 26, rating: 2 },
    position: { lat: -6.007678012421664, lng: 72.60682788587914 },
  },
  {
    name: "i4rarw7",
    values: { insights: 39, mentions: 47, rating: 2 },
    position: { lat: 26.468256577387546, lng: -79.24482691901795 },
  },
  {
    name: "f7g3tf8",
    values: { insights: 4, mentions: 62, rating: 0 },
    position: { lat: 51.95653080474898, lng: -19.858788849030304 },
  },
  {
    name: "edj2acj",
    values: { insights: 15, mentions: 60, rating: 1 },
    position: { lat: 4.563876813466752, lng: 0.27653552284164107 },
  },
  {
    name: "vfag1dn",
    values: { insights: 75, mentions: 6, rating: 5 },
    position: { lat: 36.80962493882748, lng: 87.04533168031875 },
  },
  {
    name: "8g85bmw",
    values: { insights: 18, mentions: 40, rating: 4 },
    position: { lat: 62.3415971506293, lng: -90.62421205297721 },
  },
  {
    name: "5qai3jz",
    values: { insights: 88, mentions: 99, rating: 1 },
    position: { lat: 11.89205779152697, lng: 38.70080371055903 },
  },
  {
    name: "eh5lq84",
    values: { insights: 12, mentions: 72, rating: 5 },
    position: { lat: 43.09080837627816, lng: -77.67810383624357 },
  },
  {
    name: "504s0e8",
    values: { insights: 72, mentions: 95, rating: 5 },
    position: { lat: -0.045275235521383905, lng: 112.05542469902204 },
  },
  {
    name: "6p36d85",
    values: { insights: 22, mentions: 5, rating: 1 },
    position: { lat: 48.27913592240998, lng: 114.46819292603294 },
  },
  {
    name: "ic8k09k",
    values: { insights: 84, mentions: 85, rating: 1 },
    position: { lat: -5.373024526725352, lng: -97.82284428669263 },
  },
  {
    name: "eiypaka",
    values: { insights: 12, mentions: 68, rating: 4 },
    position: { lat: -15.381456552292214, lng: -45.26980404408436 },
  },
  {
    name: "ou15qjw",
    values: { insights: 46, mentions: 93, rating: 0 },
    position: { lat: 54.35737594766728, lng: 24.404750985049688 },
  },
  {
    name: "aofp4cn",
    values: { insights: 2, mentions: 0, rating: 3 },
    position: { lat: 49.14654704030241, lng: -35.9578726078818 },
  },
  {
    name: "f5fv9oq",
    values: { insights: 19, mentions: 65, rating: 2 },
    position: { lat: 22.090006077309678, lng: -55.17154710228139 },
  },
  {
    name: "4h1vo3d",
    values: { insights: 82, mentions: 98, rating: 2 },
    position: { lat: -16.97311037229001, lng: 87.7042594191964 },
  },
  {
    name: "g4gh7u3",
    values: { insights: 97, mentions: 56, rating: 2 },
    position: { lat: 16.429793581927573, lng: -65.67674950333068 },
  },
  {
    name: "yosgqcz",
    values: { insights: 80, mentions: 47, rating: 1 },
    position: { lat: -19.168694948266907, lng: -26.787787143881843 },
  },
  {
    name: "dlgnaja",
    values: { insights: 73, mentions: 38, rating: 0 },
    position: { lat: -12.587190233525721, lng: -15.987003468399536 },
  },
  {
    name: "2zhvspw",
    values: { insights: 12, mentions: 45, rating: 4 },
    position: { lat: 17.80978462007629, lng: 2.4358544861123477 },
  },
  {
    name: "rhau1f9",
    values: { insights: 37, mentions: 42, rating: 2 },
    position: { lat: 36.31397369826489, lng: -45.825221875021185 },
  },
  {
    name: "tiayamn",
    values: { insights: 38, mentions: 83, rating: 0 },
    position: { lat: 6.894280174351284, lng: 53.79579221741821 },
  },
  {
    name: "678th70",
    values: { insights: 7, mentions: 14, rating: 4 },
    position: { lat: 31.94889777612372, lng: 53.29363385897207 },
  },
  {
    name: "n937j4e",
    values: { insights: 87, mentions: 1, rating: 2 },
    position: { lat: 2.2118424226163604, lng: 97.67647299665856 },
  },
  {
    name: "cxhmcst",
    values: { insights: 36, mentions: 52, rating: 0 },
    position: { lat: 56.58286766297336, lng: 122.15602806772736 },
  },
  {
    name: "9poe8da",
    values: { insights: 41, mentions: 68, rating: 3 },
    position: { lat: 62.95487631896842, lng: -10.71840123012845 },
  },
  {
    name: "mqmrfiy",
    values: { insights: 80, mentions: 42, rating: 0 },
    position: { lat: 42.34952069816944, lng: 35.67332435662618 },
  },
  {
    name: "qm2zk8n",
    values: { insights: 98, mentions: 54, rating: 1 },
    position: { lat: 67.46766642633382, lng: 117.35477982665222 },
  },
  {
    name: "s9vbfav",
    values: { insights: 76, mentions: 61, rating: 1 },
    position: { lat: 38.38846013158738, lng: 28.47756051007849 },
  },
  {
    name: "dvrwsf3",
    values: { insights: 9, mentions: 50, rating: 1 },
    position: { lat: 44.61857579050729, lng: -0.6121846260356705 },
  },
  {
    name: "lfzaa7i",
    values: { insights: 17, mentions: 44, rating: 2 },
    position: { lat: 58.14957858462196, lng: 59.22284626343773 },
  },
  {
    name: "xc2hw29",
    values: { insights: 15, mentions: 71, rating: 2 },
    position: { lat: 47.47819983722705, lng: 97.31736842881168 },
  },
  {
    name: "7zcuhy2",
    values: { insights: 21, mentions: 87, rating: 4 },
    position: { lat: 30.229474627301432, lng: 35.66943529903867 },
  },
  {
    name: "2r4gwr8",
    values: { insights: 24, mentions: 6, rating: 3 },
    position: { lat: 49.184256866067955, lng: -80.29698544814272 },
  },
  {
    name: "5l5q8ew",
    values: { insights: 47, mentions: 16, rating: 1 },
    position: { lat: 55.914411069862155, lng: 99.98825968426885 },
  },
  {
    name: "5hy4e65",
    values: { insights: 96, mentions: 17, rating: 3 },
    position: { lat: 19.527949045610942, lng: -14.71037819658332 },
  },
  {
    name: "mp1y7sh",
    values: { insights: 96, mentions: 43, rating: 2 },
    position: { lat: 16.090151829696563, lng: 95.20729642948427 },
  },
  {
    name: "59yrdqk",
    values: { insights: 83, mentions: 15, rating: 2 },
    position: { lat: 4.124987391664334, lng: 141.4340972285907 },
  },
  {
    name: "5ghbbg7",
    values: { insights: 49, mentions: 48, rating: 2 },
    position: { lat: 3.145420966467988, lng: -19.932170751496386 },
  },
  {
    name: "kbgmarh",
    values: { insights: 47, mentions: 15, rating: 5 },
    position: { lat: 24.05456373289162, lng: -54.116951853683084 },
  },
  {
    name: "8nsr1vt",
    values: { insights: 73, mentions: 40, rating: 0 },
    position: { lat: 44.23095834792488, lng: 53.907124672771715 },
  },
  {
    name: "ob3qo4e",
    values: { insights: 84, mentions: 6, rating: 4 },
    position: { lat: -7.967674128464626, lng: 56.52564984489416 },
  },
  {
    name: "e4ixb26",
    values: { insights: 29, mentions: 35, rating: 3 },
    position: { lat: -15.22407908510861, lng: 72.36248473410612 },
  },
  {
    name: "gf8vllt",
    values: { insights: 53, mentions: 59, rating: 1 },
    position: { lat: 52.763745581220576, lng: -45.29020907893571 },
  },
  {
    name: "ccllt77",
    values: { insights: 14, mentions: 2, rating: 5 },
    position: { lat: 42.35073011841553, lng: 53.54433369857827 },
  },
  {
    name: "sjweagm",
    values: { insights: 30, mentions: 43, rating: 5 },
    position: { lat: 10.383803058260494, lng: -12.214339003577535 },
  },
  {
    name: "cn6jf45",
    values: { insights: 98, mentions: 93, rating: 1 },
    position: { lat: 50.7580984738278, lng: -29.585880523609873 },
  },
  {
    name: "g4haal6",
    values: { insights: 0, mentions: 14, rating: 2 },
    position: { lat: 29.31318711037778, lng: 88.25632953027741 },
  },
  {
    name: "r4tejt4",
    values: { insights: 66, mentions: 67, rating: 5 },
    position: { lat: 38.28923284666273, lng: 116.059258989272 },
  },
  {
    name: "9vvdmww",
    values: { insights: 94, mentions: 79, rating: 1 },
    position: { lat: 20.259442370992215, lng: -88.25057324885898 },
  },
  {
    name: "vk45ez9",
    values: { insights: 52, mentions: 7, rating: 2 },
    position: { lat: -14.372768351933388, lng: -63.35239816675641 },
  },
  {
    name: "as6uq0z",
    values: { insights: 10, mentions: 39, rating: 5 },
    position: { lat: 45.32106509379781, lng: -75.07627630944057 },
  },
  {
    name: "534lsbs",
    values: { insights: 59, mentions: 19, rating: 4 },
    position: { lat: 21.91221097399522, lng: -44.5853502444996 },
  },
  {
    name: "zt07bbl",
    values: { insights: 72, mentions: 5, rating: 0 },
    position: { lat: 1.7092987700138629, lng: -67.13100642070162 },
  },
  {
    name: "9ftgce2",
    values: { insights: 59, mentions: 87, rating: 0 },
    position: { lat: 55.75873781073582, lng: 137.57544462899656 },
  },
  {
    name: "u0xv89i",
    values: { insights: 13, mentions: 40, rating: 3 },
    position: { lat: 29.0938739943112, lng: 51.19346455860918 },
  },
  {
    name: "6iunc67",
    values: { insights: 4, mentions: 45, rating: 4 },
    position: { lat: 57.80006055603674, lng: 120.80941862343781 },
  },
  {
    name: "hr0n4ci",
    values: { insights: 14, mentions: 48, rating: 4 },
    position: { lat: 8.324684954554577, lng: 69.69908374952345 },
  },
  {
    name: "em2xic5",
    values: { insights: 43, mentions: 39, rating: 2 },
    position: { lat: 51.76092252069347, lng: -61.45681549955877 },
  },
  {
    name: "c167xbr",
    values: { insights: 88, mentions: 5, rating: 2 },
    position: { lat: 23.392085570365698, lng: 112.09791093530276 },
  },
  {
    name: "l5r3psr",
    values: { insights: 68, mentions: 35, rating: 1 },
    position: { lat: 34.701745898259034, lng: 137.1705249612188 },
  },
  {
    name: "bgz3atv",
    values: { insights: 53, mentions: 17, rating: 2 },
    position: { lat: 27.748333782712624, lng: 62.48167922959348 },
  },
  {
    name: "ea2jhgh",
    values: { insights: 78, mentions: 60, rating: 4 },
    position: { lat: 18.451954337819426, lng: 56.71382813233683 },
  },
  {
    name: "7xvrvhe",
    values: { insights: 98, mentions: 84, rating: 0 },
    position: { lat: 40.568938992832486, lng: 147.75583765047656 },
  },
  {
    name: "e8sstbh",
    values: { insights: 29, mentions: 52, rating: 2 },
    position: { lat: 36.17497690602798, lng: 5.78741742811151 },
  },
  {
    name: "2u887lf",
    values: { insights: 40, mentions: 66, rating: 5 },
    position: { lat: 7.172879690807761, lng: -7.627671360537704 },
  },
  {
    name: "h61ywrx",
    values: { insights: 20, mentions: 54, rating: 2 },
    position: { lat: 53.211888473911884, lng: 14.520608681038112 },
  },
  {
    name: "amc59fp",
    values: { insights: 12, mentions: 87, rating: 5 },
    position: { lat: 8.47833300092401, lng: 123.46396443379805 },
  },
  {
    name: "vjdi2r4",
    values: { insights: 11, mentions: 43, rating: 2 },
    position: { lat: 38.030977798129925, lng: -62.907194784325206 },
  },
  {
    name: "sky7i45",
    values: { insights: 18, mentions: 0, rating: 3 },
    position: { lat: -12.744309507790623, lng: 42.971996096789866 },
  },
  {
    name: "9cp1wtz",
    values: { insights: 65, mentions: 4, rating: 0 },
    position: { lat: 56.9318520785736, lng: -15.222656244791125 },
  },
  {
    name: "al4dulo",
    values: { insights: 100, mentions: 57, rating: 1 },
    position: { lat: -5.364376175766177, lng: 117.25180245499251 },
  },
  {
    name: "sy0akt6",
    values: { insights: 92, mentions: 66, rating: 1 },
    position: { lat: -6.7652742896908915, lng: 109.63796515570897 },
  },
  {
    name: "j3sxh4d",
    values: { insights: 74, mentions: 83, rating: 1 },
    position: { lat: 49.0863150490224, lng: -86.42728762677115 },
  },
  {
    name: "grm72g5",
    values: { insights: 88, mentions: 63, rating: 0 },
    position: { lat: -5.4767059585839135, lng: -83.85470452841331 },
  },
  {
    name: "hrg9k3r",
    values: { insights: 61, mentions: 34, rating: 3 },
    position: { lat: 21.426113268036513, lng: 98.17287469094828 },
  },
  {
    name: "8vzcmm1",
    values: { insights: 42, mentions: 18, rating: 4 },
    position: { lat: -14.188194591737698, lng: 111.17452131668398 },
  },
  {
    name: "6xprt7a",
    values: { insights: 17, mentions: 84, rating: 3 },
    position: { lat: 32.368780423964, lng: -61.34944876476333 },
  },
  {
    name: "d23eqkl",
    values: { insights: 97, mentions: 72, rating: 0 },
    position: { lat: -4.4083542880411635, lng: 121.25404646585147 },
  },
  {
    name: "jc1jvpx",
    values: { insights: 97, mentions: 12, rating: 2 },
    position: { lat: 63.956237630234966, lng: -35.14698885522648 },
  },
  {
    name: "iy5f5g8",
    values: { insights: 65, mentions: 37, rating: 4 },
    position: { lat: 45.31302744658895, lng: 30.991269616931504 },
  },
  {
    name: "hcfllsg",
    values: { insights: 26, mentions: 13, rating: 0 },
    position: { lat: 41.177420404013716, lng: 71.4960714472746 },
  },
  {
    name: "lyz0pl8",
    values: { insights: 41, mentions: 11, rating: 3 },
    position: { lat: 9.830164658559497, lng: 53.38237439756017 },
  },
  {
    name: "zkzt3w2",
    values: { insights: 73, mentions: 92, rating: 4 },
    position: { lat: -2.68847025864687, lng: 86.31718737008921 },
  },
  {
    name: "bnvjinu",
    values: { insights: 74, mentions: 49, rating: 0 },
    position: { lat: 41.08283330514698, lng: 128.26190016428674 },
  },
  {
    name: "o1239km",
    values: { insights: 38, mentions: 35, rating: 3 },
    position: { lat: 48.170480858721334, lng: 37.40677932835297 },
  },
  {
    name: "1vj1ky0",
    values: { insights: 15, mentions: 56, rating: 0 },
    position: { lat: 33.08165874601251, lng: -9.657333518034491 },
  },
  {
    name: "vnkrzhx",
    values: { insights: 71, mentions: 41, rating: 1 },
    position: { lat: 67.24316950253623, lng: -3.332059855080047 },
  },
  {
    name: "0rykkzq",
    values: { insights: 34, mentions: 73, rating: 2 },
    position: { lat: 39.872207030863734, lng: 37.05704978121051 },
  },
  {
    name: "usj3yxs",
    values: { insights: 94, mentions: 45, rating: 5 },
    position: { lat: 4.357046346022024, lng: 33.47876994122379 },
  },
  {
    name: "dr65xvk",
    values: { insights: 41, mentions: 1, rating: 3 },
    position: { lat: 13.168551593240718, lng: -64.83910043406331 },
  },
  {
    name: "eof80wu",
    values: { insights: 26, mentions: 72, rating: 1 },
    position: { lat: -9.829557632152358, lng: -94.44838203358817 },
  },
  {
    name: "vn2sf1h",
    values: { insights: 41, mentions: 15, rating: 4 },
    position: { lat: 26.949554865638188, lng: -77.89399451442485 },
  },
  {
    name: "c1ajb78",
    values: { insights: 83, mentions: 99, rating: 0 },
    position: { lat: 16.749339775835747, lng: -67.0671668005613 },
  },
  {
    name: "ig6xmks",
    values: { insights: 85, mentions: 54, rating: 2 },
    position: { lat: -3.250563440682299, lng: 123.22507882381723 },
  },
  {
    name: "z5ycim8",
    values: { insights: 80, mentions: 10, rating: 4 },
    position: { lat: 6.863742216238922, lng: -8.150793621929594 },
  },
  {
    name: "72c9swp",
    values: { insights: 50, mentions: 49, rating: 3 },
    position: { lat: 40.67760884730933, lng: -15.382159197488306 },
  },
  {
    name: "cl553kj",
    values: { insights: 38, mentions: 35, rating: 1 },
    position: { lat: -3.0494560294937365, lng: 16.862670951798947 },
  },
  {
    name: "9ugh4dg",
    values: { insights: 98, mentions: 53, rating: 3 },
    position: { lat: -18.05533147685809, lng: 72.9267593127015 },
  },
  {
    name: "7o879re",
    values: { insights: 38, mentions: 84, rating: 3 },
    position: { lat: 19.345826716727263, lng: 81.5157959010391 },
  },
  {
    name: "kwptc9o",
    values: { insights: 31, mentions: 87, rating: 0 },
    position: { lat: 3.7408645578759767, lng: 40.33073266039219 },
  },
  {
    name: "sdf2mzg",
    values: { insights: 77, mentions: 73, rating: 1 },
    position: { lat: 19.923308264608014, lng: 128.50176038733835 },
  },
  {
    name: "e4bb7te",
    values: { insights: 96, mentions: 100, rating: 2 },
    position: { lat: 67.71681742704351, lng: 70.4616291628742 },
  },
  {
    name: "mf45xwd",
    values: { insights: 39, mentions: 10, rating: 1 },
    position: { lat: 63.179746192695916, lng: 129.16800971258925 },
  },
  {
    name: "e8sd8hb",
    values: { insights: 62, mentions: 82, rating: 5 },
    position: { lat: 6.111905825485554, lng: 42.80456606087924 },
  },
  {
    name: "pmxkrhf",
    values: { insights: 51, mentions: 91, rating: 0 },
    position: { lat: 40.6207954039875, lng: 58.56526083923541 },
  },
  {
    name: "igsgngq",
    values: { insights: 12, mentions: 72, rating: 4 },
    position: { lat: -1.6939631336127832, lng: -94.96154012494567 },
  },
  {
    name: "v0b5iz2",
    values: { insights: 45, mentions: 37, rating: 3 },
    position: { lat: 49.087821832223156, lng: -7.623614864348369 },
  },
  {
    name: "ln0zj2x",
    values: { insights: 90, mentions: 27, rating: 0 },
    position: { lat: 68.85104667007201, lng: -75.53732920061373 },
  },
  {
    name: "er0b3jr",
    values: { insights: 81, mentions: 74, rating: 5 },
    position: { lat: 28.944668956929508, lng: 48.82892058598915 },
  },
  {
    name: "973p8ve",
    values: { insights: 90, mentions: 93, rating: 4 },
    position: { lat: 51.02779424101702, lng: 91.98879176852193 },
  },
  {
    name: "uiizik1",
    values: { insights: 72, mentions: 39, rating: 3 },
    position: { lat: -4.180584684582502, lng: -37.43121430218359 },
  },
  {
    name: "hp369g4",
    values: { insights: 10, mentions: 6, rating: 2 },
    position: { lat: 14.577825587402412, lng: 23.385625459910642 },
  },
  {
    name: "t60ttao",
    values: { insights: 4, mentions: 82, rating: 0 },
    position: { lat: 67.26674897244088, lng: 89.18848713891293 },
  },
  {
    name: "s0iqdby",
    values: { insights: 61, mentions: 90, rating: 2 },
    position: { lat: 26.24208876549306, lng: 10.8812297496398 },
  },
  {
    name: "w3t53hs",
    values: { insights: 20, mentions: 46, rating: 3 },
    position: { lat: 47.13420069802061, lng: 108.71352826820831 },
  },
  {
    name: "6yeaheg",
    values: { insights: 93, mentions: 10, rating: 3 },
    position: { lat: 51.35113161788283, lng: 110.28455272903403 },
  },
  {
    name: "362lr2k",
    values: { insights: 74, mentions: 37, rating: 2 },
    position: { lat: 14.78354042005667, lng: 25.2367686303715 },
  },
  {
    name: "96wctiu",
    values: { insights: 37, mentions: 40, rating: 4 },
    position: { lat: 19.851215203844635, lng: 49.72700066600544 },
  },
  {
    name: "8bad8rd",
    values: { insights: 6, mentions: 41, rating: 3 },
    position: { lat: 60.48771345668759, lng: -28.69978318300724 },
  },
  {
    name: "45z561c",
    values: { insights: 62, mentions: 17, rating: 1 },
    position: { lat: 63.70139451331555, lng: -57.851378078868635 },
  },
  {
    name: "aqncon5",
    values: { insights: 35, mentions: 0, rating: 5 },
    position: { lat: 22.234791748987032, lng: -25.153257652674057 },
  },
  {
    name: "v5ejyxu",
    values: { insights: 1, mentions: 90, rating: 3 },
    position: { lat: 34.411733781530614, lng: -80.48254411223314 },
  },
  {
    name: "smk8gfn",
    values: { insights: 0, mentions: 34, rating: 5 },
    position: { lat: 37.1172343090647, lng: -40.364076206942705 },
  },
  {
    name: "nhkuun9",
    values: { insights: 37, mentions: 10, rating: 3 },
    position: { lat: 8.985392039107666, lng: -28.80160636827044 },
  },
  {
    name: "xowe4e1",
    values: { insights: 51, mentions: 34, rating: 1 },
    position: { lat: -18.38916250532805, lng: -58.0861895014632 },
  },
  {
    name: "z45cer7",
    values: { insights: 77, mentions: 1, rating: 4 },
    position: { lat: -7.859238103482873, lng: 49.20373325021916 },
  },
  {
    name: "up1y5xt",
    values: { insights: 16, mentions: 16, rating: 5 },
    position: { lat: -10.63247690337675, lng: 79.20921944853961 },
  },
  {
    name: "qq41k7b",
    values: { insights: 21, mentions: 30, rating: 1 },
    position: { lat: 60.516161618476744, lng: 148.60263559419474 },
  },
  {
    name: "ksuqbye",
    values: { insights: 54, mentions: 45, rating: 1 },
    position: { lat: 11.969811451077401, lng: 62.41153823020079 },
  },
  {
    name: "of0s5jk",
    values: { insights: 68, mentions: 92, rating: 2 },
    position: { lat: 64.31948961106819, lng: 37.050399886427556 },
  },
  {
    name: "21trzzx",
    values: { insights: 91, mentions: 43, rating: 4 },
    position: { lat: 4.10873257316123, lng: 35.071400675929624 },
  },
  {
    name: "d88jud3",
    values: { insights: 44, mentions: 94, rating: 2 },
    position: { lat: 4.971438092412452, lng: 56.147116382068674 },
  },
  {
    name: "muigsan",
    values: { insights: 20, mentions: 18, rating: 2 },
    position: { lat: -14.12055011791756, lng: 71.19967497078363 },
  },
  {
    name: "xbny1rj",
    values: { insights: 64, mentions: 34, rating: 5 },
    position: { lat: 39.767775071587664, lng: -91.35409068341131 },
  },
  {
    name: "7582b1w",
    values: { insights: 29, mentions: 20, rating: 2 },
    position: { lat: 53.96017779462859, lng: -45.95832734308502 },
  },
  {
    name: "9wv3ka4",
    values: { insights: 25, mentions: 44, rating: 4 },
    position: { lat: -12.737333172035406, lng: -24.787679108478727 },
  },
  {
    name: "hyl7yvw",
    values: { insights: 17, mentions: 78, rating: 4 },
    position: { lat: 65.94141720990693, lng: -3.0143545400653693 },
  },
  {
    name: "yjseczz",
    values: { insights: 39, mentions: 61, rating: 1 },
    position: { lat: 16.141459123052517, lng: -0.05316496249379554 },
  },
  {
    name: "fm6zv0q",
    values: { insights: 86, mentions: 97, rating: 1 },
    position: { lat: -15.349869835958913, lng: -19.616724094128898 },
  },
  {
    name: "fcxa9iu",
    values: { insights: 11, mentions: 15, rating: 2 },
    position: { lat: 34.81925076673589, lng: 36.00246781948931 },
  },
  {
    name: "c83rd8t",
    values: { insights: 54, mentions: 34, rating: 3 },
    position: { lat: 10.134477991449927, lng: 137.80707007137244 },
  },
  {
    name: "0e3wycb",
    values: { insights: 60, mentions: 70, rating: 4 },
    position: { lat: 26.754899174499872, lng: 131.06083039107114 },
  },
  {
    name: "cycqx9f",
    values: { insights: 7, mentions: 60, rating: 2 },
    position: { lat: 17.22181948965577, lng: 121.51157020999261 },
  },
  {
    name: "3jhogyv",
    values: { insights: 12, mentions: 54, rating: 4 },
    position: { lat: 55.38860120788044, lng: 73.06214391379552 },
  },
  {
    name: "52cg6uj",
    values: { insights: 36, mentions: 49, rating: 1 },
    position: { lat: -11.429035512350723, lng: 42.651017210235295 },
  },
  {
    name: "r5bxnge",
    values: { insights: 13, mentions: 86, rating: 4 },
    position: { lat: 14.778850434397395, lng: -95.0574056888001 },
  },
  {
    name: "85q2m7y",
    values: { insights: 8, mentions: 12, rating: 3 },
    position: { lat: 11.466985729421747, lng: 39.527838377689704 },
  },
  {
    name: "lmb7ca3",
    values: { insights: 63, mentions: 43, rating: 0 },
    position: { lat: 37.9704014160143, lng: 113.12208578142562 },
  },
  {
    name: "rf0kp32",
    values: { insights: 68, mentions: 57, rating: 3 },
    position: { lat: 29.191830204672424, lng: -35.043910912608325 },
  },
  {
    name: "lye9ogv",
    values: { insights: 71, mentions: 94, rating: 4 },
    position: { lat: 41.2835840205575, lng: 19.890934886715897 },
  },
  {
    name: "231ennf",
    values: { insights: 38, mentions: 82, rating: 0 },
    position: { lat: 35.14138408378345, lng: -64.1496597782416 },
  },
  {
    name: "la6gkzo",
    values: { insights: 24, mentions: 35, rating: 4 },
    position: { lat: 58.054343752943126, lng: 81.4538756957921 },
  },
  {
    name: "io8zmfa",
    values: { insights: 84, mentions: 54, rating: 0 },
    position: { lat: 60.55823380259018, lng: -19.828658747462583 },
  },
  {
    name: "hzjlown",
    values: { insights: 84, mentions: 90, rating: 5 },
    position: { lat: 44.66698396819457, lng: 146.59957779599952 },
  },
  {
    name: "upv3dwl",
    values: { insights: 12, mentions: 76, rating: 2 },
    position: { lat: 2.644285131155158, lng: -83.09936632758973 },
  },
  {
    name: "c4bizil",
    values: { insights: 10, mentions: 3, rating: 1 },
    position: { lat: 24.57998205354168, lng: -45.90408832546094 },
  },
  {
    name: "5xvwx6m",
    values: { insights: 51, mentions: 97, rating: 1 },
    position: { lat: -17.83723630185046, lng: -53.112408334209704 },
  },
  {
    name: "pg7ejo8",
    values: { insights: 89, mentions: 6, rating: 5 },
    position: { lat: 70.45183307871469, lng: -40.80879359456834 },
  },
  {
    name: "jc1j2zi",
    values: { insights: 87, mentions: 30, rating: 3 },
    position: { lat: 18.759462488231552, lng: 9.108497045838504 },
  },
  {
    name: "amz6gsk",
    values: { insights: 21, mentions: 15, rating: 3 },
    position: { lat: 25.126198886918186, lng: -46.6755288294131 },
  },
  {
    name: "phjyf1z",
    values: { insights: 16, mentions: 24, rating: 2 },
    position: { lat: 69.93185249536046, lng: 51.98783056527279 },
  },
  {
    name: "xn1gbjj",
    values: { insights: 90, mentions: 7, rating: 2 },
    position: { lat: 28.71848541687326, lng: 69.41140403643558 },
  },
  {
    name: "qu6tfca",
    values: { insights: 17, mentions: 76, rating: 0 },
    position: { lat: 27.755986800923306, lng: -66.88974676606568 },
  },
  {
    name: "k7s0uhz",
    values: { insights: 92, mentions: 65, rating: 5 },
    position: { lat: 11.748760920037608, lng: 49.210459573162126 },
  },
  {
    name: "y1k2gwy",
    values: { insights: 92, mentions: 44, rating: 4 },
    position: { lat: 51.69165036314014, lng: -31.714792433993935 },
  },
  {
    name: "y8qemc3",
    values: { insights: 57, mentions: 46, rating: 0 },
    position: { lat: 38.69256388184813, lng: -11.931783719571698 },
  },
  {
    name: "jo0377o",
    values: { insights: 45, mentions: 55, rating: 5 },
    position: { lat: 60.10874278383295, lng: 77.43643659732896 },
  },
  {
    name: "2hldm7s",
    values: { insights: 11, mentions: 71, rating: 2 },
    position: { lat: 68.28279983453785, lng: -21.285453430622866 },
  },
  {
    name: "k27z4f8",
    values: { insights: 74, mentions: 62, rating: 5 },
    position: { lat: 28.059842768056267, lng: -25.01433729753954 },
  },
  {
    name: "40ojgde",
    values: { insights: 98, mentions: 13, rating: 1 },
    position: { lat: 54.56880000267428, lng: 58.3503589565822 },
  },
  {
    name: "g1ozmu4",
    values: { insights: 30, mentions: 18, rating: 4 },
    position: { lat: 63.188508569277744, lng: 28.993686047055064 },
  },
  {
    name: "nj5yoke",
    values: { insights: 67, mentions: 53, rating: 3 },
    position: { lat: 48.567125591343796, lng: -38.71514350832527 },
  },
  {
    name: "s61zpqc",
    values: { insights: 46, mentions: 63, rating: 2 },
    position: { lat: 30.04411718717201, lng: -34.37574101372414 },
  },
  {
    name: "igqlq8q",
    values: { insights: 79, mentions: 51, rating: 4 },
    position: { lat: 63.36291379556074, lng: -88.37783243353974 },
  },
  {
    name: "lldt7vj",
    values: { insights: 50, mentions: 64, rating: 1 },
    position: { lat: 14.380953608613932, lng: -81.36969024222296 },
  },
  {
    name: "hq0qmhd",
    values: { insights: 19, mentions: 36, rating: 0 },
    position: { lat: 23.570048945672436, lng: -96.00382036478105 },
  },
  {
    name: "wwpon9p",
    values: { insights: 63, mentions: 43, rating: 1 },
    position: { lat: 38.29210857981482, lng: -31.44044471790707 },
  },
  {
    name: "opmqnqz",
    values: { insights: 6, mentions: 34, rating: 2 },
    position: { lat: 14.419958939132446, lng: 34.4204737135056 },
  },
  {
    name: "z1bfx2l",
    values: { insights: 61, mentions: 24, rating: 4 },
    position: { lat: 22.731973291595533, lng: -59.314533414222986 },
  },
  {
    name: "fx1ro1z",
    values: { insights: 42, mentions: 74, rating: 5 },
    position: { lat: 29.203040013773606, lng: 86.26508160752618 },
  },
  {
    name: "8d8fc0i",
    values: { insights: 93, mentions: 27, rating: 3 },
    position: { lat: -5.792560736258485, lng: 146.70035444829517 },
  },
  {
    name: "nz4x408",
    values: { insights: 44, mentions: 14, rating: 4 },
    position: { lat: 40.53663967121575, lng: -52.266624327037874 },
  },
  {
    name: "x6mvpy6",
    values: { insights: 3, mentions: 54, rating: 2 },
    position: { lat: 25.932994531757583, lng: 16.10089564178169 },
  },
  {
    name: "1zordtc",
    values: { insights: 79, mentions: 71, rating: 4 },
    position: { lat: 58.80630023295765, lng: 7.685850871140943 },
  },
  {
    name: "uj28m13",
    values: { insights: 69, mentions: 65, rating: 3 },
    position: { lat: -12.133677577004454, lng: -57.902559148793486 },
  },
  {
    name: "p0gwcoe",
    values: { insights: 47, mentions: 9, rating: 3 },
    position: { lat: 22.9219365810706, lng: -57.86058999332921 },
  },
  {
    name: "mx3kntf",
    values: { insights: 49, mentions: 2, rating: 2 },
    position: { lat: 52.904812408508135, lng: 19.570373710214596 },
  },
  {
    name: "fibia5q",
    values: { insights: 47, mentions: 52, rating: 5 },
    position: { lat: 63.27402073825495, lng: -54.978729036953325 },
  },
  {
    name: "5kww22z",
    values: { insights: 54, mentions: 68, rating: 1 },
    position: { lat: 68.91492055997132, lng: -47.611806882994536 },
  },
  {
    name: "2825z73",
    values: { insights: 90, mentions: 15, rating: 2 },
    position: { lat: 66.00886486005348, lng: -82.45174550505934 },
  },
  {
    name: "2iebq3s",
    values: { insights: 26, mentions: 40, rating: 1 },
    position: { lat: 43.357801497717375, lng: -84.27468430535878 },
  },
  {
    name: "wzuxzgv",
    values: { insights: 4, mentions: 77, rating: 0 },
    position: { lat: -1.944334312954716, lng: -9.700407877613046 },
  },
  {
    name: "bb8l46x",
    values: { insights: 34, mentions: 61, rating: 3 },
    position: { lat: 69.89559949885597, lng: 60.95065828870878 },
  },
  {
    name: "twhonct",
    values: { insights: 42, mentions: 2, rating: 2 },
    position: { lat: -8.711168004823747, lng: -96.88856699685893 },
  },
  {
    name: "mnvkw5x",
    values: { insights: 13, mentions: 42, rating: 1 },
    position: { lat: -6.746610676690553, lng: -75.71234357604239 },
  },
  {
    name: "2pfnuxg",
    values: { insights: 9, mentions: 100, rating: 1 },
    position: { lat: -19.365232757403984, lng: -76.82424382563512 },
  },
  {
    name: "9630cy3",
    values: { insights: 58, mentions: 45, rating: 3 },
    position: { lat: 14.835659666259037, lng: -93.02992236494839 },
  },
  {
    name: "e3jpwaj",
    values: { insights: 46, mentions: 65, rating: 2 },
    position: { lat: 50.42246534382454, lng: 66.1268262764126 },
  },
  {
    name: "aikh71j",
    values: { insights: 82, mentions: 76, rating: 5 },
    position: { lat: 58.3172140312754, lng: -57.11728320935804 },
  },
  {
    name: "4nfob3c",
    values: { insights: 47, mentions: 51, rating: 3 },
    position: { lat: -15.833986258347357, lng: 120.37141232758935 },
  },
  {
    name: "8jjsilu",
    values: { insights: 38, mentions: 41, rating: 4 },
    position: { lat: 25.798273789490157, lng: -44.34230949207734 },
  },
  {
    name: "kb0eknf",
    values: { insights: 85, mentions: 1, rating: 3 },
    position: { lat: 69.94112496680638, lng: 75.45935487462646 },
  },
  {
    name: "ebfo233",
    values: { insights: 100, mentions: 57, rating: 2 },
    position: { lat: 21.875386557301926, lng: 41.70764906187824 },
  },
  {
    name: "c5m27is",
    values: { insights: 37, mentions: 2, rating: 1 },
    position: { lat: 7.074626618381828, lng: 95.66058428307724 },
  },
  {
    name: "peab2rq",
    values: { insights: 6, mentions: 29, rating: 0 },
    position: { lat: 48.310358346726574, lng: 1.230257515683519 },
  },
  {
    name: "b30dfcn",
    values: { insights: 46, mentions: 55, rating: 0 },
    position: { lat: 50.639494051109324, lng: -63.66909469903314 },
  },
  {
    name: "yc1tznm",
    values: { insights: 32, mentions: 21, rating: 3 },
    position: { lat: -1.1664772487776425, lng: 137.35816514349764 },
  },
  {
    name: "qwgz4yh",
    values: { insights: 71, mentions: 62, rating: 0 },
    position: { lat: 27.18757035848623, lng: 18.335010072180253 },
  },
  {
    name: "13t1kwy",
    values: { insights: 12, mentions: 56, rating: 5 },
    position: { lat: 66.32576359766234, lng: -16.062343355716763 },
  },
  {
    name: "83mst6d",
    values: { insights: 7, mentions: 67, rating: 4 },
    position: { lat: -7.519510471621061, lng: -91.39366554467186 },
  },
  {
    name: "ualb58c",
    values: { insights: 25, mentions: 87, rating: 3 },
    position: { lat: 45.74383309037138, lng: 25.96043478285638 },
  },
  {
    name: "obbp07c",
    values: { insights: 80, mentions: 100, rating: 2 },
    position: { lat: 5.297948597238193, lng: 120.3880536290471 },
  },
  {
    name: "1qxtxh7",
    values: { insights: 9, mentions: 98, rating: 5 },
    position: { lat: 33.95304823299256, lng: 43.13712129013592 },
  },
  {
    name: "hy7g5rx",
    values: { insights: 43, mentions: 60, rating: 4 },
    position: { lat: -12.657697586899445, lng: 19.60791725670292 },
  },
  {
    name: "034lnmt",
    values: { insights: 52, mentions: 44, rating: 5 },
    position: { lat: -8.654370190028509, lng: 69.78819681356504 },
  },
  {
    name: "96qht1x",
    values: { insights: 48, mentions: 52, rating: 2 },
    position: { lat: 12.552662710687212, lng: -62.058626858480835 },
  },
  {
    name: "ky0jjvd",
    values: { insights: 76, mentions: 68, rating: 2 },
    position: { lat: 35.47203972559434, lng: 118.9818668520638 },
  },
  {
    name: "y0ggc0l",
    values: { insights: 67, mentions: 39, rating: 3 },
    position: { lat: 21.533893262609492, lng: -32.895397360467356 },
  },
  {
    name: "rdoqsm4",
    values: { insights: 89, mentions: 23, rating: 2 },
    position: { lat: 48.47893465952684, lng: -43.199049083116215 },
  },
  {
    name: "le5hfft",
    values: { insights: 59, mentions: 51, rating: 3 },
    position: { lat: 40.11188751002629, lng: -93.62048074750817 },
  },
  {
    name: "12jk2nm",
    values: { insights: 42, mentions: 90, rating: 2 },
    position: { lat: 31.794944546279314, lng: 29.493996953912244 },
  },
  {
    name: "z8nm0k9",
    values: { insights: 62, mentions: 16, rating: 3 },
    position: { lat: 17.381783620893426, lng: 85.96465708078028 },
  },
  {
    name: "07bs2ry",
    values: { insights: 93, mentions: 80, rating: 1 },
    position: { lat: 62.94363326501261, lng: 107.15312735021877 },
  },
  {
    name: "y3nluxs",
    values: { insights: 68, mentions: 94, rating: 2 },
    position: { lat: 21.950525751134553, lng: 90.54612444923626 },
  },
  {
    name: "fye4yke",
    values: { insights: 30, mentions: 95, rating: 0 },
    position: { lat: 19.951261480513327, lng: -59.81730241175153 },
  },
  {
    name: "nxfvs6h",
    values: { insights: 22, mentions: 2, rating: 5 },
    position: { lat: 36.629698092943485, lng: -75.73687223004654 },
  },
  {
    name: "ax9m8ph",
    values: { insights: 34, mentions: 9, rating: 2 },
    position: { lat: 34.8885640336472, lng: 124.90135217495313 },
  },
  {
    name: "yewig38",
    values: { insights: 89, mentions: 43, rating: 0 },
    position: { lat: 31.78649116610065, lng: -26.175563246508702 },
  },
  {
    name: "4wfv3qr",
    values: { insights: 16, mentions: 39, rating: 1 },
    position: { lat: 42.30208024947737, lng: 101.96859170593433 },
  },
  {
    name: "ycq1v13",
    values: { insights: 76, mentions: 38, rating: 3 },
    position: { lat: 22.14400931664783, lng: -31.52514745287631 },
  },
  {
    name: "trnamtg",
    values: { insights: 17, mentions: 11, rating: 2 },
    position: { lat: 48.9277121200997, lng: 21.198414078594368 },
  },
  {
    name: "b0xgzpe",
    values: { insights: 88, mentions: 57, rating: 2 },
    position: { lat: 64.85160173786586, lng: 134.82476415680128 },
  },
  {
    name: "b9iv88s",
    values: { insights: 17, mentions: 16, rating: 1 },
    position: { lat: 47.15207121188446, lng: -76.85445349858277 },
  },
  {
    name: "lnsga5f",
    values: { insights: 1, mentions: 41, rating: 3 },
    position: { lat: 35.1100645819663, lng: -64.72122609550561 },
  },
  {
    name: "0qbqmo0",
    values: { insights: 22, mentions: 73, rating: 2 },
    position: { lat: -3.1710517779254737, lng: -80.7352294966323 },
  },
  {
    name: "aqzlk59",
    values: { insights: 97, mentions: 86, rating: 0 },
    position: { lat: 0.8473932235370505, lng: -1.2519302955164449 },
  },
  {
    name: "bsqinoq",
    values: { insights: 25, mentions: 51, rating: 0 },
    position: { lat: 29.861631042074183, lng: -36.63805726015966 },
  },
  {
    name: "oppesa4",
    values: { insights: 4, mentions: 28, rating: 0 },
    position: { lat: -12.06100024782242, lng: 41.29199745293917 },
  },
  {
    name: "rsr0h6l",
    values: { insights: 55, mentions: 66, rating: 3 },
    position: { lat: 26.619062917938297, lng: 90.68378162052954 },
  },
  {
    name: "ak0vavh",
    values: { insights: 42, mentions: 36, rating: 1 },
    position: { lat: 57.801956013303126, lng: 18.67845163131439 },
  },
  {
    name: "mrsl4ay",
    values: { insights: 6, mentions: 37, rating: 1 },
    position: { lat: 33.173969116493055, lng: 48.86290794724286 },
  },
  {
    name: "eowb6or",
    values: { insights: 85, mentions: 35, rating: 5 },
    position: { lat: 41.70699005103447, lng: -70.72278375191325 },
  },
  {
    name: "kgamosz",
    values: { insights: 58, mentions: 84, rating: 3 },
    position: { lat: 60.337228648009685, lng: -70.82079773260274 },
  },
  {
    name: "iui4vrm",
    values: { insights: 82, mentions: 19, rating: 1 },
    position: { lat: -11.348297782023145, lng: -77.31762016692133 },
  },
  {
    name: "sk5hfm6",
    values: { insights: 5, mentions: 67, rating: 0 },
    position: { lat: 40.27630424641548, lng: 105.91341736184395 },
  },
  {
    name: "vp6amzy",
    values: { insights: 69, mentions: 76, rating: 2 },
    position: { lat: -16.217186624276252, lng: 109.82431893048633 },
  },
  {
    name: "xs5rbud",
    values: { insights: 10, mentions: 73, rating: 5 },
    position: { lat: 24.023695769329986, lng: 80.51669929482415 },
  },
  {
    name: "548ohj1",
    values: { insights: 47, mentions: 88, rating: 3 },
    position: { lat: 5.669909758317239, lng: 52.25411667841419 },
  },
  {
    name: "5jj4umb",
    values: { insights: 47, mentions: 0, rating: 0 },
    position: { lat: 50.25086738616717, lng: 42.837239217408694 },
  },
  {
    name: "7nth8zn",
    values: { insights: 44, mentions: 19, rating: 4 },
    position: { lat: 57.81240837016897, lng: -83.52713862668702 },
  },
  {
    name: "g6ig0vv",
    values: { insights: 94, mentions: 1, rating: 0 },
    position: { lat: -14.623538622271813, lng: 114.61358429986069 },
  },
  {
    name: "iyby1lk",
    values: { insights: 11, mentions: 97, rating: 1 },
    position: { lat: 63.370078980543425, lng: 114.37776564562503 },
  },
  {
    name: "du2yq3v",
    values: { insights: 18, mentions: 37, rating: 1 },
    position: { lat: -15.3081410217931, lng: -9.328872352245938 },
  },
  {
    name: "ko4s2ja",
    values: { insights: 21, mentions: 93, rating: 3 },
    position: { lat: 58.130429274988856, lng: 52.54509200166365 },
  },
  {
    name: "6krayp5",
    values: { insights: 85, mentions: 99, rating: 1 },
    position: { lat: 33.88809350029939, lng: 107.31878686692272 },
  },
  {
    name: "b0kmon9",
    values: { insights: 6, mentions: 47, rating: 3 },
    position: { lat: 59.56921254952606, lng: 77.03738693991374 },
  },
  {
    name: "0fna50n",
    values: { insights: 41, mentions: 99, rating: 1 },
    position: { lat: -17.630092325958042, lng: 123.09401095533951 },
  },
  {
    name: "pyob3uu",
    values: { insights: 31, mentions: 93, rating: 5 },
    position: { lat: 24.22177248336904, lng: -42.38248958065265 },
  },
  {
    name: "9s6k73u",
    values: { insights: 24, mentions: 21, rating: 4 },
    position: { lat: 24.03627296446719, lng: -15.082304571134344 },
  },
  {
    name: "5pldivq",
    values: { insights: 23, mentions: 70, rating: 3 },
    position: { lat: 28.867576429470287, lng: -35.84476703395971 },
  },
  {
    name: "ezalfeu",
    values: { insights: 41, mentions: 12, rating: 2 },
    position: { lat: 51.83394168527464, lng: 2.3262459321298934 },
  },
  {
    name: "m1cs4a1",
    values: { insights: 61, mentions: 1, rating: 2 },
    position: { lat: 31.09047567263511, lng: 1.2590709759059564 },
  },
  {
    name: "bc9qidj",
    values: { insights: 4, mentions: 29, rating: 2 },
    position: { lat: -18.853801593729784, lng: -31.465080427532087 },
  },
  {
    name: "l2oeqz7",
    values: { insights: 93, mentions: 33, rating: 2 },
    position: { lat: 70.12592573203482, lng: 63.21844820405897 },
  },
  {
    name: "aazb33j",
    values: { insights: 11, mentions: 13, rating: 5 },
    position: { lat: 46.22024568257977, lng: 4.32163673517789 },
  },
  {
    name: "6lxtsv8",
    values: { insights: 88, mentions: 41, rating: 2 },
    position: { lat: 21.844139161738365, lng: 33.46343479024529 },
  },
  {
    name: "y5tih0n",
    values: { insights: 13, mentions: 46, rating: 2 },
    position: { lat: -12.193745990749779, lng: -94.05963646962621 },
  },
  {
    name: "ae57605",
    values: { insights: 82, mentions: 23, rating: 1 },
    position: { lat: 19.61436496831472, lng: -79.50722595593439 },
  },
  {
    name: "wbqm65h",
    values: { insights: 21, mentions: 65, rating: 3 },
    position: { lat: -11.645542661009609, lng: 76.89192710532046 },
  },
  {
    name: "0dgglvx",
    values: { insights: 75, mentions: 49, rating: 4 },
    position: { lat: 21.091909898215516, lng: 142.51420238886294 },
  },
  {
    name: "3zpfru9",
    values: { insights: 70, mentions: 52, rating: 1 },
    position: { lat: 23.618993476367276, lng: 72.7388827466059 },
  },
  {
    name: "80xq50l",
    values: { insights: 94, mentions: 1, rating: 1 },
    position: { lat: 16.483053784958695, lng: -97.49358746802322 },
  },
  {
    name: "zy52zz6",
    values: { insights: 20, mentions: 98, rating: 2 },
    position: { lat: 18.80108066649505, lng: 82.63926453809867 },
  },
  {
    name: "4g6tier",
    values: { insights: 82, mentions: 32, rating: 3 },
    position: { lat: 11.784870387414866, lng: -14.038697049822176 },
  },
  {
    name: "1ryxiny",
    values: { insights: 76, mentions: 45, rating: 0 },
    position: { lat: -8.956920982297294, lng: 65.29302660086574 },
  },
  {
    name: "wkysufa",
    values: { insights: 68, mentions: 75, rating: 4 },
    position: { lat: 62.326209136596205, lng: -54.26021379676154 },
  },
  {
    name: "czw0ncp",
    values: { insights: 53, mentions: 39, rating: 5 },
    position: { lat: 32.64117105885012, lng: 34.76710901058334 },
  },
  {
    name: "yxe3l6a",
    values: { insights: 79, mentions: 43, rating: 1 },
    position: { lat: -4.981695417048787, lng: 125.6406264697153 },
  },
  {
    name: "vk36ori",
    values: { insights: 41, mentions: 57, rating: 4 },
    position: { lat: 65.18149554133392, lng: -92.57670652144088 },
  },
  {
    name: "k4ai0gj",
    values: { insights: 49, mentions: 1, rating: 1 },
    position: { lat: 4.504269392278832, lng: -90.62980498660288 },
  },
  {
    name: "8yb70oh",
    values: { insights: 81, mentions: 50, rating: 1 },
    position: { lat: 6.146492614251404, lng: -30.388914007581576 },
  },
  {
    name: "5sk1a4y",
    values: { insights: 2, mentions: 21, rating: 2 },
    position: { lat: 46.184223105608595, lng: -14.060186645953763 },
  },
  {
    name: "vlqbnmw",
    values: { insights: 77, mentions: 62, rating: 5 },
    position: { lat: 40.738193504985205, lng: 1.6809711516879275 },
  },
  {
    name: "kwunq75",
    values: { insights: 81, mentions: 55, rating: 5 },
    position: { lat: 40.24681516609063, lng: 55.065265443804265 },
  },
  {
    name: "ri7qm9z",
    values: { insights: 83, mentions: 94, rating: 3 },
    position: { lat: 62.086842244040824, lng: 117.55473887841558 },
  },
  {
    name: "1miakjm",
    values: { insights: 67, mentions: 62, rating: 5 },
    position: { lat: 69.84692814291755, lng: 56.73505815265614 },
  },
  {
    name: "ylsd4ve",
    values: { insights: 67, mentions: 33, rating: 4 },
    position: { lat: 30.327666032090296, lng: -70.58893875652599 },
  },
  {
    name: "mz59wjh",
    values: { insights: 65, mentions: 87, rating: 5 },
    position: { lat: 13.7309488265653, lng: -58.34524219455943 },
  },
  {
    name: "nuzks9k",
    values: { insights: 34, mentions: 12, rating: 3 },
    position: { lat: -8.343829419406605, lng: 68.28946027660007 },
  },
  {
    name: "v0pcdrv",
    values: { insights: 74, mentions: 92, rating: 2 },
    position: { lat: 29.46861607761814, lng: -41.09809479426612 },
  },
  {
    name: "jup9jqi",
    values: { insights: 95, mentions: 52, rating: 5 },
    position: { lat: 42.98994769090585, lng: -65.67670886033926 },
  },
  {
    name: "hv0ki16",
    values: { insights: 94, mentions: 52, rating: 1 },
    position: { lat: -2.36268744528795, lng: -86.20535180765891 },
  },
  {
    name: "8f18cxf",
    values: { insights: 61, mentions: 41, rating: 5 },
    position: { lat: -9.468226453422652, lng: 51.18365208876665 },
  },
  {
    name: "h6ki6hz",
    values: { insights: 93, mentions: 73, rating: 2 },
    position: { lat: -13.562175427249866, lng: -54.27842592308856 },
  },
  {
    name: "wakycjr",
    values: { insights: 5, mentions: 33, rating: 5 },
    position: { lat: -8.706207425922441, lng: 17.150449143121307 },
  },
  {
    name: "g8a83ij",
    values: { insights: 68, mentions: 92, rating: 3 },
    position: { lat: 40.847461396522164, lng: 103.3469067907078 },
  },
  {
    name: "gfb754m",
    values: { insights: 21, mentions: 21, rating: 2 },
    position: { lat: 37.785520215827006, lng: -19.89747519573153 },
  },
  {
    name: "ef8ep30",
    values: { insights: 90, mentions: 31, rating: 2 },
    position: { lat: 69.40745281341665, lng: -17.67442494028326 },
  },
  {
    name: "fq8n1m2",
    values: { insights: 52, mentions: 77, rating: 3 },
    position: { lat: 67.19959987250273, lng: -61.944891273223384 },
  },
  {
    name: "o9bjnlk",
    values: { insights: 48, mentions: 97, rating: 1 },
    position: { lat: 38.17805130858909, lng: 66.74477557355942 },
  },
  {
    name: "kkx75ek",
    values: { insights: 93, mentions: 92, rating: 4 },
    position: { lat: -14.984025158026725, lng: -27.794424675851246 },
  },
  {
    name: "c0t8o0p",
    values: { insights: 94, mentions: 47, rating: 0 },
    position: { lat: -3.5802810302658266, lng: 114.34554525512169 },
  },
  {
    name: "x1ntsbl",
    values: { insights: 94, mentions: 92, rating: 1 },
    position: { lat: 61.912218588399725, lng: 71.7592224481159 },
  },
  {
    name: "lu5epbg",
    values: { insights: 81, mentions: 74, rating: 1 },
    position: { lat: 24.019689839367484, lng: 73.73791584675016 },
  },
  {
    name: "ckhkbxe",
    values: { insights: 70, mentions: 96, rating: 3 },
    position: { lat: 9.978502086458832, lng: 99.3014858366904 },
  },
  {
    name: "is0g62s",
    values: { insights: 40, mentions: 77, rating: 3 },
    position: { lat: 7.23029018000755, lng: 78.00481583307413 },
  },
  {
    name: "1zkblm5",
    values: { insights: 62, mentions: 86, rating: 3 },
    position: { lat: 1.7909806014474974, lng: -68.91996927706089 },
  },
  {
    name: "aq5c4na",
    values: { insights: 79, mentions: 69, rating: 1 },
    position: { lat: -3.4208983321541844, lng: 81.18935523074356 },
  },
  {
    name: "x3i3qb8",
    values: { insights: 57, mentions: 100, rating: 5 },
    position: { lat: 40.91679279895368, lng: -93.42392544684374 },
  },
  {
    name: "w25lmid",
    values: { insights: 49, mentions: 19, rating: 5 },
    position: { lat: 38.908707176625356, lng: 67.78948832675715 },
  },
  {
    name: "kiaubgt",
    values: { insights: 48, mentions: 52, rating: 3 },
    position: { lat: 46.936779305779865, lng: -30.200413683178652 },
  },
  {
    name: "gkghrsw",
    values: { insights: 70, mentions: 33, rating: 5 },
    position: { lat: 43.37039052668588, lng: -55.41570855485105 },
  },
  {
    name: "z96o2z8",
    values: { insights: 29, mentions: 88, rating: 5 },
    position: { lat: 44.91114368625411, lng: 107.52124820715758 },
  },
  {
    name: "9tfafyf",
    values: { insights: 13, mentions: 20, rating: 4 },
    position: { lat: -20.335707160909386, lng: 8.40698268305168 },
  },
  {
    name: "zzzqpaf",
    values: { insights: 33, mentions: 27, rating: 2 },
    position: { lat: -14.916483631247416, lng: 73.5104305763183 },
  },
  {
    name: "usfxbj2",
    values: { insights: 80, mentions: 18, rating: 1 },
    position: { lat: -15.951304265699218, lng: -89.85754413075774 },
  },
  {
    name: "59virv6",
    values: { insights: 53, mentions: 88, rating: 0 },
    position: { lat: -15.119399403171592, lng: 41.208728157426776 },
  },
  {
    name: "2bowuhg",
    values: { insights: 45, mentions: 22, rating: 0 },
    position: { lat: 19.33940552752139, lng: 37.307017553477664 },
  },
  {
    name: "3tc8c19",
    values: { insights: 31, mentions: 67, rating: 2 },
    position: { lat: -3.3525629030314015, lng: 132.25327223842882 },
  },
  {
    name: "hhgfmcs",
    values: { insights: 24, mentions: 22, rating: 5 },
    position: { lat: -10.873838979707006, lng: 83.80976793510226 },
  },
  {
    name: "484qipn",
    values: { insights: 75, mentions: 96, rating: 3 },
    position: { lat: 22.101357799015542, lng: 111.81506728989515 },
  },
  {
    name: "0f1uc47",
    values: { insights: 77, mentions: 53, rating: 1 },
    position: { lat: 63.87970727012032, lng: 27.902044905913257 },
  },
  {
    name: "xb1szk3",
    values: { insights: 58, mentions: 84, rating: 3 },
    position: { lat: 67.14682278598397, lng: 43.43628442346892 },
  },
  {
    name: "pj2fla5",
    values: { insights: 57, mentions: 29, rating: 2 },
    position: { lat: 49.70470459925305, lng: 55.63411468544183 },
  },
  {
    name: "0we2f2s",
    values: { insights: 95, mentions: 10, rating: 1 },
    position: { lat: -18.84464401988447, lng: -54.56059239379179 },
  },
  {
    name: "i58pso2",
    values: { insights: 27, mentions: 91, rating: 2 },
    position: { lat: 4.828345727379279, lng: -59.258576776200215 },
  },
  {
    name: "c8fw1tn",
    values: { insights: 83, mentions: 69, rating: 5 },
    position: { lat: 47.251599918520924, lng: -79.39540879220624 },
  },
  {
    name: "5hem9ir",
    values: { insights: 74, mentions: 34, rating: 5 },
    position: { lat: 28.595886530607967, lng: -15.230539255340787 },
  },
  {
    name: "e5smq58",
    values: { insights: 17, mentions: 64, rating: 0 },
    position: { lat: 49.62403828708766, lng: 139.80394584716268 },
  },
  {
    name: "3qhotmm",
    values: { insights: 75, mentions: 66, rating: 5 },
    position: { lat: 11.302023920871832, lng: 3.9848615621954195 },
  },
  {
    name: "8kfvmk5",
    values: { insights: 32, mentions: 39, rating: 1 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "8kfvmk5",
    values: { insights: 32, mentions: 39, rating: 1 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "8kfvmk5",
    values: { insights: 32, mentions: 39, rating: 1 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "8kfvmk5",
    values: { insights: 32, mentions: 39, rating: 1 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
];
// console.log(data);
export default data;
