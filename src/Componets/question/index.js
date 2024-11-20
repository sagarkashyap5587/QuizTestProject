export const Question  = ({question, questionNumber}) => {
    return (
        <>
        <h2><span style={{fontSize:"25px", color:"blue"}}>Question-{questionNumber} </span><span style={{marginLeft:"20px"}}></span> {question}</h2>
        </>
    )
}