// Type of coffee:
// 1. Americano
// 2. Cappuccino

// Size of cup:
// 1. Small
// 2. Medium
// 3. Big

// Recipe americano:
// 1. Grind arabica beans in a coffee grinder
// 2. Pour water into Bialetti
// 3. Pour arabica beans into Bialetti
// 4. Collect Bialetti and put on the stove
// 5. Pour coffee into a glass

// Recipe cappuccino:
// 1. Grind arabica beans in a coffee grinder
// 2. Pour water into Bialetti
// 3. Pour arabica beans into Bialetti
// 4. Collect Bialetti and put on the stove
// 5. Pour coffee into a glass
// 6. Add milk to coffee


// Border
console.log('===============================================')

// Welcome message
console.log('Welcome to the cafe!')


///// Sandwich coffee
let coffeeMaker = "Bialetti";
let liquid1 = "water";
let liquid2 = "milk";
let coffee = "arabica beans";

///// Recipe of coffee
let stepOfCoffee1 = `1. Grind ${coffee} in a coffee grinder`;
let stepOfCoffee2 = `2. Pour ${liquid1} into ${coffeeMaker}`;
let stepOfCoffee3 = `3. Pour ${coffee} into ${coffeeMaker}`;
let stepOfCoffee4 = `4. Collect ${coffeeMaker} and put on the stove`;
let stepOfCoffee5 = `5. Pour coffee into a glass`;
let stepOfCoffee6 = `6. Add ${liquid2} to coffee`;



///// Type of coffee
class Coffee {
  constructor(name) {
    this.name = name;
    this.topping1 = liquid1;
    this.topping3 = liquid2;

  }

  getRecipeCoffee(typeOfCoffee) {
    let recipeMessage;
    if (typeOfCoffee == 'americano') {
      recipeMessage = `\nYou choose americano.\n\nDrink recipe:\n${stepOfCoffee1}\n${stepOfCoffee2}\n${stepOfCoffee3}\n${stepOfCoffee4}\n${stepOfCoffee5}`;
    } else if (typeOfCoffee == 'cappuccino') {
      recipeMessage = `\nYou choose cappuccino.\n\nDrink recipe:\n${stepOfCoffee1}\n${stepOfCoffee2}\n${stepOfCoffee3}\n${stepOfCoffee4}\n${stepOfCoffee5}\n${stepOfCoffee6}`;
    }
    return console.log(recipeMessage);
  }

  getPriceCoffee(sizeOfCup) {
    let priceMessage;
    if (sizeOfCup == 'small') {
      priceMessage = "\nPrice: 100 Rub.";
    } else if (sizeOfCup == 'medium') {
      priceMessage = "\n\nPrice: 120 Rub.";
    } else if (sizeOfCup == 'big') {
      priceMessage = "\n\nPrice: 150 Rub.";
    } else {
      priceMessage = "\n\nYou may choose only one of three size of cup: small, medium or big!";
    }
    return console.log(priceMessage);
  }
}


let coffee1 = new Coffee('cappuccino');
coffee1.getRecipeCoffee('cappuccino'); 
coffee1.getPriceCoffee('small'); 


// Border
console.log('===============================================')


///// Sandwich ingredients
let bread = "slice of bread";
let topping1 = "salad leaf";
let topping2 = "ham";
let topping3 = "cheese";

///// Recipe of sandwich
let stepOfSandwich1 = `1. Get ${bread}`;
let stepOfSandwich2 = `2. Put ${topping1}`;
let stepOfSandwich3_1 = `3. Put ${topping2}`;
let stepOfSandwich3_2 = `3. Put ${topping3} on top`;

///// Type of sandwich
class Sandwich {
  constructor(name, topping1, topping2) {
    this.name = name;
    this.topping1 = topping1;
    this.topping1 = topping2;
  }

  getRecipeSandwich(typeOfSandwich) {
    let recipeMessage;
    if (typeOfSandwich == 'ham sandwich') {
      recipeMessage = `\nYou choose ham sandwich.\n\nRecipe:\n${stepOfSandwich1}\n${stepOfSandwich2}\n${stepOfSandwich3_1}`;
    } else if (typeOfSandwich == 'cheese sandwich') {
      recipeMessage = `\nYou choose cheese sandwich.\n\nRecipe:\n${stepOfSandwich1}\n${stepOfSandwich2}\n${stepOfSandwich3_2}`;
    }
    return console.log(recipeMessage);
  }

  getPriceSandwich(typeOfSandwich) {
    let priceMessage;
    if (typeOfSandwich == 'ham sandwich') {
      priceMessage = "\nPrice: 150 Rub.";
    } else if (typeOfSandwich == 'cheese sandwich') {
      priceMessage = "\n\nPrice: 120 Rub.";
    } else {
      priceMessage = "\n\nYou may choose only one of two types of sandwich: ham sandwich, cheese sandwich!";
    }
    return console.log(priceMessage);
  }
}

let sandwich1 = new Sandwich('ham sandwich', 'salad leaf', 'ham');
sandwich1.getRecipeSandwich('cheese sandwich');
sandwich1.getPriceSandwich('cheese sandwich'); 

// Border
console.log('===============================================')


