### Shelf Log Backend

## Backend Framework - NestJs

I used nestjs backend framework to create my backend api.

I used nestjs because i'm very comfortable with their opinionated approach to api building.

## Api Design approach

I used a linear api implementation instead of microservices to avoid over complication.

I used books module to manage my books table with services and controllers with separate CRUD responsibilities for each controller.

## Schema Design

I used prisma to create my schema definition and to generate my database client.

## Deployment

I used render.com to deploy my api to a remote server. I used render because I'm both familiar and comfortable with it.

## Database

I used postgresql as a RDBMS and deployed it on neon.tech.

In my database I created two tables, books and notes.
I created a books table to record all the books created by the user.
I used the notes table to record all the notes created by the user, I linked the two tables using a one to many relationship using the bookId as a foreign key.

## Other notes

I used a pagination utility package to simplify my pagination process.

I used class-validator to validate my data.
