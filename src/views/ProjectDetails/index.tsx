/* eslint-disable react-hooks/exhaustive-deps */
import { FormWrapper, MainWrapper, SingleTimeItem } from './styles'
import { ProjectStruct, TimeStruct } from "../Form/models"
import { createTime, deleteTime, getTimes } from './services'
import { renderFailToast, renderSuccessToast } from '../../utils/alerts'
import { useEffect, useState } from 'react'

import { Button } from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import Swal from 'sweetalert2'
import Textarea from '../../components/Form/Textarea'
import { TimeRequestStruct } from './models'
import backIcon from './res/icons/back.svg'
import deleteIcon from '../ProjectList/res/icons/delete.svg'
import { useForm } from 'react-hook-form'

export const ProjectDetails = (detailedProject: ProjectStruct) => {
  const { id, name, description, returnToList } = detailedProject
  const { register, handleSubmit, reset } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [localTimes, setLocalTimes] = useState<TimeStruct[]>([])

  useEffect(() => {
    setIsLoading(true)
    handleBringAllTimes()
  }, [])

  const handleBringAllTimes = () => {
    getTimes(id as string)
      .then((res: any) => {
        setLocalTimes(res.data.listTimeTracks.items)
        setIsLoading(false)
      })
      .catch(err => {
        console.log("error getting the times", err)
        setIsLoading(false)
      })
  }

  const onSubmit = (data: TimeRequestStruct) => {
    const newTimeObj = {
      belongsTo: id as string,
      description: data.description,
      amount: parseFloat((data.amount).toString())
    }

    if (Object.values(data).map(singleValue => singleValue.trim()).includes('')) {
      renderFailToast("Can't leave blank fields")
      return
    }
    
    createTime(newTimeObj)
      .then(() => {
        renderSuccessToast('Time created')
        reset({})
        handleBringAllTimes()
      })
      .catch(err => {
        console.log(err)
        renderFailToast('Creation failed')
      })
  }

  const askDeleteConfirmation = (id: string) => {
    Swal.fire({
      title: 'Are you sure you want to delete this time?',
      showCancelButton: true,
      confirmButtonText: `Delete`,
      confirmButtonColor: 'tomato'
    }).then(result => {
      result.isConfirmed && handleDeletetime(id)
    })
  }

  const handleDeletetime = (id: string) => {
    deleteTime(id)
      .then(() => {
        renderSuccessToast('Time deleted')
        handleBringAllTimes()
      })
      .catch(err => {
        renderFailToast('Delete failed')
        console.log(err)
      })
  }

  return (
    <MainWrapper>
      <p className="name-label"> Name </p>
      <p className="name"> { name } </p>

      <p className="description-label"> Description </p>
      <p className="description"> { description } </p>

      <div className="divider"/>

      <div className="time-form">
        <h2 className="create-time-title"> Create Time </h2>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <div className="time-input">
            <Input
              id="w"
              name="amount"
              placeholder="Time (Hours)"
              type="number"
              ref={register}
            />
          </div>
      
          <div className="time-description-input">
            <Textarea
              id="y"
              name="description"
              placeholder="Description"
              rows={4}
              ref={register}
            />
          </div>

          <div className="buttos-wrapper">
            <div className="reset-button">
              <Button label="Reset" type="button" variant="secondary" onClick={() => {}}/>
            </div>
            <div className="accept-button">
              <Button label="Create time" type="submit" variant="primary" onClick={() => {}}/>  
            </div>
          </div>
        </FormWrapper>
      </div>

      <div className="times-wrapper">
        <p className="times-label"> Times </p>
        <div className="table-wrapper">
          {
            !isLoading ?
            localTimes.map((singleTime: TimeStruct) => (
              <SingleTimeItem key={singleTime.id}>
                <p className="time-amount"> { singleTime.amount } hours </p>
                <p className="time-description"> {singleTime.description} </p>

                <div onClick={() => askDeleteConfirmation(singleTime.id as string)} className="delete-icon-container">
                  <img alt="Delete" src={deleteIcon} />
                </div>
              </SingleTimeItem>
            ))
            : 
            <p> Loading ... </p>
          }

          {
            !isLoading && localTimes.length === 0 &&
            <p className="empty-text"> No times added yet </p>
          }
        </div>
      </div>

      <img onClick={returnToList} alt="Return" src={backIcon} className="return-icon"/>
    </MainWrapper>
  )
}