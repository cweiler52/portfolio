// WORk :: closures | let | const
const work = 'closures'; 

switch (work){
	
	// CLOSURES
	case 'closures':
		var calculateTotalWithTip = function (totalWithoutTip, tipPercentage) {
			let totalWithTip;
			
			function calculateTip(totalWithoutTip, tipPercentage){
				let tipAmount = totalWithoutTip * tipPercentage;
				return tipAmount;
			}
			totalWithTip = calculateTip(totalWithoutTip, tipPercentage) + totalWithoutTip;
			return totalWithTip;
		}

		var totalAmountWithTip = calculateTotalWithTip(100, .20);
		console.log('totalAmountWithTip: $'+totalAmountWithTip);
	
	break;

	// LET keyword
	case 'let':
		function checkCreditCard(cardNumber) {
			let status = 'Please enter a valid card';
			
			if(cardNumber == '424242424242424242') {
				status = 'Card passed';
			}
			
			return status;
		}
		
		var cardStatus = checkCreditCard('424242424242424245');
		console.log('cardStatus: '+cardStatus);
	
	break;

	// CONST keyword
	case 'const':
		// 1 
		const filterSingerNames = ['Keenan', 'Hetfield', 'Davis', 'Claypool', 'Durst'];
		
		// 3
		const singers = checkSingerList(filterSingerNames);
		
		// 4
		const shortNames = singers.checkForShorterNames();
		console.log("Short Names: ", shortNames);
		
		// 5
		const longNames = singers.checkForLongerNames();
		console.log("Long Names: ", longNames);
		
		// 2
		function checkSingerList(names) {
			return {
				checkForShorterNames : () => names.filter(name => name.length <= 5),
				checkForLongerNames	 : () => names.filter(name => name.length > 5)
			}
		}
		
	break;
}