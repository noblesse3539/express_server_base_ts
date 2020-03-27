# Skeleton of Node.js with Express, Typescript, Docker(docker-compose), MySQL(ORM: Sequelize) 



## 1. Prerequisite

- [Docker](<https://docs.docker.com/get-docker/>)

- (**only linux**) [Docker-compose](<https://docs.docker.com/compose/install/>)



## 2. How to use

1. server(`:3000`)

    ``` bash
    # build(optional)
    $docker-compose build

    # run
    $docker-compose up -d # -d: detach

    # stop
    $docker-compose down

    # remove db volume
    $docker-compose down -v

    ```

2. Jenkins(`:8080`)

   ``` bash
   # at server/jenkins/
   $docker-compose up
   ```

   

## 3. To do

- [ ] Write Jenkinsfile.