<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Contact Form</title>
<link rel="stylesheet" href="https://www.cprblscourse.com/wp-content/themes/cprlifesaver/forms/css/style.css" type="text/css">



</head>
<body>
	<div id="container" class="rounded-corners">
		<div id="content" class="rounded-corners">
			<form id="submitform" name="contact" method="post" action="https://www.cprblscourse.com/wp-content/themes/cprlifesaver/forms/contactForm.php">				
				<span style="color:#ff0000;">* = Required Information</span>				<hr>
				<div class="field">
					<div class="input textarea">
						<label for="Name">Name <span>*</span></label>
						<input type="text" name="Name" class="text" value="" id="Name" placeholder="Enter name here">						
					</div>		
				</div>	
				<div class="field">				
					<div class="input textarea">
						<label for="Address">Address <span>*</span></label>
						<input type="text" name="Address" class="text" value="" id="Address" placeholder="Enter address here">	
					</div>	
				</div>
				<div class="field">
					<div class="input textarea">
						<label for="Email">Email <span>*</span></label>
						<input type="text" name="Email" class="text" value="" id="Email" placeholder="Enter email here">	
					</div>
				</div>	
				<div class="field">		
					<div class="input textarea">
						<label for="Phone">Phone <span>*</span></label>
						<input type="text" name="Phone" class="text" value="" id="Phone" placeholder="Enter phone here">					</div>		
				</div>
				<div class="field">	
					<div class="input textarea">	
						<label for="Comment">Question / Comment</label>	
						<textarea name="Comment" class="" id="Comments" placeholder="Enter questions or comments here" cols="88"></textarea>					</div>		
				</div>
				<div class="field">	
					<div class="verification">
						<img src="https://www.cprblscourse.com/wp-content/themes/cprlifesaver/forms/securitycode/SecurityImages.php?characters=5" border="0" id="securiryimage" alt="Security code">
						<input type="text" name="secode" class="text" value="" id="secode" placeholder="Enter security code here" title="This confirms you are a human user and not a spam-bot." maxlength="5">	
						<button type="submit" class="button">Submit</button>						
					</div>	
				</div>
			</form>	
			<div class="clearfix"></div>			
		</div>
	</div>
	
</body></html>