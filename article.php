<?php

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

