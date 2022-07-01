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
//   let lngSpan = 40,
//     latSpan = 10.5;
//   return new Object({
//     lat: 60 + latSpan * Math.random(),
//     lng: -140 + lngSpan * Math.random(),
//   });
// }
let obj = {
  name: "Restaurant fy",
  values: {
    insights: 34,
    mentions: 76,
    rating: 3,
  },
};

// for (let i = 0; i < 100; i++) {
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

const data = [
  {
    name: "igfrkuh",
    values: { insights: 58, mentions: 69, rating: 3 },
    position: { lat: 30.174818740033462, lng: 42.512147152306504 },
  },
  {
    name: "4lvz3di",
    values: { insights: 45, mentions: 51, rating: 2 },
    position: { lat: 35.84022837058829, lng: 112.32567094465288 },
  },
  {
    name: "8ezl5kt",
    values: { insights: 85, mentions: 64, rating: 1 },
    position: { lat: 40.21767697394294, lng: 47.90189083100973 },
  },
  {
    name: "8ez95kt",
    values: { insights: 85, mentions: 64, rating: 1 },
    position: { lat: -29.21767697394294, lng: 28.90189083100973 },
  },
  {
    name: "yp6t0oa",
    values: { insights: 12, mentions: 59, rating: 5 },
    position: { lat: 49.07684443734817, lng: 109.60817717229651 },
  },
  {
    name: "gbq5d2y",
    values: { insights: 46, mentions: 11, rating: 2 },
    position: { lat: 27.430099955191498, lng: 13.518291349698606 },
  },
  {
    name: "n1coh7m",
    values: { insights: 14, mentions: 17, rating: 4 },
    position: { lat: 19.89383197589096, lng: 18.076859997768832 },
  },
  {
    name: "tgxqsgz",
    values: { insights: 32, mentions: 89, rating: 2 },
    position: { lat: 40.45967761864064, lng: 119.82317218368085 },
  },
  {
    name: "h2comzo",
    values: { insights: 49, mentions: 9, rating: 3 },
    position: { lat: 47.36703965203489, lng: 115.25674143974172 },
  },
  {
    name: "p1zsv8e",
    values: { insights: 27, mentions: 3, rating: 4 },
    position: { lat: 17.845670535608196, lng: 97.50018301795603 },
  },
  {
    name: "y9icvq8",
    values: { insights: 58, mentions: 84, rating: 2 },
    position: { lat: 39.35136472475216, lng: 69.44244762013972 },
  },
  {
    name: "zlgsc0c",
    values: { insights: 50, mentions: 75, rating: 5 },
    position: { lat: 51.31000146192721, lng: 108.14452892497323 },
  },
  {
    name: "160cnkk",
    values: { insights: 57, mentions: 87, rating: 0 },
    position: { lat: 10.846974675644393, lng: 32.24562795664117 },
  },
  {
    name: "hy02xp9",
    values: { insights: 62, mentions: 70, rating: 1 },
    position: { lat: 58.54816149889714, lng: 89.50561555374607 },
  },
  {
    name: "wpdc4k7",
    values: { insights: 53, mentions: 4, rating: 3 },
    position: { lat: 14.9059866180615, lng: 50.60765553706271 },
  },
  {
    name: "hgs6cs9",
    values: { insights: 87, mentions: 86, rating: 0 },
    position: { lat: 15.197882749061362, lng: 18.610364840907177 },
  },
  {
    name: "g52va0b",
    values: { insights: 72, mentions: 53, rating: 5 },
    position: { lat: 58.06275458944013, lng: 31.670240665586707 },
  },
  {
    name: "yr4v293",
    values: { insights: 20, mentions: 39, rating: 3 },
    position: { lat: 30.588711825622667, lng: 104.44099600453748 },
  },
  {
    name: "njcsf3t",
    values: { insights: 67, mentions: 2, rating: 0 },
    position: { lat: 13.971368651001988, lng: 83.57801278180587 },
  },
  {
    name: "0l4u1eb",
    values: { insights: 96, mentions: 99, rating: 5 },
    position: { lat: 20.408417895861536, lng: 29.778396121871083 },
  },
  {
    name: "pseqm91",
    values: { insights: 6, mentions: 36, rating: 0 },
    position: { lat: 23.802827015657524, lng: 72.9116611982703 },
  },
  {
    name: "cz7n1of",
    values: { insights: 45, mentions: 23, rating: 0 },
    position: { lat: 42.26284203289897, lng: 108.31256458639075 },
  },
  {
    name: "zbonekq",
    values: { insights: 89, mentions: 81, rating: 1 },
    position: { lat: 52.71976601072666, lng: 99.26485284390372 },
  },
  {
    name: "invrmhu",
    values: { insights: 16, mentions: 28, rating: 5 },
    position: { lat: 50.87980520137239, lng: 20.30284919497354 },
  },
  {
    name: "st1sp8i",
    values: { insights: 19, mentions: 68, rating: 0 },
    position: { lat: 19.224453611818788, lng: 38.48770252392049 },
  },
  {
    name: "6dinqtd",
    values: { insights: 46, mentions: 42, rating: 5 },
    position: { lat: 49.63262154329899, lng: 67.41180857659955 },
  },
  {
    name: "t1iyz9i",
    values: { insights: 40, mentions: 42, rating: 0 },
    position: { lat: 18.109733224236635, lng: 41.885708205363954 },
  },
  {
    name: "ymg735p",
    values: { insights: 94, mentions: 18, rating: 4 },
    position: { lat: 33.84720667595702, lng: 23.511627719694484 },
  },
  {
    name: "ntaiaf4",
    values: { insights: 8, mentions: 98, rating: 0 },
    position: { lat: 47.90255510525995, lng: 90.36746142914258 },
  },
  {
    name: "zc7lq6x",
    values: { insights: 53, mentions: 16, rating: 3 },
    position: { lat: 49.112228240504955, lng: 93.17708614126262 },
  },
  {
    name: "7ikucov",
    values: { insights: 13, mentions: 59, rating: 4 },
    position: { lat: 48.64064814618065, lng: 46.4988685992229 },
  },
  {
    name: "w39grqo",
    values: { insights: 6, mentions: 29, rating: 2 },
    position: { lat: 14.153559809630014, lng: 33.178350383843465 },
  },
  {
    name: "270dy34",
    values: { insights: 48, mentions: 27, rating: 2 },
    position: { lat: 13.298951036218366, lng: 17.360528323710177 },
  },
  {
    name: "a2y2zfr",
    values: { insights: 8, mentions: 57, rating: 2 },
    position: { lat: 16.54665539336684, lng: 83.7555677497472 },
  },
  {
    name: "r3fh2kk",
    values: { insights: 84, mentions: 76, rating: 0 },
    position: { lat: 24.15979580017985, lng: 43.45538418457733 },
  },
  {
    name: "9vq68ht",
    values: { insights: 26, mentions: 93, rating: 4 },
    position: { lat: 50.87142673665703, lng: 108.68778444617024 },
  },
  {
    name: "l3ksn62",
    values: { insights: 76, mentions: 2, rating: 5 },
    position: { lat: 38.64441855698575, lng: 105.97624871169532 },
  },
  {
    name: "glasc3z",
    values: { insights: 52, mentions: 31, rating: 0 },
    position: { lat: 37.95372677616712, lng: 50.10769794411128 },
  },
  {
    name: "qfgwo9b",
    values: { insights: 43, mentions: 5, rating: 0 },
    position: { lat: 56.7483877398929, lng: 80.04735553049362 },
  },
  {
    name: "pcwa04j",
    values: { insights: 76, mentions: 25, rating: 0 },
    position: { lat: 30.53784080126112, lng: 101.57811392730383 },
  },
  {
    name: "yi3c9bh",
    values: { insights: 0, mentions: 26, rating: 2 },
    position: { lat: 24.211068447611147, lng: 46.09770235308274 },
  },
  {
    name: "c25u31s",
    values: { insights: 37, mentions: 0, rating: 0 },
    position: { lat: 36.91483565287483, lng: 112.64299762002933 },
  },
  {
    name: "rrjgs9h",
    values: { insights: 100, mentions: 24, rating: 3 },
    position: { lat: 38.08519712217711, lng: 87.30974245134291 },
  },
  {
    name: "ibfz2sk",
    values: { insights: 99, mentions: 13, rating: 0 },
    position: { lat: 11.062656677990798, lng: 100.53751947404685 },
  },
  {
    name: "cm72g5q",
    values: { insights: 68, mentions: 28, rating: 3 },
    position: { lat: 49.107669398816924, lng: 31.09915994709271 },
  },
  {
    name: "gwiksov",
    values: { insights: 3, mentions: 24, rating: 1 },
    position: { lat: 21.979228514214192, lng: 30.494724237348986 },
  },
  {
    name: "i60r45a",
    values: { insights: 78, mentions: 97, rating: 4 },
    position: { lat: 40.10357143210162, lng: 90.91638723693978 },
  },
  {
    name: "6dbe07c",
    values: { insights: 89, mentions: 30, rating: 0 },
    position: { lat: 42.40793374276956, lng: 47.32853734908372 },
  },
  {
    name: "smvxpzb",
    values: { insights: 75, mentions: 48, rating: 0 },
    position: { lat: 47.23707060615863, lng: 65.84576511198858 },
  },
  {
    name: "mqx0ygu",
    values: { insights: 40, mentions: 91, rating: 4 },
    position: { lat: 23.400032941864936, lng: 75.58586429977301 },
  },
  {
    name: "t0yfqwh",
    values: { insights: 17, mentions: 26, rating: 4 },
    position: { lat: 48.1544591537108, lng: 80.19068352670392 },
  },
  {
    name: "tvfr51n",
    values: { insights: 47, mentions: 10, rating: 5 },
    position: { lat: 15.651821008933702, lng: 90.62756646390208 },
  },
  {
    name: "do4t9sh",
    values: { insights: 47, mentions: 99, rating: 0 },
    position: { lat: 32.900906907789, lng: 108.77013551054524 },
  },
  {
    name: "hykkapz",
    values: { insights: 41, mentions: 11, rating: 3 },
    position: { lat: 39.122584760841136, lng: 33.339830946392034 },
  },
  {
    name: "araz47i",
    values: { insights: 79, mentions: 6, rating: 5 },
    position: { lat: 37.00653834536715, lng: 34.575340677164505 },
  },
  {
    name: "9ma7rj4",
    values: { insights: 13, mentions: 93, rating: 0 },
    position: { lat: 37.49836493001683, lng: 70.8421546987804 },
  },
  {
    name: "29rnxvq",
    values: { insights: 96, mentions: 33, rating: 3 },
    position: { lat: 23.693776444467076, lng: 113.19989126422108 },
  },
  {
    name: "kmy9tp5",
    values: { insights: 33, mentions: 76, rating: 3 },
    position: { lat: 22.372761942879418, lng: 35.31489194224107 },
  },
  {
    name: "wdayja0",
    values: { insights: 84, mentions: 83, rating: 1 },
    position: { lat: 30.347818699570496, lng: 29.084055783723553 },
  },
  {
    name: "bp9he3s",
    values: { insights: 82, mentions: 67, rating: 0 },
    position: { lat: 19.687427384531823, lng: 91.36682080622222 },
  },
  {
    name: "dnmf05j",
    values: { insights: 5, mentions: 83, rating: 4 },
    position: { lat: 28.66700791129369, lng: 33.458496418752944 },
  },
  {
    name: "xbgy7cu",
    values: { insights: 89, mentions: 62, rating: 1 },
    position: { lat: 11.177192517389654, lng: 30.42816192378374 },
  },
  {
    name: "3pelfue",
    values: { insights: 22, mentions: 41, rating: 2 },
    position: { lat: 32.580372923478265, lng: 38.51695888646877 },
  },
  {
    name: "mdkk29e",
    values: { insights: 11, mentions: 68, rating: 0 },
    position: { lat: 46.06685565822274, lng: 90.72381211193047 },
  },
  {
    name: "qcfbfbn",
    values: { insights: 92, mentions: 6, rating: 2 },
    position: { lat: 59.02105270460285, lng: 57.700621814579414 },
  },
  {
    name: "k7bld6j",
    values: { insights: 3, mentions: 79, rating: 3 },
    position: { lat: 47.434306416758346, lng: 33.97544364656734 },
  },
  {
    name: "6uw0txg",
    values: { insights: 64, mentions: 91, rating: 0 },
    position: { lat: 58.25152890797198, lng: 61.264631363853375 },
  },
  {
    name: "l09zw1v",
    values: { insights: 35, mentions: 69, rating: 0 },
    position: { lat: 50.08421744402622, lng: 19.44361526613294 },
  },
  {
    name: "ocoar1l",
    values: { insights: 24, mentions: 57, rating: 0 },
    position: { lat: 16.934419597271845, lng: 18.10374543798698 },
  },
  {
    name: "mmn63mw",
    values: { insights: 25, mentions: 12, rating: 0 },
    position: { lat: 44.01495978230663, lng: 111.61612850514548 },
  },
  {
    name: "xnwglw7",
    values: { insights: 64, mentions: 6, rating: 2 },
    position: { lat: 38.053816735085604, lng: 16.22277050443246 },
  },
  {
    name: "0y1vhah",
    values: { insights: 15, mentions: 47, rating: 3 },
    position: { lat: 17.980015616448693, lng: 80.55279257219863 },
  },
  {
    name: "hbvaiqu",
    values: { insights: 25, mentions: 98, rating: 3 },
    position: { lat: 24.151070745606123, lng: 10.785834619515892 },
  },
  {
    name: "uudisgc",
    values: { insights: 18, mentions: 8, rating: 2 },
    position: { lat: 56.5895114901224, lng: 96.08779450958383 },
  },
  {
    name: "sasmzk2",
    values: { insights: 67, mentions: 10, rating: 3 },
    position: { lat: 43.70026498597416, lng: 39.91952849154751 },
  },
  {
    name: "5ymfh31",
    values: { insights: 10, mentions: 82, rating: 5 },
    position: { lat: 24.91708966771869, lng: 111.20313339431833 },
  },
  {
    name: "7grakfy",
    values: { insights: 62, mentions: 26, rating: 4 },
    position: { lat: 39.83590438253202, lng: 33.761491807747966 },
  },
  {
    name: "14k2eyi",
    values: { insights: 52, mentions: 26, rating: 5 },
    position: { lat: 18.29921876651068, lng: 55.819738631507306 },
  },
  {
    name: "vsdpoy1",
    values: { insights: 78, mentions: 11, rating: 4 },
    position: { lat: 51.44445841026479, lng: 86.5994526769569 },
  },
  {
    name: "lejyj9t",
    values: { insights: 30, mentions: 36, rating: 1 },
    position: { lat: 56.001295758385275, lng: 36.28846030027229 },
  },
  {
    name: "5tnyo77",
    values: { insights: 36, mentions: 9, rating: 4 },
    position: { lat: 43.89001823688778, lng: 68.31389504366553 },
  },
  {
    name: "21r6fqd",
    values: { insights: 82, mentions: 35, rating: 2 },
    position: { lat: 20.032619950680655, lng: 81.66406725211527 },
  },
  {
    name: "9lc5yaw",
    values: { insights: 9, mentions: 83, rating: 2 },
    position: { lat: 10.22177163768528, lng: 48.25687376182165 },
  },
  {
    name: "u10wpa7",
    values: { insights: 99, mentions: 39, rating: 0 },
    position: { lat: 22.579569214482667, lng: 39.14199077779497 },
  },
  {
    name: "et77erx",
    values: { insights: 55, mentions: 1, rating: 4 },
    position: { lat: 41.936119954876446, lng: 22.928763952562218 },
  },
  {
    name: "few59m9",
    values: { insights: 27, mentions: 54, rating: 0 },
    position: { lat: 38.00430286104433, lng: 117.17174828365651 },
  },
  {
    name: "idziu56",
    values: { insights: 18, mentions: 52, rating: 0 },
    position: { lat: 33.63055907439868, lng: 83.86119167142303 },
  },
  {
    name: "t6bm3nj",
    values: { insights: 44, mentions: 8, rating: 5 },
    position: { lat: 46.23883241991927, lng: 103.47103191362277 },
  },
  {
    name: "ukdx0ce",
    values: { insights: 27, mentions: 72, rating: 1 },
    position: { lat: 29.506082797468267, lng: 95.63249863591905 },
  },
  {
    name: "es5xn1y",
    values: { insights: 71, mentions: 16, rating: 1 },
    position: { lat: 41.55230794967538, lng: 116.21117764645207 },
  },
  {
    name: "4cd0umn",
    values: { insights: 4, mentions: 53, rating: 3 },
    position: { lat: 19.93098416350609, lng: 24.98378573727073 },
  },
  {
    name: "65ncfpa",
    values: { insights: 50, mentions: 65, rating: 1 },
    position: { lat: 50.5777595273515, lng: 108.26770693105883 },
  },
  {
    name: "2aymig5",
    values: { insights: 83, mentions: 41, rating: 2 },
    position: { lat: 40.887949258988336, lng: 18.718374107404276 },
  },
  {
    name: "54c16j9",
    values: { insights: 33, mentions: 73, rating: 3 },
    position: { lat: 48.811824910196215, lng: 14.191699141225564 },
  },
  {
    name: "8pt73eb",
    values: { insights: 1, mentions: 3, rating: 1 },
    position: { lat: 45.70555073387684, lng: 57.28874196198084 },
  },
  {
    name: "k2wlyiu",
    values: { insights: 38, mentions: 83, rating: 1 },
    position: { lat: 25.037336929566017, lng: 116.02367629422744 },
  },
  {
    name: "oih21n5",
    values: { insights: 86, mentions: 49, rating: 2 },
    position: { lat: 50.19637430672056, lng: 94.43013631433311 },
  },
  {
    name: "dbijs8j",
    values: { insights: 87, mentions: 67, rating: 1 },
    position: { lat: 37.54818214638058, lng: 85.045056459106 },
  },
  {
    name: "ny4mwrg",
    values: { insights: 1, mentions: 16, rating: 3 },
    position: { lat: 10.242191222052762, lng: 15.896368828927475 },
  },
  {
    name: "afi8qsc",
    values: { insights: 9, mentions: 35, rating: 4 },
    position: { lat: 49.894223687385356, lng: 66.9526799144652 },
  },
  {
    name: "mropy2f",
    values: { insights: 25, mentions: 19, rating: 0 },
    position: { lat: 51.043222623883615, lng: 83.3162992556358 },
  },
  {
    name: "r4ba68c",
    values: { insights: 23, mentions: 41, rating: 1 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "r4ba68c",
    values: { insights: 23, mentions: 41, rating: 1 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "r4ba68c",
    values: { insights: 23, mentions: 41, rating: 1 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "r4ba68c",
    values: { insights: 23, mentions: 41, rating: 1 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },

  {
    name: "p6k8qm8",
    values: { insights: 71, mentions: 73, rating: 0 },
    position: { lat: 55.89584608591898, lng: 129.82311018755755 },
  },
  {
    name: "eggt8aw",
    values: { insights: 17, mentions: 80, rating: 1 },
    position: { lat: 54.381607510799995, lng: 92.36275398774842 },
  },
  {
    name: "op7pgc7",
    values: { insights: 93, mentions: 36, rating: 4 },
    position: { lat: 42.05753377409899, lng: 127.58804461179274 },
  },
  {
    name: "hxezd8s",
    values: { insights: 21, mentions: 78, rating: 2 },
    position: { lat: 54.53954390659078, lng: 77.64972865207525 },
  },
  {
    name: "5ozpvq8",
    values: { insights: 45, mentions: 79, rating: 1 },
    position: { lat: 63.96791478190898, lng: 126.75306422199903 },
  },
  {
    name: "t6bsnqg",
    values: { insights: 2, mentions: 88, rating: 4 },
    position: { lat: 47.965723666014604, lng: 44.39571081364699 },
  },
  {
    name: "1w5xwqo",
    values: { insights: 7, mentions: 42, rating: 3 },
    position: { lat: 65.26135820517493, lng: 71.11328911019129 },
  },
  {
    name: "vuy5syz",
    values: { insights: 80, mentions: 12, rating: 5 },
    position: { lat: 44.29680309232951, lng: 107.30520873120906 },
  },
  {
    name: "cpp5lju",
    values: { insights: 43, mentions: 20, rating: 0 },
    position: { lat: 63.17659984964311, lng: 111.22444092768808 },
  },
  {
    name: "w2xminy",
    values: { insights: 26, mentions: 11, rating: 0 },
    position: { lat: 59.658998538243324, lng: 74.53392401974178 },
  },
  {
    name: "iel67xz",
    values: { insights: 43, mentions: 4, rating: 4 },
    position: { lat: 56.41093465415183, lng: 50.01839775236431 },
  },
  {
    name: "qr0cobg",
    values: { insights: 18, mentions: 89, rating: 1 },
    position: { lat: 49.551045805700895, lng: 97.85685394248321 },
  },
  {
    name: "ul2b0x9",
    values: { insights: 77, mentions: 72, rating: 4 },
    position: { lat: 43.06815509187543, lng: 107.51654516937678 },
  },
  {
    name: "o9u1bxs",
    values: { insights: 87, mentions: 5, rating: 4 },
    position: { lat: 44.247513753027754, lng: 38.63942169047942 },
  },
  {
    name: "oikodzb",
    values: { insights: 6, mentions: 85, rating: 4 },
    position: { lat: 47.693032373513034, lng: 56.91468809271204 },
  },
  {
    name: "343sjoz",
    values: { insights: 52, mentions: 56, rating: 3 },
    position: { lat: 49.51430796953268, lng: 77.95581727574927 },
  },
  {
    name: "vln5a97",
    values: { insights: 77, mentions: 54, rating: 2 },
    position: { lat: 63.76140735803824, lng: 129.38058673508306 },
  },
  {
    name: "ywo6ahi",
    values: { insights: 65, mentions: 60, rating: 2 },
    position: { lat: 55.004816422365195, lng: 77.40876336986412 },
  },
  {
    name: "i5lfavr",
    values: { insights: 66, mentions: 45, rating: 2 },
    position: { lat: 63.17923205525014, lng: 112.2725216401681 },
  },
  {
    name: "wboxinw",
    values: { insights: 57, mentions: 21, rating: 4 },
    position: { lat: 49.10827573505961, lng: 41.145503711951534 },
  },
  {
    name: "528zh4m",
    values: { insights: 6, mentions: 35, rating: 1 },
    position: { lat: 55.60608233179961, lng: 144.0607564257043 },
  },
  {
    name: "xho2vgd",
    values: { insights: 57, mentions: 99, rating: 1 },
    position: { lat: 62.52338492211903, lng: 114.10959336072803 },
  },
  {
    name: "pau0j8p",
    values: { insights: 71, mentions: 65, rating: 5 },
    position: { lat: 63.64740560373755, lng: 112.154995291906 },
  },
  {
    name: "6uml5mq",
    values: { insights: 4, mentions: 18, rating: 4 },
    position: { lat: 48.790939521977734, lng: 113.6516506339681 },
  },
  {
    name: "77j9sgf",
    values: { insights: 39, mentions: 47, rating: 4 },
    position: { lat: 43.402556508497206, lng: 99.59939147023825 },
  },
  {
    name: "gohryev",
    values: { insights: 17, mentions: 21, rating: 4 },
    position: { lat: 40.25697674765684, lng: 36.66916661103206 },
  },
  {
    name: "ehaa23t",
    values: { insights: 92, mentions: 77, rating: 1 },
    position: { lat: 41.82909652781421, lng: 39.48624268310409 },
  },
  {
    name: "fbsj1x8",
    values: { insights: 3, mentions: 61, rating: 3 },
    position: { lat: 51.84966869195563, lng: 37.110092002620306 },
  },
  {
    name: "b8p7sko",
    values: { insights: 99, mentions: 33, rating: 5 },
    position: { lat: 65.13576847481073, lng: 121.83654087241507 },
  },
  {
    name: "8hql4v9",
    values: { insights: 44, mentions: 49, rating: 1 },
    position: { lat: 68.85640530302445, lng: 108.99016110635267 },
  },
  {
    name: "gngdved",
    values: { insights: 69, mentions: 37, rating: 0 },
    position: { lat: 53.78963010985347, lng: 121.69940137447068 },
  },
  {
    name: "49mlyhz",
    values: { insights: 42, mentions: 88, rating: 3 },
    position: { lat: 65.68377708187239, lng: 123.79348433265906 },
  },
  {
    name: "j89at2c",
    values: { insights: 92, mentions: 20, rating: 4 },
    position: { lat: 51.32941112189213, lng: 102.48771507277104 },
  },
  {
    name: "3fagzku",
    values: { insights: 94, mentions: 57, rating: 0 },
    position: { lat: 46.13239542563108, lng: 132.40213584033336 },
  },
  {
    name: "x6cc1su",
    values: { insights: 79, mentions: 67, rating: 2 },
    position: { lat: 68.76500459078096, lng: 96.12986709567876 },
  },
  {
    name: "0a2dt9u",
    values: { insights: 42, mentions: 82, rating: 2 },
    position: { lat: 43.50117640154009, lng: 125.86416315975298 },
  },
  {
    name: "h4ymz38",
    values: { insights: 12, mentions: 9, rating: 1 },
    position: { lat: 56.735966036407106, lng: 97.02327122558748 },
  },
  {
    name: "2bd1nv0",
    values: { insights: 70, mentions: 82, rating: 0 },
    position: { lat: 51.18830244056803, lng: 114.92056319851824 },
  },
  {
    name: "ujnfu7c",
    values: { insights: 43, mentions: 45, rating: 4 },
    position: { lat: 56.45514334141182, lng: 55.40225447647927 },
  },
  {
    name: "wbtough",
    values: { insights: 41, mentions: 15, rating: 2 },
    position: { lat: 61.87852040827626, lng: 124.67711247722121 },
  },
  {
    name: "bfpj8zf",
    values: { insights: 30, mentions: 59, rating: 2 },
    position: { lat: 59.06556250608073, lng: 98.50833553640385 },
  },
  {
    name: "2manglj",
    values: { insights: 67, mentions: 82, rating: 1 },
    position: { lat: 61.251547770337346, lng: 86.38221623980198 },
  },
  {
    name: "982v433",
    values: { insights: 70, mentions: 97, rating: 2 },
    position: { lat: 56.77345758388803, lng: 86.62052038913673 },
  },
  {
    name: "n8h2d0v",
    values: { insights: 0, mentions: 79, rating: 1 },
    position: { lat: 44.16007839594511, lng: 44.92238032571537 },
  },
  {
    name: "q7348yd",
    values: { insights: 88, mentions: 100, rating: 0 },
    position: { lat: 60.103727030460796, lng: 88.68296419045467 },
  },
  {
    name: "p5b1lc5",
    values: { insights: 21, mentions: 36, rating: 4 },
    position: { lat: 70.08507699450807, lng: 97.7450075361387 },
  },
  {
    name: "dgnjvd7",
    values: { insights: 79, mentions: 82, rating: 5 },
    position: { lat: 44.985716365729395, lng: 127.32540496711036 },
  },
  {
    name: "imryl8d",
    values: { insights: 96, mentions: 17, rating: 1 },
    position: { lat: 67.6833339577411, lng: 75.48527402113987 },
  },
  {
    name: "j39q8om",
    values: { insights: 8, mentions: 72, rating: 5 },
    position: { lat: 69.15252193227802, lng: 141.51525153394732 },
  },
  {
    name: "qf0ua5i",
    values: { insights: 73, mentions: 67, rating: 0 },
    position: { lat: 41.46218017263039, lng: 131.92344897551177 },
  },
  {
    name: "qjcoisc",
    values: { insights: 82, mentions: 76, rating: 1 },
    position: { lat: 59.74616708679794, lng: 63.022682342881055 },
  },
  {
    name: "shvn6xj",
    values: { insights: 83, mentions: 50, rating: 1 },
    position: { lat: 52.49755007360512, lng: 64.01806149817051 },
  },
  {
    name: "6cw96sk",
    values: { insights: 79, mentions: 96, rating: 5 },
    position: { lat: 68.12612805201398, lng: 60.95001725044753 },
  },
  {
    name: "t5s3pv7",
    values: { insights: 73, mentions: 67, rating: 3 },
    position: { lat: 45.87444229445256, lng: 73.4168919911086 },
  },
  {
    name: "czvl5f5",
    values: { insights: 90, mentions: 12, rating: 4 },
    position: { lat: 68.96956981346639, lng: 140.92534888579348 },
  },
  {
    name: "b4015fn",
    values: { insights: 19, mentions: 87, rating: 3 },
    position: { lat: 46.17402609325386, lng: 67.7975939239996 },
  },
  {
    name: "xhvpdti",
    values: { insights: 53, mentions: 93, rating: 5 },
    position: { lat: 60.39922416029493, lng: 86.44415703225114 },
  },
  {
    name: "nxu6gsc",
    values: { insights: 85, mentions: 14, rating: 3 },
    position: { lat: 41.095788776045715, lng: 75.621975044348 },
  },
  {
    name: "p5effgb",
    values: { insights: 63, mentions: 47, rating: 5 },
    position: { lat: 61.00478223578749, lng: 85.82379280844125 },
  },
  {
    name: "uzsczz6",
    values: { insights: 61, mentions: 45, rating: 5 },
    position: { lat: 43.3831077350613, lng: 105.60594290456986 },
  },
  {
    name: "mwtkhhk",
    values: { insights: 30, mentions: 64, rating: 3 },
    position: { lat: 47.21337096648219, lng: 40.77837930804971 },
  },
  {
    name: "x338mcr",
    values: { insights: 51, mentions: 57, rating: 3 },
    position: { lat: 53.289649760294715, lng: 101.80417817290558 },
  },
  {
    name: "y1qob0b",
    values: { insights: 2, mentions: 79, rating: 5 },
    position: { lat: 49.83031328877887, lng: 50.68017212592403 },
  },
  {
    name: "wxpj2pa",
    values: { insights: 48, mentions: 22, rating: 5 },
    position: { lat: 68.070441441005, lng: 139.20052888485355 },
  },
  {
    name: "tgcdah0",
    values: { insights: 28, mentions: 36, rating: 0 },
    position: { lat: 49.68464109543472, lng: 66.89559026632107 },
  },
  {
    name: "n2gdndd",
    values: { insights: 5, mentions: 28, rating: 5 },
    position: { lat: 60.14302031702573, lng: 43.5224035851661 },
  },
  {
    name: "og5rm2z",
    values: { insights: 19, mentions: 77, rating: 1 },
    position: { lat: 55.57155917440706, lng: 121.40107777652698 },
  },
  {
    name: "95o8wge",
    values: { insights: 97, mentions: 87, rating: 0 },
    position: { lat: 60.84959294793316, lng: 77.896114032358 },
  },
  {
    name: "y5yf40p",
    values: { insights: 16, mentions: 27, rating: 2 },
    position: { lat: 67.44521791883935, lng: 84.5768050659452 },
  },
  {
    name: "xl4spyq",
    values: { insights: 17, mentions: 90, rating: 3 },
    position: { lat: 51.565363406407364, lng: 121.19643263190255 },
  },
  {
    name: "31n7f18",
    values: { insights: 83, mentions: 49, rating: 0 },
    position: { lat: 44.600295220234266, lng: 125.87670163451227 },
  },
  {
    name: "d3s8yb1",
    values: { insights: 26, mentions: 90, rating: 2 },
    position: { lat: 50.22543761584156, lng: 132.78039240377672 },
  },
  {
    name: "5f4zjwb",
    values: { insights: 28, mentions: 7, rating: 2 },
    position: { lat: 48.776480673711625, lng: 44.798600697596555 },
  },
  {
    name: "mw2ld8h",
    values: { insights: 41, mentions: 53, rating: 0 },
    position: { lat: 63.8082605525431, lng: 83.11801786946879 },
  },
  {
    name: "r8sbxcy",
    values: { insights: 5, mentions: 81, rating: 3 },
    position: { lat: 70.08066143483916, lng: 60.660037943211165 },
  },
  {
    name: "wlyp8p0",
    values: { insights: 56, mentions: 44, rating: 4 },
    position: { lat: 56.3750667864835, lng: 129.13808997377876 },
  },
  {
    name: "umd1nvw",
    values: { insights: 25, mentions: 49, rating: 2 },
    position: { lat: 52.395302392608656, lng: 93.01067811799248 },
  },
  {
    name: "qh6cr09",
    values: { insights: 70, mentions: 52, rating: 3 },
    position: { lat: 44.84826939039619, lng: 57.36410825260397 },
  },
  {
    name: "ulpkjzl",
    values: { insights: 100, mentions: 22, rating: 5 },
    position: { lat: 48.374866446605346, lng: 129.87864540463192 },
  },
  {
    name: "8nygbrt",
    values: { insights: 42, mentions: 36, rating: 4 },
    position: { lat: 63.51840294688894, lng: 108.87101362853042 },
  },
  {
    name: "s2t5v12",
    values: { insights: 71, mentions: 13, rating: 2 },
    position: { lat: 68.18119615827928, lng: 79.42837287885133 },
  },
  {
    name: "bpgzna8",
    values: { insights: 78, mentions: 100, rating: 1 },
    position: { lat: 53.160605637139575, lng: 92.98571527174097 },
  },
  {
    name: "44lytii",
    values: { insights: 28, mentions: 29, rating: 2 },
    position: { lat: 66.86722155771037, lng: 94.54370419279884 },
  },
  {
    name: "5ms82fk",
    values: { insights: 59, mentions: 93, rating: 0 },
    position: { lat: 63.16495450860201, lng: 93.75860366074198 },
  },
  {
    name: "qoyg91e",
    values: { insights: 30, mentions: 73, rating: 4 },
    position: { lat: 55.1420979976061, lng: 105.67705165754394 },
  },
  {
    name: "ys2f7t1",
    values: { insights: 50, mentions: 95, rating: 1 },
    position: { lat: 46.564947080513775, lng: 54.30471784112592 },
  },
  {
    name: "46pqwqr",
    values: { insights: 59, mentions: 43, rating: 4 },
    position: { lat: 58.60496491938444, lng: 60.69387055463186 },
  },
  {
    name: "kgnqmzi",
    values: { insights: 83, mentions: 17, rating: 4 },
    position: { lat: 49.71018557441053, lng: 108.08821131981759 },
  },
  {
    name: "i6tr9vs",
    values: { insights: 48, mentions: 52, rating: 0 },
    position: { lat: 69.9530229684009, lng: 111.71199439452778 },
  },
  {
    name: "vjn9jei",
    values: { insights: 31, mentions: 96, rating: 1 },
    position: { lat: 47.96363725478595, lng: 125.88998245854481 },
  },
  {
    name: "aioxbes",
    values: { insights: 58, mentions: 26, rating: 3 },
    position: { lat: 55.4402890525907, lng: 96.18181508150215 },
  },
  {
    name: "3mju8ww",
    values: { insights: 5, mentions: 39, rating: 0 },
    position: { lat: 64.30925323281922, lng: 82.38754603340044 },
  },
  {
    name: "6icpo4d",
    values: { insights: 22, mentions: 37, rating: 2 },
    position: { lat: 48.310310477095065, lng: 82.8466560194044 },
  },
  {
    name: "bv0h9ye",
    values: { insights: 27, mentions: 28, rating: 1 },
    position: { lat: 58.441016957354684, lng: 144.6037655326775 },
  },
  {
    name: "0wcfcvo",
    values: { insights: 63, mentions: 5, rating: 2 },
    position: { lat: 52.761307244230935, lng: 68.3518332087009 },
  },
  {
    name: "2hx1tdg",
    values: { insights: 80, mentions: 96, rating: 1 },
    position: { lat: 67.09181152419157, lng: 110.92392605564221 },
  },
  {
    name: "at9df0s",
    values: { insights: 82, mentions: 77, rating: 3 },
    position: { lat: 48.77311787601177, lng: 71.18890544706258 },
  },
  {
    name: "dgfjyjw",
    values: { insights: 12, mentions: 50, rating: 0 },
    position: { lat: 66.33681362926784, lng: 123.21467052550584 },
  },
  {
    name: "sk2cq1w",
    values: { insights: 46, mentions: 54, rating: 1 },
    position: { lat: 66.65765675035627, lng: 144.62300639284877 },
  },
  {
    name: "mn9psyl",
    values: { insights: 10, mentions: 1, rating: 4 },
    position: { lat: 50.81667990877725, lng: 86.54614275906084 },
  },
  {
    name: "hlnltb2",
    values: { insights: 70, mentions: 31, rating: 0 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "hlnltb2",
    values: { insights: 70, mentions: 31, rating: 0 },
    position: { lng: -79.3831844, lat: 43.653224 },
  },
  {
    name: "hlnltb2",
    values: { insights: 70, mentions: 31, rating: 0 },
    position: { lng: -79.3831843, lat: 43.653226 },
  },
  {
    name: "hlnltb2",
    values: { insights: 70, mentions: 31, rating: 0 },
    position: { lng: -79.3831845, lat: 43.653225 },
  },

  {
    name: "ps2hgqd",
    values: { insights: 69, mentions: 31, rating: 5 },
    position: { lat: 25.830512852421393, lng: 16.693059735470968 },
  },
  {
    name: "wkd4jmy",
    values: { insights: 73, mentions: 88, rating: 0 },
    position: { lat: 24.29256190154605, lng: 19.521482714215637 },
  },
  {
    name: "kfnqyq5",
    values: { insights: 0, mentions: 63, rating: 4 },
    position: { lat: 30.40947632638056, lng: 6.558046446980912 },
  },
  {
    name: "8fssnmm",
    values: { insights: 36, mentions: 60, rating: 2 },
    position: { lat: 9.636340289319428, lng: 34.59851209717621 },
  },
  {
    name: "vxfx9bf",
    values: { insights: 38, mentions: 22, rating: 5 },
    position: { lat: 30.225411446778146, lng: 36.844296448284354 },
  },
  {
    name: "3whdyii",
    values: { insights: 63, mentions: 43, rating: 4 },
    position: { lat: 0.5759268871346832, lng: 28.202738937682117 },
  },
  {
    name: "d2t26db",
    values: { insights: 86, mentions: 32, rating: 0 },
    position: { lat: 15.929059264838147, lng: 12.335099793133377 },
  },
  {
    name: "l2cern6",
    values: { insights: 96, mentions: 58, rating: 3 },
    position: { lat: 17.5903876002697, lng: 15.25022224740857 },
  },
  {
    name: "53ycnpk",
    values: { insights: 80, mentions: 32, rating: 1 },
    position: { lat: 5.647382290372266, lng: 36.13453381218833 },
  },
  {
    name: "9325za1",
    values: { insights: 59, mentions: 57, rating: 3 },
    position: { lat: 2.051415915617966, lng: 11.234306388666004 },
  },
  {
    name: "zzeuo8v",
    values: { insights: 4, mentions: 28, rating: 4 },
    position: { lat: 6.262371936590322, lng: 26.36073187685449 },
  },
  {
    name: "8spovjt",
    values: { insights: 72, mentions: 83, rating: 3 },
    position: { lat: 5.26639681545561, lng: 20.740986606307654 },
  },
  {
    name: "jxdm8op",
    values: { insights: 1, mentions: 54, rating: 5 },
    position: { lat: 13.63333021068437, lng: 8.363388414283328 },
  },
  {
    name: "byffs96",
    values: { insights: 7, mentions: 86, rating: 2 },
    position: { lat: 25.882567745544375, lng: 28.899064077487395 },
  },
  {
    name: "d8ttudn",
    values: { insights: 48, mentions: 65, rating: 4 },
    position: { lat: 27.30299305765738, lng: 34.52035685528791 },
  },
  {
    name: "ip69cfe",
    values: { insights: 21, mentions: 68, rating: 3 },
    position: { lat: 12.913767931383, lng: 7.416843445729366 },
  },
  {
    name: "cbbambx",
    values: { insights: 33, mentions: 77, rating: 1 },
    position: { lat: 5.291728788232295, lng: 6.552278024679881 },
  },
  {
    name: "gzh23u4",
    values: { insights: 35, mentions: 65, rating: 4 },
    position: { lat: 24.240781955538964, lng: 25.765617592574273 },
  },
  {
    name: "9kwe6mh",
    values: { insights: 100, mentions: 79, rating: 1 },
    position: { lat: 26.95581374418147, lng: 12.023146217972771 },
  },
  {
    name: "3o99gr6",
    values: { insights: 29, mentions: 89, rating: 3 },
    position: { lat: 25.02173001935753, lng: 8.616377860381093 },
  },
  {
    name: "fcotzlb",
    values: { insights: 36, mentions: 34, rating: 4 },
    position: { lat: 13.842987894861626, lng: 35.39632431063148 },
  },
  {
    name: "orpj9m0",
    values: { insights: 1, mentions: 18, rating: 5 },
    position: { lat: 25.97926687029123, lng: 7.454958713473774 },
  },
  {
    name: "zi28zka",
    values: { insights: 78, mentions: 11, rating: 2 },
    position: { lat: 28.872806186256764, lng: 7.956074372543007 },
  },
  {
    name: "jibcnh3",
    values: { insights: 16, mentions: 6, rating: 4 },
    position: { lat: 1.8805544747423295, lng: 3.542827561644719 },
  },
  {
    name: "l4p3n7f",
    values: { insights: 20, mentions: 53, rating: 4 },
    position: { lat: 5.739087206893648, lng: 7.341479636323713 },
  },
  {
    name: "4shhz3z",
    values: { insights: 47, mentions: 76, rating: 5 },
    position: { lat: 29.795652582813723, lng: 27.808960344647033 },
  },
  {
    name: "ep7nsjr",
    values: { insights: 73, mentions: 1, rating: 2 },
    position: { lat: 16.28213635383365, lng: 35.25045923432553 },
  },
  {
    name: "tu9v8t1",
    values: { insights: 34, mentions: 7, rating: 0 },
    position: { lat: 10.145053995965931, lng: 37.32678220865412 },
  },
  {
    name: "8r9xr2x",
    values: { insights: 48, mentions: 32, rating: 0 },
    position: { lat: 27.607031835309712, lng: 26.32871781941183 },
  },
  {
    name: "9qrz5d7",
    values: { insights: 3, mentions: 62, rating: 4 },
    position: { lat: 24.25956464883675, lng: 30.800589535467992 },
  },
  {
    name: "k03chb9",
    values: { insights: 88, mentions: 9, rating: 3 },
    position: { lat: 13.128025442186818, lng: 27.8516814026488 },
  },
  {
    name: "4wof03n",
    values: { insights: 90, mentions: 51, rating: 5 },
    position: { lat: 22.435875633089385, lng: 29.83166169047785 },
  },
  {
    name: "o7u1x6z",
    values: { insights: 9, mentions: 99, rating: 3 },
    position: { lat: 27.067863221821604, lng: 13.814783414486929 },
  },
  {
    name: "gmfji6n",
    values: { insights: 83, mentions: 25, rating: 2 },
    position: { lat: 5.610568241535788, lng: 39.097598435596915 },
  },
  {
    name: "33v19is",
    values: { insights: 3, mentions: 71, rating: 5 },
    position: { lat: 0.17349109152733666, lng: 4.2303941514956644 },
  },
  {
    name: "fgy2zuk",
    values: { insights: 67, mentions: 41, rating: 1 },
    position: { lat: 21.81992100337177, lng: 18.556265475403066 },
  },
  {
    name: "1708f60",
    values: { insights: 12, mentions: 79, rating: 1 },
    position: { lat: 16.28160194511668, lng: 38.883453365601355 },
  },
  {
    name: "5tzt83f",
    values: { insights: 88, mentions: 88, rating: 4 },
    position: { lat: 28.239111443865248, lng: 38.84975740557343 },
  },
  {
    name: "2jhm4zj",
    values: { insights: 73, mentions: 7, rating: 0 },
    position: { lat: 8.73756671892315, lng: 16.93509215744119 },
  },
  {
    name: "pai282g",
    values: { insights: 80, mentions: 100, rating: 3 },
    position: { lat: 5.637049348519607, lng: 33.50297663501949 },
  },
  {
    name: "9ub0na4",
    values: { insights: 18, mentions: 71, rating: 0 },
    position: { lat: 29.58040664197608, lng: 37.98136319080086 },
  },
  {
    name: "axk6c0o",
    values: { insights: 71, mentions: 30, rating: 5 },
    position: { lat: 1.7046631528532914, lng: 34.065695030220084 },
  },
  {
    name: "j8dl51i",
    values: { insights: 98, mentions: 13, rating: 0 },
    position: { lat: 26.244271049533474, lng: 33.72627308466542 },
  },
  {
    name: "vng3cfj",
    values: { insights: 29, mentions: 43, rating: 0 },
    position: { lat: 20.471731519742203, lng: 1.0606990610075595 },
  },
  {
    name: "uowzzbr",
    values: { insights: 3, mentions: 3, rating: 4 },
    position: { lat: 24.598445266162162, lng: 28.26503153397664 },
  },
  {
    name: "vpojcl1",
    values: { insights: 24, mentions: 31, rating: 5 },
    position: { lat: 12.2065578857371, lng: 13.066076172016032 },
  },
  {
    name: "2orj9vm",
    values: { insights: 60, mentions: 45, rating: 4 },
    position: { lat: 18.003877509747614, lng: 36.03559391801595 },
  },
  {
    name: "dhf8e5c",
    values: { insights: 73, mentions: 24, rating: 1 },
    position: { lat: 12.829549168194806, lng: 33.88423415231518 },
  },
  {
    name: "6utbh86",
    values: { insights: 81, mentions: 8, rating: 3 },
    position: { lat: 27.215886113540844, lng: 29.924406012758986 },
  },
  {
    name: "ukua16c",
    values: { insights: 88, mentions: 70, rating: 1 },
    position: { lat: 14.048093098735198, lng: 35.091055087232554 },
  },
  {
    name: "yhanb90",
    values: { insights: 55, mentions: 21, rating: 1 },
    position: { lat: 13.869983843393268, lng: 34.09329654376779 },
  },
  {
    name: "kuw6g4w",
    values: { insights: 93, mentions: 27, rating: 1 },
    position: { lat: 5.226565010348349, lng: 17.675547753558824 },
  },
  {
    name: "6aze2vj",
    values: { insights: 54, mentions: 82, rating: 5 },
    position: { lat: 13.197497550475692, lng: 28.29172206369158 },
  },
  {
    name: "xkvnp0i",
    values: { insights: 97, mentions: 48, rating: 4 },
    position: { lat: 21.653584841705413, lng: 37.31661262070605 },
  },
  {
    name: "gorx7fo",
    values: { insights: 9, mentions: 88, rating: 0 },
    position: { lat: 0.4482242581603073, lng: 5.1570950075359345 },
  },
  {
    name: "cj9kxb7",
    values: { insights: 3, mentions: 38, rating: 1 },
    position: { lat: 1.5813956622209369, lng: 16.801105930765186 },
  },
  {
    name: "lhuzz1c",
    values: { insights: 98, mentions: 97, rating: 4 },
    position: { lat: 18.94564498597256, lng: 21.626400287366927 },
  },
  {
    name: "ps3z674",
    values: { insights: 87, mentions: 77, rating: 4 },
    position: { lat: 10.627539064695638, lng: 11.485213570802077 },
  },
  {
    name: "fpr5ofq",
    values: { insights: 46, mentions: 73, rating: 3 },
    position: { lat: 27.958786493236413, lng: 27.675051434631328 },
  },
  {
    name: "4bxkl2k",
    values: { insights: 9, mentions: 66, rating: 3 },
    position: { lat: 6.3737254942688475, lng: 12.010483357351047 },
  },
  {
    name: "3h4odqt",
    values: { insights: 7, mentions: 4, rating: 0 },
    position: { lat: 17.043041637845686, lng: 18.377456354082156 },
  },
  {
    name: "75iul3i",
    values: { insights: 79, mentions: 48, rating: 5 },
    position: { lat: 6.097851128355282, lng: 1.2715382721750323 },
  },
  {
    name: "72l7y4h",
    values: { insights: 33, mentions: 71, rating: 3 },
    position: { lat: 18.445813274595103, lng: 35.58611994862342 },
  },
  {
    name: "nxfx3fx",
    values: { insights: 98, mentions: 48, rating: 2 },
    position: { lat: 0.20969605393086854, lng: 36.3936023788124 },
  },
  {
    name: "gmgwive",
    values: { insights: 1, mentions: 66, rating: 4 },
    position: { lat: 6.0344033840537294, lng: 34.74115525743705 },
  },
  {
    name: "h7w1tu6",
    values: { insights: 63, mentions: 3, rating: 2 },
    position: { lat: 2.147735991164729, lng: 8.538767493328132 },
  },
  {
    name: "qehrvz4",
    values: { insights: 0, mentions: 39, rating: 5 },
    position: { lat: 24.55423758714196, lng: 27.305887271095884 },
  },
  {
    name: "dkcbf9n",
    values: { insights: 72, mentions: 53, rating: 3 },
    position: { lat: 1.5949679826049694, lng: 39.00642569389839 },
  },
  {
    name: "8ktcrfe",
    values: { insights: 94, mentions: 96, rating: 5 },
    position: { lat: 12.000932721689425, lng: 31.26508377107724 },
  },
  {
    name: "yxbgivf",
    values: { insights: 32, mentions: 50, rating: 2 },
    position: { lat: 15.675047639923427, lng: 33.29447331342686 },
  },
  {
    name: "b6ydtwe",
    values: { insights: 79, mentions: 36, rating: 5 },
    position: { lat: 4.969309450803209, lng: 34.26733075877209 },
  },
  {
    name: "b6hqolf",
    values: { insights: 3, mentions: 60, rating: 3 },
    position: { lat: 16.34460710073904, lng: 12.441875356668763 },
  },
  {
    name: "l7n73pz",
    values: { insights: 1, mentions: 67, rating: 2 },
    position: { lat: 19.746454846986676, lng: 20.598746617575934 },
  },
  {
    name: "8zo8cbd",
    values: { insights: 94, mentions: 28, rating: 4 },
    position: { lat: 16.73714064953088, lng: 8.386044909364836 },
  },
  {
    name: "a61mg3o",
    values: { insights: 73, mentions: 91, rating: 5 },
    position: { lat: 3.5852979316004268, lng: 0.3995932865475993 },
  },
  {
    name: "ndzyipd",
    values: { insights: 85, mentions: 19, rating: 0 },
    position: { lat: 6.672766197490165, lng: 6.017651758010558 },
  },
  {
    name: "g1ynpjf",
    values: { insights: 37, mentions: 83, rating: 5 },
    position: { lat: 17.138204112339025, lng: 38.750918257385806 },
  },
  {
    name: "a1dfv8m",
    values: { insights: 1, mentions: 35, rating: 3 },
    position: { lat: 22.066712174946133, lng: 10.508796667778233 },
  },
  {
    name: "6mpoatg",
    values: { insights: 37, mentions: 96, rating: 4 },
    position: { lat: 28.12085167972702, lng: 34.53788699991847 },
  },
  {
    name: "n551ca5",
    values: { insights: 42, mentions: 44, rating: 2 },
    position: { lat: 14.460781797403273, lng: 32.72778487441109 },
  },
  {
    name: "qcby7vk",
    values: { insights: 88, mentions: 49, rating: 2 },
    position: { lat: 9.709711246440206, lng: 11.668483753742098 },
  },
  {
    name: "bukvt13",
    values: { insights: 97, mentions: 22, rating: 2 },
    position: { lat: 25.253335265055895, lng: 16.0558785370987 },
  },
  {
    name: "v2iafr5",
    values: { insights: 59, mentions: 80, rating: 4 },
    position: { lat: 2.6385257007686476, lng: 9.717829681126489 },
  },
  {
    name: "hetv4bj",
    values: { insights: 65, mentions: 100, rating: 0 },
    position: { lat: 14.946263832550859, lng: 16.31039177742389 },
  },
  {
    name: "s718h6y",
    values: { insights: 79, mentions: 5, rating: 0 },
    position: { lat: 17.967991885450086, lng: 29.893718669163547 },
  },
  {
    name: "4utzrma",
    values: { insights: 82, mentions: 44, rating: 2 },
    position: { lat: 28.760643799529802, lng: 8.18835555517432 },
  },
  {
    name: "xfq5jwr",
    values: { insights: 22, mentions: 85, rating: 2 },
    position: { lat: 2.051487917124148, lng: 19.09211203315366 },
  },
  {
    name: "s0u3kuc",
    values: { insights: 90, mentions: 28, rating: 5 },
    position: { lat: 8.467874029412268, lng: 0.7830654004679438 },
  },
  {
    name: "ekjb5q5",
    values: { insights: 9, mentions: 12, rating: 1 },
    position: { lat: 17.063086477013826, lng: 13.665642374551021 },
  },
  {
    name: "24f3h0g",
    values: { insights: 92, mentions: 16, rating: 4 },
    position: { lat: 9.968791252516223, lng: 14.18805982843633 },
  },
  {
    name: "twhgaux",
    values: { insights: 14, mentions: 68, rating: 3 },
    position: { lat: 1.0188624868811578, lng: 20.406852331105423 },
  },
  {
    name: "x3msiq2",
    values: { insights: 62, mentions: 97, rating: 3 },
    position: { lat: 11.29021058287152, lng: 17.24287314421817 },
  },
  {
    name: "v0qkco4",
    values: { insights: 69, mentions: 89, rating: 0 },
    position: { lat: 2.1956475392057255, lng: 36.555628114375686 },
  },
  {
    name: "qm5ttsu",
    values: { insights: 87, mentions: 94, rating: 0 },
    position: { lat: 13.123933928072077, lng: 27.584742424627837 },
  },
  {
    name: "zl3in7l",
    values: { insights: 76, mentions: 66, rating: 5 },
    position: { lat: 17.68917870495063, lng: 37.6242899801682 },
  },
  {
    name: "vpb6kco",
    values: { insights: 39, mentions: 46, rating: 3 },
    position: { lat: 9.404283842605599, lng: 28.934719510065953 },
  },
  {
    name: "4inpbx4",
    values: { insights: 14, mentions: 40, rating: 4 },
    position: { lat: 4.998320068513083, lng: 35.26445919480423 },
  },
  {
    name: "owft1mm",
    values: { insights: 85, mentions: 29, rating: 5 },
    position: { lat: 6.532546403272897, lng: 8.408951400037559 },
  },
  {
    name: "s69cj48",
    values: { insights: 10, mentions: 45, rating: 2 },
    position: { lat: 23.365629494385864, lng: 6.375034827577961 },
  },
  {
    name: "fdso78x",
    values: { insights: 0, mentions: 94, rating: 4 },
    position: { lat: 17.427376961962057, lng: 26.84456600081557 },
  },
  {
    name: "npajn9s",
    values: { insights: 61, mentions: 95, rating: 0 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "npajn9s",
    values: { insights: 61, mentions: 95, rating: 0 },
    position: { lng: -79.3831844, lat: 43.653224 },
  },
  {
    name: "npajn9s",
    values: { insights: 61, mentions: 95, rating: 0 },
    position: { lng: -79.3831843, lat: 43.653226 },
  },
  {
    name: "npajn9s",
    values: { insights: 61, mentions: 95, rating: 0 },
    position: { lng: -79.3831845, lat: 43.653225 },
  },

  {
    name: "ck944kv",
    values: { insights: 58, mentions: 65, rating: 0 },
    position: { lat: 49.789456196283, lng: -84.79752022892043 },
  },
  {
    name: "6vih800",
    values: { insights: 16, mentions: 31, rating: 1 },
    position: { lat: 40.13286922549616, lng: -109.36087997605875 },
  },
  {
    name: "utyitec",
    values: { insights: 88, mentions: 21, rating: 4 },
    position: { lat: 36.75601550765728, lng: -87.60388709674217 },
  },
  {
    name: "inbvlbj",
    values: { insights: 29, mentions: 40, rating: 2 },
    position: { lat: 55.95700659255914, lng: -114.87682103015737 },
  },
  {
    name: "xil94ir",
    values: { insights: 47, mentions: 86, rating: 2 },
    position: { lat: 47.476164746054394, lng: -89.35892486019836 },
  },
  {
    name: "5kbxpvi",
    values: { insights: 18, mentions: 93, rating: 5 },
    position: { lat: 50.20298411581562, lng: -101.7826650947503 },
  },
  {
    name: "ttn8zhf",
    values: { insights: 43, mentions: 11, rating: 1 },
    position: { lat: 45.166928700986404, lng: -88.28696945029549 },
  },
  {
    name: "og0n5ze",
    values: { insights: 42, mentions: 52, rating: 3 },
    position: { lat: 40.449653554901744, lng: -112.33923967222778 },
  },
  {
    name: "zxfbygy",
    values: { insights: 33, mentions: 3, rating: 0 },
    position: { lat: 50.2599770475984, lng: -114.37417211746049 },
  },
  {
    name: "v0lnfkk",
    values: { insights: 88, mentions: 76, rating: 0 },
    position: { lat: 50.04723186956415, lng: -96.52237848628972 },
  },
  {
    name: "p1wmg91",
    values: { insights: 97, mentions: 65, rating: 0 },
    position: { lat: 53.77383559069301, lng: -89.05722587985355 },
  },
  {
    name: "v1hm8lh",
    values: { insights: 58, mentions: 65, rating: 3 },
    position: { lat: 34.31198326521299, lng: -86.76094305614043 },
  },
  {
    name: "xpp7ivr",
    values: { insights: 68, mentions: 48, rating: 5 },
    position: { lat: 36.53323392934823, lng: -116.24108417577561 },
  },
  {
    name: "c2tyi3n",
    values: { insights: 48, mentions: 43, rating: 3 },
    position: { lat: 33.08419578539769, lng: -118.44942320474848 },
  },
  {
    name: "euf1vae",
    values: { insights: 54, mentions: 13, rating: 0 },
    position: { lat: 46.42461838452104, lng: -99.72810696453513 },
  },
  {
    name: "lbvtrgk",
    values: { insights: 72, mentions: 64, rating: 3 },
    position: { lat: 49.68023857325717, lng: -96.52572277476753 },
  },
  {
    name: "pia7zit",
    values: { insights: 35, mentions: 72, rating: 4 },
    position: { lat: 32.451070362636834, lng: -100.65575762401735 },
  },
  {
    name: "v95i07y",
    values: { insights: 77, mentions: 17, rating: 1 },
    position: { lat: 33.405986803658195, lng: -83.55450214019383 },
  },
  {
    name: "8vx977f",
    values: { insights: 79, mentions: 67, rating: 4 },
    position: { lat: 40.196210169993506, lng: -117.55996911167823 },
  },
  {
    name: "808wter",
    values: { insights: 19, mentions: 60, rating: 4 },
    position: { lat: 58.24058462822066, lng: -108.91277106074321 },
  },
  {
    name: "hzrmmiy",
    values: { insights: 13, mentions: 12, rating: 2 },
    position: { lat: 58.42601094730688, lng: -103.26700273556796 },
  },
  {
    name: "t3oe2ua",
    values: { insights: 58, mentions: 94, rating: 2 },
    position: { lat: 43.34983202297327, lng: -81.6876703938743 },
  },
  {
    name: "0rtid55",
    values: { insights: 38, mentions: 74, rating: 1 },
    position: { lat: 55.75941948920702, lng: -100.68676998894512 },
  },
  {
    name: "tc664is",
    values: { insights: 10, mentions: 18, rating: 2 },
    position: { lat: 34.015717994119896, lng: -96.18293340034516 },
  },
  {
    name: "csnvjie",
    values: { insights: 93, mentions: 46, rating: 4 },
    position: { lat: 42.442166747530905, lng: -91.059560335397 },
  },
  {
    name: "67vkg0z",
    values: { insights: 9, mentions: 33, rating: 3 },
    position: { lat: 49.56269730517595, lng: -92.22347476153135 },
  },
  {
    name: "0xwmkrm",
    values: { insights: 54, mentions: 37, rating: 4 },
    position: { lat: 60.417894716860204, lng: -98.61775028905582 },
  },
  {
    name: "989vxr6",
    values: { insights: 18, mentions: 65, rating: 5 },
    position: { lat: 49.165318981120066, lng: -94.87595106346589 },
  },
  {
    name: "j0euxir",
    values: { insights: 19, mentions: 97, rating: 0 },
    position: { lat: 30.807529556698118, lng: -84.2940430923086 },
  },
  {
    name: "fichgl6",
    values: { insights: 96, mentions: 91, rating: 3 },
    position: { lat: 55.57580919100346, lng: -108.65026463056871 },
  },
  {
    name: "1fqaxju",
    values: { insights: 35, mentions: 80, rating: 3 },
    position: { lat: 46.27157713909957, lng: -118.80777460211652 },
  },
  {
    name: "99fagt0",
    values: { insights: 38, mentions: 67, rating: 2 },
    position: { lat: 47.32211656280128, lng: -107.89347792575789 },
  },
  {
    name: "qtp82hu",
    values: { insights: 96, mentions: 92, rating: 2 },
    position: { lat: 45.58116752466738, lng: -114.558907426085 },
  },
  {
    name: "pyjxvsm",
    values: { insights: 54, mentions: 84, rating: 0 },
    position: { lat: 55.48694604396, lng: -86.94539526282347 },
  },
  {
    name: "v0gjj4y",
    values: { insights: 79, mentions: 55, rating: 4 },
    position: { lat: 47.26518778795583, lng: -104.73302745433 },
  },
  {
    name: "s5awth6",
    values: { insights: 26, mentions: 60, rating: 2 },
    position: { lat: 37.64990458158326, lng: -104.85025255661168 },
  },
  {
    name: "2f0emj4",
    values: { insights: 3, mentions: 15, rating: 3 },
    position: { lat: 56.99277724119495, lng: -111.71255934114104 },
  },
  {
    name: "24ih7l9",
    values: { insights: 3, mentions: 75, rating: 0 },
    position: { lat: 35.93701767132999, lng: -102.4871097738112 },
  },
  {
    name: "1vwxj6j",
    values: { insights: 97, mentions: 63, rating: 5 },
    position: { lat: 34.64021031318532, lng: -114.97148082209786 },
  },
  {
    name: "h2c8p4h",
    values: { insights: 59, mentions: 100, rating: 0 },
    position: { lat: 31.948927909213907, lng: -115.83670563022449 },
  },
  {
    name: "lzl909y",
    values: { insights: 38, mentions: 84, rating: 0 },
    position: { lat: 38.053170805814176, lng: -94.93287112657825 },
  },
  {
    name: "psz167e",
    values: { insights: 63, mentions: 94, rating: 2 },
    position: { lat: 42.506798847578494, lng: -119.80903580729442 },
  },
  {
    name: "89c8p1h",
    values: { insights: 55, mentions: 23, rating: 5 },
    position: { lat: 56.67773422536035, lng: -105.32273562533555 },
  },
  {
    name: "23fmz35",
    values: { insights: 44, mentions: 100, rating: 0 },
    position: { lat: 37.52853606419195, lng: -92.79320374044948 },
  },
  {
    name: "mk53ywe",
    values: { insights: 19, mentions: 76, rating: 2 },
    position: { lat: 36.6435209985107, lng: -102.1459857044614 },
  },
  {
    name: "65k4cf8",
    values: { insights: 55, mentions: 75, rating: 3 },
    position: { lat: 52.00813985640542, lng: -91.29947871538397 },
  },
  {
    name: "ptgydm9",
    values: { insights: 78, mentions: 3, rating: 5 },
    position: { lat: 38.69934748203343, lng: -108.43414864784519 },
  },
  {
    name: "fb1nytp",
    values: { insights: 31, mentions: 60, rating: 2 },
    position: { lat: 51.23830816330707, lng: -88.73886062856633 },
  },
  {
    name: "v4295oy",
    values: { insights: 91, mentions: 96, rating: 2 },
    position: { lat: 31.97077872338521, lng: -86.37111375881318 },
  },
  {
    name: "8jyfqtx",
    values: { insights: 42, mentions: 17, rating: 2 },
    position: { lat: 38.481069003668296, lng: -86.38828321363685 },
  },
  {
    name: "irt1v2b",
    values: { insights: 85, mentions: 70, rating: 2 },
    position: { lat: 31.360074167119862, lng: -89.7483694808519 },
  },
  {
    name: "r0czxpf",
    values: { insights: 38, mentions: 99, rating: 0 },
    position: { lat: 52.04488550214539, lng: -80.6575948432163 },
  },
  {
    name: "7k4x2zc",
    values: { insights: 26, mentions: 88, rating: 3 },
    position: { lat: 54.338958232313246, lng: -112.05549537129832 },
  },
  {
    name: "9x4krln",
    values: { insights: 56, mentions: 3, rating: 2 },
    position: { lat: 51.8202625743681, lng: -108.30422089538452 },
  },
  {
    name: "pryja6k",
    values: { insights: 6, mentions: 92, rating: 5 },
    position: { lat: 34.21369473584784, lng: -88.39486115221844 },
  },
  {
    name: "olq4cgy",
    values: { insights: 54, mentions: 50, rating: 3 },
    position: { lat: 54.761884526536626, lng: -99.83766653642645 },
  },
  {
    name: "ozzbbrt",
    values: { insights: 27, mentions: 32, rating: 5 },
    position: { lat: 52.281581118005704, lng: -114.1287933050469 },
  },
  {
    name: "guk9eue",
    values: { insights: 98, mentions: 1, rating: 3 },
    position: { lat: 50.02781326577487, lng: -99.38812404218703 },
  },
  {
    name: "ferus7h",
    values: { insights: 30, mentions: 56, rating: 3 },
    position: { lat: 32.439572403822545, lng: -86.2667211329499 },
  },
  {
    name: "o3gnvkj",
    values: { insights: 56, mentions: 84, rating: 1 },
    position: { lat: 34.54039205382358, lng: -111.06407076928849 },
  },
  {
    name: "6xtfsvd",
    values: { insights: 49, mentions: 37, rating: 1 },
    position: { lat: 39.70834745031626, lng: -98.57746154631606 },
  },
  {
    name: "8w4obnh",
    values: { insights: 49, mentions: 99, rating: 0 },
    position: { lat: 47.931941871727034, lng: -114.28231879624634 },
  },
  {
    name: "jmgzwyd",
    values: { insights: 46, mentions: 70, rating: 5 },
    position: { lat: 33.630110609885826, lng: -109.29999938311951 },
  },
  {
    name: "3334fmx",
    values: { insights: 59, mentions: 13, rating: 3 },
    position: { lat: 47.57936920041193, lng: -100.59482349115947 },
  },
  {
    name: "afyja30",
    values: { insights: 62, mentions: 16, rating: 3 },
    position: { lat: 58.33152428959721, lng: -94.7232175846084 },
  },
  {
    name: "504ze08",
    values: { insights: 59, mentions: 63, rating: 4 },
    position: { lat: 60.20024660414333, lng: -112.20440154451681 },
  },
  {
    name: "nen879r",
    values: { insights: 96, mentions: 40, rating: 1 },
    position: { lat: 54.66259479945614, lng: -119.83783770993915 },
  },
  {
    name: "3wlv3he",
    values: { insights: 2, mentions: 57, rating: 1 },
    position: { lat: 45.80430924568589, lng: -90.32796378233554 },
  },
  {
    name: "t5f9d4x",
    values: { insights: 100, mentions: 8, rating: 3 },
    position: { lat: 60.06318965839107, lng: -118.9800817849059 },
  },
  {
    name: "0cilouo",
    values: { insights: 98, mentions: 95, rating: 2 },
    position: { lat: 33.6586679174512, lng: -119.94618703393772 },
  },
  {
    name: "ys3otdz",
    values: { insights: 62, mentions: 52, rating: 2 },
    position: { lat: 54.36517464020666, lng: -96.16774465229935 },
  },
  {
    name: "dyqkwri",
    values: { insights: 90, mentions: 98, rating: 3 },
    position: { lat: 59.03927509580934, lng: -119.52084810634774 },
  },
  {
    name: "djr22ne",
    values: { insights: 21, mentions: 11, rating: 1 },
    position: { lat: 36.77779221750464, lng: -111.47305850057427 },
  },
  {
    name: "bzaspq6",
    values: { insights: 22, mentions: 25, rating: 4 },
    position: { lat: 49.208992392932984, lng: -82.95307206222344 },
  },
  {
    name: "33zqbtn",
    values: { insights: 66, mentions: 40, rating: 5 },
    position: { lat: 34.862131273712954, lng: -100.33610045693517 },
  },
  {
    name: "z8f886d",
    values: { insights: 31, mentions: 1, rating: 3 },
    position: { lat: 39.402051704263954, lng: -97.79289579591087 },
  },
  {
    name: "iysox2e",
    values: { insights: 55, mentions: 19, rating: 4 },
    position: { lat: 47.007336790292385, lng: -107.80815579972325 },
  },
  {
    name: "envv5mn",
    values: { insights: 66, mentions: 32, rating: 3 },
    position: { lat: 50.188116212579665, lng: -113.04201529606372 },
  },
  {
    name: "3tcy3u4",
    values: { insights: 18, mentions: 24, rating: 1 },
    position: { lat: 60.1141670265838, lng: -118.79169552173451 },
  },
  {
    name: "a7as167",
    values: { insights: 49, mentions: 84, rating: 2 },
    position: { lat: 52.02120374118253, lng: -111.42650663169289 },
  },
  {
    name: "isnbhfo",
    values: { insights: 36, mentions: 79, rating: 5 },
    position: { lat: 49.089944219142325, lng: -82.58488235891727 },
  },
  {
    name: "4tl3ddq",
    values: { insights: 59, mentions: 20, rating: 1 },
    position: { lat: 39.6385491520372, lng: -98.00925458712084 },
  },
  {
    name: "ixoh3o1",
    values: { insights: 4, mentions: 63, rating: 3 },
    position: { lat: 56.5315602862703, lng: -118.66146328812351 },
  },
  {
    name: "kewga58",
    values: { insights: 12, mentions: 43, rating: 1 },
    position: { lat: 43.801668350582844, lng: -96.51454047952609 },
  },
  {
    name: "3774s0x",
    values: { insights: 49, mentions: 87, rating: 4 },
    position: { lat: 53.24680785504016, lng: -116.61875538651127 },
  },
  {
    name: "7hp67du",
    values: { insights: 26, mentions: 33, rating: 0 },
    position: { lat: 58.18325035308488, lng: -93.33943154204698 },
  },
  {
    name: "m8hk1dm",
    values: { insights: 49, mentions: 66, rating: 1 },
    position: { lat: 50.98604288619174, lng: -118.9569401082758 },
  },
  {
    name: "d1ibvlp",
    values: { insights: 57, mentions: 49, rating: 1 },
    position: { lat: 44.632737052295376, lng: -102.1044192443139 },
  },
  {
    name: "3329ytu",
    values: { insights: 42, mentions: 62, rating: 5 },
    position: { lat: 42.90457570685046, lng: -85.08703053653369 },
  },
  {
    name: "5kgoxts",
    values: { insights: 41, mentions: 100, rating: 3 },
    position: { lat: 58.156758649454986, lng: -119.48885208026068 },
  },
  {
    name: "nznphl6",
    values: { insights: 18, mentions: 89, rating: 1 },
    position: { lat: 42.29369513057227, lng: -95.32061699994927 },
  },
  {
    name: "9w0uk1z",
    values: { insights: 2, mentions: 89, rating: 1 },
    position: { lat: 49.45233423538815, lng: -106.64285412423506 },
  },
  {
    name: "hweaoyg",
    values: { insights: 24, mentions: 59, rating: 5 },
    position: { lat: 33.02966333083825, lng: -83.48090161521317 },
  },
  {
    name: "0y8rg32",
    values: { insights: 94, mentions: 21, rating: 0 },
    position: { lat: 35.03978176740467, lng: -111.99982601012344 },
  },
  {
    name: "gjrpjdw",
    values: { insights: 81, mentions: 58, rating: 0 },
    position: { lat: 31.626227105145386, lng: -83.36943821415281 },
  },
  {
    name: "rjr26ti",
    values: { insights: 16, mentions: 19, rating: 4 },
    position: { lat: 38.3249797003582, lng: -95.46746035667121 },
  },
  {
    name: "u2nzkoi",
    values: { insights: 40, mentions: 37, rating: 1 },
    position: { lat: 49.022372613267976, lng: -88.13089806151905 },
  },
  {
    name: "zqwd12p",
    values: { insights: 57, mentions: 66, rating: 1 },
    position: { lat: 46.639025561018315, lng: -87.26123759899582 },
  },
  {
    name: "fqjas6m",
    values: { insights: 53, mentions: 43, rating: 5 },
    position: { lat: 46.96547548537362, lng: -117.88831977364553 },
  },
  {
    name: "at0xetv",
    values: { insights: 62, mentions: 52, rating: 5 },
    position: { lat: 45.91396636174362, lng: -108.80766815977668 },
  },
  {
    name: "q0b3nwq",
    values: { insights: 52, mentions: 50, rating: 2 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "q0b3nwq",
    values: { insights: 52, mentions: 50, rating: 2 },
    position: { lng: -79.3831844, lat: 43.653224 },
  },
  {
    name: "q0b3nwq",
    values: { insights: 52, mentions: 50, rating: 2 },
    position: { lng: -79.3831843, lat: 43.653226 },
  },
  {
    name: "q0b3nwq",
    values: { insights: 52, mentions: 50, rating: 2 },
    position: { lng: -79.3831845, lat: 43.653225 },
  },

  {
    name: "6umk7r0",
    values: { insights: 83, mentions: 65, rating: 0 },
    position: { lat: -9.228060340494949, lng: -72.68026934288704 },
  },
  {
    name: "663dyig",
    values: { insights: 73, mentions: 48, rating: 4 },
    position: { lat: -7.074108365273052, lng: -51.88579309682871 },
  },
  {
    name: "rix7tck",
    values: { insights: 80, mentions: 63, rating: 4 },
    position: { lat: -17.87495412278644, lng: -46.08323245934713 },
  },
  {
    name: "l3ys9nm",
    values: { insights: 53, mentions: 25, rating: 2 },
    position: { lat: -2.041192395770665, lng: -74.56858806201086 },
  },
  {
    name: "ud5rjvw",
    values: { insights: 28, mentions: 51, rating: 5 },
    position: { lat: -18.417031733860167, lng: -70.31240829655918 },
  },
  {
    name: "qlowh4q",
    values: { insights: 44, mentions: 24, rating: 4 },
    position: { lat: -15.320217089678366, lng: -65.54178006293877 },
  },
  {
    name: "cl4nuad",
    values: { insights: 0, mentions: 57, rating: 2 },
    position: { lat: -10.440048210353812, lng: -62.72728921964935 },
  },
  {
    name: "8ccbt97",
    values: { insights: 68, mentions: 20, rating: 5 },
    position: { lat: -17.36818622531631, lng: -51.61634321831811 },
  },
  {
    name: "cwmy5ze",
    values: { insights: 42, mentions: 73, rating: 1 },
    position: { lat: -29.60749206242303, lng: -50.1222409740827 },
  },
  {
    name: "q4gml3x",
    values: { insights: 71, mentions: 2, rating: 5 },
    position: { lat: -10.392465793614235, lng: -72.83729420948428 },
  },
  {
    name: "bxnq7za",
    values: { insights: 4, mentions: 40, rating: 0 },
    position: { lat: -11.0339745466222, lng: -62.34285966020486 },
  },
  {
    name: "a255p2f",
    values: { insights: 23, mentions: 51, rating: 0 },
    position: { lat: -28.524556571827652, lng: -67.12489739581551 },
  },
  {
    name: "y85yfs0",
    values: { insights: 94, mentions: 40, rating: 3 },
    position: { lat: -13.846030631842599, lng: -74.59018329862212 },
  },
  {
    name: "81z10cw",
    values: { insights: 36, mentions: 47, rating: 3 },
    position: { lat: -19.452281625968837, lng: -49.99663320279045 },
  },
  {
    name: "t891cug",
    values: { insights: 65, mentions: 33, rating: 3 },
    position: { lat: -22.36423223024535, lng: -57.05131426408233 },
  },
  {
    name: "9rrlb4k",
    values: { insights: 88, mentions: 88, rating: 5 },
    position: { lat: -17.068637925973178, lng: -51.94081145463185 },
  },
  {
    name: "dcd2jws",
    values: { insights: 59, mentions: 76, rating: 5 },
    position: { lat: -23.112720449287128, lng: -50.65766172505323 },
  },
  {
    name: "kmpoq2i",
    values: { insights: 84, mentions: 82, rating: 0 },
    position: { lat: -11.180033706584432, lng: -61.40911537905876 },
  },
  {
    name: "qjvfw41",
    values: { insights: 47, mentions: 40, rating: 5 },
    position: { lat: -1.9341824834404306, lng: -57.19577702224029 },
  },
  {
    name: "eoat8wk",
    values: { insights: 9, mentions: 75, rating: 2 },
    position: { lat: -7.573946662714086, lng: -60.98184737145739 },
  },
  {
    name: "987hpez",
    values: { insights: 57, mentions: 70, rating: 2 },
    position: { lat: -15.722087540777148, lng: -68.50812043709362 },
  },
  {
    name: "uvupqy4",
    values: { insights: 30, mentions: 80, rating: 0 },
    position: { lat: -14.807811934094715, lng: -49.86577923113256 },
  },
  {
    name: "x6okybl",
    values: { insights: 56, mentions: 33, rating: 2 },
    position: { lat: -23.27953468323978, lng: -66.93969711471843 },
  },
  {
    name: "gf2hl7f",
    values: { insights: 64, mentions: 54, rating: 2 },
    position: { lat: -4.13426344216235, lng: -54.82591834505118 },
  },
  {
    name: "xr3m91a",
    values: { insights: 100, mentions: 12, rating: 2 },
    position: { lat: -9.751773602593108, lng: -46.469778922382446 },
  },
  {
    name: "ubyaujz",
    values: { insights: 45, mentions: 52, rating: 3 },
    position: { lat: -18.62293757447349, lng: -61.58243703048294 },
  },
  {
    name: "76ir3zo",
    values: { insights: 23, mentions: 11, rating: 5 },
    position: { lat: -14.43921103062467, lng: -67.13480786922739 },
  },
  {
    name: "jmuqaak",
    values: { insights: 3, mentions: 100, rating: 1 },
    position: { lat: -7.736791811656008, lng: -59.043597776629184 },
  },
  {
    name: "x2v7ozv",
    values: { insights: 58, mentions: 30, rating: 5 },
    position: { lat: -1.4009331448856202, lng: -47.489755367216986 },
  },
  {
    name: "5qs1ake",
    values: { insights: 19, mentions: 1, rating: 2 },
    position: { lat: -14.104154587222549, lng: -66.77984942879353 },
  },
  {
    name: "y7irzjy",
    values: { insights: 85, mentions: 51, rating: 4 },
    position: { lat: -15.679810880302966, lng: -55.59909369198033 },
  },
  {
    name: "ehk39b1",
    values: { insights: 21, mentions: 59, rating: 1 },
    position: { lat: -18.32427784574813, lng: -63.830310823208904 },
  },
  {
    name: "ny0ncow",
    values: { insights: 32, mentions: 24, rating: 3 },
    position: { lat: -17.716972155053025, lng: -71.69279697720926 },
  },
  {
    name: "iwh7vej",
    values: { insights: 21, mentions: 66, rating: 4 },
    position: { lat: -27.246494547381534, lng: -69.35946599089787 },
  },
  {
    name: "jvrx034",
    values: { insights: 39, mentions: 45, rating: 2 },
    position: { lat: -2.0724203405087067, lng: -50.8985520919411 },
  },
  {
    name: "ofcco2y",
    values: { insights: 21, mentions: 8, rating: 5 },
    position: { lat: -26.42168736209204, lng: -69.64116884156375 },
  },
  {
    name: "ml5u4xs",
    values: { insights: 66, mentions: 19, rating: 5 },
    position: { lat: -18.104317953710364, lng: -60.060367691196625 },
  },
  {
    name: "r141zyd",
    values: { insights: 35, mentions: 44, rating: 5 },
    position: { lat: -14.821070879585527, lng: -47.093669965103814 },
  },
  {
    name: "bg9tkx0",
    values: { insights: 6, mentions: 29, rating: 0 },
    position: { lat: -14.408485807861345, lng: -47.02164384903553 },
  },
  {
    name: "ls975sv",
    values: { insights: 68, mentions: 74, rating: 5 },
    position: { lat: -17.208798257481686, lng: -53.03221041332553 },
  },
  {
    name: "th3p8u2",
    values: { insights: 4, mentions: 2, rating: 4 },
    position: { lat: -18.656153462694014, lng: -70.93575326302299 },
  },
  {
    name: "h2l1rcp",
    values: { insights: 25, mentions: 7, rating: 2 },
    position: { lat: -18.650701899643153, lng: -59.692086909898876 },
  },
  {
    name: "39mri6i",
    values: { insights: 60, mentions: 71, rating: 4 },
    position: { lat: -0.8810411592185368, lng: -67.8033684210876 },
  },
  {
    name: "08zdvy6",
    values: { insights: 76, mentions: 92, rating: 5 },
    position: { lat: -19.125671827180973, lng: -56.55905397020807 },
  },
  {
    name: "3tm9qf3",
    values: { insights: 80, mentions: 15, rating: 4 },
    position: { lat: -7.654929387215969, lng: -68.20864602995792 },
  },
  {
    name: "hzmvnyb",
    values: { insights: 19, mentions: 15, rating: 3 },
    position: { lat: -13.137263285776548, lng: -60.22119474008477 },
  },
  {
    name: "q4othnn",
    values: { insights: 18, mentions: 99, rating: 5 },
    position: { lat: -14.156985093983515, lng: -68.65986431638652 },
  },
  {
    name: "19nqvzu",
    values: { insights: 48, mentions: 1, rating: 0 },
    position: { lat: -16.423072307068747, lng: -53.78029390491062 },
  },
  {
    name: "b3v7lru",
    values: { insights: 13, mentions: 5, rating: 1 },
    position: { lat: -22.639608558214082, lng: -57.06624046420551 },
  },
  {
    name: "qe099yy",
    values: { insights: 39, mentions: 12, rating: 4 },
    position: { lat: -11.01525604955441, lng: -74.38088413057005 },
  },
  {
    name: "m8p8t73",
    values: { insights: 8, mentions: 66, rating: 3 },
    position: { lat: -1.2189911101838717, lng: -49.615958109872054 },
  },
  {
    name: "bj4ehnq",
    values: { insights: 44, mentions: 62, rating: 2 },
    position: { lat: -14.135232484607931, lng: -57.39621723931907 },
  },
  {
    name: "o5yr740",
    values: { insights: 8, mentions: 42, rating: 5 },
    position: { lat: -7.138611868526969, lng: -55.11407742860709 },
  },
  {
    name: "3868tbn",
    values: { insights: 23, mentions: 50, rating: 2 },
    position: { lat: -16.08979224371449, lng: -69.08952630035775 },
  },
  {
    name: "42aqioe",
    values: { insights: 54, mentions: 97, rating: 3 },
    position: { lat: -14.774378415649258, lng: -60.10168961960365 },
  },
  {
    name: "ksoq3aq",
    values: { insights: 44, mentions: 50, rating: 1 },
    position: { lat: -3.2232930085092804, lng: -53.27055906547625 },
  },
  {
    name: "yhkvl5c",
    values: { insights: 98, mentions: 84, rating: 4 },
    position: { lat: -21.044741897510438, lng: -66.40907829869089 },
  },
  {
    name: "x6olvvg",
    values: { insights: 81, mentions: 89, rating: 0 },
    position: { lat: -2.095758750398641, lng: -53.15863134398666 },
  },
  {
    name: "3jq7reo",
    values: { insights: 56, mentions: 81, rating: 4 },
    position: { lat: -20.275185352222802, lng: -66.64784155461136 },
  },
  {
    name: "mezhwh0",
    values: { insights: 19, mentions: 91, rating: 1 },
    position: { lat: -7.760256090110325, lng: -52.816786166666375 },
  },
  {
    name: "cuv9gkf",
    values: { insights: 25, mentions: 47, rating: 4 },
    position: { lat: -17.047432387734702, lng: -56.05191540632349 },
  },
  {
    name: "j7wzujn",
    values: { insights: 44, mentions: 56, rating: 1 },
    position: { lat: -13.149428637304606, lng: -46.67247808308298 },
  },
  {
    name: "62teip3",
    values: { insights: 56, mentions: 95, rating: 2 },
    position: { lat: -15.36504259902803, lng: -67.01515168611944 },
  },
  {
    name: "o4efubk",
    values: { insights: 70, mentions: 16, rating: 0 },
    position: { lat: -19.349085220490128, lng: -62.1333925044739 },
  },
  {
    name: "g80nby5",
    values: { insights: 35, mentions: 40, rating: 5 },
    position: { lat: -11.964433072859698, lng: -70.85999834719065 },
  },
  {
    name: "c24xrm8",
    values: { insights: 10, mentions: 58, rating: 1 },
    position: { lat: -20.77196250613407, lng: -70.62715448471639 },
  },
  {
    name: "d46484r",
    values: { insights: 46, mentions: 41, rating: 2 },
    position: { lat: -4.6280286717002745, lng: -50.905957951025215 },
  },
  {
    name: "tkuma47",
    values: { insights: 36, mentions: 75, rating: 2 },
    position: { lat: -9.07920562721155, lng: -74.37386223991675 },
  },
  {
    name: "7ajyaw5",
    values: { insights: 31, mentions: 15, rating: 1 },
    position: { lat: -11.860118106516726, lng: -48.08511877811337 },
  },
  {
    name: "1a0w60n",
    values: { insights: 9, mentions: 86, rating: 1 },
    position: { lat: -20.821297121788103, lng: -65.24203707155158 },
  },
  {
    name: "lnwl42a",
    values: { insights: 79, mentions: 79, rating: 3 },
    position: { lat: -7.4625045987544745, lng: -70.35220351220258 },
  },
  {
    name: "q4hoyxz",
    values: { insights: 82, mentions: 48, rating: 4 },
    position: { lat: -0.7921193480235793, lng: -67.29271522705369 },
  },
  {
    name: "ikkcar5",
    values: { insights: 69, mentions: 27, rating: 3 },
    position: { lat: -7.895093094546905, lng: -51.455179872773314 },
  },
  {
    name: "0o9skk3",
    values: { insights: 27, mentions: 44, rating: 1 },
    position: { lat: -5.078418078277068, lng: -69.13252901992053 },
  },
  {
    name: "312s180",
    values: { insights: 53, mentions: 48, rating: 0 },
    position: { lat: -14.507959450006922, lng: -51.75643694324025 },
  },
  {
    name: "11amd8e",
    values: { insights: 95, mentions: 52, rating: 2 },
    position: { lat: -10.668738090479625, lng: -53.67082901573349 },
  },
  {
    name: "6c2zu99",
    values: { insights: 41, mentions: 4, rating: 0 },
    position: { lat: -11.587855870013772, lng: -56.99609723519808 },
  },
  {
    name: "k0dbw9f",
    values: { insights: 35, mentions: 28, rating: 4 },
    position: { lat: -1.1500351084171925, lng: -53.59936742092778 },
  },
  {
    name: "skwihlu",
    values: { insights: 80, mentions: 11, rating: 1 },
    position: { lat: -5.813504546696073, lng: -64.15943509706378 },
  },
  {
    name: "kp4ad5k",
    values: { insights: 24, mentions: 59, rating: 3 },
    position: { lat: -6.607843370545748, lng: -49.4159117999288 },
  },
  {
    name: "xnk6reo",
    values: { insights: 56, mentions: 34, rating: 3 },
    position: { lat: -3.42299805815135, lng: -65.96962051100093 },
  },
  {
    name: "pqubtju",
    values: { insights: 10, mentions: 51, rating: 5 },
    position: { lat: -0.17962080177288087, lng: -69.56783216255289 },
  },
  {
    name: "1xjb7ol",
    values: { insights: 54, mentions: 38, rating: 5 },
    position: { lat: -28.73684124598108, lng: -50.319663674381665 },
  },
  {
    name: "gpcucue",
    values: { insights: 51, mentions: 51, rating: 4 },
    position: { lat: -19.508918857979502, lng: -56.08965647248725 },
  },
  {
    name: "k5ggwwo",
    values: { insights: 5, mentions: 19, rating: 4 },
    position: { lat: -29.44149006476738, lng: -73.14877963242866 },
  },
  {
    name: "wekadu2",
    values: { insights: 39, mentions: 35, rating: 4 },
    position: { lat: -14.564651991492632, lng: -69.91969543458592 },
  },
  {
    name: "i0fqh04",
    values: { insights: 36, mentions: 54, rating: 3 },
    position: { lat: -29.78475908815232, lng: -64.20223910551226 },
  },
  {
    name: "da1bd1l",
    values: { insights: 5, mentions: 24, rating: 0 },
    position: { lat: -14.968969649136977, lng: -57.07697956106566 },
  },
  {
    name: "b2jkozr",
    values: { insights: 75, mentions: 91, rating: 2 },
    position: { lat: -10.872057189613585, lng: -61.437818887018274 },
  },
  {
    name: "i8qcfeq",
    values: { insights: 61, mentions: 10, rating: 3 },
    position: { lat: -23.36513955667833, lng: -72.0088447032358 },
  },
  {
    name: "a0vrslx",
    values: { insights: 11, mentions: 56, rating: 1 },
    position: { lat: -9.116953481879069, lng: -70.99651781850423 },
  },
  {
    name: "111p9eb",
    values: { insights: 93, mentions: 63, rating: 1 },
    position: { lat: -5.804114986259325, lng: -72.06862845225089 },
  },
  {
    name: "kl97yrc",
    values: { insights: 27, mentions: 11, rating: 3 },
    position: { lat: -17.970185939518885, lng: -50.68912548717971 },
  },
  {
    name: "xk4y0th",
    values: { insights: 32, mentions: 64, rating: 4 },
    position: { lat: -9.55814506589823, lng: -61.872037446099256 },
  },
  {
    name: "633ygto",
    values: { insights: 96, mentions: 64, rating: 0 },
    position: { lat: -11.101514198652811, lng: -72.52934555083111 },
  },
  {
    name: "y1g8de7",
    values: { insights: 91, mentions: 22, rating: 1 },
    position: { lat: -19.896617813364934, lng: -45.70404093100939 },
  },
  {
    name: "id930b2",
    values: { insights: 39, mentions: 58, rating: 2 },
    position: { lat: -18.005513278275153, lng: -51.05452967558854 },
  },
  {
    name: "gzh1dc6",
    values: { insights: 36, mentions: 83, rating: 1 },
    position: { lat: -1.3512460747143606, lng: -50.51993942824509 },
  },
  {
    name: "ch3cjng",
    values: { insights: 90, mentions: 83, rating: 2 },
    position: { lat: -1.0153225311227771, lng: -56.88751803413776 },
  },
  {
    name: "8dy2mm1",
    values: { insights: 37, mentions: 64, rating: 1 },
    position: { lat: -25.75476903704341, lng: -67.38563285510557 },
  },
  {
    name: "f6f1f6j",
    values: { insights: 0, mentions: 92, rating: 1 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "f6f1f6j",
    values: { insights: 0, mentions: 92, rating: 1 },
    position: { lng: -79.3831844, lat: 43.653224 },
  },
  {
    name: "f6f1f6j",
    values: { insights: 0, mentions: 92, rating: 1 },
    position: { lng: -79.3831843, lat: 43.653226 },
  },
  {
    name: "f6f1f6j",
    values: { insights: 0, mentions: 92, rating: 1 },
    position: { lng: -79.3831845, lat: 43.653225 },
  },

  {
    name: "vnigbds",
    values: { insights: 26, mentions: 13, rating: 2 },
    position: { lat: 66.66917082874124, lng: -125.31707491398234 },
  },
  {
    name: "fidwx80",
    values: { insights: 45, mentions: 73, rating: 0 },
    position: { lat: 61.08950225267283, lng: -133.44341670463825 },
  },
  {
    name: "vtncsgs",
    values: { insights: 32, mentions: 93, rating: 1 },
    position: { lat: 63.77892306758475, lng: -129.95290675920958 },
  },
  {
    name: "pua8r9n",
    values: { insights: 57, mentions: 60, rating: 4 },
    position: { lat: 60.460940284164714, lng: -127.63002889537458 },
  },
  {
    name: "igve0n4",
    values: { insights: 64, mentions: 19, rating: 2 },
    position: { lat: 64.81504413918556, lng: -119.33559650461375 },
  },
  {
    name: "a5cd6e3",
    values: { insights: 16, mentions: 64, rating: 1 },
    position: { lat: 67.40230535484365, lng: -133.27712689107582 },
  },
  {
    name: "tbj6yr0",
    values: { insights: 52, mentions: 37, rating: 3 },
    position: { lat: 67.65458669415838, lng: -138.5153619685757 },
  },
  {
    name: "fcqaijk",
    values: { insights: 2, mentions: 77, rating: 1 },
    position: { lat: 66.41505935950957, lng: -100.7382092454127 },
  },
  {
    name: "6yo52vo",
    values: { insights: 58, mentions: 98, rating: 4 },
    position: { lat: 67.09666815489062, lng: -102.89096865375026 },
  },
  {
    name: "z1luo6b",
    values: { insights: 29, mentions: 1, rating: 0 },
    position: { lat: 62.061849880182436, lng: -138.37271107699462 },
  },
  {
    name: "68a99ce",
    values: { insights: 36, mentions: 74, rating: 2 },
    position: { lat: 67.25549416645507, lng: -135.19557083936027 },
  },
  {
    name: "fnsigm8",
    values: { insights: 2, mentions: 15, rating: 1 },
    position: { lat: 70.12137978147075, lng: -101.86710714550048 },
  },
  {
    name: "4fo2tco",
    values: { insights: 69, mentions: 69, rating: 1 },
    position: { lat: 64.49130727341075, lng: -123.16901589416224 },
  },
  {
    name: "z6tr5ij",
    values: { insights: 94, mentions: 15, rating: 1 },
    position: { lat: 65.4419923168862, lng: -115.56633369569875 },
  },
  {
    name: "95tm6j3",
    values: { insights: 40, mentions: 53, rating: 2 },
    position: { lat: 60.33566633062696, lng: -139.63728704346894 },
  },
  {
    name: "r1z8nf1",
    values: { insights: 27, mentions: 31, rating: 3 },
    position: { lat: 60.84972714417243, lng: -109.11820246977273 },
  },
  {
    name: "2d34iwr",
    values: { insights: 69, mentions: 47, rating: 2 },
    position: { lat: 62.026478572816146, lng: -137.74659008876225 },
  },
  {
    name: "c6yrxjf",
    values: { insights: 62, mentions: 88, rating: 3 },
    position: { lat: 67.90585145851945, lng: -126.02173787122554 },
  },
  {
    name: "cjsv5tx",
    values: { insights: 23, mentions: 59, rating: 5 },
    position: { lat: 65.30418446167798, lng: -101.36586352625571 },
  },
  {
    name: "bnuvqw4",
    values: { insights: 48, mentions: 25, rating: 1 },
    position: { lat: 63.548554055471655, lng: -138.68381953380714 },
  },
  {
    name: "bl5cd8a",
    values: { insights: 20, mentions: 1, rating: 1 },
    position: { lat: 64.35189246291262, lng: -117.94348803631033 },
  },
  {
    name: "iap3bcg",
    values: { insights: 31, mentions: 83, rating: 2 },
    position: { lat: 64.72047682437753, lng: -114.12445305691794 },
  },
  {
    name: "4xkc563",
    values: { insights: 9, mentions: 23, rating: 1 },
    position: { lat: 65.31500760337849, lng: -117.58621586084693 },
  },
  {
    name: "epvy14l",
    values: { insights: 72, mentions: 28, rating: 4 },
    position: { lat: 69.86602774108452, lng: -104.4123571786813 },
  },
  {
    name: "oaaoxng",
    values: { insights: 7, mentions: 69, rating: 2 },
    position: { lat: 62.24573662095519, lng: -130.36641438822795 },
  },
  {
    name: "wia1m4n",
    values: { insights: 25, mentions: 8, rating: 2 },
    position: { lat: 66.39103235579238, lng: -104.14028595548066 },
  },
  {
    name: "zhukrqh",
    values: { insights: 99, mentions: 16, rating: 2 },
    position: { lat: 63.72723755472671, lng: -133.77409863598137 },
  },
  {
    name: "gfljkau",
    values: { insights: 18, mentions: 50, rating: 1 },
    position: { lat: 60.90217768716286, lng: -133.0178354795346 },
  },
  {
    name: "h18780s",
    values: { insights: 34, mentions: 25, rating: 5 },
    position: { lat: 66.3345924227754, lng: -127.64931569513433 },
  },
  {
    name: "m1qv3k8",
    values: { insights: 64, mentions: 81, rating: 0 },
    position: { lat: 68.00738466477529, lng: -103.60563164880358 },
  },
  {
    name: "fdsky98",
    values: { insights: 1, mentions: 55, rating: 2 },
    position: { lat: 68.84259873687822, lng: -121.49056826512108 },
  },
  {
    name: "xw0g36v",
    values: { insights: 37, mentions: 73, rating: 4 },
    position: { lat: 64.04444140544197, lng: -102.56654120147658 },
  },
  {
    name: "r0tyh5q",
    values: { insights: 53, mentions: 57, rating: 4 },
    position: { lat: 64.31839936930893, lng: -112.2300189782496 },
  },
  {
    name: "wflxkqu",
    values: { insights: 100, mentions: 42, rating: 3 },
    position: { lat: 65.20319843702353, lng: -134.8230800839537 },
  },
  {
    name: "rnoxcpr",
    values: { insights: 85, mentions: 16, rating: 0 },
    position: { lat: 63.08190623115891, lng: -115.99515463924801 },
  },
  {
    name: "ru4luuz",
    values: { insights: 36, mentions: 12, rating: 5 },
    position: { lat: 68.95246888618838, lng: -125.54276777578602 },
  },
  {
    name: "dj6npng",
    values: { insights: 55, mentions: 77, rating: 2 },
    position: { lat: 61.75896625920479, lng: -131.63232601433054 },
  },
  {
    name: "gkj9970",
    values: { insights: 48, mentions: 44, rating: 0 },
    position: { lat: 66.9775239163286, lng: -112.61333416201883 },
  },
  {
    name: "a108y1l",
    values: { insights: 58, mentions: 95, rating: 1 },
    position: { lat: 62.57932926959967, lng: -137.28632883619568 },
  },
  {
    name: "zwldl19",
    values: { insights: 52, mentions: 81, rating: 3 },
    position: { lat: 61.80529755147805, lng: -129.79715380697394 },
  },
  {
    name: "5w2b8f7",
    values: { insights: 74, mentions: 65, rating: 2 },
    position: { lat: 69.83234715057321, lng: -129.40786864027652 },
  },
  {
    name: "zk5li3f",
    values: { insights: 77, mentions: 46, rating: 3 },
    position: { lat: 63.48287412744973, lng: -131.12388656178112 },
  },
  {
    name: "pyshkrv",
    values: { insights: 80, mentions: 14, rating: 0 },
    position: { lat: 69.72142768017002, lng: -115.81331069197503 },
  },
  {
    name: "bfkpuat",
    values: { insights: 50, mentions: 15, rating: 3 },
    position: { lat: 63.70615122896378, lng: -126.28321385384447 },
  },
  {
    name: "mlgila4",
    values: { insights: 28, mentions: 94, rating: 3 },
    position: { lat: 66.57082474797384, lng: -127.62050916077145 },
  },
  {
    name: "52rcwjn",
    values: { insights: 71, mentions: 31, rating: 0 },
    position: { lat: 69.17098719405308, lng: -131.89223870289464 },
  },
  {
    name: "o8txais",
    values: { insights: 75, mentions: 40, rating: 0 },
    position: { lat: 60.42560253919104, lng: -123.10183383284142 },
  },
  {
    name: "6nyheru",
    values: { insights: 10, mentions: 94, rating: 0 },
    position: { lat: 64.26734930465787, lng: -123.27974753930732 },
  },
  {
    name: "yvqyrd5",
    values: { insights: 18, mentions: 29, rating: 5 },
    position: { lat: 61.784180377691655, lng: -106.9020887368022 },
  },
  {
    name: "nquhf02",
    values: { insights: 78, mentions: 63, rating: 0 },
    position: { lat: 62.840922785466844, lng: -136.1509975867426 },
  },
  {
    name: "z5t906t",
    values: { insights: 11, mentions: 26, rating: 3 },
    position: { lat: 68.72413420002015, lng: -116.82655451128011 },
  },
  {
    name: "hz0974m",
    values: { insights: 51, mentions: 57, rating: 2 },
    position: { lat: 68.90970465906325, lng: -137.14327520007006 },
  },
  {
    name: "acrgdoe",
    values: { insights: 12, mentions: 51, rating: 2 },
    position: { lat: 66.67975462777355, lng: -139.6390772281764 },
  },
  {
    name: "3oycosv",
    values: { insights: 31, mentions: 30, rating: 3 },
    position: { lat: 69.34404131483224, lng: -100.65017936302947 },
  },
  {
    name: "ffqzg37",
    values: { insights: 51, mentions: 14, rating: 3 },
    position: { lat: 64.09767817692148, lng: -118.75580122210059 },
  },
  {
    name: "602al61",
    values: { insights: 13, mentions: 65, rating: 4 },
    position: { lat: 60.72924830505754, lng: -139.12758435338782 },
  },
  {
    name: "18etxv0",
    values: { insights: 94, mentions: 45, rating: 1 },
    position: { lat: 60.42227311189308, lng: -133.4359547552341 },
  },
  {
    name: "qu9ljk2",
    values: { insights: 17, mentions: 86, rating: 1 },
    position: { lat: 65.49532447973338, lng: -104.41562022671431 },
  },
  {
    name: "4ascjuw",
    values: { insights: 11, mentions: 23, rating: 1 },
    position: { lat: 68.20347027597045, lng: -102.14370217450652 },
  },
  {
    name: "7nuk84l",
    values: { insights: 38, mentions: 53, rating: 2 },
    position: { lat: 66.12904524107708, lng: -120.57814355410136 },
  },
  {
    name: "r4e41wc",
    values: { insights: 11, mentions: 58, rating: 4 },
    position: { lat: 64.42494513476396, lng: -102.64686949620824 },
  },
  {
    name: "ritus1n",
    values: { insights: 80, mentions: 100, rating: 5 },
    position: { lat: 68.84399908624113, lng: -124.22941012036625 },
  },
  {
    name: "zgn6yw2",
    values: { insights: 25, mentions: 74, rating: 5 },
    position: { lat: 63.43538554020319, lng: -127.35327918823035 },
  },
  {
    name: "z7mjkrp",
    values: { insights: 19, mentions: 48, rating: 5 },
    position: { lat: 66.3814069848541, lng: -103.10301527790855 },
  },
  {
    name: "xokwdrh",
    values: { insights: 22, mentions: 40, rating: 5 },
    position: { lat: 61.23303918057347, lng: -136.3890600553733 },
  },
  {
    name: "sqz9evh",
    values: { insights: 88, mentions: 45, rating: 2 },
    position: { lat: 64.72777737338835, lng: -119.03813105516126 },
  },
  {
    name: "33drdz5",
    values: { insights: 98, mentions: 3, rating: 4 },
    position: { lat: 61.2881966053215, lng: -124.91505714097299 },
  },
  {
    name: "ol47rig",
    values: { insights: 80, mentions: 14, rating: 2 },
    position: { lat: 60.56172225877764, lng: -101.70924402595969 },
  },
  {
    name: "p2200nz",
    values: { insights: 16, mentions: 97, rating: 4 },
    position: { lat: 61.70820924597329, lng: -108.15865906325178 },
  },
  {
    name: "pmsbbue",
    values: { insights: 3, mentions: 98, rating: 5 },
    position: { lat: 60.259013827103146, lng: -139.16649840459476 },
  },
  {
    name: "l0r3vuu",
    values: { insights: 63, mentions: 90, rating: 2 },
    position: { lat: 62.800991142359486, lng: -109.93048255922281 },
  },
  {
    name: "brxefon",
    values: { insights: 15, mentions: 80, rating: 1 },
    position: { lat: 60.28606614315364, lng: -109.84947429384403 },
  },
  {
    name: "x578ddb",
    values: { insights: 53, mentions: 23, rating: 3 },
    position: { lat: 68.76526913049742, lng: -130.22034459037545 },
  },
  {
    name: "rgydm58",
    values: { insights: 25, mentions: 27, rating: 1 },
    position: { lat: 70.24052944303239, lng: -128.25248954544327 },
  },
  {
    name: "6ouxe5p",
    values: { insights: 96, mentions: 49, rating: 1 },
    position: { lat: 64.87037163870488, lng: -125.88745552552234 },
  },
  {
    name: "hya9k3p",
    values: { insights: 46, mentions: 71, rating: 0 },
    position: { lat: 70.4578058186207, lng: -113.65043903903977 },
  },
  {
    name: "lmwqps9",
    values: { insights: 90, mentions: 54, rating: 3 },
    position: { lat: 64.08821498090023, lng: -137.64672782015953 },
  },
  {
    name: "5k1b99x",
    values: { insights: 10, mentions: 13, rating: 3 },
    position: { lat: 67.69109338132891, lng: -133.93338098865615 },
  },
  {
    name: "7pcucr7",
    values: { insights: 18, mentions: 100, rating: 3 },
    position: { lat: 60.62745403879313, lng: -137.41031847323626 },
  },
  {
    name: "1ud4f6c",
    values: { insights: 54, mentions: 32, rating: 3 },
    position: { lat: 68.18195408340821, lng: -136.82186376876396 },
  },
  {
    name: "p6b5njo",
    values: { insights: 13, mentions: 22, rating: 1 },
    position: { lat: 63.511871799499175, lng: -136.33274512820321 },
  },
  {
    name: "zcdptjg",
    values: { insights: 58, mentions: 73, rating: 0 },
    position: { lat: 60.41988151047403, lng: -108.57116290402371 },
  },
  {
    name: "f3mh5uy",
    values: { insights: 37, mentions: 15, rating: 1 },
    position: { lat: 64.156902576676, lng: -139.9176636778655 },
  },
  {
    name: "vy96v6m",
    values: { insights: 24, mentions: 43, rating: 4 },
    position: { lat: 62.955002465498076, lng: -132.84030116519733 },
  },
  {
    name: "wq56mxk",
    values: { insights: 29, mentions: 50, rating: 4 },
    position: { lat: 63.13154261120482, lng: -116.11680796573614 },
  },
  {
    name: "psdt4ez",
    values: { insights: 44, mentions: 98, rating: 4 },
    position: { lat: 69.9087290154965, lng: -101.08672755314402 },
  },
  {
    name: "npe3ya4",
    values: { insights: 80, mentions: 85, rating: 0 },
    position: { lat: 69.6299702397383, lng: -127.8611340123611 },
  },
  {
    name: "swmu0an",
    values: { insights: 71, mentions: 53, rating: 0 },
    position: { lat: 68.73546754132296, lng: -123.51803493934318 },
  },
  {
    name: "tdza5xw",
    values: { insights: 53, mentions: 65, rating: 4 },
    position: { lat: 69.15548124297489, lng: -137.91617837243766 },
  },
  {
    name: "89cnffu",
    values: { insights: 35, mentions: 80, rating: 4 },
    position: { lat: 68.14822024839684, lng: -128.82664067838726 },
  },
  {
    name: "ikllik7",
    values: { insights: 91, mentions: 93, rating: 1 },
    position: { lat: 61.393479745960434, lng: -122.5873925565818 },
  },
  {
    name: "v20k5dn",
    values: { insights: 30, mentions: 14, rating: 3 },
    position: { lat: 63.39105379204129, lng: -105.01609752339206 },
  },
  {
    name: "obsl76j",
    values: { insights: 49, mentions: 13, rating: 1 },
    position: { lat: 60.013000639044705, lng: -122.04258817281446 },
  },
  {
    name: "gbzow01",
    values: { insights: 92, mentions: 61, rating: 4 },
    position: { lat: 65.10602637445169, lng: -118.63204303459987 },
  },
  {
    name: "3ya8d20",
    values: { insights: 45, mentions: 37, rating: 3 },
    position: { lat: 68.99352197504714, lng: -131.06476618473155 },
  },
  {
    name: "0f00qxf",
    values: { insights: 65, mentions: 50, rating: 5 },
    position: { lat: 63.95177302835579, lng: -115.6364534211099 },
  },
  {
    name: "kzau4q6",
    values: { insights: 54, mentions: 46, rating: 2 },
    position: { lat: 61.73221440635602, lng: -109.04246048270274 },
  },
  {
    name: "dn203ln",
    values: { insights: 12, mentions: 70, rating: 3 },
    position: { lat: 64.66636379271624, lng: -117.53628019281525 },
  },
  {
    name: "t1izpqx",
    values: { insights: 31, mentions: 37, rating: 1 },
    position: { lat: 62.99186781612968, lng: -112.28237229293754 },
  },
  {
    name: "8095p85",
    values: { insights: 32, mentions: 93, rating: 2 },
    position: { lat: 65.5887509701133, lng: -104.29378884352137 },
  },
  {
    name: "ypuk44k",
    values: { insights: 46, mentions: 35, rating: 5 },
    position: { lng: -79.3831843, lat: 43.653225 },
  },
  {
    name: "ypuk44k",
    values: { insights: 46, mentions: 35, rating: 5 },
    position: { lng: -79.3831844, lat: 43.653224 },
  },
  {
    name: "ypuk44k",
    values: { insights: 46, mentions: 35, rating: 5 },
    position: { lng: -79.3831843, lat: 43.653226 },
  },
  {
    name: "ypuk44k",
    values: { insights: 46, mentions: 35, rating: 5 },
    position: { lng: -79.3831845, lat: 43.653225 },
  },
];
// below point is to illustrate overlapping marker spiderfier.
data.push({ ...obj, position: { lat: 26.4499, lng: 80.3319 } });
data.push({ ...obj, position: { lat: 26.4499, lng: 80.3319 } });
data.push({ ...obj, position: { lat: 26.4499, lng: 80.3319 } });
data.push({ ...obj, position: { lat: 26.4499, lng: 80.3319 } });

// const data = [];
console.log(data);
export default data;
