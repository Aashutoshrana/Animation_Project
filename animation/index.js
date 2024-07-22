function animator(classvalue){
    var title=document.getElementById('title');
    title.className=classvalue;

}
function darkmode(){
    var section=document.getElementById('section');
    var sidenav=document.getElementById('sidenav');
    var menuBox=document.getElementById('menu-box');
    var title=document.getElementById('title');
    var desc=document.getElementById('desc');
    var button=document.getElementsByTagName('button');

      if(  section.style.background=="rgb(17,17,17)" || sidenav.style.background=="rgb(21, 21, 29)")
        {
            section.style.background=' bisque';
            sidenav.style.background='rgb(231, 200, 161)';
            sidenav.style.color='black';
            title.style.color='#351C75';
            desc.style.color='#E69138';
            for(var i=0;i<button.length;i++){
                button[i].style.color="black";
            }
        }
        else{
            section.style.background="#111111";
            sidenav.style.background="#15151D";
            sidenav.style.color="white";
            title.style.color='dodgerblue';
            desc.style.color='white';

            for(var i=0;i<button.length;i++){
                button[i].style.color="white";
            }
        }

  
}