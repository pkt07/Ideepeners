
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
var k=1;
// Generate a random post
function load() {
		// $.getJSON("https://drive.google.com/file/d/1f4yHwJuz-WmF6lfi7QxHdkrFLwRrAifY/view?usp=sharing")
// 		jQuery.loadScript = function (url, callback) {
//     	jQuery.ajax({
//         url: "https://drive.google.com/file/d/1f4yHwJuz-WmF6lfi7QxHdkrFLwRrAifY/view?usp=sharing",
//         dataType: 'script',
//         success: callback,
//         async: true
//     });
// }
		var mydata = JSON.parse(s);
		 console.log("hello");
		 
		first_div = document.getElementsByClassName("tooper");
		newDiv = document.createElement('div');
		var div_internal_1 = first_div[0].appendChild(newDiv);
		div_internal_1.classList.add("containerr", "gutaloo" + k);
		
		 div_internal_1.innerHTML=div_internal_1.innerHTML+ "</br>"+"<p class='p_id' "+">"+"Recommended Article"+"</p>"+"<button class='see_more' "+">"+"See More"+"</button>"+"<hr class='linee' "+">";
		 
		first_div_i = document.getElementsByClassName("gutaloo" + k);
		newDiv_i = document.createElement('div');
		var div_internal_2 = first_div_i[0].appendChild(newDiv_i);
		div_internal_2.classList.add("mixedSlider", "gutaloo_slider" + k);
		 document.getElementsByClassName("gutaloo_slider" + k)[0].setAttribute("id",'mixedSlider');


		first_div = document.getElementsByClassName("gutaloo_slider" + k);
		newDiv = document.createElement('div');
		var div_internal_2 = first_div[0].appendChild(newDiv);
		div_internal_2.classList.add("MS-content", "gutaloo_content" + k);


		 // div_internal_2.innerHTML = div_internal_2.innerHTML + "<p class='para' id="+"p_id"+">"+ mydata[0].heading + "</p>"	+ "</br>" + "<p id="+"more"+">"+"More"+ "</p>";	
		// document.getElementById("p_id")[0].value = "Tren";    // 0 change to j

		 for(var i = 0;i < mydata.length; i++)
		 {
		   first_div = document.getElementsByClassName("gutaloo_content" + k);
			newDiv = document.createElement('div');
			var div_internal_3 = first_div[0].appendChild(newDiv);
			div_internal_3.classList.add("item","gutaloo_item" + k);

			first_div = document.getElementsByClassName("gutaloo_item" + k);
			newDiv = document.createElement('div');
			var div_internal_4 = first_div[i].appendChild(newDiv);
			div_internal_4.classList.add("imgTitle", "gutaloo_imgtitle" + k);

			div_internal_4.innerHTML = div_internal_4.innerHTML + "<h2 class='blogTitle' id="+i+"head"+">"+ mydata[i].question + "</h2>"+"<hr class='line'>"+"<p class='texx' id="+i+"paara"+">"+mydata[i].author+"</p>"; 
		    src = mydata[i].image;
		    img=document.getElementsByClassName('gutaloo_imgtitle' + k);
		    img = document.createElement('img');
		    img.src = src;
		    img.classList.add('image','gutaloo_image'+ k);
		    div_internal_4.appendChild(img);

		    div_internal_4.innerHTML = div_internal_4.innerHTML +"<p class='texxx' id="+i+">"+mydata[i].text+"</p>"+ "<br>";

		    first_div = document.getElementsByClassName("gutaloo_imgtitle" + k);
			newDiv = document.createElement('div');
			var div_internal_2 = first_div[i].appendChild(newDiv);
			div_internal_2.classList.add("progress" ,"gutaloo_progress" + k);

			first_div = document.getElementsByClassName("gutaloo_progress" + k);
			newDiv = document.createElement('div');
			var div_internal_2 = first_div[i].appendChild(newDiv);
			div_internal_2.classList.add("bar");
			document.getElementsByClassName("bar")[i].setAttribute("id",i+'bar')

			div_internal_4.innerHTML = div_internal_4.innerHTML + "<i class='fa fa-bookmark-o' id="+i+">"+ "</i>"+"<i class='fa fa-ellipsis-v' id="+i+">"+ "</i>";
			 document.getElementsByClassName("fa fa-bookmark-o")[0].setAttribute("id",'icon');
			 document.getElementsByClassName("fa fa-ellipsis-v")[i].setAttribute("id",i+'vert_cir');
			src = mydata[i].image;
		    img=document.getElementsByClassName('item');
		    img = document.createElement('img');
		    img.src = src;
		    img.classList.add('img');
		    div_internal_3.appendChild(img);

		 }
		 first_div = document.getElementsByClassName("gutaloo_slider" + k);
		newDiv = document.createElement('div');
		var div_internal_5 = first_div[0].appendChild(newDiv);
		div_internal_5.classList.add("MS-controls","gutaloo_control" + k);


		div_internal_5.innerHTML = div_internal_5.innerHTML + "<button class='MS-left'"+">" +  "<i class='fa fa-angle-left' "+">" + "</i>" + "</button>";
		div_internal_5.innerHTML = div_internal_5.innerHTML + "<button class='MS-right'"+">" +  "<i class='fa fa-angle-right' "+">" + "</i>" + "</button>";
	k++;
		}

