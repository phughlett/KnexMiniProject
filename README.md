##Knex Mini Project
words...

## Folder Structure

```
/database
  controllers.js -- business logic for handling API endpoints
  dbconnection.js

/migrations
  20220308202825_create_passing.js
  20220308202838_create_rushing.js

/seeds
  passing_seed.js
  passing.csv
  rushing_seed2.js
  rushing.csv

.gitignore
app.js
index.js
knexfile.js
package-lock.json
package.json
README.md
```

## Installation Instructions

Fork and Clone the repo to make your own local copy.

### Packages to install

Packages are included in the package.json and can be installed with:
```npm install``
OR

you can install the specific packages we've used with:
```npm i pg express knex morgan dotenv```

### Postgres Server

You need to spin out the postgress server
You can do this all through WSL. No need to switch to Powershell.
1. Get the docker image

```docker pull postgres```

2. Ensure your containers have a volume directory

```mkdir -p $HOME/docker/volumes/postgres```

3. Start a docker container instance

```docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres```

4. Find the id of your container:

```docker ps -a```

5. Enter the shell of your container

```docker exec -it <PSQL-Container-ID> bash```

6. Create a database to work with

```createdb -U postgres <db-name>```

7. Enter the postgres CLI

```psql -U postgres```

8. connect to your new database

```\c <db-name>```


## API Instrucations

### GET
There are two different get options.  All data OR a specific record.

```/rushing```
Returns JSON object containing all rushing records.

```/passing```
Returns JSON object containing all passing records.

```
{
  "id":1,
  "Player":"Gardner Minshew",
  "Team":"WSU",
  "Att":"662",
  "Cmp":"468",
  "Pct":"70.7",
  "Yds":"4776",
  "YPA":"7.2",
  "TD":"38",
  "TD_percentage":"5.7",
  "Int":"9",
  "Int_percent":"1.4",
  "Lg":"89t",
  "Sack":"13",
  "Loss":"75",
  "Rate":"147.5",
  "Stat Type":"Passing"

}
```

```/rushing/playerId```
Returns JSON object containing a single rushing record of a specific player based on ID.

```/passing/playerId```
Returns JSON object containing a single passing record of a specific player based on ID.
```
{
  "id":1,
  "Player":"Gardner Minshew",
  "Team":"WSU",
  "Att":"662",
  "Cmp":"468",
  "Pct":"70.7",
  "Yds":"4776",
  "YPA":"7.2",
  "TD":"38",
  "TD_percentage":"5.7",
  "Int":"9",
  "Int_percent":"1.4",
  "Lg":"89t",
  "Sack":"13",
  "Loss":"75",
  "Rate":"147.5",
  "Stat Type":"Passing"

}
```

### PATCH

### POST

### DELETE