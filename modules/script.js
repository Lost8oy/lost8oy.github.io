const clock = document.querySelector('.clock');

// Assigning time values to constants 
const tick = () => {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  
// Defining html for digital clock
  const html = `${h}:${m}:${s}`; 

//printing html code inside div.clock
clock.innerHTML = html;
};

//refreshing clock every 1 second
setInterval(tick, 1000);


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function showM() {
  document.getElementById('box').style.display = "none";
  document.getElementById('box').setAttribute("style","display:none;");
  document.getElementById('cv').style.display = "none";
  document.getElementById('cv').setAttribute("style","display:none;");
  document.getElementById('wp').style.display = "none";
  document.getElementById('wp').setAttribute("style","display:none;");
  document.getElementById('terminal').style.display = "none";
  document.getElementById('terminal').setAttribute("style","display:none;");
  document.getElementById('Mail').style.display = "block";
  document.getElementById('Mail').setAttribute("style","display:block;");
}
function showW() {
  document.getElementById('box').style.display = "none";
  document.getElementById('box').setAttribute("style","display:none;");
  document.getElementById('cv').style.display = "none";
  document.getElementById('cv').setAttribute("style","display:none;");
  document.getElementById('Mail').style.display = "none";
  document.getElementById('Mail').setAttribute("style","display:none;");
  document.getElementById('terminal').style.display = "none";
  document.getElementById('terminal').setAttribute("style","display:none;");
  document.getElementById('wp').style.display = "block";
  document.getElementById('wp').setAttribute("style","display:block;");
}
function showT() {
  document.getElementById('box').style.display = "none";
  document.getElementById('box').setAttribute("style","display:none;");
  document.getElementById('cv').style.display = "none";
  document.getElementById('cv').setAttribute("style","display:none;");
  document.getElementById('wp').style.display = "none";
  document.getElementById('wp').setAttribute("style","display:none;");
  document.getElementById('Mail').style.display = "none";
  document.getElementById('Mail').setAttribute("style","display:none;");
  document.getElementById('terminal').style.display = "block";
  document.getElementById('terminal').setAttribute("style","display:block;");
}
function showCv() {
  document.getElementById('box').style.display = "none";
  document.getElementById('box').setAttribute("style","display:none;");
  document.getElementById('wp').style.display = "none";
  document.getElementById('wp').setAttribute("style","display:none;");
  document.getElementById('Mail').style.display = "none";
  document.getElementById('Mail').setAttribute("style","display:none;");
  document.getElementById('terminal').style.display = "none";
  document.getElementById('terminal').setAttribute("style","display:none;");
  document.getElementById('cv').style.display = "block";
  document.getElementById('cv').setAttribute("style","display:block;");
}
function showMine() {
  document.getElementById('cv').style.display = "none";
  document.getElementById('cv').setAttribute("style","display:none;");
  document.getElementById('wp').style.display = "none";
  document.getElementById('wp').setAttribute("style","display:none;");
  document.getElementById('Mail').style.display = "none";
  document.getElementById('Mail').setAttribute("style","display:none;");
  document.getElementById('terminal').style.display = "none";
  document.getElementById('terminal').setAttribute("style","display:none;");
  document.getElementById('box').style.display = "block";
  document.getElementById('box').setAttribute("style","display:block;");
}
function showMusic() {
  document.getElementById('player').style.display = "block";
  document.getElementById('player').setAttribute("style","display:block;");
}

function closeM() {
  document.getElementById('Mail').style.display = "none";
  document.getElementById('Mail').setAttribute("style","display:none;");
  document.getElementById('icons').style.display = "block";
  document.getElementById('icons').setAttribute("style","display:block;");
}
function closeW() {
  document.getElementById('wp').style.display = "none";
  document.getElementById('wp').setAttribute("style","display:none;");
  document.getElementById('icons').style.display = "block";
  document.getElementById('icons').setAttribute("style","display:block;");
}
function closeT() {
  document.getElementById('terminal').style.display = "none";
  document.getElementById('terminal').setAttribute("style","display:none;");
  document.getElementById('icons').style.display = "block";
  document.getElementById('icons').setAttribute("style","display:block;");
}
function closeCv() {
  document.getElementById('cv').style.display = "none";
  document.getElementById('cv').setAttribute("style","display:none;");
  document.getElementById('icons').style.display = "block";
  document.getElementById('icons').setAttribute("style","display:block;");
}
function closeP() {
  document.getElementById('P').style.display = "none";
  document.getElementById('P').setAttribute("style","display:none;");
  document.getElementById('icons').style.display = "block";
  document.getElementById('icons').setAttribute("style","display:block;");
}
function closeMine() {
  document.getElementById('box').style.display = "none";
  document.getElementById('box').setAttribute("style","display:none;");
  document.getElementById('icons').style.display = "block";
  document.getElementById('icons').setAttribute("style","display:block;");
}
function closeMusic() {
  document.getElementById('player').style.display = "none";
  document.getElementById('player').setAttribute("style","display:none;");
}


function FS() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
  } else {
      if (document.cancelFullScreen) {
          document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      }
  }
}

function Full() {
  document.getElementById('wp').setAttribute("style","display:block;width:99vw;height:92vh");
  document.getElementById('wp').style.width='99vw';
  document.getElementById('wp').style.height='92vh';
  document.getElementById('icons').style.display == "none";
  document.getElementById('icons').setAttribute("style","display:none;");

}