var/www/article.js~                                                                                 0000644 0000000 0000000 00000001256 11121374421 013347  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   var latestServerQuery = "undefined";

function getCurrentQuery() {

    return document.getElementById("q").value;
}

function getArticle() {

	// Create new JS element
	var jsel = document.createElement('SCRIPT');

	if (getCurrentQuery()!=latestServerQuery && getCurrentQuery()) {
		divSummary = document.getElementById('summary');
		divSummary.innerHTML = '<p class="big">Working...</p>';

		jsel.type = 'text/javascript';
		//jsel.src = '/article.php?q=' + getCurrentQuery();
		jsel.src = '/hello.js';
		// Append JS element (therefore executing the 'AJAX' call)
		document.body.appendChild (jsel);

		latestServerQuery = getCurrentQuery();
	}

	setTimeout('getArticle();',800);
}


                                                                                                                                                                                                                                                                                                                                                  var/www/article.php                                                                                 0000755 0000000 0000000 00000002244 11121461620 013323  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <?php

ini_set('user_agent', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.9) Gecko/20071025 Firefox/2.0.0.9');
#echo $_GET["q"];
/*if($_GET["q"] == "")
{
   echo "<script type=\"text/javascript\">divSummary.innerHTML='<p class=\"big\"><b>Type a topic above and wait for results.</b></p>

                <p class=\"center\">A brief summary of the requested topic will appear instantly.</p>'";

}
else { */
$html = file_get_contents("http://en.wikipedia.org/wiki/".urlencode($_GET["q"]));
#echo $html;
$dom = new DOMDocument();
@$dom->loadHTML($html);
$xpath = new DOMXPath($dom);
#$xpath->registerNamespace("m","http://my.name/space");
$results = $xpath->query('//div[@id="bodyContent"]/p');
$result = $results->item(0)->nodeValue;
#@$result = $dom->saveHTML($results->innerHTML);
#echo $result;
echo "divSummary.innerHTML = '$result';
var sum = divSummary.innerHTML;
";

#echo "divSummary.innerHTML = $result;";
#echo 'var sum = divSummary.innerHTML;';



echo 'if (sum.indexOf("Wikipedia does not have an article with this exact name.") > 0) {';
echo 'divSummary.innerHTML = \'<p style="color:#ff0000;" class="big">No results found for "hello".</p>\';';
echo "}";
//}	
?>

                                                                                                                                                                                                                                                                                                                                                            var/www/article.php~                                                                                0000644 0000000 0000000 00000002253 11121403047 013515  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <?php
if($_POST['q'] == "")
{
   echo "<script type=\"text/javascript\">divSummary.innerHTML='<p class=\"big\"><b>Type a topic above and wait for results.</b></p>

                <p class=\"center\">A brief summary of the requested topic will appear instantly.</p>'"

}
else {
$html = @file_get_contents("http://en.wikipedia.org/wiki/"+$_POST['q']);
$dom = @DOMDocument::loadHTML($html);
$xpath = new domXPath($dom);
$results = $xpath->query('/html/body/div/div/div/div[2]/p');
echo "<script type=\"text/javascript\">divSummary.innerHTML = $results;
var sum = divSummary.innerHTML;
 </script>";

echo "<script type=\"text/javascript\">divSummary.innerHTML = $results;";
echo 'var sum = divSummary.innerHTML;';



echo 'if (sum.indexOf("Wikipedia does not have an article with this exact name.") > 0) {)';
echo 'divSummary.innerHTML = \'<p style="color:#ff0000;" class="big">No results found for "hello".</p>\';';
echo "}</script>"
}	

#divSummary.innerHTML = $results;
#var sum = divSummary.innerHTML;

#if (sum.indexOf("Wikipedia does not have an article with this exact name.") > 0) {
#	divSummary.innerHTML = '<p style="color:#ff0000;" class="big">No results found for "Dog".</p>';
}	
	
?>

                                                                                                                                                                                                                                                                                                                                                     var/www/buttonpage.html                                                                             0000644 0000000 0000000 00000000510 11121474743 014226  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   </html>
<style type="text/css" media="all">
  @import "/style.css";
</style>

</body>
<div class="buttonscontainer">
<div class="buttons">
<a href="http://www.surfthepedia.com/why/">Why?</a>
<a href="http://www.surfthepedia.com/what/">What?</a>
<a href="http://www.surfthepedia.com/who/">Who?</a>
</div>
</div>
</body>
</html>

                                                                                                                                                                                        var/www/buttonstyle.css                                                                             0000644 0000000 0000000 00000000504 11121474547 014303  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   .buttonscontainer {width: 20px;}

.buttons a {color: #6633FF;
background-color: #FFFFFF;
padding: 2px;
padding-left: 3px;
display: block;
font: 13px Trebuchet MS, sans-serif;
font-weight: bold;
text-decoration: none;
text-align: left;}

.buttons a:hover {background-color: #6633FF;
color: #FFFFFF;
text-decoration: none;}


                                                                                                                                                                                            var/www/hello.html                                                                                  0000644 0000000 0000000 00000002661 11121400403 013150  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <?php
