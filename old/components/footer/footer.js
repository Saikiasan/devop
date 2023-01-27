
// SOURCE OF footer
const src_footer = 'components/footer/footer.html'
// ELEMENT OF TARGET ELEMENT
const el_footer = document.querySelector('footer')
el_footer.classList.add('bg-black','text-light')

fetch(src_footer).then((res) => {
  return res.text()
}).then((content) => {
  el_footer.innerHTML = content
  // console.log(content)
})