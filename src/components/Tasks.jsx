import React from 'react';
import styles from '../components/style/tasks.module.css';
import Task from '../components/Task';

const Tasks = () => {
    return (
        <section className={styles.tasks} >
            <header className={styles.header}>
                <div>
                    <p>Create tasks</p>
                    <span>10</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>1 0f 10</span>
                </div>
            </header>
            <div className={styles.list}>
                <Task />
            </div>
        </section>

    )
}

export default Tasks;