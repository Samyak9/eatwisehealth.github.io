$(document).ready(function(){
	var bmr1 = bmr2 = rda = lbw = ibw = protein = fat = weight = carbo = 0;
	var activity = 0;
	var gender = 0; //0 = male, 1 = female.
	var fatPercentage = 0;
	var height = weight = upperArm = hips = bp = pulse = waist = targetedWeight = lbw = 0;

	$('.lbwCont').hide();
	$('.section-2').hide();

	$(document).on('click','.cLBW', ()=>{
		weight = $('#weight').val();
		fatPercentage = $('#fp').val();
		lbw = Math.round((weight - (weight*fatPercentage)/100)*100)/100;
		$('.lbwCont').show('slow');
		$('.lbwSol').text(lbw);
	});


	//end of part one

	$(document).on('click','.cPart1', ()=>{
		upperArm = $('#upperArm').val();
		hips = $('#hips').val();
		height = $('#height').val();
		weight = $('#weight').val();
		fatPercentage = $('#fp').val();
		bp = $('#bp').val();
		pulse = $('#pulse').val();
		waist = $('#waist').val();
		targetedWeight = $('#targetedWeight').val();
		gender = $('#gender').val();
		activity = $('#act').val();
		$('.section-1').hide('slow');
		bmi = Math.round(calculateBMI(height, weight)*100)/100;
		//18.5-22.9 = normal
		//22.9-24.9 = over
		//24.9-29.9 = class1 obesity
		//29.9-34.9 = class2 obesity
		//34.9-39.9 = class3 obesity
		if(bmi >= 18.5 && bmi <22.9){
			bmiCateg = 'Normal';
		}
		else if(bmi >= 22.9 && bmi<24.9){
			bmiCateg = 'Over-Weight';
		}
		else if(bmi >= 24.9 && bmi<29.9){
			bmiCateg = 'Class 1 obesity';
		}
		else if(bmi >= 29.9 && bmi<34.9){
			bmiCateg = 'Class 2 obesity';
		}
		else if(bmi >= 34.9 && bmi<39.9){
			bmiCateg = 'Class 3 obesity';
		}
		else if(bmi >= 39.9){
			bmiCateg = 'Very over weight';
		}
		else{
			bmiCateg = 'Underweight';
		}
		ibw = Math.round(calculateIBW(bmi, height)*100)/100;
		bmr1 = Math.round(calculateBMR1(weight, gender)*100)/100;
		bmr2 = Math.round(calculateBMR2(bmr1, fatPercentage, gender)*100)/100;
		rda = Math.round(calculateRDA(bmr2, activity)*100)/100;
		protein = Math.round(calculateProtein(lbw, 2.2)*100)/100;
		fat = Math.round(calculateFat(lbw, 0.8)*100)/100;
		carbo = Math.round(calculateCarb(rda, fat, protein)*100)/100;
		$('.ibwVal').text(ibw);
		$('.bmr1Val').text(bmr1);
		$('.bmr2Val').text(bmr2);
		$('.rdaVal').text(rda);
		$('.lbwVal').text(lbw);
		$('.proteinVal').text(protein);
		$('.fatVal').text(fat);
		$('.carbVal').text(carbo);
		$('.bmiVal').text(bmi +' '+ bmiCateg);
		$('.section-2').show('slow');
	});


	// $('.solution').hide();
	// $(document).on('click', '.cBMR1', ()=>{
	// 	weight = $('#weight').val();
	// 	gender = $('#gender').val();
	// 	bmr1 = calculateBMR1(weight, gender);
	// 	$('.answer').text(bmr1);
	// 	$('.solution').show('slow');
	// })
	// console.log(bmr1)
	// $(document).on('click', '.cBMR2', ()=>{
	// 	if(bmr1 == 0){
	// 		alert('you need to calculate bmr1 first!');
	// 	}
	// 	fatPercentage = $('#fp').val();
	// 	console.log(bmr1);
	// 	bmr2 = calculateBMR2(bmr1 ,fatPercentage, gender);
	// 	$('.answer').text(bmr2);
	// 	$('.solution').show('slow');
	// 	console.log(bmr1, bmr2, weight, gender);
	// })

	// $(document).on('click', '.cRDA', ()=>{
	// 	if(bmr1 == 0){
	// 		alert('You need to calculate BMR1 first!');
	// 	}
	// 	if(bmr2 == 0){
	// 		alert('You need to calculate BMR2 first!');
	// 	}
	// 	activity = $('#act').val();
	// 	rda = calculateRDA(bmr2 ,activity);
	// 	$('.answer').text(rda);
	// 	$('.solution').show('slow');
	// 	console.log(bmr1, bmr2, weight, gender, activity, rda);
	// });

	// $(document).on('click', '.cLBW', ()=>{
	// 	if(fatPercentage == 0){
	// 		alert('You need to calculate BMR2 first and enter fat percentage!')
	// 	}
	// 	lbw = calculateLBW(weight ,fatPercentage);
	// 	$('.answer').text(lbw);
	// 	$('.solution').show('slow');
	// 	console.log(bmr1, bmr2, weight, gender, activity, rda, lbw, fatPercentage);
	// });

	// $(document).on('click', '.cProtein', ()=>{
	// 	intake = $('#amt').val();
	// 	protein = calculateProtein(lbw ,intake);
	// 	$('.answer').text(protein);
	// 	$('.solution').show('slow');
	// 	console.log(bmr1, bmr2, weight, gender, activity, rda, lbw, fatPercentage, protein);
	// });

	// $(document).on('click', '.cFat', ()=>{
	// 	intake = $('#amt').val();
	// 	fat = calculateFat(lbw ,intake);
	// 	$('.answer').text(fat);
	// 	$('.solution').show('slow');
	// 	console.log(bmr1, bmr2, weight, gender, activity, rda, lbw, fatPercentage, protein);
	// });

	// $(document).on('click', '.cCarbo', ()=>{
	// 	intake = $('#amt').val();
	// 	carbo = calculateCarb(rda, fat, protein);
	// 	$('.answer').text(carbo);
	// 	$('.solution').show('slow');
	// 	console.log(bmr1, bmr2, weight, gender, activity, rda, lbw, fatPercentage, protein);
	// });

	// var wei/ght = $('#weight').val()

});

