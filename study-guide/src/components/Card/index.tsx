import { useState } from 'react'
export function Card({title, content}:{title:string, content:string}){
    const [ isClicked, setIsClicked ] = useState<boolean>(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return(
        <div onClick={handleClick} className='rounded-lg border border-green'>
            <h2>{title}</h2>
            <h3 onClick={handleClick} className={isClicked ? '' : 'bg-black'}>{content}</h3>
        </div>
    )
}