import { ArrowLeftIcon } from 'lucide-react'
import React from 'react'

function ButtonIcon({buttonText}){
  console.log(buttonText)
    if(buttonText.toLowerCase() === "register"){
   return <ArrowLeftIcon className="h-4 w-4" /> 
  }
}

export default ButtonIcon