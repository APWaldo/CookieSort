/**
 * @author AnnieWaldman
 */

		/*
			 * The purpose of this program is to create a list of cookies with specific properties. From that list, we
			 * will create two new lists, one of my favorites and one of the rest.
			 *
			 */
			var myCookies = [{
				"name" : "Oreo",
				"shape" : "round"
			}, {
				"name" : "Chips Ahoy",
				"shape" : "round"
			}, {
				"name" : "Lorna Doone",
				"shape" : "square"
			}, {
				"name" : "Fig Newtons",
				"shape" : "square"
			}];

			console.log(myCookies);
			
			/*
			 * These are my two new lists.
			 */
			
			var myFaves = [];
			var theRest = [];
			
			/*
			 * For every item in my list, check its shape. If it's round, add to faves. If not, add to theRest. Now we will
			 * create a code that makes this happen.
			 */
			
			for(var i=0; i<myCookies.length; i++) {
			//console.log(i);
			var currentCookie = myCookies [i];
			//console.log (currentCookie);
			if (currentCookie.shape == "square") {
				//console.log(currentCookie);
			//Because shape is square, add the currentCookie to myFaves list.
				myFaves.push(currentCookie);
			//If not square, then add the currentCookie to theRest list.
			} else {
				theRest.push(currentCookie);
			} //this is the end of my if else statement.
			} //this is the end of the for loop.
		// Printing out the two new groups of cookies.
		console.log ("Finished Lists");
		console.log(myFaves);
		console.log(theRest);

