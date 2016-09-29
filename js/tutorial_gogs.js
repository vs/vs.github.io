var stepCount = 1;
var total = 4;

function slide(x) 
{
	var content = document.getElementById('content');

	stepCount = stepCount + x;
    
    if(stepCount == 1)
        {
             document.getElementById("button_left").style.opacity = 0;
            document.getElementById("button_left").setAttribute("onclick","null");
        }
    if(stepCount == 2)
        {
            document.getElementById("button_left").style.opacity = 1;
            document.getElementById("button_left").setAttribute("onclick","slide(-1)");
        }
    
    if(stepCount == total-1)
        {
            document.getElementById("button_right").style.opacity = 1;
            document.getElementById("button_right").setAttribute("onclick","slide(1)");
        }

    if(stepCount == total)
        {
            document.getElementById("button_right").style.opacity = 0;
            document.getElementById("button_right").setAttribute("onclick","null");
        }
    
	content.innerHTML='<object class="content" type="text/html" data="res_slider/step_'+stepCount+'.html" ></object>';
	
	}
	



function init()
{
    content.innerHTML='<object class="content" type="text/html" data="res_slider/step_1.html" ></object>';
    document.getElementById("button_left").style.opacity = 0;
    document.getElementById("button_left").setAttribute("onclick","null");
    document.getElementById("button_right").style.opacity = 1;
    document.getElementById("button_right").setAttribute("onclick","slide(1)");    
}

