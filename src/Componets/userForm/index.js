import React, { useRef, useState } from "react";
import "../../style/employee.css";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/action/incomeSlice";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const dispatch = useDispatch()
    const d= useSelector((state)=> state.incomes.data)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [testType, setTestType] = useState('');
    const [questionNumber, setQuestionNumber] = useState(0)
    const [time, setTime] = useState(0);
    const [error, setError] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name && !email && !testType && testType=== ""  && !questionNumber && questionNumber=== 0 ) {
            setError(true)
        }
        else {
        const data = {
            id: Date.now(),
            name:name,
            email: email,
            testType: testType,
            questionNumber: questionNumber,
            time: time
        }
        dispatch(addData(data))
        history('/quiz')
    }
    }

    if(error === true) {
        return <h1>Please Fill all Details Because all are required</h1>
    }

  return (
    <>
      <div className="formbackground">
        <center>
          <h1>Fill Quiz Test Details</h1>
        </center>
        <form onSubmit={handleSubmit} className="form-change">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name"  onChange={(e) => setName(e.target.value)}required />
          </div>
          <br/>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value) } required />
          </div>
          <br/>
          <div className="form-field">
            <label htmlFor="test_type">Test Type</label>
            <select onChange={(e)=> setTestType(e.target.value)} required>
            <option value="EASY" >Select</option>
              <option value="Easy">Easy</option>
              <option value="Medium" >Medium</option>
              <option value="Hard" >Hard</option>
            </select>
          </div>
          <br/>
          <div className="form-field">
            <label htmlFor="question">Question</label>
            <select onChange={(e) =>setQuestionNumber(e.target.value)} required>
            <optgroup label="Select">
            <option value="10" >Select</option>
              <option value="10" >10</option>
              <option value="25" >25</option>
              <option value="30"  >50</option>
              <option value="40" >100</option>
              </optgroup>
            </select>
          </div>
          <br/>
          <div className="form-field">
            <label htmlFor="time">Time</label>
            <select onChange={(e) =>setTime(e.target.value)} required>
            <option value="10" >Select</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="30">30</option>
              <option value="60">60</option>
            </select>
          </div>

          <div className="form-field">
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;
