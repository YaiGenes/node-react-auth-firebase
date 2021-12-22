import { initializeApp } from "firebase/app";
import "firebase/auth";
import config from "./config/config.js";

const app = initializeApp(config.fireBase);

console.log(config.fireBase);
