/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var word = "bottles";
var count = 99;
    
    while (count > 0) {
        document.write(count + " " + word + " of beer on the wall<br>");
        document.write(count + " " + word + " of beer,<br>");
        document.write("Take one down, pass it around,<br>");
        count--;   
        if (count > 0) {
            document.write(count + " " + word + " of beer on the wall.<br>");
        } else {
            document.write("No more " + word + " of beer on the wall.<br>");
        }
    }