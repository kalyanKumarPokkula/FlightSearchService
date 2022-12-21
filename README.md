- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a .env file in the root directory and add the following enviroment variable -`PORT=3000`
- Inside the src/config folder create a new file config.json and then add the following piece of json
- use `npx sequelize init` it will create the folder in your project
```
{
  "development": {
    "username": "root",
    "password": "Kalyan#123",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you're added your db config as listed above. go to the src folder from your terminal and execute `npx sequelize db:create`

## DB Design
   - Airplane Table
   -  Flight
   - Airport
   - city


