	google.load("jquery", "1.3.2");
	google.load("jqueryui", "1.7.2");

	function load_messes()
	{
		$.ajax({
                type: "POST",
                url:  "strscfg.php",
                data: "req=ok",
                success: function(html)
				{
					$("#messages").empty();
					$("#messages").append(html);
					$("#messages").scrollTop(90000);
                }
        });
	}
	
	function infoscreen()
	{
		$.ajax({
                type: "POST",
                url:  "script.php",
                data: "req=ok",
                success: function(html)
				{
					$("#infoscreen").empty();
					$("#infoscreen").append(html);
					$("#infoscreen").scrollTop(90000);
                }
        });
	}