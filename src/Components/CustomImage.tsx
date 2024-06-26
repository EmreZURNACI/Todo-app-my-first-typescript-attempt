import React from 'react'
interface propsType {
    source: string,
    desc: string
}
function CustomImage({ source, desc }: propsType) {
    return (
        <div className='ww-[calc(100%)] h-[calc(60%)]'>
            <img src={source} alt={desc} className='w-full h-full' />
        </div>
    )
}

export default CustomImage