<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<title>Surf-the-pedia - world of knowledge at your fingertips</title>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Litesum instantly extracts brief summaries from Wikipedia on any given topic." />
	<meta name="keywords" content="pedia,sisir koppaka,wikipedia,wiki,encyclopedia" />

	<script type="text/javascript" src="/article.js"></script>

	<script>
		function sf() {
			document.f.q.focus();
		}
	</script>

	<style type="text/css" media="all">
		@import "/style.css";
	</style>
</head>

<body onload="sf();getArticle();">

<div class="wrapper">
	<div class="center"><a href="/"><img src="/surfthepedia.gif" align="center" alt="LiteSum - Instant Wikipedia Summaries"/></a></div>

	<form action="/" method="get" name="f">
		<input type="text" value="" name="q" id="q" class="text" autocomplete="off"/>
	</form>

	<div id="summary">
		<p class="big"><b>Type something and wait!</b></p>

		<p class="center">A brief paragraph about the topic will appear.</p>
	</div>

	<p class="small" style="margin-top:55px;"> by <a href="http://www.akanaka.in/">akanaka</a>.</p>
</div>
</body>
</html>
