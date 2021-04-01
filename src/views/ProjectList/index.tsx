import { MainWrapper, ProjectListItem } from './styles'
import { renderFailToast, renderSuccessToast } from '../../utils/alerts';

import { IProjectList } from './models';
import { ProjectStruct } from '../Form/models';
import Swal from 'sweetalert2'
import deleteIcon from './res/icons/delete.svg'
import { deleteProject } from './services';
import editIcon from './res/icons/edit.svg'

export const ProjectList = ({ onUpdateProject, onShowProjectDetails, projects, isLoading, refetchProjects }: IProjectList) => {
  const maxDescriptionCharacters = 200
  const maxTitleCharacters = 40

  const handleUpdateProject = (project: ProjectStruct) => {
    onUpdateProject(project)
  }

  const handleShowProjectDetails = (project: ProjectStruct) => {
    onShowProjectDetails(project)
  }

  const askDeleteConfirmation = (id: string) => {
    Swal.fire({
      title: 'Are you sure you want to delete this project?',
      showCancelButton: true,
      confirmButtonText: `Delete`,
      confirmButtonColor: 'tomato'
    }).then(result => {
      result.isConfirmed && handleDeleteProject(id)
    })
  }

  const handleDeleteProject = (id: string) => {
    deleteProject({id})
      .then(() => {
        renderSuccessToast('Project Deleted')
        refetchProjects()
      })
      .catch(err => {
        renderFailToast('Delete Failed')
        console.log(err)
      })
  } 

  return (
    <MainWrapper>
      {
          ! isLoading ?
          projects.map((project) => (
            <ProjectListItem  key={project.id}>
              
              <div onClick={() => handleShowProjectDetails(project)} className={'clickable-area'} />

              <p className="name"> 
                { project.name.split('').map((letter, i) => i < maxTitleCharacters && letter).filter(Boolean).join('')} 
                { project.name.split('').length > maxTitleCharacters && ' ...' } 
              </p>

              <p className="description"> 
                { project.description.split('').map((letter, i) => i < maxDescriptionCharacters && letter).filter(Boolean).join('') }
                { project.description.split('').length > maxDescriptionCharacters && ' ...' } 
              </p>

              <div className="actions-wrapper">
                <div onClick={() => handleUpdateProject(project)} className="action-container">
                  <img alt="Edit" src={editIcon} />
                </div>

                <div onClick={() => askDeleteConfirmation(project.id as string)} className="action-container">
                  <img alt="Delete" src={deleteIcon} />
                </div>
              </div>
            </ProjectListItem>
          ))

          :

          <div className="loading-container">
            <p> Loading ... </p>
          </div>
        }
        
    </MainWrapper>
  )
};
