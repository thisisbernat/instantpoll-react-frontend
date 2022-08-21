import { useEffect } from 'react'

export default function SavingResults(props) {
    const { nextStep } = props
    useEffect(() => {
        nextStep()
    }, [nextStep])
    return (
        <div className="bg-white u-round-sm u-shadow-lg px-2 py-5-md py-3 grid-c-4-md">
            <div className="u-center h-100p">
                <div className="animated loading"></div>
            </div>
        </div>
    )
}