'use strict';

document.getElementById('subBTN').addEventListener('click', function () {
  console.log('Clicked');

  let Name = document.getElementById('UserInput').value.trim();
  let Email = document.getElementById('emailInput').value.trim();
  let Pass = document.getElementById('UserPass').value.trim();
  let Fname = document.getElementById('Fullname').value.trim();


  if (Name === '' || Email === '' || Pass === '' || Fname === '') {
    alert('Please fill all the fields!');
    return;
  }

  
 

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(Email)) {
    alert('Please enter a valid email address!');
    return;
  }



  let userdetails = {
    name: Name,
    email: Email,
    pass: Pass,
    fname: Fname,
  };


  let storedata = JSON.parse(localStorage.getItem('userdata')) || [];

  storedata.push(userdetails);
  localStorage.setItem('userdata', JSON.stringify(storedata));

  alert('Registration successful! ✅');


   window.location.href = 'Login.html';
});
