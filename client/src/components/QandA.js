import React, { useState } from 'react';
import data from '../accordion project/data';
import SingleQuestion from '../accordion project/Question';
export default function QandA() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <br></br>
      <div className='container'>
        <h3>questions and answers about EmedAfrica</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}