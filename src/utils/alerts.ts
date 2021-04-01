import { creationFailIconHTML, creationFailTitleHTML } from '../views/Form/utils'

import Swal from 'sweetalert2'

export const renderFailToast = (message: string) => {
  Swal.fire({
    title: creationFailTitleHTML(message),
    toast: true,
    showConfirmButton: false,
    timer: 2500,
    icon: 'error',
    iconHtml: creationFailIconHTML,
    position: 'top',
    background: '#f56c67'
  })
}

export const renderSuccessToast = (message: string) => {
  Swal.fire({
    title: message,
    toast: true,
    showConfirmButton: false,
    timer: 1000,
    icon: 'success',
    position: 'top',
    background: '#fff'
  })
}