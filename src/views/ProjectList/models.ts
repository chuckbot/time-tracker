import { ProjectStruct } from "../Form/models";

export interface IProjectList {
  projects: ProjectStruct[]
  isLoading: boolean
  onUpdateProject: (project: ProjectStruct) => void
  onShowProjectDetails: (project: ProjectStruct) => void
  refetchProjects: () => void
}