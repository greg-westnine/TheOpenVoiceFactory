
function drinks(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="drink";
	keys[2][1]="coffee";
	keys[3][1]="tea";
	keys[4][1]="hot chocolate";


	links[0][2]="pint";
	keys[1][2]="milk";
	keys[2][2]="water";
	keys[3][2]="";
	keys[4][2]="";

	links[0][3]="juice";
	links[1][3]="smoothy";
	links[2][3]="milkshake";
	links[3][3]="fizzydrinks";
	links[4][3]="alcohol";

	keys[0][4]=""; 
	keys[1][4]="with";
	keys[2][4]="and";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/drinks.jpg";

}
