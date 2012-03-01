# Dragon.js v0.0.1

## Usage
To use Dragon.js simply grab either of the following from deploy/

		dragon.js
		dragon.min.js

## Description
Dragon.js was inspired by the PHP framework CodeIgniter and bits of Backbone.js. It was created to aid in the development of dynamic web sites and apps. The aim of the project is a simple way to organize the strcuture of the code as well as manage the relationship between complex models and views through controllers. If you have used a MVC framework similar to CodeIgniter you will feel right at home.

Dragon.js aims to beef up views by allowing for existing elements to be binded to a view. Dragon.js can also automatically render templates that are located on a remote source; no need to embed them or use underscore, handlebars, etc.

We hope you find this to be a simple framework to use. There are much more powerful Javascript frameworks out there; this is not aimed for enterprise. It is aimed for small web apps that are looking for more structure that what jQuery can offer. You are welcome to user jQuery along side Dragon.js but it is not required.

## Goals
Dragon.js has the following goals:

1. To make Javascript MVC simple

## Tools
### To run all tests (requires node.js and npm):

		npm install
		make

### To build a version (requires node.js):

		node build/build.js