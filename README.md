# Docker-starter

Learning docker step by step.

## Docker Comand line (use frequently, Personal notes)

- Create images (with **Dockerfile**)

        docker build -t <Image-name> <relative path on dockerfile>

        // Example
        docker build -t myImage ./api
        // Example with tag version
        docker build -t myapp:v1 ./api
        // Example with nodemon (no volume, after close terminal then delete the container only)
        docker run --name app0_nodemon -p 4000:4000 --rm myapp:nodemon
        // Example with nodemon & volume (Avoid 'node_modules/' get delected to affect running, specified vlolume 'api:/app'. ':' mean wht folder on the container we kind of want to map)
        docker run --name app0_nodemon -p 4000:4000 --rm  -v /Users/<username>/Documents/projects/docker-starter/api:/app -v /Users/<username>/Documents/projects/docker-starter/api/node_modules myapp:nodemon

- Lists all of images

         docker images

- Delete images (Not in use)

         docker image rm <image-name>

- Delete images (in use, force to delete, despite have containers in use for this image)

         docker image rm <image-name> -f

- Create & run container

        docker run --name <container-name> <images-name>

        // Example with vestion(tag)
        docker run --name app1 -p 4000:4000 myapp:v1

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

- Delete container

        docker container rm <container-name>

        // Example (Delete multiple containers)
        docker container rm mycontainer_1 mycontainer_2 mycontainer_3

- Lists all of running container

        docker ps

- Lists all of running container (includeing hidden)

        docker ps -a

- Delete all of images, container, volumes (Clean all, but if container in use and the image of the container can't delete)

        docker system prune -a

- docker-compose with **docker-compose.yaml** file to run (instead of absolute path volume cmd in terminal )

  - Run & Create the container

        docker-compose up

  - Stop & Delete the container

        docker-compose down

  - Stop & Delete the container & images('--rmi all') & volumes(-v)

        docker-compose down --rmi all -v
