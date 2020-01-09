//variable declarations
var lastScrollTop,curPage,curTab;
var maxPages = 3;

var pages = document.getElementsByClassName("page");
var navBar = document.getElementsByClassName("navbar")[0];
var navItems = document.getElementsByClassName("navItem");
var tabcontents = document.getElementsByClassName("tabcontent");
var tablinks=document.getElementsByClassName("tablink")

//listeners
window.addEventListener("resize",onResize);
window.addEventListener("scroll",onScroll);

initialize();

//FUNCTIONS
function initialize()//
{
    openTab(0);
    showPage(0);
    lastScrollTop=0;
}

function onResize()
{
    showPage(curPage);
}

function onScroll()
{
    var currentScroll = window.scrollY;
    var pg;

    if(currentScroll>window.innerHeight)
    {
        navBar.style.setProperty('background-image',"url('../media/images/bg2.jpeg')");
    }
    else
    {
        navBar.style.setProperty('background-image',"");
    }

    pg=Math.round(currentScroll/window.innerHeight);
    for (i = 0; i < navItems.length; i++)
    {
        navItems[i].className = "navItem";
    }
    navItems[maxPages-pg].className="navItem active";
    curPage=pg;
}

function showPage(pg)
{
    pages[pg].scrollIntoView();
    for (i = 0; i < navItems.length; i++)
    {
        navItems[i].className = "navItem";
    }
    navItems[maxPages-pg].className="navItem active";
    curPage=pg;
}

function openTab(tabNo)
{
    showPage(2);
    for (i = 0; i < tabcontents.length; i++)
    {
      tabcontents[i].style.display = "none";
    }
    tabcontents[tabNo].style.display = "block";

    for (i = 0; i < tablinks.length; i++)
    {
      tablinks[i].className = "tablink";
    }
    tablinks[tabNo].className="tablink active";
    curTab=tabNo;
}