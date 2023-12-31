import { useContext } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
import ProjectContextProvider, { ProductContext } from "./store/ProductContext";

function App() {
  const { projects, selectedProjectId } = useContext(ProductContext);

  // Finding the current selected project Id
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  // Logic for rendering the content conditional rendering
  let content = <SelectedProject project={selectedProject} />;

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      {content}
    </main>
  );
}

export default App;
