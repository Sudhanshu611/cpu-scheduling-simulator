# CPU Scheduling Simulator

A CPU Scheduling Simulator built using React that visually demonstrates how different CPU scheduling algorithms work.
It allows users to input processes, select a scheduling algorithm, and instantly view process tables, performance metrics, and Gantt charts.

This project is useful for Operating Systems learning, visual understanding, and academic demonstrations.

# Features

📥 Input custom processes (Arrival Time, Burst Time, Priority)

🔁 Supports multiple CPU scheduling algorithms

📊 Displays:

Completion Time (CT)

Turnaround Time (TAT)

Waiting Time (WT)

📈 Visual Gantt Chart

📉 Performance Metrics:

Average Waiting Time

Average Turnaround Time

Throughput

CPU Utilization

⚡ Interactive and real-time updates

🧠 Supported Scheduling Algorithms

First Come First Serve (FCFS)

Shortest Job First (SJF – Non-Preemptive)

Shortest Remaining Time First (SRTF)

Round Robin (RR) (with configurable time quantum)

Priority Scheduling

🖼️ UI Preview

CPU Scheduling Simulator Interface

(Add your screenshot in a screenshots/ folder and update the path if needed)

🛠️ Tech Stack

Frontend: React.js

Styling: CSS / Tailwind CSS

State Management: React Hooks (useState)

Visualization: Custom Gantt Chart component

Language: JavaScript (ES6)

📂 Project Structure
src/
├── algorithms/
│   ├── fcfs.js
│   ├── sjf.js
│   ├── srtf.js
│   ├── rr.js
│   └── priority.js
│
├── components/
│   ├── ProcessForm.jsx
│   ├── ProcessTable.jsx
│   ├── MetricsTable.jsx
│   ├── GanttChart.jsx
│   └── OtherDetails.jsx
│
├── App.jsx
└── index.js

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/cpu-scheduling-simulator.git

cd cpu-scheduling-simulator

2️⃣ Install Dependencies
npm install

3️⃣ Run the Application
npm run dev


or

npm start


The app will run at:
👉 http://localhost:3000

🧪 How It Works

Enter Arrival Time, Burst Time, and Priority (if required)

Select a CPU Scheduling Algorithm

Click Solve

The simulator:

Generates a scheduling order

Calculates CT, TAT, WT

Renders the Gantt Chart

Displays performance metrics

📊 Example Metrics
Metric	Value
Avg Waiting Time	3.4
Avg Turnaround Time	8.2
Throughput	0.21
CPU Utilization	100%
🎯 Learning Outcomes

Understand CPU scheduling algorithms visually

Learn how preemptive and non-preemptive scheduling differ

Improve understanding of OS performance metrics

Practice React component architecture and state flow

🧩 Future Enhancements

⏱ Adjustable time quantum UI for Round Robin

📱 Responsive mobile layout

📄 Export results as PDF

🎨 Animated Gantt chart

🧠 Step-by-step execution mode

🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

📜 License

This project is licensed under the MIT License.
