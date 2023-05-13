document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;

  var table = document.getElementById('contact-table');

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = name;
  cell2.innerHTML = phone;


  document.getElementById('name').value = "";
  document.getElementById('phone').value = "";
});
