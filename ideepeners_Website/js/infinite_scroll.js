$(document).ready(function() {
	var win = $(window);
	console.log("sf");
	load();
	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
		if ($(document).height() - win.height() == win.scrollTop()) {
			//$('#loading').show();

			// Uncomment this AJAX call to test it
			/*
			$.ajax({
				url: 'get-post.php',
				dataType: 'html',
				success: function(html) {
					$('#posts').append(html);
					$('#loading').hide();
				}
			});
			*/

			load();
			console.log("sf");
			//$('#loading').hide();
		}
	});
});

// Generate a random post
function load() {
		var mydata = JSON.parse(s);
		 console.log("hello");

		 first_div = document.getElementsByClassName("tooper");
		newDiv = document.createElement('div');
		var div_internal_1 = first_div[0].appendChild(newDiv);
		div_internal_1.classList.add("top_s1");
		//document.getElementsByClassName("top_s").setAttribute("id",i);
		
		first_div = document.getElementsByClassName("top_s1");
		newDiv = document.createElement('div');
		var div_internal_2 = first_div[0].appendChild(newDiv);
		div_internal_2.classList.add("main");

		
		 div_internal_2.innerHTML = div_internal_2.innerHTML + "<p class='para' id="+"p_id"+">"+ mydata[0].heading + "</p>"	+ "</br>" + "<p id="+"more"+">"+"More"+ "</p>";	
		// document.getElementById("p_id")[0].value = "Tren";    // 0 change to j
		top_s = document.getElementsByClassName('top_s1');
		var gallery = document.createElement('div');
		gallery = top_s[0].appendChild(gallery);
		gallery = gallery.classList.add('gallery');
		document.getElementsByClassName("gallery")[0].setAttribute("id",100);
		


		 div = document.getElementById("100");
		 newDiv = document.createElement("div");
		 var div_internal = div.appendChild(newDiv);
		 div_internal.classList.add("wrapper");
		 var division = document.getElementsByClassName("wrapper");
	     document.getElementsByClassName("wrapper")[0].style.height="250px";

	     //document.getElementById("100").style.top="-120px";

		 newDiv = document.createElement("div");
		 var div_internal = division[0].appendChild(newDiv);
		 div_internal.classList.add("grid");
		 document.getElementsByClassName("grid")[0].setAttribute("id",'x2');
		 var inside_grid = document.getElementById('x2')



		 for(var i = 0;i < mydata.length; i++)
		 {
		    newDiv=document.createElement("div");
		    var div_internal = inside_grid.appendChild(newDiv);
		    div_internal.classList.add("cell");
		    document.getElementsByClassName("cell")[i].style.height="300px";

		    src = mydata[i].image;
		    img=document.getElementsByClassName('grid');
		    img = document.createElement('img');
		    img.src = src;
		    img.classList.add('responsive-image');
		    div_internal.appendChild(img);

		    inside_division = document.createElement("div");
		    var abcd = div_internal.appendChild(inside_division);
		    abcd.classList.add("border");
		    document.getElementsByClassName("border")[i].style.width = "262px";
		    document.getElementsByClassName("border")[i].style.height = "60px";
		    div_internal.innerHTML = div_internal.innerHTML + "<p class='image_holder' id="+i+">"+ mydata[i].author + "</p>"+ "<p class='tex' id="+i+">"+mydata[i].text+"</p>"+ "<br>";
		    //document.getElementsByClassName("responsive-image")[i].setAttribute("id",i);
		    document.getElementsByClassName("cell")[i].setAttribute("id",i);
		 }
		}
	// Shuffle the paragraphs

	// Generate the post
