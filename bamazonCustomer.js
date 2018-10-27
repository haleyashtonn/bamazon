let inquirer = require("inquirer");
let mysql = require("mysql");


//creates connection to MySQL database (bamazon_db)
var connection = mysql.createConnection
({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "testtest",
   database: "bamazon_DB"
 });

 connection.connect(function(err) {
	if (err) throw err;
	
	products();
});
 // run the products function to show inventory when user inputs 'y'
function products() {
    console.log('\n Welcome to my Bamazon store! \n');
    console.log('\n Thanks for connecting! \n');

	inquirer.prompt([
		{
			type: 'confirm',
			name: 'confirm',
			message: "Type 'y' to view the inventory, type 'n'to exit",
			default: true
		}
	]).then(function(input) {
		if (input.confirm) {
			allProducts();
		} else {
			console.log('\nSee you next time!\n');
			connection.end();
		}
	});
}

//aassures only acceptable value will be an integer, otherwise launch return reg

function promptOrder() {
	inquirer.prompt([
		{	
			type: 'input',
			name: 'item',
			message: 'Choose an item from above inventory by inputting respective Item ID number.',
			validate: function integerInput(item) {
						const reg = /^\d+$/;
						return reg.test(item) || 'Please enter item ID number associated with item located under Item ID.';
					}
		},

		{
			type: 'input',
			name: 'itemQuantity',
			message: 'Input quantity of item to purchase',
			validate: function integerInput(itemQuantity) {
						const reg = /^\d+$/;
						return reg.test(itemQuantity) || 'Only numerical values accepted. Please try again.';
					}
		}
	]).then(function(input) {

		let sql = 'SELECT ?? FROM ?? WHERE ?? = ?';
		let values = ['*', 'products', 'id', input.item];
		sql = mysql.format(sql, values);
		connection.query(sql, function(err, results) {
			if (input.itemQuantity <= results[0].stock_quantity) {
				console.log('\nThanks for your order!\n');
				
                //this was an attempt to update the database, though I was able to access the database in node,
                //I wasn't able to update the stock_quantity, I used several sources to piece together this code
                //--also likely why it would not function properly, to be continued
				let userChoice = results[0].stock_quantity - input.itemQuantity;
				let query = connection.query(
					'UPDATE products SET ? WHERE ?',
						[
							{
								stock_quantity: userChoice
							},
							{
								id: results[0].item_id
							}
						],
					function(err, results) {
						
						reorder();
					}
				);

                //shows total after product and quantity have been chosen, beneath here, wanted to show DB updating
                // but was not able to write working code that wouldn't break the app up to this point
				orderTotal = parseFloat((results[0].price * input.itemQuantity).toFixed(2));
				console.log(`Total: $${orderTotal}\n`);
				
				
                // else to prompt user that there is not enough product in stock and require more input values to 
                //continue using the app
				
			} else {
				console.log('\nNot enough in stock. \nPlease pick another item followed by number of items you wish to purchase.\n');
				promptOrder();
			}
		});		
	});
}
//access bamazon_db
function allProducts() {
	let sql = 'SELECT ?? FROM ??';
	let values = ['*', 'products'];
	sql = mysql.format(sql, values);
	connection.query(sql, function(err, results) {
		if (err) throw err;
		for (let i = 0; i < results.length; i++) {
            console.log(` \nItem ID: ${results[i].id}     Product Name: ${results[i].product_name} \n     \n Price: ${results[i].price} \n`);
		}
		promptOrder();
	});
}
// after completed order, prompts to reorder (y) or exit (n)

// buggy, exits after inputting 'y' to reorder
function reorder() {
	inquirer.prompt([
		{
			type: 'confirm',
            name: 'reorder',
			message: 'Would you like to take another look at the inventory?',
			default: true
		}
	]).then(function(input) {
		if (input.orderAgain) {
			allProducts();
		} else {
            console.log('See you next time!');
            
        // ends connectionn
			connection.end();
		}
	});
}
