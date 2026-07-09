import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

import { useState } from "react"
import { Button } from "../button"
import { Modal } from "../modal"
import directionImage from "../../images/direction.jpg"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  const directionModalState = useState(false)

  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            <b>* 수원역</b>
            <br />
            4번출구 앞 720-2, 83-1, 10, 10-2, 10-5, 11-1, 37, 66-4, 13-4 탑승
            <br /> → 수원고용센터, 동수원병원, 라마다호텔 앞 하차     
            <br />     
            <b>* 수원버스터미널</b>
            <br />
            (좌석)3002, 4000, 4500 또는 (일반)300, 300-1, 88 탑승
            <br /> → 월드메르디앙, 인계동동문굿모닝힐아파트, 지만파출소, 우만신성아파트 하차
          </div>     
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>수원 더 아리엘 웨딩홀</b> 검색
            <br />
            - 건물 내 지하 1, 2층 주차장, 주차 타워 주차장 이용
            <br />
            - 주차 2시간 무료
            <br />
            - 외부 주차장 이용 시 주차원의 안내를 받아 이동
          </div>          
        </div>
        <Button
          onClick={() => {
            directionModalState[1](true)
          }}
        >
          오시는 길 자세히 보기
        </Button>
      </LazyDiv>

      <Modal
        modalState={directionModalState}
        className="direction-modal"
      >
        <img
          src={directionImage}
          alt="오시는 길 안내"
          className="direction-image"
        />

        <div className="footer direction-footer">
          <Button
            buttonStyle="style2"
            className="direction-close-button bg-light-grey-color text-dark-color"
            onClick={() => directionModalState[1](false)}
          >
            닫기
          </Button>
        </div>
      </Modal>
    </>
  )
}
