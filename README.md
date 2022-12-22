# Connect to Azure PostgreSQL Database
If you already have a database in Azure, you can connect to it by following the steps below:
1. Modify the `DATABASE_URL` in the `.env` file to your database url.
   The format of the database url is as follows:
   ```
   DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
    ```
2. Please check `DATABASE_URL` and `DATABASE_PASSWORD` in the `.env` file. 

    For example, in your database URL, if your username or password contains `@` character, it should be replaced with its equivalent percent-encoding, that is `%40`. For `#` it is `%23` and so on. 

    Please check [stack overflow](https://stackoverflow.com/questions/63684133/prisma-cant-connect-to-postgresql).

# Migrate data to Azure PostgreSQL Database
## Export data from local database
Right click table in the database and select `view data` - `all row` to export data from local database.

## Import data to database
1. Use Prisma Client to push tables to database.
2. Right click table in the database and select `import data` to import data with csv file.

# Set SEQUENCE
Reset the sequence of the table to the maximum value of the primary key.
```sql
SELECT setval(pg_get_serial_sequence('table_name', 'column_name'), MAX(id)) FROM table_name;
```