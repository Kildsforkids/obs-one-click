import React from 'react'
import './ChoiceContainerItem.css'

function ChoiceContainerItem({ index, disabled = false, ...content }) {

    function start() {
        content.onClick(index)
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className="choice-container__item">
            <div className={'choice-container__card' + (disabled ? ' disabled' : '') + (content.active ? ' active' : '')}>
                <div className="choice-container__header">
                    {content.title}
                </div>
                <div onClick={start} className={'choice-container__preview ' + content.preview}></div>
                <div className="choice-container__link">
                    <a
                        onContextMenu={() => copyToClipboard(content.link)}
                        className="link"
                        href={content.link}
                        target="_blank">
                        {content.link}
                    </a>
                </div>
            </div>
            {/* <div className="choice-container__button">
                <button className="button">Выбрать</button>
            </div> */}
        </div>
    )
}

export default ChoiceContainerItem