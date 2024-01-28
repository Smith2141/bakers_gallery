export default {
  state: {
    bakery_products: [
      {
        id: 1,
        title: "Французская булка",
        description:  "Пшеничный хлеб. Малый 400-450 гр. большой 800-900 гр.",
        composition: "мука, соль, вода",
        picture: "images/test1.png",
      },
      {
        id: 2,
        title: "Тыквенный",
        description:  "Пшеничный хлеб на тыквенном пюре. Малый 400-450 гр. большой 800-950 гр.",
        composition: "мука, соль, вода",
        picture: "images/test2.jpg",
      },
      {
        id: 3,
        title: "Пшеничный",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/test2.jpg",
      },
      {
        id: 4,
        title: "Десертный ржаной",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/test2.jpg",
      },
      {
        id: 5,
        title: "Хоккайдо",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/test2.jpg",
      },
      {
        id: 6,
        title: "Дарницкий",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/test2.jpg",
      },
      {
        id: 7,
        title: "Тартин",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/test2.jpg",
      },
      {
        id: 8,
        title: "Прованс",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/test2.jpg",
      },
      {
        id: 9,
        title: "Печенье «Пряная тыква»",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/test2.jpg",
      },
      {
        id: 10,
        title: "Шоколадная баба",
        description: "Вкусный хлеб на закваске с семенами чиа, длительного брожения",
        composition: "мука, соль, вода",
        picture: "images/test2.jpg",
      },
    ],
  },

  mutations: {},

  actions: {},

  getters: {
    bakeryProductsGetter(state) {
      return state.bakery_products;
    },
  },
};
