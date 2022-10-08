import React, { useState } from 'react'
import logo from '../assets/todoLogo.svg';
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../components/style/header.module.css";

export const Header = ({ onAddTask }) => {
    const [title, setTitle] = useState(' ');

    function handleSumit(e) {
        // e.preventDefault();
        onAddTask();
    }

    function onChangeTitle(event) {
        e.preventDefault();
        setTitle(event.target.value);
    }

    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="logo" />
                <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                    <input type="text" placeholder="add a new task" onChange={onChangeTitle} />
                    <button>Create <AiOutlinePlusCircle size={20} /></button>
                </form>
            </header>
        </>

    )
}
