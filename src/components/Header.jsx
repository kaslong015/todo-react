import React, { useState } from 'react'
import logo from '../assets/todoLogo.svg';
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../components/style/header.module.css";

export const Header = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(title);
        setTitle('')
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="logo" />
                <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                    <input type="text" value={title} placeholder="add a new task" onChange={onChangeTitle} />
                    <button>Create <AiOutlinePlusCircle size={20} /></button>
                </form>
            </header>
        </>

    )
}
