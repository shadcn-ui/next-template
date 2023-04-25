import { ChevronDown } from 'lucide-react'
import React from 'react'

const RouteLink:React.FC<{title : string}> = ({title}) => {
  return (
    <div className='flex items-center gap-2'>
        <p>{title}</p>
        <ChevronDown size={16} className="mt-1" />
    </div>
  )
}

export default RouteLink