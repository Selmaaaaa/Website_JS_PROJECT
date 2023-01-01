const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 

//
// Image List
images[0] = "./images/javascriptDOM.png";
images[1] = "./images/cssColors.png";
images[2] = "./images/phpDataBase.png";
images[3] = "./images/cssProperties.png";
images[4]=  "./images/cssAnimation.png";
images[5]=  "./images/cssMesures.png";
images[6]=  "./images/htmlAttrVal.jpg";
images[7]=  "./images/htmlBasics.PNG";
images[8]=  "./images/javascriptVariables.png";
images[9]=  "./images/phpCRUD.png";
images[10]=  "./images/phpDataBase.png";


// function that changes  the Image
function changeImg(){

    var max=images.length;

	document.slide.src = images[i];
   
    
    if(i==images.length-1)
    {
        document.slide1.src= images[i-3];
    document.slide2.src= images[i-1];
    }
    else
    {
        if(i==images.length-2){
            document.slide1.src= images[i+1];
            document.slide2.src= images[i-2];
        }
        else
        {

        
        document.slide1.src= images[i+1];
        document.slide2.src= images[i+2];}
    }
    
    
    


	// is index < max ?
	if(i < images.length - 1){
	  // + 1 to Index
	  i++; 
	} else { 
		// we go back to 0
		i = 0
	}   

	// Run function every 3 seconds
	setTimeout("changeImg()", time);
}

// we run the functwion 
window.onload=changeImg;