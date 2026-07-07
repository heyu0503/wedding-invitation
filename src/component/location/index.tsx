import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
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
            4번출구 앞 10, 10-2, 10-5, 11-1, 13-4, 15-1, 37, 83-1, 720-2 탑승
            <br /> → 수원고용복지플러스센터, 동수원병원 라마다호텔 하차 (도보 3분)
            </div>
            <b>* 수원 시청역</b>
            <br />
            1번출구 82-1 탑승
            <br /> → 우만상사 아파트 하 (도보 1분)
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 간선(파랑): 461, 641
            <br />
            - 지선(초록): 5413, 5524, 5528
            <br />
            반드시 <b>낙성대입구</b> 하차
            <br />→ 마을버스 <b>관악 02번</b> 이용
            <br />
            이하 위와 동일합니다.
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
            <b>서울대학교 연구공원 웨딩홀</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (주차장 이용 시 웨딩홀과 바로 연결)
          </div>
          <div />
          <div className="content">
            <b>
              ※ 서울대학교 정, 후문을 통과할 경우 통행료가 발생하므로
              유의바랍니다. 낙성대 방향으로 이용해주세요.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
