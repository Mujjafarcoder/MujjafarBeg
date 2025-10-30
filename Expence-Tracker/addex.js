
'use strict';

document.getElementById('exadd').addEventListener('click', function() {
  let expname = document.getElementById('addexp').value.trim();
  let examount = document.getElementById('addamo').value.trim();
  let exdate = document.getElementById('adddate').value;
  let exdes = document.getElementById('adddes').value.trim();
  let error = document.getElementById('error');



  if (!expname || !examount || !exdate || !exdes) {
    error.textContent = "⚠️ Please fill all fields!";
    return;
  }

  if (isNaN(examount) || examount <= 0) {
    error.textContent = "⚠️ Enter a valid amount!";
    return;
  }

  let name=localStorage.getItem('currentUser');

 

  let exdetails ={ 
    username:name,
    expname, 
    examount, 
    exdate, 
    exdes };


  let storedata = JSON.parse(localStorage.getItem('storedata')) || [];
  storedata.push(exdetails);

  
  localStorage.setItem('storedata', JSON.stringify(storedata));

  
  document.getElementById('addexp').value = '';
  document.getElementById('addamo').value = '';
  document.getElementById('adddate').value = '';
  document.getElementById('adddes').value = '';
 
  window.location.href = 'page2.html';
});
