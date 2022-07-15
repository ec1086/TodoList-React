import React, { useState } from "react";

export function List() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);

	return (
		<div className="text-center mt-5 d-flex flex-column justify-content-center align-items-center">
			<h1>To Do List</h1>
			<div className="main shadow p-3 mb-5">
				<input
					className="color-change"
					placeholder="Add your tasks here:"
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
					onKeyPress={e => {
						if (e.key == "Enter") {
							setTasks([
								...tasks,
								{
									id: Math.random()
										.toString(16)
										.substring(2),
									label: newTask
								}
							]);
							setNewTask("");
						}
					}}></input>
				<ul>
					{tasks.map(task => (
						<li key={task.id} className="hidden-icon">
							{task.label}
							<span
								onClick={e => {
									let filterTasks = tasks.filter(
										t => t.id != task.id
									);
									setTasks(filterTasks);
								}}>
								✖
							</span>
						</li>
					))}
				</ul>
				<div>
					<span className="footer-text">
						{tasks.length == 1
							? `${tasks.length} tasks left`
							: tasks.length == 0
							? "No more tasks"
							: `${tasks.length} tasks left.`}
					</span>
				</div>
			</div>
		</div>
	);
}
