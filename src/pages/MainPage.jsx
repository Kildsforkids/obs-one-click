import React from 'react'
import './MainPage.css'

function MainPage() {
    return (
        <div className="content">
            <div className="choice-container">
                <div className="choice-container__item">
                    <div className="choice-container__card">
                        <div className="choice-container__header">
                            Google Meet
                        </div>
                        <div className="choice-container__preview google_meet"></div>
                        <div className="choice-container__link">
                            <a className="link" href="">link</a>
                        </div>
                    </div>
                    <div className="choice-container__button">
                        <button className="button">Выбрать</button>
                    </div>
                </div>
                <div className="choice-container__item">
                    <div className="choice-container__card">
                        <div className="choice-container__header">
                            VooV Meeting
                        </div>
                        <div className="choice-container__preview voov_meeting"></div>
                        <div className="choice-container__link">
                            <a className="link" href="">link</a>
                        </div>
                    </div>
                    <div className="choice-container__button">
                        <button className="button">Выбрать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage