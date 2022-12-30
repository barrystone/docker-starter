# Docker-starter

Learning docker step by step.

## Docker Comand line (use frequently, Personal notes)

- Build images (with **Dockerfile**)

        docker build -t <Image-name> <relative path on dockerfile>

- Lists all of images

         docker images

- Create & run container

        docker run --name <container-name> <images-name>

- Create & run container with port setting, Detached mod.

        docker run --name <container-name>
        -p <port we want to the map to that container in our computer>:<port expose on the container>
        -d(add  "-d" for without blocking your terminal, Detached mode) <images-name>

        // Example
        docker run --name docker-starter_3 -p 4000:4000 -d docker-starter

- Run existed container

        docker start <container-name>

- Stop the constainer

       docker stop <container-name || container-id>

- Lists all of running container

        docker ps

- Lists all of running container (includeing hidden)

        docker ps -a
