 import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const ToastifyUpdate=(msg)=>{

    toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
};


export const ToastifyAdd=(msg)=>{
    toast.info(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
};

export const ToastifyDelete=(msg)=>{
    toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}
