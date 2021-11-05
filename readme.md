## How to use

Place the param name (from the URL) wrapped in `{{}}` in your body HTML. It will be replaced with the value of the param in the URL.

## Example
```
<!DOCTYPE html>
<html>
<head>
	<title>Test</title>
</head>
<body>
	This car's color is {{color}};
	<div>
		<p>
			<span>This is a {{product}}.</span>
			<p>The number is {{id}}.</p>
		</p>
	</div>
</body>
<script type="text/javascript">

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
</script>
</html>
```