echo addslashes(divSummary.innerHTML = '<p><b>Hello</b> is a <a href=\"/?q=Salutation_(greeting)\" title=\"Salutation (greeting)\">salutation</a> or <a href=\"/?q=Greeting_habits\" title=\"Greeting habits\" class=\"mw-redirect\">greeting</a> in the <a href=\"/?q=English_language\" title=\"English language\">English language</a> and is <a href=\"/?q=Synonym\" title=\"Synonym\">synonymous</a> with other greetings such as <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hi\" class=\"extiw\" title=\"wikt:hi\">Hi</a></i> or <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hey\" class=\"extiw\" title=\"wikt:hey\">Hey</a></i>. <i>Hello</i> was recorded in dictionaries in 1883.<a href=\"#cite_note-etym-0\" title=\"\"><span></span></a></p><!--<p style="text-align:center;"><iframe src="/gads.php?kw=hello" style="border:0;width:475px;height:65px;" scrolling="no"></iframe></p>--><p class="small"><a href="http://en.wikipedia.org/wiki/Hello" target="new"><b>Read the full article.</b></a><br />Summary extracted from <a href="http://en.wikipedia.org">Wikipedia</a> under <a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>.</p>';
echo addslashes(var sum = divSummary.innerHTML;);



echo addslashes(if (sum.indexOf("Wikipedia does not have an article with this exact name.") > 0) {);
echo addlsashes(	divSummary.innerHTML = '<p style="color:#ff0000;" class="big">No results found for "hello".</p>';);
echo "}"
?>
                                                                               var/www/hello.html~                                                                                 0000644 0000000 0000000 00000002222 11121375454 013360  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <?php
echo "divSummary.innerHTML = '<p><b>Hello</b> is a <a href=\"/?q=Salutation_(greeting)\" title=\"Salutation (greeting)\">salutation</a> or <a href=\"/?q=Greeting_habits\" title=\"Greeting habits\" class=\"mw-redirect\">greeting</a> in the <a href=\"/?q=English_language\" title=\"English language\">English language</a> and is <a href=\"/?q=Synonym\" title=\"Synonym\">synonymous</a> with other greetings such as <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hi\" class=\"extiw\" title=\"wikt:hi\">Hi</a></i> or <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hey\" class=\"extiw\" title=\"wikt:hey\">Hey</a></i>. <i>Hello</i> was recorded in dictionaries in 1883.<a href=\"#cite_note-etym-0\" title=\"\"><span></span></a></p><!--<p style="text-align:center;"><iframe src="/gads.php?kw=hello" style="border:0;width:475px;height:65px;" scrolling="no"></iframe></p>--><p class="small"><a href="http://en.wikipedia.org/wiki/Hello" target="new"><b>Read the full article.</b></a><br />Summary extracted from <a href="http://en.wikipedia.org">Wikipedia</a> under <a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>.</p>'\;";
?>
                                                                                                                                                                                                                                                                                                                                                                              var/www/hello.js                                                                                    0000644 0000000 0000000 00000002534 11121374627 012641  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   
divSummary.innerHTML = '<p><b>Hello</b> is a <a href=\"/?q=Salutation_(greeting)\" title=\"Salutation (greeting)\">salutation</a> or <a href=\"/?q=Greeting_habits\" title=\"Greeting habits\" class=\"mw-redirect\">greeting</a> in the <a href=\"/?q=English_language\" title=\"English language\">English language</a> and is <a href=\"/?q=Synonym\" title=\"Synonym\">synonymous</a> with other greetings such as <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hi\" class=\"extiw\" title=\"wikt:hi\">Hi</a></i> or <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hey\" class=\"extiw\" title=\"wikt:hey\">Hey</a></i>. <i>Hello</i> was recorded in dictionaries in 1883.<a href=\"#cite_note-etym-0\" title=\"\"><span></span></a></p><!--<p style="text-align:center;"><iframe src="/gads.php?kw=hello" style="border:0;width:475px;height:65px;" scrolling="no"></iframe></p>--><p class="small"><a href="http://en.wikipedia.org/wiki/Hello" target="new"><b>Read the full article.</b></a><br />Summary extracted from <a href="http://en.wikipedia.org">Wikipedia</a> under <a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>.</p>';
var sum = divSummary.innerHTML;



if (sum.indexOf("Wikipedia does not have an article with this exact name.") > 0) {
	divSummary.innerHTML = '<p style="color:#ff0000;" class="big">No results found for "hello".</p>';
}
                                                                                                                                                                    var/www/hello.php                                                                                   0000755 0000000 0000000 00000002617 11121403054 013004  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <?php
echo 'divSummary.innerHTML = \'<p><b>Hello</b> is a <a href=\"/?q=Salutation_(greeting)\" title=\"Salutation (greeting)\">salutation</a> or <a href=\"/?q=Greeting_habits\" title=\"Greeting habits\" class=\"mw-redirect\">greeting</a> in the <a href=\"/?q=English_language\" title=\"English language\">English language</a> and is <a href=\"/?q=Synonym\" title=\"Synonym\">synonymous</a> with other greetings such as <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hi\" class=\"extiw\" title=\"wikt:hi\">Hi</a></i> or <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hey\" class=\"extiw\" title=\"wikt:hey\">Hey</a></i>. <i>Hello</i> was recorded in dictionaries in 1883.<a href=\"#cite_note-etym-0\" title=\"\"><span></span></a></p><!--<p style="text-align:center;"><iframe src="/gads.php?kw=hello" style="border:0;width:475px;height:65px;" scrolling="no"></iframe></p>--><p class="small"><a href="http://en.wikipedia.org/wiki/Hello" target="new"><b>Read the full article.</b></a><br />Summary extracted from <a href="http://en.wikipedia.org">Wikipedia</a> under <a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>.</p>\';';
echo 'var sum = divSummary.innerHTML;';



echo 'if (sum.indexOf("Wikipedia does not have an article with this exact name.") > 0) {)';
echo 'divSummary.innerHTML = \'<p style="color:#ff0000;" class="big">No results found for "hello".</p>\';';
echo "}"
?>
                                                                                                                 var/www/hello.php~                                                                                  0000644 0000000 0000000 00000002620 11121402542 013172  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <?php
echo 'divSummary.innerHTML = \'<p><b>Hello</b> is a <a href=\"/?q=Salutation_(greeting)\" title=\"Salutation (greeting)\">salutation</a> or <a href=\"/?q=Greeting_habits\" title=\"Greeting habits\" class=\"mw-redirect\">greeting</a> in the <a href=\"/?q=English_language\" title=\"English language\">English language</a> and is <a href=\"/?q=Synonym\" title=\"Synonym\">synonymous</a> with other greetings such as <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hi\" class=\"extiw\" title=\"wikt:hi\">Hi</a></i> or <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hey\" class=\"extiw\" title=\"wikt:hey\">Hey</a></i>. <i>Hello</i> was recorded in dictionaries in 1883.<a href=\"#cite_note-etym-0\" title=\"\"><span></span></a></p><!--<p style="text-align:center;"><iframe src="/gads.php?kw=hello" style="border:0;width:475px;height:65px;" scrolling="no"></iframe></p>--><p class="small"><a href="http://en.wikipedia.org/wiki/Hello" target="new"><b>Read the full article.</b></a><br />Summary extracted from <a href="http://en.wikipedia.org">Wikipedia</a> under <a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>.</p>\';';
echo 'var sum = divSummary.innerHTML;)';



echo 'if (sum.indexOf("Wikipedia does not have an article with this exact name.") > 0) {)';
echo 'divSummary.innerHTML = \'<p style="color:#ff0000;" class="big">No results found for "hello".</p>\';';
echo "}"
?>
                                                                                                                var/www/img/                                                                                        0000755 0000000 0000000 00000000000 11121242417 011737  5                                                                                                    ustar   root                            root                                                                                                                                                                                                                   var/www/img/header.gif                                                                              0000644 0000000 0000000 00000003151 11121242417 013656  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   GIF89a� 1 �  ��ơ������֛�����ak��Bt�������P~��S����������ټ���6����ܩ�������E�����~�Ќ]��x����p����������������������������̹��������������������5j��(���                                             !�     ,    � 1  �@�pH,�Ȥr�l:�ШtJ�Z�جv��z��xL.������&  F����x�D�`|}�0-"L/����y��0�"�mC�0mL ��rWt��Q�%��D)��&'P �	Y	�/��L�}&��0*�&+�O��Y���H�$%�B�(�$��[��������B��"�0'X���eۣ�2�ga�i �@!��@G�$��� �� � X�Ł��(��<��%ʕ]ʬ�#�	g�$R3��/&�
���A�RP�(,��s�E�!o�L=�` �2�lR�A�$�� � *, A�\0� ���$� a�^*N�t�
�Ȅ`�Tm2�X�2�4Ra����"�F�.]��ի����@��?+�M����������A9��,L 2 ��|Gk�+�oCPPM�4~s�8� wl�ջ8���|
�_�y%�E�PUs�HU�\gD�,��j�u�x�yV^����F��VV|��v@`o�����t�c�(�r�\���`7DU�����|�f�vD���V�w�I��i:�Dq/ƘGI-a�#=Q��0��(p��J09_n�����$�-nQ��Cp)�Y5����AD�fex��'��Y� �EhģG�'�)$iQ�~z	����vOT�f�n��������"�<b�?~v N�
�g��&�©�XZ�閏��s2FQ��C6�*i��f�BPʭ�z�앝f�����.�X�G�����,��ڋD�D�E�U�{�]&�e�v�`��{'�H��Y��&;�g�����F@"�_����Q��īB|��z�k��C(��
r�J@� ��ư���F�L���̐X0E7Ep\DȠB2�t�0+�˓z�gDMZ3� E�GHM�I0�[�!�c�|��+�]1�)Ǭ�<̾�s�6w�s��ew���G�7�`S.�iC���B�=$�&A�\MD8C�w�����Z�m�6��V�D�gCq�#P{Ic�C�.D�L�
I�������䟙��E���B$-��;������4^���1�0D$0@Dp����r�ʋ����b��gDh��H����@�s���2�Gp GxCuW���i� őj}�T����@���z0���Ԁ�dHQ� ��X�4�IB�@� ��($�V0�ad �;ad"&�|�T�3�����g{$ʍӫ:	��~�C��`K�0Db=�`z�K�w �Ef2���W<�="3�D@��� �ᩣ����) 4��ԣ��݇6��$�@"ƔQ��f��:t�a��&0��re��_('��/X˔@�hK)�L�2���f:�Ќ�4�I�j�! ;                                                                                                                                                                                                                                                                                                                                                                                                                       var/www/index.lighttpd.html                                                                         0000644 0000000 0000000 00000006766 11111754115 015017  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Welcome page</title>
<style type="text/css" media="screen">
body { background: #e7e7e7; font-family: Verdana, sans-serif; font-size: 11pt; }
#page { background: #ffffff; margin: 50px; border: 2px solid #c0c0c0; padding: 10px; }
#header { background: #4b6983; border: 2px solid #7590ae; text-align: center; padding: 10px; color: #ffffff; }
#header h1 { color: #ffffff; }
#body { padding: 10px; }
span.tt { font-family: monospace; }
span.bold { font-weight: bold; }
a:link { text-decoration: none; font-weight: bold; color: #C00; background: #ffc; }
a:visited { text-decoration: none; font-weight: bold; color: #999; background: #ffc; }
a:active { text-decoration: none; font-weight: bold; color: #F00; background: #FC0; }
a:hover { text-decoration: none; color: #C00; background: #FC0; }
</style>
</head>
<body>
<div id="page">
 <div id="header">
 <h1> Placeholder page </h1>
  The owner of this web site has not put up any web pages yet. Please come back later.
 </div>
 <div id="body">
  <h2>You should replace this page with your own web pages as soon as possible.</h2>
  Unless you changed its configuration, your new server is configured as follows:
  <ul>
   <li>Configuration files can be found in <span class="tt">/etc/lighttpd</span>. Please read  <span class="tt">/etc/lighttpd/conf-available/README</span> file.</li>
   <li>The DocumentRoot, which is the directory under which all your HTML files should exist, is set to <span class="tt">/var/www</span>.</li>
   <li>CGI scripts are looked for in <span class="tt">/usr/lib/cgi-bin</span>, which is where Ubuntu packages will place their scripts. You can enable cgi module by using command <span class="bold tt">&quot;lighty-enable-mod cgi&quot;</span>.</li>
   <li>Log files are placed in <span class="tt">/var/log/lighttpd</span>, and will be rotated weekly. The frequency of rotation can be easily changed by editing <span class="tt">/etc/logrotate.d/lighttpd</span>.</li>
   <li>The default directory index is <span class="tt">index.html</span>, meaning that requests for a directory <span class="tt">/foo/bar/</span> will give the contents of the file /var/www/foo/bar/index.html if it exists (assuming that <span class="tt">/var/www</span> is your DocumentRoot).</li>
   <li>You can enable user directories by using command <span class="bold tt">&quot;lighty-enable-mod userdir&quot;</span></li>
  </ul>
  <h2>About this page</h2>
  <p>
   This is a placeholder page installed by the Ubuntu release of the <a href="http://packages.ubuntu.com/lighttpd">Lighttpd server package.</a>
  </p>
  <p>
   This computer has installed the Ubuntu operating system, but it has nothing to do with the Ubuntu Project. Please do not contact the Ubuntu Project about it.
  </p>
  <p>
   If you find a bug in this Lighttpd package, or in Lighttpd itself, please file a bug report on it. Instructions on doing this, and the list of known bugs of this package, can be found in the 
   <a href="https://bugs.edge.launchpad.net/ubuntu/+source/lighttpd/">Ubuntu Bug Tracking System.</a>
  </p>
  <p>
    <a href="http://validator.w3.org/check?uri=referer"><img
        src="http://www.w3.org/Icons/valid-xhtml10"
        alt="Valid XHTML 1.0 Transitional" height="31" width="88" border="0" /></a>
  </p>  
 </div>
</div>
<!-- s:853e9a42efca88ae0dd1a83aeb215047 -->
</body>
</html>
          var/www/index.php                                                                                   0000644 0000000 0000000 00000002462 11121501562 013006  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
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
                                                                                                                                                                                                              var/www/litesum/                                                                                    0000755 0000000 0000000 00000000000 11121242346 012646  5                                                                                                    ustar   root                            root                                                                                                                                                                                                                   var/www/litesum/article.js                                                                          0000644 0000000 0000000 00000001223 11121241304 014616  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   var latestServerQuery = "undefined";

function getCurrentQuery() {

    return document.getElementById("q").value;
}

function getArticle() {

	// Create new JS element
	var jsel = document.createElement('SCRIPT');

	if (getCurrentQuery()!=latestServerQuery && getCurrentQuery()) {
		divSummary = document.getElementById('summary');
		divSummary.innerHTML = '<p class="big">Working...</p>';

		jsel.type = 'text/javascript';
		jsel.src = '/article.php?q=' + getCurrentQuery();

		// Append JS element (therefore executing the 'AJAX' call)
		document.body.appendChild (jsel);

		latestServerQuery = getCurrentQuery();
	}

	setTimeout('getArticle();',800);
}


                                                                                                                                                                                                                                                                                                                                                                             var/www/litesum/article.php                                                                         0000644 0000000 0000000 00000004323 11121242265 015004  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<title>Litesum - Instant Wikipedia Summaries</title>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Litesum instantly extracts brief summaries from Wikipedia on any given topic." />
	<meta name="keywords" content="wikipedia,wiki,encyclopedia,pedia,litesum,ajax,jake jarvis" />

	<script type="text/javascript" src="/article.js"></script>
	<script type="text/javascript" src="/mint/?js"></script>

	<script>
		function sf() {
			document.f.q.focus();
		}
	</script>

	<style type="text/css" media="all">
		@import "/style.css";
	</style>
</head>

<!--a719692f57f2a1dc6645bfe527ce72b1-->

<body onload="sf();getArticle();">

<div class="wrapper">
	<div class="center"><a href="/"><img src="/img/header.gif" alt="LiteSum - Instant Wikipedia Summaries"/></a></div>

	<form action="/" method="get" name="f">
		<input type="text" value="" name="q" id="q" class="text" autocomplete="off"/>
	</form>

	<div id="summary">
<?php
if($_POST["q"] == "")
{
 print "<p class=\"big\"><b>Type a topic above and wait for results.</b></p>

		<p class=\"center\">A brief summary of the requested topic will appear instantly.</p>"
}
else {
$html = @file_get_contents("http://en.wikipedia.org/wiki/"+$_POST["q"]);
$dom = @DOMDocument::loadHTML($html);
$xpath = new domXPath($dom);
$results = $xpath->query('//div[@id="bodyContent"]/p');
print "<script type=\"text/javascript\">divSummary.innerHTML = \'$results
Summary extracted from Wikipedia under GFDL.
'; var sum = divSummary.innerHTML; if (sum.indexOf("Wikipedia does not have an article with this exact name.") > 0) { divSummary.innerHTML = '

No results found for "dog".
'; }  </script>";
}		
	
?>
</div>

	<p class="small" style="margin-top:55px;"><span style="color:#e6a728;">Lite</span><span style="color:#356aa0;">sum</span> by <a href="http://www.gigature.com/">Gigature</a>.</p>
</div>

<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">

</script>
<script type="text/javascript">
_uacct = "UA-1563964-3";
urchinTracker();
</script>

</body>
</html>
                                                                                                                                                                                                                                                                                                             var/www/litesum/style.css                                                                           0000644 0000000 0000000 00000001306 11121241430 014511  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   .wrapper {
	width: 550px;
	margin: auto;
}

p,.start,li,.wrapper {
	font: 14px lucida, "Lucida Grande", verdana, arial, sans-serif;
	color: #333;
	line-height: 22px;
}

p,.start,li {
	text-align: justify;
}

img {
	border: 0;
	padding: 9px 0;
}

h1 {
	margin: 0;
}

.text {
	color: #333;
	width: 100%;
	font: 18px lucida, "Lucida Grande", verdana, arial, sans-serif;
	text-align: center;
	padding: 3px 0;
}

a {
	color: #356aa0;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

.small {
	text-align: center;
	font-size: 11px;
}

.big {
	color: #356aa0;
	font-size: 17px;
	text-align: center;
}

.center {
	text-align: center;
}

b,.mw-headline {
	text-align: justify;
	font-weight: bold;
}
                                                                                                                                                                                                                                                                                                                          var/www/litesum/index.html                                                                          0000644 0000000 0000000 00000003240 11121242346 014642  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<title>Litesum - Instant Wikipedia Summaries</title>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Litesum instantly extracts brief summaries from Wikipedia on any given topic." />
	<meta name="keywords" content="wikipedia,wiki,encyclopedia,pedia,litesum,ajax,jake jarvis" />

	<script type="text/javascript" src="/article.js"></script>
	<script type="text/javascript" src="/mint/?js"></script>

	<script>
		function sf() {
			document.f.q.focus();
		}
	</script>

	<style type="text/css" media="all">
		@import "/style.css";
	</style>
</head>

<!--a719692f57f2a1dc6645bfe527ce72b1-->

<body onload="sf();getArticle();">

<div class="wrapper">
	<div class="center"><a href="/"><img src="/img/header.gif" alt="LiteSum - Instant Wikipedia Summaries"/></a></div>

	<form action="/" method="get" name="f">
		<input type="text" value="" name="q" id="q" class="text" autocomplete="off"/>
	</form>

	<div id="summary">
		<p class="big"><b>Type a topic above and wait for results.</b></p>

		<p class="center">A brief summary of the requested topic will appear instantly.</p>
	</div>

	<p class="small" style="margin-top:55px;"><span style="color:#e6a728;">Lite</span><span style="color:#356aa0;">sum</span> by <a href="http://www.gigature.com/">Gigature</a>.</p>
</div>

<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">

</script>
<script type="text/javascript">
_uacct = "UA-1563964-3";
urchinTracker();
</script>

</body>
</html>
                                                                                                                                                                                                                                                                                                                                                                var/www/litesum/img/                                                                                0000755 0000000 0000000 00000000000 11121241403 013413  5                                                                                                    ustar   root                            root                                                                                                                                                                                                                   var/www/litesum/img/header.gif                                                                      0000644 0000000 0000000 00000003151 11121241403 015332  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   GIF89a� 1 �  ��ơ������֛�����ak��Bt�������P~��S����������ټ���6����ܩ�������E�����~�Ќ]��x����p����������������������������̹��������������������5j��(���                                             !�     ,    � 1  �@�pH,�Ȥr�l:�ШtJ�Z�جv��z��xL.������&  F����x�D�`|}�0-"L/����y��0�"�mC�0mL ��rWt��Q�%��D)��&'P �	Y	�/��L�}&��0*�&+�O��Y���H�$%�B�(�$��[��������B��"�0'X���eۣ�2�ga�i �@!��@G�$��� �� � X�Ł��(��<��%ʕ]ʬ�#�	g�$R3��/&�
���A�RP�(,��s�E�!o�L=�` �2�lR�A�$�� � *, A�\0� ���$� a�^*N�t�
�Ȅ`�Tm2�X�2�4Ra����"�F�.]��ի����@��?+�M����������A9��,L 2 ��|Gk�+�oCPPM�4~s�8� wl�ջ8���|
�_�y%�E�PUs�HU�\gD�,��j�u�x�yV^����F��VV|��v@`o�����t�c�(�r�\���`7DU�����|�f�vD���V�w�I��i:�Dq/ƘGI-a�#=Q��0��(p��J09_n�����$�-nQ��Cp)�Y5����AD�fex��'��Y� �EhģG�'�)$iQ�~z	����vOT�f�n��������"�<b�?~v N�
�g��&�©�XZ�閏��s2FQ��C6�*i��f�BPʭ�z�앝f�����.�X�G�����,��ڋD�D�E�U�{�]&�e�v�`��{'�H��Y��&;�g�����F@"�_����Q��īB|��z�k��C(��
r�J@� ��ư���F�L���̐X0E7Ep\DȠB2�t�0+�˓z�gDMZ3� E�GHM�I0�[�!�c�|��+�]1�)Ǭ�<̾�s�6w�s��ew���G�7�`S.�iC���B�=$�&A�\MD8C�w�����Z�m�6��V�D�gCq�#P{Ic�C�.D�L�
I�������䟙��E���B$-��;������4^���1�0D$0@Dp����r�ʋ����b��gDh��H����@�s���2�Gp GxCuW���i� őj}�T����@���z0���Ԁ�dHQ� ��X�4�IB�@� ��($�V0�ad �;ad"&�|�T�3�����g{$ʍӫ:	��~�C��`K�0Db=�`z�K�w �Ef2���W<�="3�D@��� �ᩣ����) 4��ԣ��݇6��$�@"ƔQ��f��:t�a��&0��re��_('��/X˔@�hK)�L�2���f:�Ќ�4�I�j�! ;                                                                                                                                                                                                                                                                                                                                                                                                                       var/www/phpinfo.php                                                                                 0000644 0000000 0000000 00000000024 11121430005 013323  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   <?php
phpinfo();
?>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            var/www/style.css                                                                                   0000644 0000000 0000000 00000001306 11121242417 013035  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   .wrapper {
	width: 550px;
	margin: auto;
}

p,.start,li,.wrapper {
	font: 14px lucida, "Lucida Grande", verdana, arial, sans-serif;
	color: #333;
	line-height: 22px;
}

p,.start,li {
	text-align: justify;
}

img {
	border: 0;
	padding: 9px 0;
}

h1 {
	margin: 0;
}

.text {
	color: #333;
	width: 100%;
	font: 18px lucida, "Lucida Grande", verdana, arial, sans-serif;
	text-align: center;
	padding: 3px 0;
}

a {
	color: #356aa0;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

.small {
	text-align: center;
	font-size: 11px;
}

.big {
	color: #356aa0;
	font-size: 17px;
	text-align: center;
}

.center {
	text-align: center;
}

b,.mw-headline {
	text-align: justify;
	font-weight: bold;
}
                                                                                                                                                                                                                                                                                                                          var/www/surfthepedia.gif                                                                            0000755 0000000 0000000 00000014145 11121516721 014347  0                                                                                                    ustar   root                            root                                                                                                                                                                                                                   GIF89avi �    ����O�%Y�3d�Bo�Pz�_��m��|�����������������������������t��������ҹ�������|����Ǩ�ͱ���������������� ����"��3��D��U��f��w����������������i�q{Ȃ�Д�ԝ�צ�ۯ�߸������������r�y�̋������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������!�   ,    vi  ���������������������������%#��+���#.������������������&�#,���������������ʌ(�-�)�0����������Ѿ�����������+���*����������Ӕ���� 
H��~��IB8B���#J��E��X�0���}+Vp2@ĻN(�b(�ŉN$@��	c ��Q�ɳ�� 0@@�Q����-���Tb("@3_�F��:��^�Jp�t��QR��]˶Ѓ��ʝk������ꚚKT��L��8W�Axw�e����K�(�e2h֌��*h�0Al�{���j��R�.����ǌt�ޭ�Ǎ�7j��#F?p+y@��G#� ����د_��5ȾZ؆�U�b���v�|P���˟O��}X�C���� ��5"�b�/-d�	W���c捠�y�	a�d �
�0�}��0߈#���6� _6� ⋆ �ߌ,@L��5�CH��t��L���SmD6�#x0 "�Tg�"@�We@D	bqѸ_��h��4i�� M"	O K�f!P�8e�$�����y\r^.��3�Ef��s��搹���(r�HV�M*tg�{
*��� *|������7@"�NPA�RA�>J`.%�� <m�	'��L8g���k�����j�B�C��6�@�4>p� Vp���r� �[�K�}7
��@��f ��5�޳�&�%�Vfk�q����h�pp��Jr.����v�x�F�x�~���ۦ���� �ǃ�m%`���0Ų�@�4_��_�i�����$���� υ�|_ɢ"bj��ʲZ�\Y����?2s�� MBȝ��Ъme�����_y�͎�L�9"7@_S/Հ�32q�];�5�ܸД
U�}t8M���)���5��'�พz�}H�z�pe�<m�s�28ͅ7r8�E��,uW)�!�����;�:e  A�[sM����.,��N��<����KT��(�@��0ߨŒ���Ώ�f��HO�'����G�����%��S��J��M�� G���ok���C^P���_ ;�!~�;��C��$H��yu�ˠ"r����  ��� !>U �9����Bhi�,<U��À��e��a�tX­1�����p��q	�9"�EC'�fO�b��(*�-B5P��f��A�\
�@�i�U\a-�/��Pd���L�21�������ڣ5$��T';��������3�V|z@�H���� q��I),���)��Y �~T�:+tQ���d 0���#��5�:�H�2a��Y&1����#�\�:��N�m&����t�P��w� Bh@����T�H��1��(�Ã{�r��R>��IP�8=�A�X�g��E���)��\�\`
��(M�J�e����i<�t�
� v9\q v�� N�74I��t�F��<�D4�*v��OA�@��E%*"�TZh n0�{� �ٍo~C�H���?�2� ��x@�^��E�Q
p��^��B �B1��*C�A@`8�  � @��{N_ ����:� "��(�J�ɳ�8)��h6m��
036�����G���@��S%쁕D�`��}��D����,��X��^��!�e�!Z	���U��Q:�S�6j��j���Z�����Z� �̫c�	 ��v�#p ��S�o�z[� ��H�1��(��C0 ��DDx���C��`� \!0⹘���K�ۼC��LL�@{A�H��4�N���S�H��0t-��bxD���ʧ@j������4`<�E�`B|8��K��
�W��r�+i���7 A~���(�<�?�s���e�E�ɣ�p#���*E�?H򓅣�R�m���`A,ruHħ�����V��[��������SA��L;ίi �YW쌚Fp��F��D�F��|l*Y�t�(r��H���ji6�v_�F�z?��*&�};Ʋ�5vj�[�ۆ��ﻱ���Nkڥ�������෉Xv�S���΅�����D�Ǹۆp���ǈs?��5ṱ��������M�E�����"���D?BˈFx����*)�t�KD�k.(B@��(��)3Ê��@�� �>���;�F%�|Q�.p��ىz!����@���!v>�<t��n�uG�kܼ��6�K}�B�;�X:���t�k�]'�z�D�����ބ��ک��Cp�� '����DHZV��yN=8s� 	�^J��AԽ�/��!������;����>@�$�KoOv_��vݷ �����Z��<"o�E�=�aw�� �F��e�F��J�]�s��S���K{��;��/a������|2oy�uu78�|m�x��G�'v�`=�0�8�Y�0j���g%vf{�}�g�5~�U~�g&�6��.p��ZNS��y��i��[z�u�`p& ��7"1ho�}�R}����Qb���A�>c\�pIX��nV'8�#���с�w>� t��A��u���zp0v��|��@�&�=:(^��m���4^�zІ@XX�n���Ee�B3�#�R���%a0-e�,�_��yk�chb�p�ǆs	xH#@^��t8��vxFu|�b��+�Z��M�����x�(*����s�w���L� �d8h0�����r�Qj6����v����}H1@.�A��u�R8��J�#�8�H"l�6�Pや@e��l)CQ��yh���d�5ՋP���7��7�2p����XBx��P�� �w	 �FrM�:�eW�K�.Z�3�+[S8�=�P9P��q���P���B�����)�\򓒥B�=Gr			�X�h0Iwt�� *�z�R )� 
p�W�@��I3#S`��Z���u��Е �x=)|;@s�Gj��`��r:��A�����si@�O���%��2����BGF���-K�w����=��~fB�0��k����1��(*���߸u'|� �I%� �((2��Xfė25x|ri2����T:\��8=�p}VØ��������B�-����Ѝ����c_���1�i�G!�Y�h����3�0g|����v�s� p���iu)*��	5�ǜb��Fg�tg���z$Ռq	��������.c�_���M �9��		�i��2>�V8���"*%��`��0���0�4+����vcֶ:v���U�Ã���z*�R�=�@��Р�	A�T��`��Vk��V_w@�Y���|��,R��󡒠�u�8	꣌䜭Bq�h5�	L�NZ	�3QZr�@��Vk!:"�)��6�\J�z����Y�Xv�*(�ڨ)����2mz��m�Ʃz	�&	yJ	{j��~����Wk���wy�����;-*	�H��z�[�����n��n�Ep�(rʐVb�pz�)I�JB����R����j��P��Q1h�&	8jv�0�5�6� ��� �42 EwGI9��*bV�	����+jr�>�i��z��U��r�*1Xf��js��]��z���0��J�Zn�*�Ք��P��p��!���k�S��j��ʢ�=�\dz�|�
-.�����
H;K#�j�ӣ�����5��P��+;��k������b���G=�	�J�@K�={*?{ek��p(�G+�B���i�#�]���������[�-��P9�'���wE�P:h�/�[=�k� �0���cRr~@�-x�z�*�$۷U;	�k�W+SGr��04���xz����D��deU��K�|1��;��[��	��K��3�s{�;:q!놘 ���'�N(�� ��A��I��#)	�	;���)?2PV�����3h��0�����˗�������2"Tkj0���*��g{�b%+���I��@�ס��3�	'��[L���;;�_��ܿ��7���i���D�:�z�-��|k�/S����H�`#�� �#�|@�����u0��	+�`���v9:ǻ� 3D����:��I�6|��y�R� ��z��J1P�F���0���� ����@�z�\�;�����S����2����¾Ul`Ɗp�4|�@	�R��^j����z�5 �����;�~Jܙ3�Y>�E��ړb�`�5�+e�����A(���%V�*����H��B8j�t��b������RK+�� d�v�El�,��3�	:F㜿��8�>p��%�X5�"	�<(�л[R����F���_fL%j�ͻe�� D�Ä���\^�|j��]�n]s�ޜʫ�<!��y��'�p�,�c�-L��������O@� DjE��-&�|�>��nm��`Ǭx> ˄  ���1h�/�o���G"�	�1��jk�7H*3-MC�*܅��;��O���<kAM�byĂ�.���ԯٱ����5�|�Y�����ǁ������;Yp�H*R	k7\����q���j�Ƃ6���<�uz�O-|��p�,\��ZMm�v�|�v6�����݀���ͺ�}�k��͠�х��X�_!�o�)��ob���W�ܪ`�-&R���M����Ёр�ӳ6����5vѪz�ܪ}����\v�
�~�ڂ�нxWRӕaۃ �ܭ��=w�MX�-h���ڄ0�TT��lk+��'VmKy����T��}�����ݽۙ��z��I��#G����R��"g���܅�ϚƎcw��Ҋ��=C�(���"��$��&�����Du�X�+�މ`�T�~����%�v�:ݍP��=!�̐���u�k��i]���ʳ�P~Su.��Ku,����f�O���p�&���s���Ó���܂?m�Lk0���S�� ĂF�.>�w^y>o�̸��� �5�=�ՍƮZ.����|r,�s�-&�>	��mW�@(��J	�.	r�g��β�^0�y6���.�M�B�.(���]f�l���؏�� �7��O�}��k��;������hyF{��_O�� Y�S�l��	?p�3��9�`��g凾�~�R��б �����Ez����y�i�$6	��^���������L�5G��WJ��^%2��2��6��Bl?"Nߓ�"��;�>G	,�(� � �N�=Ɨ�F^>�~N���fr����z3+�+-��Ps%9���q�@���LF������P�:��*\�?���ϝ[�wӦ Gr4` @��	��敐��R��pZ�$N�@e�M��eo�h	 �K�@�
��BO[�U����B6��0�U��hp-3�hM��r_	k*s��P0p ��U����)�+�R������ G��*%��0��4��I�^ �JS�� ��@I�d��<���흗:KV5�7�o
���s3�s���3Cs�)9IYiI)h3Ó�8S��s9JZjz�:)X3�#C�y��sc{�{������,<L\l|����̜��
�x�L]m}��,�����.>��=M������/?O/i~�^�����0�@~��%�10�:|(���C3 Z��1�ƍ%N��1�ȑ$K�$�� ȓ,[�|	S`J|+cڼ�3��e3���	4�С7{F�A4�ҥL-��4�ԩT�=�V5�֭\�]u�5�رd�v"�6�ڥ5&b]7�\�@h�MTc.�@ ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           