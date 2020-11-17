import React from 'react';
import roomsImages from '../../shared/__mocks__/roomsImages';
import roomInfos from '../../shared/__mocks__/roomInfos';
import bedCase from '../../shared/__mocks__/bedCase';
import reviewers from '../../shared/__mocks__/reviewers';
import facilities from '../../shared/__mocks__/facilities';
import policies from '../../shared/__mocks__/policies';
import host from '../../shared/__mocks__/host';
import roomsInfo from '../../shared/__mocks__/roomsInfo';
import nearsInfo from '../../shared/__mocks__/nearsInfo';
import areas from '../../shared/__mocks__/areas';
import Wrapper from '../../components/RoomDetail/Wrapper';
import Carousel from '../../components/Carousel';
import HostInfo from '../../components/RoomDetail/HostInfo';
import RoomInfo from '../../components/RoomDetail/RoomInfo';
import SpecialPrice from '../../components/RoomDetail/SpecialPrice';
import Title from '../../components/RoomDetail/Title';
import Description from '../../components/RoomDetail/Description';
import BedCase from '../../components/RoomDetail/BedCase';
import Facilities from '../../components/RoomDetail/Facilities';
import Location from '../../components/RoomDetail/Location';
import CheckIn from '../../components/RoomDetail/CheckIn';
import Review from '../../components/RoomDetail/Review';
import HostDetail from '../../components/RoomDetail/HostDetail';
import Policy from '../../components/RoomDetail/Policy';
import Report from '../../components/RoomDetail/Report';
import NearRoom from '../../components/RoomDetail/NearRoom';
import Option from '../../components/RoomDetail/Option';
import useHost from '../../hooks/useHost';

const RoomDetailContainer = () => {
  console.log(useHost());
  // const host = useHost();

  return (
    <>
      <Carousel images={roomsImages} />
      <Title />
      <SpecialPrice />
      <HostInfo />
      <Wrapper className='contents-padding'>
        {roomInfos.map((info, index) => (
          <RoomInfo key={index} {...info} />
        ))}
      </Wrapper>
      <Description />
      <BedCase bedCase={bedCase} />
      <Facilities facilities={facilities} />
      <Location />
      <CheckIn />
      <Review reviewers={reviewers} />
      <HostDetail host={host} />
      <Policy policies={policies} />
      <Report />
      <NearRoom roomsInfo={roomsInfo} nearsInfo={nearsInfo} />
      <Option areas={areas} />
    </>
  );
};

export default RoomDetailContainer;
