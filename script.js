function opennav() {
    document.getElementById("mynav").style.display = "block";
  }
function closenav()
{
  document.getElementById("mynav").style.display = "none";
  
}


// for todo

function openlist() {
  document.getElementById("todo").style.display = "block";
}
function closelist()
{
document.getElementById("todo").style.display = "none";

}

// toggleswitch

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme= localStorage.getItem("theme");

if(currentTheme)
{
  document.documentElement.setAttribute("data-theme", currentTheme);

  if(currentTheme=="dark")
  {
    toggleSwitch.checked=true;
  }
}
function switchTheme(e)
{
  if(e.target.checked)
  {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    document.getElementById("ff").style.backgroundColor="black";
    document.getElementById("mm1").style.backgroundColor="white";
    document.getElementById("mm2").style.backgroundColor="white";
    document.getElementById("mm3").style.backgroundColor="white";
    document.getElementById("mm4").style.backgroundColor="white";
  }
  else
  {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    document.getElementById("ff").style.backgroundColor="white";
    document.getElementById("mm1").style.backgroundColor="black";
    document.getElementById("mm2").style.backgroundColor="black";
    document.getElementById("mm3").style.backgroundColor="black";
    document.getElementById("mm4").style.backgroundColor="black";
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
 