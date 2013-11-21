var localDebug = false;
var domain = 'http://localhost/getgoodstuff/';
var loginURL = domain + "login.php";
var addJobURL = domain + "addContent.php";
var homeURL = domain + "home.php";
var newEntryURL = "http://getgoodstuff.net/new-entry.php";
var haveLogins = false,
User = '',
Pass = '';
if (localDebug) 
	{
  domain = "http://localhost/getgoodstuff/";
	}
else 
	{
  domain = "http://localhost/getgoodstuff/";
	}

function CreateBox() {
  //evt_Name, evt_Date, evt_Where, evt_OtherDetails, evt_List
  var el = document.createElement('div');
  var s = "<div class='header'>GetGoodStuff<span id='close' style='font-size: 17px;font-weight: bold; color#333;right: 10px;position: absolute;'>X</span></div><div class='main'><div class='login' style='display:none'><br><div class='row'><span>Please update your getgoodstuff credentials to Save content in your account. <br>If not signed up, please signup here <a href='http://getgoodstuff.com/signup.php' target='_blank'>Signup</a></span><br><br></div><div class='row'><span>UserName</span><br /><input type='text' id='getgoodstuff_username' /></div><div class='row'><span>Password</span><br /><input type='password' id='getgoodstuff_password' /></div><div class='row' style='display:none' id='saved_info'><span style='color:blue;' >Saved Successfully..</span></div><a id='btnSaveLogin' class='getgoodstuff_button'>Update</a></div><div class='content'><div class='row'><span>Title</span><br /><input type='text' id='getgoodstuff_SiteName' /></div><div class='row'><span>Saved Date &amp; Time</span><br /><input type='text' id='getgoodstuff_SaveDate' /></div><div class='row'><span>URL</span><br /><input type='text' id='getgoodstuff_Url' /></div><div class='row'><span>Content Description</span><br /><textarea id='getgoodstuff_Description'></textarea></div><div class='row'><span>Keywords</span><br /><input type='text' id='getgoodstuff_Keywords'/></div><div class='row'><span>Categories</span>&nbsp;&nbsp;<select name='getgoodstuff_Categories' id='getgoodstuff_Categories'><option value='Entertainment'>Entertainment</option><option value='Education'>Education</option><option value='Sports'>Sports</option><option value='Business'></option></select></div><div ><span>Rating</span>&nbsp;&nbsp; <select name='getgoodstuff_Rating' id='getgoodstuff_Rating'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select></div><a id='btnSaveJob' class='getgoodstuff_button'>Save</a></div></div><div class='footer'><a href='http://getgoodstuff.com/home.php' target='_blank'>Recently Saved&nbsp;&nbsp;/</a><a href='http://getgoodstuff.com/applied.php' target='_blank'>Saved Content &nbsp;&nbsp;/</a><a href='http://getgoodstuff.com/help.php' target='_blank'>Help</a>";
  el.setAttribute("id", "getgoodstuff-wrapper");
  document.body.appendChild(el);
  el.innerHTML = s;  
  document.querySelector('#getgoodstuff-wrapper #close').onclick = function () 
  { 
  document.getElementById('getgoodstuff-wrapper').style.display = 'none';
  }
  document.querySelector('#getgoodstuff-wrapper #btnSaveLogin').onclick = function () {
    if(document.getElementById('getgoodstuff_username').value!='' && document.getElementById('getgoodstuff_password').value!=''  ){
      chrome.runtime.sendMessage({
        type : "saveLogins",
        username:document.getElementById('getgoodstuff_username').value,
        password:document.getElementById('getgoodstuff_password').value
      }, function (response) {
        haveLogins = response.haveLogins;
        User = response.User;
        Pass = response.Pass;
        document.querySelector('#getgoodstuff-wrapper #saved_info').style.display='block';
         document.querySelector('#getgoodstuff-wrapper #btnSaveLogin').style.display='none';
        setTimeout(function(){
          document.querySelector('#getgoodstuff-wrapper .main .login').style.display='none';
          document.querySelector('#getgoodstuff-wrapper .main .content').style.display='block';
        },1500);  
      });
      }
  }
  document.querySelector('#getgoodstuff-wrapper #btnSaveJob').onclick = function () {
      var xmlhttp = new XMLHttpRequest;
      var authUrl = addJobURL;
      var authData = [
        "username=" + encodeURIComponent(User),
        "password=" + encodeURIComponent(Pass),
        "site_name=" + encodeURIComponent(document.getElementById('getgoodstuff_SiteName').value),
        "job_url=" + encodeURIComponent(document.getElementById('getgoodstuff_Url').value),
        "description=" + encodeURIComponent(document.getElementById('getgoodstuff_Description').value),
        "keywords=" + encodeURIComponent(document.getElementById('getgoodstuff_Keywords').value) ,
        "categories=" +  encodeURIComponent(document.getElementById('getgoodstuff_Categories').options[document.getElementById('getgoodstuff_Categories').selectedIndex].value),
        "rating=" + encodeURIComponent(document.getElementById('getgoodstuff_Rating').options[document.getElementById('getgoodstuff_Rating').selectedIndex].value)
      ].join("&");
      xmlhttp.open("POST", authUrl, true);
      xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xmlhttp.send(authData);
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          console.log(xmlhttp.responseText);
          var o = JSON.parse(xmlhttp.responseText);
          alert(o.output);
          document.getElementById('getgoodstuff-wrapper').style.display = 'none';
        }
      }
      return false;
  }
};
chrome.runtime.sendMessage({
  type : "getLogins"
}, function (response) {
  haveLogins = response.haveLogins;
  User = response.User;
  Pass = response.Pass;
  CreateBox();
  if (!haveLogins) {
      document.querySelector('#getgoodstuff-wrapper .main .login').style.display='block';
      document.querySelector('#getgoodstuff-wrapper .main .content').style.display='none';
    }
});
chrome.extension.onMessage.addListener(
  function (resonseMsg, sender, sendResponse) {
  if (resonseMsg.show == true) {
    var isjobSite = true;
    var description = '';
    var longLine = '\n---------------------------------------------------------------------------------------\n';
    if (isjobSite) {
      var d = new Date();
      document.getElementById('getgoodstuff_SiteName').value = document.title;
      document.getElementById('getgoodstuff_SaveDate').value = d.toGMTString();
      document.getElementById('getgoodstuff_Url').value = location.href;
      document.getElementById('getgoodstuff_Description').value = '';
/* 	  document.getElementById('getgoodstuff_Keywords').value = ''; */
      document.getElementById('getgoodstuff-wrapper').style.display = 'block';
    } else {
      chrome.runtime.sendMessage({
        type : "openTab",
        tab : newEntryURL
      });
    }
  }
});

