'use strict';

//Get element by id
var $ = function (foo) {
    return document.getElementById(foo);
}

var createNewCanvas = $("create");


//Byg rum
function createRoom() {
  

        let d1 = document.createElement('div'); // create table row in html
        let canvas1 = document.createElement('canvas'); // creates the table data
        let width = $("width").value;
        let height = $("height").value;
        
        d1.appendChild(canvas1); // input table content
        canvas1.setAttribute('id', 'mycanvas'); // input table data in to a row
        canvas1.setAttribute('width', width); // change varible
        canvas1.setAttribute('height', height);
        $('myCanvas1').appendChild(canvas1); // input to table in html file
    
}


function reset() {
    let element = $('mycanvas');
    element.parentNode.removeChild(element);
    $('dimensions').reset();
}

