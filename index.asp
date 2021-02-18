<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "suchizgames.com" or host = "www.suchizgames.com" then response.redirect("https://suchizgames.com/")

else
response.redirect("https://www.exemple.com/error.html")
end if
%>