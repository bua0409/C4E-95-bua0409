const WORDS = [
  "to",
  "be",
  "that",
  "of",
  "elon",
  "to",
  "this",
  "now",
  "back",
  "cool",
  "hey",
  "love",
  "of",
  "life",
  "that",
  "rain",
  "summer",
  "color",
  "now",
  "of",
  "hat",
  "late",
  "sorry",
  "my",
  "team",
];
let countWords = 0;
let sameWords = 0;
while (countWords < WORDS.length) {
  for (let i = 0; i < WORDS.length; i++) {
    if (WORDS[i] == WORDS[countWords]) {
      sameWords += 1;
    }
  }
  console.log(WORDS[countWords] + sameWords);
  sameWords = 0;
  countWords += 1;
}

const inventory = [
  {
    name: "HP Envy 13aq",

    price: 21000,

    brands: "HP",

    quantity: 5,
  },

  {
    name: "Dell XPS 9370",

    price: 30000,

    brands: "Dell",

    quantity: 1,
  },

  {
    name: "Dell Inspiron 3567",

    price: 9300,

    brands: "Dell",

    quantity: 12,
  },

  {
    name: "Dell Latitude E5450",

    price: 8600,

    brands: "Dell",

    quantity: 2,
  },

  {
    name: "Asus Zenbook",

    brands: "Asus",

    price: 20000,

    quantity: 4,
  },

  {
    name: "HP Pavilion",

    brands: "HP",

    price: 14000,

    quantity: 7,
  },
];

let inventorysbrands = {};
for (let i = 0; i < inventory.length; i++) {
  let { brands } = inventory[i],
    brandsArray = brands.toLocaleLowerCase();
  if (inventorysbrands[brandsArray]) {
    inventorysbrands[brandsArray].push(inventory[i]);
  } else {
    inventorysbrands[brandsArray] = [inventory[i]];
  }
}
console.log(inventorysbrands);

const userBrand  = prompt("Which brands? ");
let List = "";
let Price = 0;
let size = 0;
userBrand .toLowerCase();

for (let i = 0; i < inventory.length; i++) {
  let { brands, name, price, quantity } = inventory[i],
    brandsNames = brands.toLocaleLowerCase();

  if (userBrand  === brandsNames) {
    nameList += name + "\n";
    let priceForOne = price * quantity;
    Price += priceForOne;
    size = inventorysbrands[brandsNames].length;
  }
}

