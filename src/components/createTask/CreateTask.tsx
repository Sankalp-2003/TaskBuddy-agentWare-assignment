import { RxCross2 } from "react-icons/rx";
import "../../styles/createTask.scss";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../UI/Button";

type CreateTaskProps = {
  setCreateTask: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateTask: React.FC<CreateTaskProps> = ({ setCreateTask }) => {
  const [textArea, setTextArea] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");
  const maxChar = 3000;
  const [files, setFiles] = useState<File[]>([]);
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxChar) {
      setTextArea(e.target.value);
    }
  };

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const isFormValid =
    taskTitle && textArea && category && dueDate && status.length > 0;

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div className="createTask">
      <div className="content">
        <div className="head">
          <p>Create Task</p>
          <p onClick={() => setCreateTask(false)}>
            <RxCross2 />
          </p>
        </div>
        <div className="body">
          <form>
            <input
              className="title__name"
              type="text"
              placeholder="Task title"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              required
            />

            <div className="description">
              <textarea
                value={textArea}
                onChange={handleTextAreaChange}
                rows={6}
                cols={50}
                placeholder="Description"
                required
              ></textarea>
              <div
                className="textarea__limit"
                style={{ color: textArea.length >= maxChar ? "red" : "gray" }}
              >
                {textArea.length} / {maxChar} characters
              </div>
            </div>
            <div className="others">
              <div className="category">
                <label>Task Category*</label>
                <div className="options">
                  <p
                    className={`work ${category === "work" ? "selected" : ""}`}
                    onClick={() => handleCategoryChange("work")}
                  >
                    work
                  </p>
                  <p
                    className={`personal ${
                      category === "personal" ? "selected" : ""
                    }`}
                    onClick={() => handleCategoryChange("personal")}
                  >
                    Personal
                  </p>
                </div>
              </div>
              <div className="due__date">
                <label>Due on*</label>
                <br />
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => {
                    setDueDate(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="status">
                <label>Task Status*</label>
                <br />
                <select
                  name="status"
                  value={status}
                  onChange={handleStatusChange}
                  required
                >
                  <option hidden>Choose</option>
                  <option value="to-do">TO-DO</option>
                  <option value="progress">PROGRESS</option>
                  <option value="completed">COMPLETED</option>
                </select>
              </div>
            </div>
            <div className="create-task-container">
              <p>Attachment</p>
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>
                  Drop your files here or <span>Update here</span>
                </p>
              </div>

              <div className="uploaded-files">
                {files.length > 0 && (
                  <ul>
                    {files.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="btns">
              <Button
                icon={""}
                text={"CANCEL"}
                onClick={() => {
                  setCreateTask(false);
                }}
                className={"cancel-btn"}
              />
              <button
                className="create-btn"
                disabled={!isFormValid}
                style={{ opacity: isFormValid ? 1 : 0.5 }}
              >
                CREATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
