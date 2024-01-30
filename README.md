# Fast Drinks 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Introduction

Welcome to the Angular 17 Cocktail Explorer App! This application leverages the latest control flow syntax from Angular 17 it consumes data from two endpoints of an API that offers a rich exploration of alcoholic beverages.

## Features

- Consumes API Endpoints:
  - [Filter by Alcoholic](https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic)
  - [Lookup by ID](https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=id)
- Relays on service injection to supply the confguration input values from the `config.json` file. 
- Components like the header are then using @HostBinding with custom css properties to apply the respective configuration value to the UI. 

So to make the UI configurable from a .json file we only two utilities from the Angular rich APIs to adopt to change: @Injectable + @HostBinding + css custom properties. 

In a large project I would prefer to optimize the implementation by using scss + a factory method that will allow me on application bootstrap / initialization to adopt the UI components / libraries / applications (in micro-frontend setting) to the change in one go instead of multiple service injection. Such as switch theme and build menus based on a Tenant ID in a multitenancy application. The confi.json here can be a remote endpoint linked to an external system such as a back-office dashboard in SAP setup that will allow non technical people to configure the look and feel of the app based on the available options.


For this app, the config.json demostrates this adoptability via three key-value pairs for simplicity and due to time shortage I kept it very minimal and simple with some notes. 


## Project Structure

