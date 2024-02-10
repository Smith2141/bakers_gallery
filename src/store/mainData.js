export default {
  state: {
    rye_bread: [
      {
        id: 1,
        title: "Десертный ржаной",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/1-rye-bread/1-1-desertnyj-s-suhofruktami.webp",
      },
      {
        id: 2,
        title: "Дарницкий",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/1-rye-bread/1-2-darnickij.webp",
      },
      {
        id: 3,
        title: "Ржаное чудо",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/1-rye-bread/1-3-rzhanoe-chudo.webp",
      },

    ],
    wheat_bread: [
      {
        id: 1,
        title: "Французская булка",
        description: "Пшеничный хлеб. Малый 400-450 гр. большой 800-900 гр.",
        composition: "мука, соль, вода",
        picture: "images/2-wheat-bread/2-1-francuzskaya-bulka.webp",
      },
      {
        id: 2,
        title: "Тыквенный",
        description: "Пшеничный хлеб на тыквенном пюре. Малый 400-450 гр. большой 800-950 гр.",
        composition: "мука, соль, вода",
        picture: "images/2-wheat-bread/2-2_tykvennyj.webp",
      },
      {
        id: 3,
        title: "Пшеничный",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/2-wheat-bread/2-3-pshenichnyj.webp",
      },
      {
        id: 4,
        title: "Хоккайдо",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/2-wheat-bread/2-4-hokkajdo.webp",
      },
      {
        id: 5,
        title: "Тартин",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/2-wheat-bread/2-5-tartin.webp",
      },
      {
        id: 6,
        title: "Прованс",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/2-wheat-bread/2-6-provans.webp",
      },
      {
        id: 7,
        title: "Луковый",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/2-wheat-bread/2-7-lukovyj.webp",
      },
    ],
    cookies: [
      {
        id: 1,
        title: "Печенье «Пряная тыква»",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/3-cookies/3-1-pryanaya-tykva.webp",
      },
      {
        id: 2,
        title: "Штоллен",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/3-cookies/3-2-shtollen.webp",
      },
      {
        id: 3,
        title: "Печенье овсяно-шоколадное",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/3-cookies/3-3-ovsyano-shokoladnoe.webp",
      },
    ],
  },

  mutations: {},

  actions: {},

  getters: {
    bakeryRyeGetter (state) {
      return state.rye_bread
    },
    bakeryWheatGetter (state) {
      return state.wheat_bread
    },
    bakeryCookiesGetter (state) {
      return state.cookies
    },
  },
}
