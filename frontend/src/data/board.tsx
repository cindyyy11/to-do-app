import { v4 as uuidv4 } from "uuid";
import taskImage from "../assets/images/task.png";
import taskImage2 from "../assets/images/task2.jpg";
import taskImage3 from "../assets/images/task3.jpeg";
import { Columns } from "../types";
import { getRandomColors } from "../helpers/getRandomColors";

export const Board: Columns = {
	backlog: {
		name: "Backlog",
		items: [    
			{
				id: uuidv4(),
				title: "Design To-Do App UI",
				description: "Create wireframes and mockups for the To-Do app interface.",
				priority: "medium",
				deadline: 7,
				image: taskImage2,
				alt: "UI design task",
				tags: [
					{ title: "Design", ...getRandomColors() },
					{ title: "UI/UX", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "Set Up Project Repository",
				description: "Initialize the Git repository and set up the project structure.",
				priority: "low",
				deadline: 3,
				tags: [
					{ title: "Setup", ...getRandomColors() },
					{ title: "Git", ...getRandomColors() },
				],
			},
		],
	},
	pending: {
		name: "Pending",
		items: [
			{
				id: uuidv4(),
				title: "Develop Task Management Logic",
				description: "Implement logic to add, edit, and delete tasks in the To-Do app.",
				priority: "high",
				deadline: 14,
				tags: [
					{ title: "Development", ...getRandomColors() },
					{ title: "Logic", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "Create Task Categories",
				description: "Allow users to organize tasks into categories.",
				priority: "low",
				deadline: 10,
				image: taskImage,
				alt: "task categories",
				tags: [
					{ title: "Feature", ...getRandomColors() },
					{ title: "Organization", ...getRandomColors() },
				],
			},
		],
	},
	todo: {
		name: "To Do",
		items: [
			{
				id: uuidv4(),
				title: "Integrate Authentication",
				description: "Set up user authentication with email and social login options.",
				priority: "medium",
				deadline: 12,
				image: taskImage3,
				alt: "authentication integration",
				tags: [
					{ title: "Security", ...getRandomColors() },
					{ title: "Auth", ...getRandomColors() },
				],
			},
		],
	},
	doing: {
		name: "Doing",
		items: [
			{
				id: uuidv4(),
				title: "Implement Task Reminders",
				description: "Add notification reminders for upcoming tasks.",
				priority: "low",
				deadline: 5,
				tags: [
					{ title: "Feature", ...getRandomColors() },
					{ title: "Notifications", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "Set Up Cloud Sync",
				description: "Enable cloud synchronization to keep tasks updated across devices.",
				priority: "medium",
				deadline: 15,
				tags: [
					{ title: "Sync", ...getRandomColors() },
					{ title: "Cloud", ...getRandomColors() },
				],
			},
		],
	},
	done: {
		name: "Done",
		items: [
			{
				id: uuidv4(),
				title: "Create Project Documentation",
				description: "Write comprehensive documentation for the To-Do app.",
				priority: "high",
				deadline: 2,
				image: taskImage,
				alt: "documentation task",
				tags: [
					{ title: "Docs", ...getRandomColors() },
					{ title: "Writing", ...getRandomColors() },
				],
			},
		],
	},
};
