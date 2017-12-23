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
var k=0;
		first_div = document.getElementsByClassName("tooper");
		newDiv = document.createElement('div');
		var div_internal_1 = first_div[0].appendChild(newDiv);
		div_internal_1.classList.add("containerr");
		document.getElementsByClassName("containerr")[k].setAttribute("id",k);
	
		first_div = document.getElementById(k);
		newDiv = document.createElement('div');
		var div_internal_2 = first_div.appendChild(newDiv);
		div_internal_2.classList.add("mixedSlider");
		 document.getElementsByClassName("mixedSlider")[k].setAttribute("id",'mixedSlider');


		first_div = document.getElementsByClassName("mixedSlider");
		newDiv = document.createElement('div');
		var div_internal_2 = first_div[k].appendChild(newDiv);
		div_internal_2.classList.add("MS-content");


		 // div_internal_2.innerHTML = div_internal_2.innerHTML + "<p class='para' id="+"p_id"+">"+ mydata[0].heading + "</p>"	+ "</br>" + "<p id="+"more"+">"+"More"+ "</p>";	
		// document.getElementById("p_id")[0].value = "Tren";    // 0 change to j
	k++;

		 for(var i = 0;i < mydata.length; i++)
		 {
		   first_div = document.getElementsByClassName("MS-content");
			newDiv = document.createElement('div');
			var div_internal_3 = first_div[k].appendChild(newDiv);
			div_internal_3.classList.add("item");

			first_div = document.getElementsByClassName("item");
			newDiv = document.createElement('div');
			var div_internal_4 = first_div[i].appendChild(newDiv);
			div_internal_4.classList.add("imgTitle");

			div_internal_4.innerHTML = div_internal_4.innerHTML + "<h2 class='blogTitle' id="+i+">"+ mydata[i].author + "</h2>"+ "<p class='texx' id="+i+">"+mydata[i].views+"</p>";

		    src = mydata[i].image;
		    img=document.getElementsByClassName('imgTitle');
		    img = document.createElement('img');
		    img.src = src;
		    img.classList.add('image');
		    div_internal_4.appendChild(img);

		    div_internal_4.innerHTML = div_internal_4.innerHTML +"<p class='texxx' id="+i+">"+mydata[i].text+"</p>"+ "<br>";

		    first_div = document.getElementsByClassName("imgTitle");
			newDiv = document.createElement('div');
			var div_internal_2 = first_div[i].appendChild(newDiv);
			div_internal_2.classList.add("progress");

			first_div = document.getElementsByClassName("progress");
			newDiv = document.createElement('div');
			var div_internal_2 = first_div[i].appendChild(newDiv);
			div_internal_2.classList.add("bar");

			div_internal_4.innerHTML = div_internal_4.innerHTML + "<i class='fa fa-bookmark-o' id="+i+">"+ "</i>"
			 document.getElementsByClassName("fa fa-bookmark-o")[0].setAttribute("id",'icon');

			src = mydata[i].image;
		    img=document.getElementsByClassName('item');
		    img = document.createElement('img');
		    img.src = src;
		    img.classList.add('img');
		    div_internal_3.appendChild(img);

		 }
		 first_div = document.getElementsByClassName("mixedSlider");
		newDiv = document.createElement('div');
		var div_internal_5 = first_div[0].appendChild(newDiv);
		div_internal_5.classList.add("MS-controls");


		div_internal_5.innerHTML = div_internal_5.innerHTML + "<button class='MS-left'"+">" +  "<i class='fa fa-angle-left' "+">" + "</i>" + "</button>";
		div_internal_5.innerHTML = div_internal_5.innerHTML + "<button class='MS-right'"+">" +  "<i class='fa fa-angle-right' "+">" + "</i>" + "</button>";
		}
	// Shuffle the paragraphs

	// Generate the post
