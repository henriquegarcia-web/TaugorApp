import React from 'react'
import * as S from './style'
import * as I from 'react-icons/fi'

import UserImage from '../../../Assets/UserImage.png'

const Request = ({ data }) => {

  var description = data.description.replace(/<[^>]+>/g, '');

  const status = ( data.status === 'pendente'
    ? 'Pendente'
    : data.status === 'em_andamento'
    ? 'Em andamento'
    : data.status === 'finalizado'
    ? 'Finalizada'
    : 'Operação parada'
  )

  const priority = ( data.priority === 'baixa'
    ? 'Baixa'
    : data.priority === 'media'
    ? 'Média'
    : 'Alta'
  )

  const impactedUsers = ( data.impacted_users === 1
    ? 'Apenas 1'
    : data.impacted_users === 2
    ? '1 a 10 usuários'
    : data.impacted_users === 3
    ? '11 a 30 usuários'
    : data.impacted_users === 4
    ? '31 a 50 usuários'
    : 'Mais de 50 usuários'
  )

  return (
    <S.Request>

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
          <h2>{description}</h2>
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