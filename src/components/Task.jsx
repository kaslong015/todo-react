import React from 'react';
import styles from '../components/style/task.module.css';
import { TbTrash } from 'react-icons/tb';

const Task = () => {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>
            <p>Integar urna interdum massa libero instructor naque turpis semper. Duis vel sed fames integer.</p>
            <button className={styles.deleteButton}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}

export default Task;