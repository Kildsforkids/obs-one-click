import React from 'react'
import './LoginPage.css'

function LoginPage() {
    return (
        <div className="content">
            <div className="logo">
                OBS One Click
            </div>
            <form className="login-form">
                <div className="login-form__inputs">
                    <input
                        className="login-form__input"
                        type="text"
                        placeholder="Логин" />
                    <input
                        className="login-form__input"
                        type="password"
                        placeholder="Пароль" />
                </div>
                <div className="login-form__buttons">
                    <button className="login-form__button">
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage