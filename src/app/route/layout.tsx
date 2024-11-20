import React from 'react'
import styles from './route.module.css'

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
return (
    <div className={`${styles.dev}`}>
        meh layout hu
        {children}
    </div>
)
}