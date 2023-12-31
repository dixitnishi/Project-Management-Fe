import { createContext, useState } from "react";

export const ProductContext = createContext({
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
  onDelete: () => {},
  onAddTask: () => {},
  onDeleteTask: () => {},
  onAdd: () => {},
  onCancel: () => {},
  onStartAddProject: () => {},
  onSelectProject: () => {},
});

const ProductContextProvider = ({ children }) => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // Functions which perform state changes
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  }

  function handleStartAddproject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const cxtValue = {
    selectedProjectId: projectState.selectedProjectId,
    projects: projectState.projects,
    tasks: projectState.tasks,
    onDelete: handleDeleteProject,
    onAddTask: handleAddTask,
    onDeleteTask: handleDeleteTask,
    onAdd: handleAddProject,
    onCancel: handleCancelAddProject,
    onStartAddProject: handleStartAddproject,
    onSelectProject: handleSelectProject,
  };

  return (
    <ProductContext.Provider value={cxtValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
