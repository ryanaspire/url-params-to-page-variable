// var URL = 'https://example.com/?product=shirt&color=blue&newuser&size=m';
	const queryString = window.location.search;
	console.log(queryString);
	const urlParams = new URLSearchParams(queryString);

	const entries = urlParams.entries();
    for(const entry of entries) {
		console.log(`${entry[0]}`);

		var str="{{"+`${entry[0]}`+"}}";
		var replace_str = `${entry[1]}`;

		
		var rstr = replace_str.replace('"', '');
		var r_str = rstr.replace('"', '');
		console.log(r_str);
		var regex;
		var regex = new RegExp(str, "g");
	    document.body.innerHTML = document.body.innerHTML.replace(regex,r_str);
	}
