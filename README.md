# gateway

## Requirments

- [Node](https://nodejs.org/)
- [DotNet](https://dotnet.microsoft.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Frontend

The frontend is a React Aplication that allows an user to keep track of a list of gateways and its associated peripherals.

### Testing

This project was made following Test Driven Development methodology. This approach encourages to start the deployment of a project by designing tests first for small functionalities and then writing the code needed to pass those tests.

For testing purposes, was used Jest and Enzyme, both JavaScript frameworks. Unit Testing was created for each react component, and some snapshots were added at the end of the deployment in order to avoid the UI to change unexpectedly.

To run tests:

- Go to gateway/gateway-client.

```
yarn install
yarn test
```

## Backend

The application was build with ASP.NET core, with in-memory database. It expose a RESTful API that allows to manage the resources and their relationships.

### Resources

The application is composed of Gateways and Peripherals, the first having a list of associated peripherals, through the gatewawId field.

## Build & Deploy

```
docker-compose up
```

Open `http://localhost:9000`

## Manual Build

- Go to gateway/gateway-api.

```
dotnet restore
dotnet run
```

- Go to gateway/gateway-client.

```
yarn install
yarn build
```

- Open `http://localhost:5000/swagger/index.html` to test the API.
