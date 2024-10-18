//- Grocary List Manager

let groceryItems  = []

let item1 = {
    name : 'Mangoes',
    quantity : 12,
    purchased : false,
    costPerUnit : 25,
};

let item2 = {
    name : 'PineApples',
    quantity : 15,
    purchased : true,
    costPerUnit : 50,
};

let item3 = {
    name : 'Bananas',
    quantity : 24,
    purchased : false,
    costPerUnit : 5,
};

groceryItems[0] = item1;
groceryItems[1] = item2;
groceryItems[2] = item3;

console.log('Grocary List :'  );
console.table(groceryItems);

groceryItems[0] = null;

groceryItems[2].purchased = true;

let item4 = {
    name : 'WaterMelon',
    quantity : 2,
    purchased : true,
    cost : 50,
};

groceryItems[3] = item4;

console.table(groceryItems);

groceryItems[4] = undefined;

console.log('Undefined Grocary Items List : ', groceryItems);

console.log('\n Total cost of the grocarry : ');
console.log('Total cost of item2 - PineApples', groceryItems[1].quantity * groceryItems[1].costPerUnit);
console.log('Total Cost of Item3 -Bananas', groceryItems[2].quantity * groceryItems[2].costPerUnit);


const totalItemsCost = groceryItems[1].quantity * groceryItems[1].costPerUnit +
                       groceryItems[2].quantity * groceryItems[2].costPerUnit

console.log('Total cost of All Items: ', totalItemsCost);

