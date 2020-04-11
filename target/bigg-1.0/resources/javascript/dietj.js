/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let mainNav=document.getElementById('js-menu');
let navBarToggle=document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click',function(){
    mainNav.classList.toggle('active');
});
