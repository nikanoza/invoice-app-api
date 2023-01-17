## Invoice App APi

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)

#

### Prerequisites

- Node JS @16.X and up
- npm @8 and up
- Typescript @4 and up

#

### Tech Stack

- body-parser @ 1.20.1 - Node.js body parsing middleware
- dotenv @ 16.0.3 - zero-dependency module that loads environment variables from a .env file
- express @ 4.18.2 - web framework for node
- joi @ 17.7.0 - schema description language and data validator for JavaScript
- mongodb @ 4.12.0 - document database
- mongoose @ 6.7.2 - MongoDB object modeling tool
- swagger @ 4.6.0 - module provides tools for designing and building Swagger-compliant APIs entirely in Node.js
- yaml @ 0.3.0 - yaml is a definitive library for YAML, the human friendly data serialization standard

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/nikanoza/invoice-app-api.git
```

2. Next step requires install all the dependencies.

```
npm install
```

3. Also you need to create .env file where copy information from .env.example file

```
cp .env.example .env
```

4. To create your own database, need to create new local connection, host would be localhost.
   also you need to replace variables values in .env file, or you can generate mongo atlas url with user and password

#

### Project Structure

```
|--- src
|   |--- config # configuration files
|   |---|--- mongo.ts # perform mongoDb connection
|   |---|--- swagger.yaml # swagger configuration file
|   |--- controller.ts # functions for routes
|   |--- invoice.ts # mongoose model for mongoDb
|   |--- router.ts # project routes
|   |--- invoice-schema.ts # Joi validation schema file
|   |--- server.ts # main file
- package.json # dependency manager configurations
```
