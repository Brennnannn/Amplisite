import downloadImage from '../../../assets/images/download.svg'
import marketArrowImage from '../../../assets/images/marketArrow.svg'
import playImage from '../../../assets/images/play.svg'

export default function SidebarPlay() {
  return (
    <>
      <div className="market-back"/>

      <h2 style={{marginTop: '55px', marginBottom: '5px'}}>Library</h2>

      <div className="scrollbar">
        <div className="scroll-inner">

          <ul>
              <h3>My samples</h3>
            <li>
              <span>80s british tube</span>
              <img src={playImage} alt="D" />
            </li>

            <li>
              <span>(18)20s ottoman clean</span>
              <img src={downloadImage} alt="D" />
            </li>

            <li>
              <span>nu metal demo</span>
              <img src={playImage} alt="D" />
            </li>

          </ul>

          <ul style={{borderColor: 'rgba(0,0,0,0)'}}>
            <h3>Community Samples</h3>
            <li>
              <span>EVH Tour Tone</span>
              <img src={downloadImage} alt="V" />
            </li>

            <li>
              <span>Marshall Crunch</span>
              <img src={playImage} alt=">" />
            </li>

            <li>
              <span>Brain Stew Tone (Greenday) They once stole my sock!</span>
              <img src={playImage} alt="V" />
            </li>
          </ul>

        </div>
      </div>

      <h2 className="market-bar">
        Market
        <img src={marketArrowImage} alt="->" />
      </h2>
    </>
)}