var calculateBMR1 = function(weight, gender){
	if(gender == 0){
		return weight*24*1;
	}
	else
		return weight*24*0.9;
}

var calculateBMR2 = function(bmr1, fatPercentage, gender){
	var fm = 1;
	if(gender == 0){
		if(fatPercentage >= 10 && fatPercentage <= 14){
			fm = 1;
		}
		else if(fatPercentage >= 15 && fatPercentage <= 20){
			fm = 0.95;
		}
		else if(fatPercentage >= 21 && fatPercentage <= 28){
			fm = 0.90;
		}
		else if(fatPercentage >= 29){
			fm = 0.85;
		}
	}
	else if(gender == 1){
		if(fatPercentage >= 14 && fatPercentage <= 18){
			fm = 1;
		}
		else if(fatPercentage >= 20 && fatPercentage <= 28){
			fm = 0.95;
		}
		else if(fatPercentage >= 29 && fatPercentage <= 38){
			fm = 0.90;
		}
		else if(fatPercentage >= 39){
			fm = 0.85;
		}
	}

	return bmr1*fm;
}

var calculateRDA = function(bmr2, activity){
	var am = 1;
	if(activity == 0){
		am = 1;
	}
	else if(activity == 1){
		am = 1.1;
	}
	else if(activity == 2){
		am = 1.2;
	}
	else if(activity == 3){
		am = 1.3;
	}
	else if(activity == 4){
		am = 1.4;
	}
	else if(activity == 5){
		am = 1.5;
	}
	else if(activity == 6){
		am = 1.6;
	}
	else if(activity == 7){
		am = 1.7;
	}
	else if(activity == 8){
		am = 1.8;
	}

	return bmr2*am;
}

var calculateLBW = function(weight, fatPercentage){
	return (weight - (weight*fatPercentage)/100);
}

var calculateProtein = function(lbw, intake){
	return lbw*intake*4;
}

var calculateFat = function(lbw, intake){
	return lbw*intake*9;
}

var calculateCarb = function(rda, fat, protein){
	return (-rda + fat + protein);
}

var calculateIBW = function(bmi, height){
	if(bmi<18.5){
		return (height*height*18.5)
	}
	else if(bmi>22.9){
		return (height*height*22.9);
	}
	else{
		return (bmi*height*height);
	}
}

var calculateBMI = function(height, weight){
	//18.5-22.9 = normal
	//22.9-24.9 = over
	//24.9-29.9 = class1 obesity
	//29.9-34.9 = class2 obesity
	//34.9-39.9 = class3 obesity

	return (weight/(height*height));
}
//fat percentage = female - 30% = normal
// male = 25% - normal