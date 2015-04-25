<?php
echo 'divSummary.innerHTML = \'<p><b>Hello</b> is a <a href=\"/?q=Salutation_(greeting)\" title=\"Salutation (greeting)\">salutation</a> or <a href=\"/?q=Greeting_habits\" title=\"Greeting habits\" class=\"mw-redirect\">greeting</a> in the <a href=\"/?q=English_language\" title=\"English language\">English language</a> and is <a href=\"/?q=Synonym\" title=\"Synonym\">synonymous</a> with other greetings such as <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hi\" class=\"extiw\" title=\"wikt:hi\">Hi</a></i> or <i><a href=\"http://en.wiktionary.orghttp://en.wikipedia.org/wiki/hey\" class=\"extiw\" title=\"wikt:hey\">Hey</a></i>. <i>Hello</i> was recorded in dictionaries in 1883.<a href=\"#cite_note-etym-0\" title=\"\"><span></span></a></p><!--<p style="text-align:center;"><iframe src="/gads.php?kw=hello" style="border:0;width:475px;height:65px;" scrolling="no"></iframe></p>--><p class="small"><a href="http://en.wikipedia.org/wiki/Hello" target="new"><b>Read the full article.</b></a><br />Summary extracted from <a href="http://en.wikipedia.org">Wikipedia</a> under <a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>.</p>\';';
echo 'var sum = divSummary.innerHTML;';



echo 'if (sum.indexOf("Wikipedia does not have an article with this exact name.") > 0) {)';
echo 'divSummary.innerHTML = \'<p style="color:#ff0000;" class="big">No results found for "hello".</p>\';';
echo "}"
?>
