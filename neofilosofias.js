console.log(Date.now()+':: Cogito, ergo sum...')
const twit = require("twit");
const _ = require("lodash");

const config = {
  twitter: {
    // Aquí van tus credenciales de acceso.
  }
};

const T = new twit(config.twitter);

const prefijos = [
  "Aero",
  "An",
  "Ambi",
  "Anfi",
  "Ante",
  "Anarco",
  "Anti",
  "Arz",
  "Auto",
  "bi",
  "bis",
  "biz",
  "bien",
  "co",
  "com",
  "con",
  "contra",
  "cuasi",
  "de",
  "des",
  "epi",
  "equi",
  "ex",
  "extra",
  "hemi",
  "hetero",
  "hiper",
  "hyper",
  "hipo",
  "homo",
  "in",
  "infra",
  "inter",
  "entre",
  "intra",
  "iso",
  "macro",
  "maxi",
  "mega",
  "micro",
  "mini",
  "mono",
  "multi",
  "neo",
  "peri",
  "pluri",
  "poli",
  "pos",
  "post",
  "pre",
  "pro",
  "re",
  "retro",
  "semi",
  "pseudo",
  "sub",
  "so",
  "super",
  "sobre",
  "supra",
  "trans",
  "tras",
  "contra",
  "ultra",
  "neuro",
  "uni",
  "psico",
  "vi",
  "vice",
  "viz",
  "meta",
  "kilo",
  "video",
  "post",
  "socio",
  "ultra",
  "giga",
  "yotta",
  "tera",
  "pre",
  "homo",
  "cyber",
  "techno",
  "twit"
];

const doctrinas = [
  "aristotelismo",
  "ego",
  "programación",
  "ascetismo",
  "confucianismo",
  "deísmo",
  "empirismo",
  "escepticismo filosófico",
  "estructuralismo",
  "fenomenología",
  "pitagorismo",
  "hermenéutica",
  "inteligencia",
  "holismo",
  "kantianismo",
  "erotismo",
  "materialismo",
  "personalismo",
  "platonismo",
  "poscolonialismo",
  "dualismo",
  "racionalismo",
  "accidentalismo",
  "dasein",
  "agatonismo",
  "geografía",
  "ajivika",
  "multiplicidad",
  "anticiencia",
  "antroposofía",
  "sincretismo",
  "artefactualismo",
  "atomismo",
  "averroísmo",
  "terrorismo",
  "cartesianismo",
  "cientificismo",
  "conceptualismo",
  "marxismo",
  "cosmismo ruso",
  "creacionismo",
  "criticismo",
  "determinismo cosmológico",
  "determinismo",
  "dinamismo",
  "dadaísmo",
  "doble verdad",
  "surrealismo",
  "dogmatismo",
  "estética francesa",
  "estoicismo",
  "excepcionalismo humano",
  "falsacionismo",
  "fenomenalismo",
  "dualismo",
  "formalismo",
  "naturalismo",
  "fundamentalismo",
  "escolástica",
  "nominalismo",
  "hedonismo",
  "hegelianismo",
  "hilozoísmo",
  "humanismo",
  "ocasionalismo",
  "optimismo",
  "oscurantismo",
  "dinamismo",
  "conciencia",
  "idealismo alemán",
  "ignosticismo",
  "indeterminismo",
  "instrumentalismo",
  "intelectualismo socrático",
  "intuicionismo ético",
  "intuitivismo",
  "irracionalismo",
  "pampsiquismo",
  "existencialismo",
  "panteísmo ateo",
  "pensamiento comunitario",
  "perdurantismo",
  "perspectivismo",
  "pesimismo",
  "platonismo",
  "platonismo matemático",
  "positivismo",
  "purismo",
  "utilitarismo",
  "expresionismo",
  "zapatismo",
  "romanticismo",
  "vanguardismo",
  "esoterismo",
  "cogito",
  "taoísmo",
  "solipsismo",
  "idealismo",
  "relativismo",
  "virtual",
  "corporal",
  "informático",
  "sintáctico",
  "artificial",
  "ser",
  "erotismo"
];

const adjetivos = [
  "geométrico",
  "sociológico",
  "teleológico",
  "gnóstico",
  "marxista",
  "biológico",
  "humanista",
  "binario",
  "digital",
  "mimético",
  "cibernético",
  "anarquista",
  "especista",
  "religioso",
  "comunista",
  "psicodélico",
  "corporativo",
  "histórico",
  "socialista",
  "capitalista",
  "fordista",
  "animalista",
  "fluctuante",
  "circundante",
  "psiquiátrico",
  "evolutivo",
  "existencialista",
  "monárquico",
  "primitivo",
  "fundacional",
  "hedonista",
  "aceleracionista",
  "erótico",
  "porno",
  "queretano",
  "sexual",
  "freudiano",
  "zapatista",
  "jungiano",
  "infinito",
  "cuántico",
  "japonés",
  "mecánico",
  "romántico",
  "contemporáneo",
  "futurista",
  "estético",
  "textual",
  "punk",
  "fantasmagórico",
  "neuronal",
  "sincrético",
  "onírico",
  "musical",
  "vitalista",
  "estructuralista",
  "fatalista",
  "electrónico",
  "moderno",
  "postmoderno",
  "universal",
  "monista",
  "politeísta",
  "democrático",
  "liberal",
  "fascista",
  "totalitario",
  "multidimensional",
  "lacánico",
  "soviético",
  "globalista",
  "corporativo",
  "feudalista",
  "monárquico",
  "intelectual",
  "gótico",
  "revolucionario",
  "burgués",
  "psicoanalítico",
  "metafísico",
  "lógico",
  "trascendental",
  "idealista",
  "cosmológico",
  "dialéctico",
  "analítico",
  "continental",
  "empírico",
  "budista",
  "nacionalista",
  "antagónico",
  "chamanista",
  "conservador",
  "satánico",
  "occidental",
  "oriental",
  "marciano",
  "mágico",
  "clásico",
  "antiguo",
  "anacrónico",
  "atemporal",
  "oral",
  "situacionista",
  "vanguardista",
  "sintético",
  "ancestral",
  "político",
  "tecnológico",
  "surreal",
  'zapatista',
  "surrealista",
  'esencialista',
  'somático',
  'rizomático',
  "cultural",
  "dual",
  "maoista",
  "leninista",
  "místico",
  "cerebral",
  "abstracto",
  "absurdo",
  "agnóstico",
  "ético",
  "caótico",
  "dianoético",
  "ecléctico",
  "experimental",
  "positivista",
  "esquizofrénico",
  "virtual",
  "de derecha",
  "de izquierda",
  "saprófito"
];

setInterval(() => {
  let nPrefijo = prefijos[Math.floor(Math.random() * prefijos.length)];
  let nDoctrinas = doctrinas[Math.floor(Math.random() * doctrinas.length)];
  let nAdjetivos = adjetivos[Math.floor(Math.random() * adjetivos.length)];
  console.log(nPrefijo + nDoctrinas + " " + nAdjetivos);
  T.post(
    "statuses/update",
    {
      status: `${_.capitalize(nPrefijo)}${nDoctrinas} ${nAdjetivos}`
    },
    tweeted
  );
}, 1800000);

function tweeted(err, data, response) {
  console.log("¡Eureka!");
}
