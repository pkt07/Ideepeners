function load() {
                     var mydata = JSON.parse(s);
                     console.log("hello");
                     var div = document.getElementById('x2');
                     debugger;

                     for(var i = 0;i < mydata.length; i++)
                     {
                        newDiv=document.createElement("div");
                        var div_internal = div.appendChild(newDiv);
                        src = mydata[i].image;
                        img=document.getElementsByClassName('cla'+i);
                        img = document.createElement('img');
                        img.src = src;
                        div_internal.appendChild(img);
                        div_internal.innerHTML = div_internal.innerHTML + "<p class='image_holder' id="+i+">"+ mydata[i].author + "</p>"+ "<p class='tex' id="+i+">"+mydata[i].text+"</p>"+ "<br>";
                     }
                 }