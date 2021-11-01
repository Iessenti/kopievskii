import { useState } from 'react'
import './range.css'

export const RangeSlider = () => {
    const [value, setValue] = useState<number>(0)


    return (
        <div className="container">
        
            <input type='range' className='slider' />
        
        </div>
    )
}