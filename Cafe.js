// Виды кофе:
// 1. Американо
// 2. Каппучино

// Размер стаканчика:
// 1. Small
// 2. Medium
// 3. Big

// Рецепт американо:
// 1. Помолоть зерна
// 2. Налить воду в кофеварку
// 3. Помолотые зерна насыпьте в кофеварку
// 4. Собрать кофеварку (гейзерную) и поставить на плиту
// 5. Налить кофе в стакан

// Рецепт каппучино:
// 1. Помолоть зерна
// 2. Налить воду в кофеварку
// 3. Помолотые зерна насыпьте в кофеварку
// 4. Собрать кофеварку (гейзерную) и поставить на плиту
// 5. Налить кофе в стакан
// 6. Добавить молоко


///// Ингридиенты для кофе
let coffeeMaker = "Bialetti";
let liquid1 = "воду";
let liquid2 = "молоко";
let coffee = "зерна арабики";


///// Рецепт кофе
let stepOfCoffee1 = `1. Перемолоть ${coffee} в кофемолке`;
let stepOfCoffee2 = `2. Налить ${liquid1} в ${coffeeMaker}`;
let stepOfCoffee3 = `3. Молотые ${coffee} насыпать в ${coffeeMaker}`;
let stepOfCoffee4 = `4. Собрать ${coffeeMaker} и поставить на плиту`;
let stepOfCoffee5 = `5. Налить кофе в стакан`;
let stepOfCoffee6 = `6. Добавить в кофе ${liquid2}`;


///// Цена кофе
class PriceCoffee {
    constructor(name) {
      this.name = name;
    }
    getPriceCoffee(sizeOfCup) {
        let priceMessage;
        if (sizeOfCup == 1) {
          priceMessage = "\nЦена вашего напитка: 100 руб.";
        } else if (sizeOfCup == 2) {
          priceMessage = "\n\nЦена вашего напитка: 120 руб.";
        } else if (sizeOfCup == 3) {
          priceMessage = "\n\nЦена вашего напитка: 150 руб.";
        } else {
          priceMessage = "\n\nВведите верно размер стаканчика!";
        }
        return console.log(priceMessage);
      }
  }
  
  let priceCup = new PriceCoffee('Маленький стаканчик');
  priceCup.getPriceCoffee(1); // 1 - маленький стаканчик, 2 - средний стаканчик, 3 - большой стаканчик


///// Вид кофе
class Coffee {
  constructor(name) {
    this.name = name;
  }
  getRecipeCoffee(typeOfCoffee) {
    let recipeMessage;
    if (typeOfCoffee == 1) {
      recipeMessage = `\nВы выбрали американо!\n\nРецепт приготовления напитка:\n${stepOfCoffee1}\n${stepOfCoffee2}\n${stepOfCoffee3}\n${stepOfCoffee4}\n${stepOfCoffee5}`;
    } else if (typeOfCoffee == 2) {
      recipeMessage = `\nВы выбрали каппучино!\n\nРецепт приготовления напитка:\n${stepOfCoffee1}\n${stepOfCoffee2}\n${stepOfCoffee3}\n${stepOfCoffee4}\n${stepOfCoffee5}\n${stepOfCoffee6}`;
    }
    return console.log(recipeMessage);
  }
}

let coffee1 = new Coffee('Американо');
coffee1.getRecipeCoffee(1); // 1 - американо, 2 - каппучино


///// Ингридиенты для сэндвича
let bread = "ломтик хлеба";
let topping1 = "лист салата";
let topping2 = "ветчину";
let topping3 = "сыр";

///// Рецепт сэндвича
let stepOfSandwich1 = `1. Взять ${bread}`;
let stepOfSandwich2 = `2. Положить ${topping1}`;
let stepOfSandwich3_1 = `3. Положить ${topping2}`;
let stepOfSandwich3_2 = `3. Положить сверху ${topping3}`;

///// Вид сэндвича
  class Sandwich {
    constructor(name) {
      this.name = name;
    }
    getRecipeSandwich(typeOfSandwich) {
      let recipeMessage;
      if (typeOfSandwich == 1) {
        recipeMessage = `\nВы выбрали сэндвич с ветчиной!\n\nРецепт приготовления:\n${stepOfSandwich1}\n${stepOfSandwich2}\n${stepOfSandwich3_1}`;
      } else if (typeOfSandwich == 2) {
        recipeMessage = `\nВы выбрали сэндвич с сыром!\n\nРецепт приготовления:\n${stepOfSandwich1}\n${stepOfSandwich2}\n${stepOfSandwich3_2}`;
      }
      return console.log(recipeMessage);
    }
  }
  
  let sandwich1 = new Sandwich('Сэндвич с ветчиной');
    sandwich1.getRecipeSandwich(1); // 1 - сэндвич с ветчиной, 2 - сэндвич с сыром


  ////// Итоговая цена заказа

