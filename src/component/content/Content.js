import React from 'react'
import { useEffect, useState } from 'react'
import './content.css'




const Content = () => {

    const [question, Setquestion] = useState('');
    const [answer, Setanswer] = useState('');


    const handelSubmit = (e) => {
        e.preventDefault();
        Setquestion(e.target.elements.question.value);

        // console.log(answer);
    }

    // useEffect(()=> {},[]);


    useEffect(() => {
        const fetchAnswer = async () => {
            try {
                const response = await fetch(`https://chatapi.aymankanawi.info/api/ask/${question}`);
                const data = await response.json();

                if (response.ok) {
                    Setanswer(data.text);
                } else {
                    throw new Error(data.error);
                }
            }
            catch (error) {
                console.error(error.message);
            }
        };

        if (question) {
            fetchAnswer();
            Setquestion('');
        }
    }, [question]);






    return (
        <div className='container'>
            <form onSubmit={handelSubmit}>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Question</label>
                    <input type='text' className="form-control"
                        id="exampleFormControlInput1" name='question' placeholder="type question arabic or english" />
                </div>
                <div className="form-group row mt-5">
                    <div className="col-sm-10 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Ask Me</button>
                    </div>
                </div>
            </form>

            <div className="answer-container">
                {answer && (
                    <div className="answer">
                        <p className="answer-title">Answer</p>
                        <p className="answer-text">{answer}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Content
