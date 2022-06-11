This is the documentation for the Programming Assignment for Backend Developer
for Guilherme Gomes.

The "Database Model" folder contains the first part.
The "Service" folder contains the actual nodejs implementation for the second part.

To build the docker image:
docker build . -t guilhermegrg/canida

To run the docker image:
docker run -p 4321:4321 -d guilhermegrg/canida

API Documentation via Swagger:
http://localhost:4321/api/v1/docs/#/

