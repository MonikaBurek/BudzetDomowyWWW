// Przeglądaj bilans: napis

function displayText
{
	var differenceInBalance;
	var text;
	
	differenceInBalance = document.getElementById('difference');
	
	if (differenceInBalance > 0)
	{
		text = Gratulacje.Świetnie zarządzasz finasami!;
	}
	else if (differenceInBalance < 0)
	{
		text = Uważaj, wpadasz w długi!;
	}
	
	document.getElementById("text").innerHTML = text;
}
