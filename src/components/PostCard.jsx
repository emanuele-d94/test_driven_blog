import { useState } from 'react'

export default function PostCard({title,excerpt, content}) {

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className={'post-card'}>
            <h1 className={'post-title'}>{title}</h1>
            <div className={'post-excerpt'}>{excerpt}</div>
            {isExpanded ?  <div className={'post-content'}>{content}</div> : null}
            <button onClick={() => setIsExpanded(prev => !prev)}>{isExpanded ? 'Comprimi':'Espandi'}</button>
        </div>
    )
}