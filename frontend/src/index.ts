import greet from './greeter'
import * as $ from "jquery";


// Stylesheets

import "./scss/base.scss";

$(function(){
	let greeting: string = greet("Hi Rehman")
	if (typeof document !== "undefined") {
	  var el = document.createElement("h1")
	  el.innerHTML = greeting
	  $(document.body).append(el)
	} else {
	  console.log(greeting)
	}
})

