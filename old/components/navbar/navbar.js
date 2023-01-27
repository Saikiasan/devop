/*
* EVERY PAGE THAT USES THIS FEATURE HAS TO BE IN THE ROOT DIRECTORY SAME AS THE IINDEX FILE 
* NAVBAR CANNOT BE MAINTAINED WHOLE BY THIS AS IT USES TYPED.JS FOR ITS ANIMATED TEXT EFFECT
* ONLY THE NAVBAR-COLLAPSABLE LIST COMPONENTS CAN BE ACCESSED OR EDITED
*/

// SOURCE OF NAVBAR
const src_nav = 'components/navbar/nav_list.html'
// ELEMENT OF TARGET ELEMENT
const el_nav = document.querySelector('.navbar-collapse')

fetch(src_nav).then((res) => {
  return res.text()
}).then((content) => {
  el_nav.innerHTML = content
  // console.log(content)
})