/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
		//Declare Variables
		var tstScr = prompt("Enter your test score from 0 to 100"); // Test Score
		var grade; 					// Grade dependent of score
		
		// Calculate the Grade
		grade=(tstScr>=90)?"A":
			(tstScr>=80)?"B":
			(tstScr>=70)?"C":
			(tstScr>=60)?"D":"F";
		
		// Output the results
		
		var str = "<h1>Test Score = " + tstScr + "</h1>";
			str += "<h1>Grade = " + grade + "</h1>";
			document.write(str);


