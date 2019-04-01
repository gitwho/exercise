private function openWindow(pageUrl:String,pageName:String):void{ 
                  var jsString:String=""; 
                  jsString+=" var screenWidth = screen.availWidth, screenHeight = screen.availHeight;"; 
                  jsString+=" var args = 'toolbar=no, menubar=no, scrollbars=no,resizable=yes,location=no, status=no';";        
                  //打开全屏的新窗口 
                  jsString+=" var win = window.open('"+pageUrl+"','"+pageName+"',args);"; 
                  jsString+=" if(win){"; 
                  jsString+="    win.resizeTo(screenWidth,screenHeight);"; 
                  jsString+="    win.outerWidth = screenWidth;"; 
                  jsString+="    win.outerHeight = screenHeight;"; 
                  jsString+="    win.moveTo(0,0);"; 
                  jsString+=" }"; 
                  ExternalInterface.call("function(){"+jsString+"}"); 
              }      
  