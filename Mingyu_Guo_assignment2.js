const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//Question 1
function first() {
  const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
  ];

  let array1 = itemsObject.map((itemsObject) => {
    let properties = {
      quantity: itemsObject.quantity * 2,
      price: itemsObject.price * 2,
    };
    return properties;
  });
  console.log(array1);
}

first();

//Question 2
function second() {
  const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
  ];
  let array2 = itemsObject.filter(
    (itemsObject) => itemsObject.quantity > 2 && itemsObject.price > 300
  );
  console.log(array2);
}

second();

//Question 3
function third() {
  let totalValue = itemsObject.reduce(
    (accum, obj) => accum + obj.quantity * obj.price,
    0
  );
  console.log("Total value of the items is " + totalValue);
}

third();

//Question 4
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

function remove() {
  let newString = string.toLowerCase();
  let finalString = newString.replace(/[^a-z]/gi, "");

  console.log(finalString);
}

remove();
