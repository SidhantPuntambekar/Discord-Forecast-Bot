//Loads package.json dependencies
const Discord = require("discord.js");
const dotenv = require("dotenv");
const request = require("request");
const express = require("express");

//Loads environment variables
dotenv.load(); 

//Connects heroku to port
express().listen(process.env.PORT);

//