This is the documentation for the Programming Assignment for Backend Developer
for Guilherme Gomes.

The "Database Model" folder contains the first part.
The "Service" folder contains the actual nodejs implementation for the second part.


Docker Instructions:

If you want to build without cloning the repo:

docker run --name repo alpine/git clone https://github.com/guilhermegrg/Canida.git

docker cp repo:/git/Canida/ .

cd .\Canida\Service\

docker build -t canida .



To run the docker image:
docker run -d -p 4321:4321 --name guilhermegrg_canida canida






If you want to build locally from the source code, go into the Canida/Service folder. Then

To build the docker image:
docker build . -t guilhermegrg/canida

To run the docker image:
docker run -p 4321:4321 -d guilhermegrg/canida







API Documentation via Swagger:
http://localhost:4321/api/v1/docs/#/

