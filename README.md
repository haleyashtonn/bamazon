# mySQL- Customer Bamazon app 

## Setup:

1. Clone repository

2. You will need to use MySQL open source software to run this app (I am using MySQL Workbench) in order to access your unique credentials to add to connection section of the bamazonCustomer.js file

    * This section appears like so in my JS file
    
        host: "localhost",
        port: 3306,
        user: "root",
        password: "testtest",
        database: "bamazon_DB"
    
3. From here, open the 'bamazonSchema.sql' file in MySQL Workbench and run the file to generate your database

4. You will need a couple npm packages in order to properly rin this app

    * 'npm i'
    * 'npm i mysql'
    * 'npm i inquirer'
    
    ## Walkthrough of Usage
    
    1. Once everything has been properly loaded, we can launch the app in the terminal by inputting:
    
        ' node bamazonCustomer.js'
    
    2. A short welcome statement will appear upon loading:
    
    ![GitHub Logo](/images/SS1.png)
    
    * After inputting "y" to launch the app, the inventory will appear
    
    ![GitHub Logo](/images/SS2.png)
    
    3. You may now choose which items you'd like to order by inputting the unique user ID associated with each item into the command line
    
    ![GitHub Logo](/images/SS3.png)
    
    4. 
    
        

