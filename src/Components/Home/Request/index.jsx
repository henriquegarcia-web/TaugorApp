import React from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import { Markup } from 'interweave';

import UserImage from '../../../Assets/UserImage.png'

import { useView } from '../../../Contexts/ViewContext'
import { ReturnImpactedUsers, ReturnPriority, ReturnStatus } from '../../../Services/Requests';

const Request = ({ data }) => {

  const { showModal } = useView()

  var description = data.description.replace(/<[^>]+>/g, '');

  const status = ReturnStatus(data.status)
  const priority = ReturnPriority(data.priority)
  const impactedUsers = ReturnImpactedUsers(data.impacted_users)

  return (
    <S.Request onClick={() => showModal('edit', true, data)}>

      <S.ResquestIdentifier>
        <p>Request #{data.id}</p>
      </S.ResquestIdentifier>

      <S.RequestContainer>

        <S.RequestHeader>
          <S.RequestProduct>
            <I.FiBox />
            <p>{data.product}</p>
          </S.RequestProduct>
          <S.RequestPriority>
            <I.FiStar />
            <p>{priority}</p>
          </S.RequestPriority>
          <S.RequestImpactedUsers>
            <I.FiUsers />
            <p>{impactedUsers}</p>
          </S.RequestImpactedUsers>
        </S.RequestHeader>

        <S.RequestMainInfos>
          <h1>{data.title}</h1>
          <h2><Markup content={description} /></h2>
          <p>{data.problem}</p>
        </S.RequestMainInfos>

        <S.RequestDetails>
          <S.RequestStats>
            <I.FiActivity />
            <p>{status}</p>
          </S.RequestStats>
          
          <S.RequestUser>
            <S.RequestUserImage>
              <img src={UserImage} alt="" />
            </S.RequestUserImage>
            <p>{data.created_by.user_name}</p>
          </S.RequestUser>
        </S.RequestDetails>

      </S.RequestContainer>
      
    </S.Request>
  )
}

export default Request