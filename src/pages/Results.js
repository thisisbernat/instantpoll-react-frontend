import ResultChart from '../components/results/ResultChart.js'
import ResultRating from '../components/results/ResultRating.js'
import ResultRanking from '../components/results/ResultRanking.js'
import ResultOpen from '../components/results/ResultOpen.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCsv, faSquarePollVertical, faEye, faPersonChalkboard, faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function Results() {
  return (
    <>
      <div className="u-flex u-flex-wrap u-justify-space-between-md u-items-center u-justify-center">
        <h4 className="font-alt">Results: This is your poll</h4>
        <div className="u-flex u-gap-1">
          <button className="bg-teal-600 text-white btn--sm">Export to CSV <FontAwesomeIcon icon={faFileCsv} /></button>
        </div>
      </div>
      <div className="grid grid-cols-4-md grid-cols-2 u-gap-2 text-gray-700">
        <div className="u-flex u-flex-column u-items-center bg-white u-round-sm u-shadow-lg p-2">
          <div><FontAwesomeIcon icon={faEye} /></div>
          <font className="font-black">Views</font>
          <h6 className="mb-0">35</h6>
        </div>
        <div className="u-flex u-flex-column u-items-center bg-white u-round-sm u-shadow-lg p-2">
          <div><FontAwesomeIcon icon={faPersonChalkboard} /></div>
          <font className="font-black">Submissions</font>
          <h6 className="mb-0">35</h6>
        </div>
        <div className="u-flex u-flex-column u-items-center bg-white u-round-sm u-shadow-lg p-2">
          <div><FontAwesomeIcon icon={faSquarePollVertical} /></div>
          <font className="font-black">Submission rate</font>
          <h6 className="mb-0">35</h6>
        </div>
        <div className="u-flex u-flex-column u-items-center bg-white u-round-sm u-shadow-lg p-2">
          <div><FontAwesomeIcon icon={faCalendar} /></div>
          <font className="font-black">Creation date</font>
          <h6 className="mb-0">01/01/2022</h6>
        </div>
      </div>
      <div className="u-flex u-flex-column u-gap-2">
        <ResultChart />
        <ResultRating />
        <ResultRanking />
        <ResultOpen />
      </div>
    </>
  )
}
