import Swal from 'sweetalert2'

import NewQuestion from '../components/questions/NewQuestion'
import NewIntro from '../components/questions/NewIntro'
import NewList from '../components/questions/NewList'
import NewMultipleChoice from '../components/questions/NewMultipleChoice'
import NewRanking from '../components/questions/NewRanking'
import NewRating from '../components/questions/NewRating'
import NewSingleChoice from '../components/questions/NewSingleChoice'
import NewThanks from '../components/questions/NewThanks'
import AddQuestion from '../components/questions/AddQuestion'
import NewOpen from '../components/questions/NewOpen'
// import NewParagraph from '../components/questions/NewParagraph'
// import NewLine from '../components/questions/NewLine'
// import NewDate from '../components/questions/NewDate'
// import NewNumber from '../components/questions/NewNumber'
// import NewEmail from '../components/questions/NewEmail'
// import NewPhone from '../components/questions/NewPhone'


import SavedIntro from '../components/questions/SavedIntro'
import SavedList from '../components/questions/SavedList'
import SavedMultipleChoice from '../components/questions/SavedMultipleChoice'
import SavedRanking from '../components/questions/SavedRanking'
import SavedRating from '../components/questions/SavedRating'
import SavedSingleChoice from '../components/questions/SavedSingleChoice'
import SavedThanks from '../components/questions/SavedThanks'
import SavedOpen from '../components/questions/SavedOpen'

const NewQuestionsMap = {
  tbd: NewQuestion,
  intro: NewIntro,
  single: NewSingleChoice,
  multiple: NewMultipleChoice,
  open: NewOpen,
  rating: NewRating,
  ranking: NewRanking,
  list: NewList,
  thanks: NewThanks,
  // paragraph: NewParagraph,
  // line: NewLine,
  // date: NewDate,
  // number: NewNumber,
  // email: NewEmail,
  // phone: NewPhone
}

const SavedQuestionsMap = {
  intro: SavedIntro,
  single: SavedSingleChoice,
  multiple: SavedMultipleChoice,
  open: SavedOpen,
  rating: SavedRating,
  ranking: SavedRanking,
  list: SavedList,
  thanks: SavedThanks
}

export default function ComponentName(props) {
	const { prop1, prop2, prop3 } = props
	
	return (
		<>
			{/* RENDERED CONTENT */}
		</>
	)

}