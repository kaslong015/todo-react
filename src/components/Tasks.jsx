import React from 'react';
import styles from '../components/style/tasks.module.css';
import Task from '../components/Task';

const Tasks = ({ tasks, onComplete, onDeleteTask }) => {
    const taskQuantity = tasks.length;
    const taskCompleted = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks} >
            <header className={styles.header}>
                <div>
                    <p>Create tasks</p>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>{taskCompleted} 0f {taskQuantity}</span>
                </div>
            </header>
            <div className={styles.list}>

                {tasks.map(task => (
                    <Task key={task.id} task={task} onComplete={onComplete} deleteTask={onDeleteTask} />
                ))}
            </div>
        </section>

    )
}

export default Tasks;