import "./task.css";

export function TaskCard({ ready }) {
    return (
        <div className="card">
            <h1>Tarea 1</h1>
            <span className={ready ? "bg-green" : "bg-red"}>
                {ready ? "Task done" : "Task pending"}
            </span>
        </div>
    );
}
