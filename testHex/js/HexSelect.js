
hexCanvas = document.getElementById("hexCanvas")
hexCanvas.addEventListener("click", hexOnClick, false);

function hexOnClick(e) {
    var cell = getCursorPosition(e);
    
}

function getCursorPosition(e) {
  
    var x;
    var y;
    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    }
    else {
      x = e.clientX + document.body.scrollLeft +
           document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop +
           document.documentElement.scrollTop;
    }

    var hexPoint = new HT.Point(x,y)
    toggleSelected(hexPoint)
}

function toggleSelected(hex) {
  var canvas = document.getElementById("hexCanvas");
  var ctx = canvas.getContext('2d');
  
    // console.log(x,y)
    console.log(grid.GetHexAt(hex).Id)
    console.log(grid.GetHexAt(hex));
    var selectedHex = grid.GetHexAt(hex)
    var selectedHexPos = selectedHex.TopLeftPoint
    console.log(hex)
    if(grid.GetHexAt(hex).selected === false){
      grid.GetHexAt(hex).selected = true;
      grid.GetHexAt(hex).drawRed(hexCanvas.getContext('2d'))
      var img = new Image();   // Create new img element
      img.src = './bee.png'; // Set source path
      ctx.drawImage(img,selectedHexPos.X,selectedHexPos.Y);
    } else {
      grid.GetHexAt(hex).selected = false;
      grid.GetHexAt(hex).drawWhite(hexCanvas.getContext('2d'))
    }
}