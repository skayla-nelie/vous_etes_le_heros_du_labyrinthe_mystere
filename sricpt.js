let keysFounded = false;
function keys() {
  keyFounded = true;
  goToChapter("final_door");
}
function again() {
  if (keys > 4) {
    goToChapter("mort");
  } else {
    goToChapter("chapter1");
  }
}

let chaptersObj = {
  chapter1: {
    subtitle: "Début du labyrhinthe",
    text: "Vous vours rééveiller un matin et décidez de jouer au nouveau jeu vidéo que vous a acheteé votre grand-mère dans une vieille boutique en l'honneur de votre anniversaire. Aussitôt vous être connectez au jeu votre corps se fait aspirer par la télévison et vous attérrisez devant un labyrhinthe",
    img: "assets/img/debut_lab.jpeg",
    options: [
      {
        text: "Vous rouler à toutes vitesse dans les rues de New york, losrque...",
        action: "goToChapter(`sbires`)",
      },
    ],
  },
  deux_portes: {
    subtitle: "Les deux premières portes",
    text: "Deux portes se présentent à vous.",
    img: "assets/img/",
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
    img: "assets/img/",
    options: [
      {
        text: "début",
        action: "goToChapter(`chapter1`)",
      },
    ],
  },

  sphinx: {
    subtitle: "L'énigme du Sphinx",
    text: "Après avoir travaersé la porte 2 vous tomber nez à nez avec un sphinx qui vous présente un énigme. Devant toi se trouve 2 autres porte, dans la première il y a un lion affamé depuis 6 mois et dans la deuxième se trouve un assasin sans pitié. quel porte devrais tu choisir afin de survivre. ",
    img: "assets/img/",
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
    img: "assets/img/",
    options: [
      {
        text: "début",
        action: "goToChapter(`chapter1`)",
      },
    ],
  },

  trois_portes: {
    subtitle: "Trois autres portes",
    text: "Bravo! bonne réponse. Cette fois-ci se trouve 3 porte devant vous, laquelle allez-vous choisir. ",
    img: "assets/img/",
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
    img: "assets/img/",
    options: [
      {
        text: "dévut",
        action: "goToChapter(`chapter1`)",
      },
    ],
  },
  present: {
    subtitle: "La porte du présent",
    text: "En ouvrant la porte , vous apercevez des clé que vous ranger dans votre poche, mais vous etes quand même renvoyé au début. ",
    img: "assets/img/",
    options: [
      {
        text: "début",
        action: "goToChapter(`chapter1`)",
      },
    ],
  },
  keys: {
    subtitle: "Les clés",
    text: "Avez-vous les clés. ",
    img: "assets/img/",
    options: [
      {
        text: "oui",
        action: "goToChapter(`final_door`)",
      },
      {
        text: "non",
        action: "goToChapter(`debut`)",
      },
    ],
  },
  debut: {
    subtitle: "quelque chose manque",
    text: "Sans clés vous ne pouvez pas avancé, vous allez devoir recommencez. ",
    img: "assets/img/",
    options: [
      {
        text: "début",
        action: "goToChapter(`chapter1)",
      },
    ],
  },
  final_door: {
    subtitle: "Dernière portes. ",
    text: "Les deux portes finale se présentent a vous: la vie et la mort. ",
    img: "assets/img/",
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
    img: "assets/img/",
    options: [],
  },
  vie: {
    subtitle: "La porte de la vie",
    text: "En choissisant la porte de la vie le jeu décide de vous redonnez une vie afin que vous puissiez recommencer le labyrhinte. qu'est-ce que c'est chouette!. ",
    img: "assets/img/",
    options: [
      {
        text: "début",
        action: "goToChapter(`chapter1)",
      },
    ],
  },
};
function goToChapter(chapterName) {
  let chapitre = document.querySelector(".title");
  let img = document.querySelector(".img");
  let texte = document.querySelector(".text");
  chapitre.innerText = chaptersObj[chapterName].subtitle;
  texte.innerText = chaptersObj[chapterName].text;
  img.innerHTML = `<img src="${chaptersObj[chapterName].img}" alt= "chapter_img" />`;
  for (
    let index = 0;
    index < chaptersObj[chapterName].options.length;
    index++
  ) {
    let txtButton = "";
    let decision = chaptersObj[chapterName].options[index].action;
    txtButton += `<div class="button"><button type="button" onclick="${chaptersObj[chapterName].options[index].action}">${chaptersObj[chapterName].options[index].text}</button></div>`;
  }
  decision.innerHTML = txtButton;
}

goToChapter(chapter1);

let keyFounded = false;
function again() {
  if (keys > 4) {
    goToChapter("mort");
  } else {
    goToChapter("chapter1");
  }
}
