import { useEffect, useState } from 'react'

import { Form } from '../../views/Form'
import { MainWrapper } from './styles'
import { ProjectDetails } from '../../views/ProjectDetails'
import { ProjectList } from '../../views/ProjectList'
import { ProjectStruct } from '../../views/Form/models'
import { getAllProjects } from './services'

export const MainLayout = () => {
  const [projectEdition, setProjectEdition] = useState<ProjectStruct>({} as ProjectStruct)
  const [detailedProject, setDetailedProject] = useState<ProjectStruct>({} as ProjectStruct)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [projects, setProjects] = useState<ProjectStruct[]>([])

  useEffect(() => {
    setIsLoading(true)
    handleBringAllProjects()
  }, [])

  const handleBringAllProjects = () => {
    setProjectEdition({} as ProjectStruct)
    getAllProjects()
      .then((res: any) => {
        setIsLoading(false)
        setProjects(res.data.listProjects.items)
      })
      .catch(err => {
        setIsLoading(false)
        console.log("error getting the projects", err)
      })
  }

  return (
    <MainWrapper>
      <div className="visible-area">
        <Form {...projectEdition} refetchProjects={handleBringAllProjects} />
        {
          !Object.values(detailedProject).length ?
          <ProjectList
            projects={projects}
            isLoading={isLoading}
            refetchProjects={handleBringAllProjects}
            onShowProjectDetails={project => setDetailedProject(project)} 
            onUpdateProject={project => setProjectEdition(project)} />
          :
          <ProjectDetails {...detailedProject} returnToList={() => setDetailedProject({} as ProjectStruct)} />
        }
      </div>
    </MainWrapper>
  )
}

