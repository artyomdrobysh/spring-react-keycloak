# spring-react-keycloak
Example of implementation OAuth2 using Spring, React and Keycloak

## Structure
Project includes:
- Back-end part
- Front-end part
- Docker setup

## Docker
Docker compose file contains services:
- **database** - postgres based DB for keycloak
- **keycloak** - OAuth provider
- **back-end** - Spring Boot application
- **front-end** - React application

## Use
For working containers you need to create next files/directories:
- ./data/database - directory with start scripts (for creating keycloak user)
- ./data/postgres - directory with Postgres data
- ./data/backend/config - directory for back-end with specific profile
- ./data/nginx/conf - directory with Nginx configs
- .env - file with environment variables

It's recommended to create directories with specific user owned them.
For example, **1001:1001**.

Example of env specific files are located in **example** directory.
