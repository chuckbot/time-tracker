/* eslint-disable react-hooks/exhaustive-deps */
import { IFormInput, ProjectStruct } from "./models";
import { SubmitHandler, useForm } from "react-hook-form";
import { createProject, updateProject } from "./services";
import { renderFailToast, renderSuccessToast } from "../../utils/alerts";
import { useEffect, useState } from "react";

import { Button } from "../../components/Form/Button";
import { FormWrapper } from './styles'
import Input from "../../components/Form/Input";
import Textarea from "../../components/Form/Textarea";

export const Form = (projectEdition: ProjectStruct) => {
  const { register, handleSubmit, reset, setValue } = useForm<IFormInput>();
  const [validButtonMessage, setValidButtonMessage] = useState('Create project')
  const [isEditing, setIsEditing] = useState(false)
  const { id, name, description, refetchProjects } = projectEdition

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newProjectObj: ProjectStruct = {
      name: data.name,
      description: data.description
    }
    
    // This section validates if there is some blank field, if that's the case, just inform it and dont send the request to the cloud
    if (Object.values(data).map(singleValue => singleValue.trim()).includes('')) {
      renderFailToast("Can't leave blank fields")
      return
    }

    !isEditing ?
    createProject(newProjectObj)
      .then(() => {
        renderSuccessToast('Project Created')
        reset({})
        refetchProjects && refetchProjects()
      })
      .catch(err => {
        renderFailToast('Creation Failed')
        console.log(err)
      })
    :
    updateProject({...newProjectObj, id: id})
      .then(() => {
        renderSuccessToast('Project updated')
        setValidButtonMessage('Create project')
        refetchProjects && refetchProjects()
        reset({})
      })
      .catch(err => {
        renderFailToast('Update Failed')
        console.log(err)
      })
  };

  useEffect(() => {
    if (name && name.trim().length) {
      setValue('name', name)
      setValue('description', description)
      setValidButtonMessage('Update project')
    }
  }, [projectEdition])

  useEffect(() => {
    validButtonMessage === 'Create project' && setIsEditing(false)
    validButtonMessage === 'Update project' && setIsEditing(true)
  }, [validButtonMessage])
  
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="name-input">
        <Input
          id="wer"
          name="name"
          placeholder="Project Name"
          type="text"
          ref={register}
        />
      </div>

      <div className="description-input">
        <Textarea
          id="7"
          name="description"
          placeholder="Project Description"
          rows={6}
          ref={register}
        />
      </div>

      <div className="buttons-wrapper">
        <div className="button-container">
          <Button onClick={() => reset({})} type="button" label="Reset" variant="secondary" />
        </div>
        
        <div className="button-container">
          <Button label={validButtonMessage} type="submit" variant="outline" />
        </div>
      </div>
    </FormWrapper>
  );
};
