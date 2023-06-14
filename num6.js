// Create an HTML page with a form that asks the user to input the value 
// of a sphere's radius. Write Javascript that gives them back the volume
//  of the sphere.

function calculateSphereVolume(){
    // alert('working')
    var radius = document.getElementById('radius').value;
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    alert('Radius: '+ radius+ ' Volume: ' + volume);
}