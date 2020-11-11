import React from 'react'
import styles from './styles.module.css'
import WuAuthForm from './components/auth-form-v2/index'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export default WuAuthForm
