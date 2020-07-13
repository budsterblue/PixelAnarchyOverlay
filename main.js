var overlay = document.getElementById("overlay");
document.getElementById("gridbutton").addEventListener('change', (event) => {
  if (event.target.checked) {
    overlay.style.visibility = "visible";
  } else {
    overlay.style.visibility = "hidden";
  }
});


// Update Image From URL (Using Button)
//document.getElementById("updateImage").addEventListener('click', (event) => { overlay.src = document.getElementById("urlSelector").value; });

// Update Image From Local File
document.getElementById("fileSelector").addEventListener('change', (event) => { overlay.src = window.URL.createObjectURL(document.getElementById("fileSelector").files[0]); });

// Update Image From URL
// TODO: test this code!
document.getElementById("urlSelector").addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) { overlay.src = document.getElementById("urlSelector").value; }
});

// Opacity
document.getElementById("opacity").addEventListener('input', (event) => { overlay.style.opacity = (100 - document.getElementById("opacity").value) / 100; });

// Offset X & Y
document.getElementById("offsetX").addEventListener('change', (event) => { overlay.style.left = document.getElementById("offsetX").value + "px"; });
document.getElementById("offsetY").addEventListener('change', (event) => { overlay.style.top = (document.getElementById("offsetY").value -3240) + "px"; });

// Scale
//document.getElementById("scaleImg").addEventListener('change', (event) => { overlay.style.width = document.getElementById("scaleImg").value + "px"; });
document.getElementById("scaleImg").addEventListener('input', (event) => { overlay.style.width = document.getElementById("scaleImg").value; });
