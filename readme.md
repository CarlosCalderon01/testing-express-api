
# INSTRUCCIONES

- git init

# COMMANDS LIST

- npm init --yes
- npm install [package]
- npm uninstall [package]
- npm update [package]
- npm install --save-dev [package]
- npm install --save--production [package]

- PROJECT:
    - npm list

- ESLINT:
    - npm install --save-dev eslint
    - npx eslint --init
    - npx eslint .
    - npx eslint . --fix

- EXPRESS:
    - npm install --save--production express (NOTE: Framework)

- NODEMON:
    - npm install --save-dev nodemon

- SEQUELIZE (ORM)
    - npm install --save--production sequelize (NOTE: ORM)
    - npm install --save--production sequelize-cli (NOTE: Tools For ORM)
    - npm install --save pg pg-hstore (NOTE: Controller)
    - sequelize init

    - npm install -g sequelize-cli (Recomiendo instalacion global)
    - npm install mysql2 (agregar al excel)

- How to make a model?
    
    - npx sequelize-cli model:generate --name nameTable --attributes nickName:STRING,email:STRING,birthdate:DATE,password:TEXT

- HOW TO MAKE MIGRATE MODELS TO DB:

    - npx sequelize-cli migration:generate --name ModelGmtGenderV01 // NOTE FOR DEV: GENERATE TABLE SPECIFIC

    - npx sequelize-cli db:migrate:status // NOTE FOR DEV: GENERATE TABLE SPECIFIC

    - npx sequelize-cli db:migrate // NOTE FOR DEV: MIGRATE ALL DB

    - npx sequelize-cli db:migrate --config src\config\config.json (ReConfig path for migrate)

    - db:migrate:undo ()


# Manual

# BiBliografia
