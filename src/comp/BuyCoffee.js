import React from 'react'
import Swal from 'sweetalert2'

class BuyCoffee extends React.Component {
  render (){
    const showAlert = () => {
      Swal.fire({
        iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-64 0 512 512" width="1em" height="1em" style="font-size: 80px;" fill="red">
          <path d="M186.1 .1032c-105.1 3.126-186.1 94.75-186.1 199.9v264c0 14.25 17.3 21.38 27.3 11.25l24.95-18.5c6.625-5.001 16-4.001 21.5 2.25l43 48.31c6.25 6.251 16.37 6.251 22.62 0l40.62-45.81c6.375-7.251 17.62-7.251 24 0l40.63 45.81c6.25 6.251 16.38 6.251 22.62 0l43-48.31c5.5-6.251 14.88-7.251 21.5-2.25l24.95 18.5c10 10.13 27.3 3.002 27.3-11.25V192C384 83.98 294.9-3.147 186.1 .1032zM128 224c-17.62 0-31.1-14.38-31.1-32.01s14.38-32.01 31.1-32.01s32 14.38 32 32.01S145.6 224 128 224zM256 224c-17.62 0-32-14.38-32-32.01s14.38-32.01 32-32.01c17.62 0 32 14.38 32 32.01S273.6 224 256 224z"/>
          </svg>`,
        html: 'Buy me a coffee ?<br/>Buying me a coffee will help me motivated.',
        showConfirmButton: false,
        showDenyButton: false,
        showClass: {popup: 'animate__animated animate__fadeIn'},
        hideClass: {popup: 'animate__animated animate__fadeOut'},
      })
    }
    return (
      <div onClick={showAlert}
      class='position-fixed bottom-0 end-0 text-light bg-black px-2 py-1 fw-bold border text-uppercase' 
      style={{rotate:'-90deg',marginBottom:'120px',marginRight:'-35px'}}>
        <span>a coffee ?</span>
      </div>
    )
  }
} 
export default BuyCoffee