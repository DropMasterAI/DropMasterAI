import React, { useEffect, useState } from 'react';

const LearningCenter = () => {
  const [lessons, setLessons] = useState([]);
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    fetch('/api/lessons')
      .then(res => res.json())
      .then(data => setLessons(data.lessons));
  }, []);

  const submitQuiz = async () => {
    const res = await fetch('/api/quiz/submit', { method: 'POST' });
    const data = await res.json();
    setQuizResult(data.score);
  };

  return (
    <div>
      <h2>Learning Center</h2>
      <ul>{lessons.map((l, i) => <li key={i}>{l}</li>)}</ul>
      <button onClick={submitQuiz}>Take Quiz</button>
      {quizResult !== null && <p>Quiz Score: {quizResult}</p>}
    </div>
  );
};

export default LearningCenter;