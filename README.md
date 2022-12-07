# Adding an existing project to GitLab 
`remote_name` is the name of the remote repository in gitlab, you can name it anything you want.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add remote_name https://gitlab.com/username/projectname.git
git push remote_name branch_name
```
Sometimes you have to pull before you can push, if you get an error like this:
```bash
error: failed to push some refs to 'https://gitlab.com/username/projectname.git'
```
# Database setup using docker-compose
You can use docker-compose to setup the database.  
Setup docker-compose.yml file in the root of the project.
```yml
version: "3.7"
services:
    db:
        image: postgres:13-alpine3.17
        restart: always
        environment:
            POSTGRES_DB: postgres
            POSTGRES_USER: "${DB_USER_NAME}" 
            POSTGRES_PASSWORD: "${DB_PASSWORD}" 
            PGDATA: /var/lib/postgresql/data
        volumes:
            - db-data:/var/lib/postgresql/data
        ports:
            - "5432:5432"
    pgadmin:
        image: dpage/pgadmin4:latest
        restart: always
        environment:
            PGADMIN_DEFAULT_EMAIL: "${PG_USER_EMAIL}" 
            PGADMIN_DEFAULT_PASSWORD: "${PG_PASSWORD}" 
            PGADMIN_LISTEN_PORT: 80
        ports:
            - "8080:80"
        volumes:
            - pgadmin-data:/var/lib/pgadmin
        links:
            - "db:pgsql-server"
volumes:
    db-data:
    pgadmin-data:
```
Then use the following command to start the database:
```bash
docker-compose up -d
```