# apiCrudUsers
Creating an REST API using SOLID concepts and implements test suite

## Tests suite

### src\entities\User.spec.ts
##### Create an user
- Must be able to create a user instance and validate the name on the instance

##### Email is required
- Must validate that a user instance has an email

##### Email without @ is not valid
- Must validate that the e-mail sent contains an @

### src\useCases\CreateUser\CreateUserUseCase.spec.ts

##### Should be able to create an user
- Must be able to receive user attributes and return a user instance

##### Should not be able to create a user with already used email
- Must validate that an email is registered only once

##### Should not be able to create a user with invalid email

###### Must validate that the email meets the requirements
- The email must contain an @
- The email must have a valid domain
- The local part can be a maximum of 64 characters in length
- The domain name consists of one or more parts separated by a dot. Each part can be a maximum of 63 characters

##### Should not be able to create a user without email
- Should not be able to create a user without email

### src\useCases\GetUser\GetUserUseCase.spec.ts
##### Read an user
- Should be able to create an user
- Must be able to read user via email

### src\useCases\ListUsers\ListUsersUseCase.spec.ts
##### List users
- Must be able to create multiple users
- Must be able to list users