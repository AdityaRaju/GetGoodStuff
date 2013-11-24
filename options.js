var username = localStorage['username'] || "";
var password = localStorage['password'] || "";
document.getElementById('getgoodstuff_username').value = username;
document.getElementById('getgoodstuff_password').value = password;
document.getElementById('btnSaveLogin').onclick = function () {
  localStorage['username'] = document.getElementById('getgoodstuff_username').value;
  localStorage['password'] = document.getElementById('getgoodstuff_password').value;
  document.querySelector('#getgoodstuff-wrapper #saved_info').style.display = 'block';
  setTimeout(function () {
    location.reload();
  }, 1000);
};
