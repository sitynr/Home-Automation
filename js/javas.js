
		function onfunc(x) {
			
			var ip = document.getElementById('ip').value;
			var r1 = x;
			var url = "http://"+ ip + "/" + r1 + "/1"
			var settings = {
			"async": true,
			"crossDomain": true,
			"url": url,
			"method": "GET",
			"headers": {
				"cache-control": "no-cache",
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				
				}
			}
			
			logger.textContent="\n" + x + " Turned ON\n" + document.getElementById("logger").value;
			$.ajax(settings).done(function (response) {
			});
			//alert("On Function is called successfully");
			
		}
				
		function offfunc(y) {
			
			var ip = document.getElementById('ip').value;
			var r1 = y;
			var url = "http://"+ ip + "/" + r1 + "/0"
			var settings = {
			"async": true,
			"crossDomain": true,
			"url": url,
			"method": "GET",
			"headers": {
				"cache-control": "no-cache",
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				
				}
			}
			
			logger.textContent="\n" + y + " Turned OFF\n" + document.getElementById("logger").value;
			$.ajax(settings).done(function (response) {
			});
			//alert("Off Function is called successfully");
		}
				
		function r1func() {
		
			// check the value of Button and assign its value to Var check (either true or false)
			var r1_check = document.getElementById("D1-on").checked;
			
			// assignt the btncolor status to var off_status
			var r1_off_status = document.getElementById("r1btncolor");
		
			if (r1_check == true) {
				
				// Assign vale "ON" to the id Demo and display text (status) below the button				
				document.getElementById("r1-status").innerHTML = "ON";
				
				// Change the color of Button Icon to Green if the status is true (by changing css dynamically)
				r1_off_status.style.color = "#2BEB09";
				
				onfunc("R1");
			}
			else if (r1_check == false){
				
				// Assign vale "OFF" to the id Demo and display text (status) below the button
				document.getElementById("r1-status").innerHTML = "OFF";
				
				// Change the color of Button Icon to Red if the status is true (by changing css dynamically)
				r1_off_status.style.color = "#ED1B23";
		
				offfunc("R1");
			}
		}
		
		
		function r2func() {
		
			// check the value of Button and assign its value to Var check (either true or false)
			var r2_check = document.getElementById("D2-on").checked;
			
			// assignt the btncolor status to var off_status
			var r2_off_status = document.getElementById("r2btncolor");
		
			if (r2_check == true) {
				
				// Assign vale "ON" to the id Demo and display text (status) below the button				
				
				document.getElementById("r2-status").innerHTML = "ON";
				
				// Change the color of Button Icon to Green if the status is true (by changing css dynamically)
				
				r2_off_status.style.color = "#2BEB09";
				
				onfunc("R2");
				
			}	
		
			else if (r2_check == false){
		
				// Assign vale "OFF" to the id Demo and display text (status) below the button
				document.getElementById("r2-status").innerHTML = "OFF";
				
				// Change the color of Button Icon to Red if the status is true (by changing css dynamically)
				r2_off_status.style.color = "#ED1B23";
				
				offfunc("R2");
			}
		}
		
		function r3func() {
		
			// check the value of Button and assign its value to Var check (either true or false)
			var r3_check = document.getElementById("D3-on").checked;
			
			// assignt the btncolor status to var off_status
			var r3_off_status = document.getElementById("r3btncolor");
		
			if (r3_check == true) {
				
				// Assign vale "ON" to the id Demo and display text (status) below the button				
				
				document.getElementById("r3-status").innerHTML = "ON";
				
				// Change the color of Button Icon to Green if the status is true (by changing css dynamically)
				
				r3_off_status.style.color = "#2BEB09";
				
				onfunc("R3");
			}
		
			else if (r3_check == false){
		
				// Assign vale "OFF" to the id Demo and display text (status) below the button
				document.getElementById("r3-status").innerHTML = "OFF";
				
				// Change the color of Button Icon to Red if the status is true (by changing css dynamically)
				r3_off_status.style.color = "#ED1B23";
				
				offfunc("R3");
			}
		}		
		
		function r4func() {
		
			// check the value of Button and assign its value to Var check (either true or false)
			var r4_check = document.getElementById("D4-on").checked;
			
			// assignt the btncolor status to var off_status
			var r4_off_status = document.getElementById("r4btncolor");
		
			if (r4_check == true) {
				
				// Assign vale "ON" to the id Demo and display text (status) below the button				
				
				document.getElementById("r4-status").innerHTML = "ON";
				
				// Change the color of Button Icon to Green if the status is true (by changing css dynamically)
				
				r4_off_status.style.color = "#2BEB09";
				r4_off_status.classList.add("fan");
				
				onfunc("R4");
			}
		
			else if (r4_check == false){
		
				// Assign vale "OFF" to the id Demo and display text (status) below the button
				document.getElementById("r4-status").innerHTML = "OFF";
				
				// Change the color of Button Icon to Red if the status is true (by changing css dynamically)
				r4_off_status.style.color = "#ED1B23";
				r4_off_status.classList.remove("fan");
				
				offfunc("R4");
				
			}
		}
		
		function rallfunc() {
		
			// check the value of Button and assign its value to Var check (either true or false)
			var rall_check = document.getElementById("Rall-on").checked;
			
			// assignt the btncolor status to var off_status
			var rall_off_status = document.getElementById("rallbtncolor");
		
			if (rall_check == true) {
				
				// Assign vale "ON" to the id Demo and display text (status) below the button				
				
				document.getElementById("rall-status").innerHTML = "ON";
				
				// Change the color of Button Icon to Green if the status is true (by changing css dynamically)
				
				rall_off_status.style.color = "#2BEB09";
				
				onfunc("All");
			}
		
			else if (rall_check == false){
		
				// Assign vale "OFF" to the id Demo and display text (status) below the button
				document.getElementById("rall-status").innerHTML = "OFF";
				
				// Change the color of Button Icon to Red if the status is true (by changing css dynamically)
				rall_off_status.style.color = "#ED1B23";
				
				offfunc("All");
			}
		}
	
