window.onload=function(){
    //头部导航栏选项卡切换
	var aHeader=document.getElementById('header-navbar');
	var aDetails=document.getElementById('header-navbar-details');
    var aItem=aHeader.getElementsByTagName('li');
    var aList=document.getElementsByName('list');
    var timer=null;
    
    for(var i=0;i<aItem.length;i++){
    	aItem[i].id=i;
        aItem[i].onmouseover=function(){       	
            for(var j=0;j<aList.length;j++){
                if(j==this.id){
                    move(140);        	
                	aDetails.style.display="block";
                	aDetails.style.borderTop="1px solid #ccc";
                	aList[j].style.display="block";
                }
                else{
                	aList[j].style.display="none";
                }               
        	}
        }
        aDetails.onmouseover=function(){
        	move(140);
        }
        aDetails.onmouseout=function(){
        	move(-100);
        }
        aItem[i].onmouseout=function(){
        	move(-100);    	
        }
    }
    aList.onmouseover=stopMove;

    //移动
    function move(target){
    	clearInterval(timer);
    	var aDetails=document.getElementById('header-navbar-details');
    	timer=setInterval(function(){
    		var speed=0;
    		if(aDetails.offsetTop<target){
    			speed=10;
    		}
    		else{
    			speed=-10;
    		}
    		if(aDetails.offsetTop==target){
    			clearInterval(timer);
    		}
    		else{
    			aDetails.style.top=aDetails.offsetTop+speed+'px';
    		}
    	},3);
    }
    function stopMove(){
    	clearInterval(timer);
    }
    stopMove();


    //页面中间商品分类导航
    var menu_list=document.getElementById('menu-list');
    var menu_item=document.getElementsByName('menu-item');
    var menu_details=document.getElementsByName('menu-details');
        menu_details.onmouseout=function(){
            menu_details.style.display="none";
            console.log(1)
        }

    for(var i=0;i<menu_item.length;i++){
        menu_item[i].id=i;
        menu_item[i].onmouseover=function(){        
            for(var j=0;j<menu_details.length;j++){
                if(j==this.id){        
                    menu_details[j].style.display="block";
                }
                else{
                    menu_details[j].style.display="none";
                }               
            }
        }
    }
    
   //产品展示轮播图
    var item_show=document.getElementById('item-show');
    var item_list=document.getElementById('item-list');
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var Timer;
      function animate(offset){
        var newleft=parseInt(item_list.style.left)+offset;
        var time=300;
        var interval=10;
        var speed=offset/(time/interval);

        function go(){
          if((speed<0&&parseInt(item_list.style.left)>newleft)||
            (speed>0&&parseInt(item_list.style.left)<newleft)){
            item_list.style.left=parseInt(item_list.style.left)+speed+'px';
            setTimeout(go,interval);
          }
          else{
            item_list.style.left=newleft+'px';
                if(newleft>-1226){
                    item_list.style.left=-6130+'px';
                }
                if(newleft<-6130){
                    item_list.style.left=-1226+'px';
                }
          }
        }
        go();
      }
      function play(){
        Timer=setInterval(function(){next.onclick();},8000);
      }
      function stop(){
        clearInterval(Timer);
      }
      play();
      stop();
      next.onclick=function(){
          animate(-1226);
      }
      prev.onclick=function(){
          animate(1226);
      }
    item_show.onmouseover=stop;
    item_show.onmouseout=play;

}
