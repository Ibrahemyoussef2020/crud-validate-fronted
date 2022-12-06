import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastify = (message,status)=>{
    if(status === 'success'){
      toast.success(message,{
        position:"top-right",
        autoClose:2000
      })
    }
    if(status === 'error'){
      toast.error(message,{
        position:"top-right",
        autoClose:2000
      })
    }else if(status === 'ather'){
      toast(message,{
        position:"top-right",
        autoClose:2000
      })
    }
  }

export const ToastifyContainer = (
  position="top-right",
  autoClose=5000,
  hideProgressBar=false,
  newestOnTop=false,
  closeOnClick=true,
  rtl=false,
  pauseOnFocusLoss=true,
  draggable=true,
  pauseOnHover=true,
  theme='light'
)=>{
   return <ToastContainer
    position={position}
    autoClose={autoClose}
    hideProgressBar={hideProgressBar}
    newestOnTop={newestOnTop}
    closeOnClick={closeOnClick}
    rtl={rtl}
    pauseOnFocusLoss={pauseOnFocusLoss}
    draggable={draggable}
    pauseOnHover={pauseOnHover}
    theme={theme}
    />
}
