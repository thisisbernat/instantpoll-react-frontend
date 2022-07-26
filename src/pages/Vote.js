// import VoteList from '../components/votes/VoteList'
// import VoteMultipleChoice from '../components/votes/VoteMultipleChoice'
// import VoteOpenDate from '../components/votes/VoteOpenDate'
// import VoteOpenEmail from '../components/votes/VoteOpenEmail'
// import VoteOpenLine from '../components/votes/VoteOpenLine'
// import VoteOpenNumber from '../components/votes/VoteOpenNumber'
// import VoteOpenParagraph from '../components/votes/VoteOpenParagraph'
// import VoteOpenPhone from '../components/votes/VoteOpenPhone'
// import VoteRanking from '../components/votes/VoteRanking'
// import VoteRating from '../components/votes/VoteRating'
import VoteSingleChoice from '../components/votes/VoteSingleChoice'
import Share from '../components/votes/Share'

function Vote() {
  return (
    <div className="grid grid-cols-5-md grid-cols-1 u-gap-2 mx-0-md mx-2">

      <VoteSingleChoice />
      {/* <VoteMultipleChoice /> */}
      {/* <VoteList /> */}
      {/* <VoteOpenDate /> */}
      {/* <VoteOpenEmail /> */}
      {/* <VoteOpenLine /> */}
      {/* <VoteOpenNumber /> */}
      {/* <VoteOpenParagraph /> */}
      {/* <VoteOpenPhone /> */}
      {/* <VoteRanking /> */}
      {/* <VoteRating /> */}

      <Share />

    </div>
  );
}

export default Vote;