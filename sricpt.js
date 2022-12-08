let key = 0;
if (localStorage.getItem("key") != null) {
  key = localStorage.getItem("key");
}

function debut() {
  key++;
  localStorage.setItem("key", key);
  goToChapter("chapter1");
}

function again() {
  if (key > 4) {
    goToChapter("mort");
  } else {
    goToChapter("chapter1");
  }
}

let chaptersObj = {
  chapter1: {
    subtitle: "Début du labyrhinthe",
    text: "Vous vous réveiller un matin et décidez de jouer au nouveau jeu vidéo que vous a acheteé votre grand-mère dans une vieille boutique en l'honneur de votre anniversaire. Aussitôt vous être connectez au jeu votre corps se fait aspirer par la télévison et vous attérrisez devant un labyrhinthe",
    img: "assets/img/tv.gif",
    options: [
      {
        text: "continuer",
        action: "goToChapter(`deux_portes`)",
      },
    ],
  },
  deux_portes: {
    subtitle: "Les deux premières portes",
    text: "Deux portes se présentent à vous.",
    img: "assets/img/two_door.jpeg",
    options: [
      {
        text: "porte 1",
        action: "goToChapter(`porte1`)",
      },
      {
        text: "porte2",
        action: "goToChapter(`sphinx`)",
      },
    ],
  },

  porte1: {
    subtitle: "La porte 1",
    text: "Vous croisez un minautore (évidemment) et il vous tue, vous recommencer depuis le début. ",
    img: "assets/img/minautore.jpeg",
    options: [
      {
        text: "début",
        action: "again()",
      },
    ],
  },

  sphinx: {
    subtitle: "L'énigme du Sphinx",
    text: "Après avoir traversé la porte 2 vous tomber nez à nez avec un sphinx qui vous présente un énigme. Devant toi se trouve 2 autres porte, dans la première il y a un lion affamé depuis 6 mois et dans la deuxième se trouve un assasin sans pitié. quel porte devrais tu choisir afin de survivre. ",
    img: "assets/img/sphinx.jpeg",
    options: [
      {
        text: "assasins",
        action: "goToChapter(`start_over`)",
      },
      {
        text: "lions",
        action: "goToChapter(`trois_portes`)",
      },
    ],
  },
  start_over: {
    subtitle: "Retour au début",
    text: "Malheuresement vous avez mal répondu à l'énigme vous recommencer depuis le début. ",
    img: "assets/img/reset.jpeg",
    options: [
      {
        text: "début",
        action: "again()",
      },
    ],
  },

  trois_portes: {
    subtitle: "Trois autres portes",
    text: "Bravo! bonne réponse. Cette fois-ci se trouve 3 porte devant vous, laquelle allez-vous choisir. ",
    img: "assets/img/three_door",
    options: [
      {
        text: "passé",
        action: "goToChapter(`past`)",
      },
      {
        text: "future",
        action: "goToChapter(`keys`)",
      },
      {
        text: "présent",
        action: "goToChapter(`present`)",
      },
    ],
  },

  past: {
    subtitle: "La porte du passé",
    text: "la porte vous renvoie dans le passé, plus précisemment au moment ou vous avez commencer la quête. ",
    img: "assets/img/past.png",
    options: [
      {
        text: "dévut",
        action: "again()",
      },
    ],
  },
  present: {
    subtitle: "La porte du présent",
    text: "En ouvrant la porte , vous apercevez des clé que vous ranger dans votre poche, mais vous etes quand même renvoyé au début. ",
    img: "assets/img/again.jpeg",
    options: [
      {
        text: "début",
        action: "again()",
      },
    ],
  },
  future: {
    subtitle: "La porte du future",
    text: "En ouvrant la porte , vous arrivé devant une porte avec une serrure. ",
    img: "assets/img/serrure",
    options: [
      {
        text: "début",
        action: "again()",
      },
    ],
  },
  keys: {
    subtitle: "Les clés",
    text: "Avez-vous les clés. ",
    img: "assets/img/keyss",
    options: [
      {
        text: "oui",
        action: "goToChapter(`final_door`)",
      },
      {
        text: "non",
        action: "again()",
      },
    ],
  },
  debut: {
    subtitle: "quelque chose manque",
    text: "Sans clés vous ne pouvez pas avancé, vous allez devoir recommencez. ",
    img: "assets/img/reset.jpeg",
    options: [
      {
        text: "début",
        action: "again()",
      },
    ],
  },
  final_door: {
    subtitle: "Dernière portes. ",
    text: "Les deux portes finale se présentent a vous: la vie et la mort. ",
    img: "assets/img/ld.jpeg",
    options: [
      {
        text: "vie",
        action: "goToChapter(`vie`)",
      },
      {
        text: "mort",
        action: "goToChapter(`mort`)",
      },
    ],
  },
  mort: {
    subtitle: "La porte de la mort",
    text: "En choissisant la porte de la mort vous mourrez dans le jeu mais revenez dans votre monde. ",
    img: "assets/img/home.gif",
    options: [
      {
        text: "Recommencer",
        action: "again()",
      },
    ],
  },
  vie: {
    subtitle: "La porte de la vie",
    text: "En choissisant la porte de la vie le jeu décide de vous redonnez une vie afin que vous puissiez recommencer le labyrhinte. qu'est-ce que c'est chouette!. ",
    img: "assets/img/reset.png",
    options: [
      {
        text: "début",
        action: "again()",
      },
    ],
  },
};

const audio = new Audio("assets/hb.mp3");

function goToChapter(chapterName) {
  const chapter = chaptersObj[chapterName];
  localStorage.setItem("chapter", chapterName);

  let chapitre = document.querySelector(".titre");
  let img = document.querySelector(".img");
  let texte = document.querySelector(".texte");
  let button = document.querySelector(".button");

  chapitre.innerText = chapter.subtitle;
  texte.innerText = chapter.text;

  if (chapter.video != undefined) {
    img.innerHTML = `<video src="${chapter.video}" loop muted autoplay>`;
  } else {
    img.innerHTML = `<img src="${chapter.img}" alt= "chapter_img" />`;
  }

  let txtButton = "";
  for (let index = 0; index < chapter.options.length; index++) {
    const option = chapter.options[index];
    txtButton += `<button class="btn" onclick="${option.action}">${option.text}</button>`;
  }
  button.innerHTML = txtButton;

  audio.currentTime = 0;
  audio.play();
}

let currentchapter = "chapter1";
if (localStorage.getItem("chapter") != null) {
  currentchapter = localStorage.getItem("chapter");
}
goToChapter(currentchapter);

let crochet = document.querySelector(".crochet");
audio = true;
if (check.checked === true) {
  audio = true;
} else {
  audio = false;
}
if (audio === true) {
  audio.currentTime = 0;
  audio.play();
}
