import React from 'react'
import * as S from './style'

import {
  FiBox, // Product
  FiBookmark, // Category
  FiStar, // Priority
  FiActivity, // Stats
  FiUsers, // Impacted Users
} from 'react-icons/fi'

import UserImage from '../../../Assets/UserImage.jpeg'

const Request = () => {
  return (
    <S.Request>

      <S.ResquestIdentifier>
        <p>Request #0001</p>
      </S.ResquestIdentifier>

      <S.RequestContainer>

        <S.RequestHeader>
          <S.RequestProduct>
            <FiBox />
            <p>Website E-commerce</p>
          </S.RequestProduct>
          <S.RequestCategory>
            <FiBookmark />
            <p></p>
          </S.RequestCategory>
          <S.RequestPriority>
            <FiStar />
            <p></p>
          </S.RequestPriority>
        </S.RequestHeader>

        <S.RequestMainInfos>
          {/* <h1>Tit amet consectetur ouos temporibus explicabo</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quos temporibus explicabo facere quia totam necessitatibus</h2> */}
        </S.RequestMainInfos>

        <S.RequestDetails>
          <S.RequestStats>
            <FiActivity />
            <p>Aplicação parada</p>
          </S.RequestStats>
          <S.RequestImpactedUsers>
            <FiUsers />
            <p></p>
          </S.RequestImpactedUsers>
          <S.RequestUser>
            {/* <div className='user__image'><img src={UserImage} alt="" /></div> */}
            <p></p>
          </S.RequestUser>
        </S.RequestDetails>

      </S.RequestContainer>
      
    </S.Request>
  )
}

export default Request