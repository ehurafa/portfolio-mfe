import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classNames from 'classnames'

const ReactApplicationBarParcel = ({ notification }) => {

    console.log('notification ', notification)

    const { message, color, background, icon = null, iconAnimation, animated = true  } = notification


    const frameworks = {
        angular: {
            title: 'Angular',
            class: 'color-red'
        },
        react: {
            title: 'React',
            class: 'color-blue',
            icon: 'fa-brands fa-react'
        },
        vue: {
            title: 'Vue',
            class: 'color-green'
        }
    }

    return (
        <div className={
            classNames(
                'bar',
                { [color]: color},
                { [background]: background},
                { [iconAnimation]: iconAnimation}
                )
            }>
                <p>{ message }</p>
                { icon && <i className={icon}></i> }
            </div>
    )
}

export default ReactApplicationBarParcel