// src/components/ExercisesList.js
import React from 'react';
import { useState } from 'react';
import ExerciseCard from './ExerciseCard';

const ExercisesList = () => {
    const cd = [
        {
          name: "Push-up",
          description: "Place your hands on the ground, shoulder-width apart. Lower your body until your chest almost touches the ground, then push yourself back up.",
          image: "https://www.istockphoto.com/photo/website-page-contact-us-or-e-mail-marketing-concept-customer-support-hotline-contact-gm1477509958-506048670?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flink%2F&utm_term=link"
        },
        {
          name: "Squat",
          description: "Stand with your feet shoulder-width apart. Lower your hips until your thighs are parallel to the ground, then stand back up.",
          image: "https://www.istockphoto.com/photo/website-page-contact-us-or-e-mail-marketing-concept-customer-support-hotline-contact-gm1477509958-506048670?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flink%2F&utm_term=link"
        },
        {
          name: "Plank",
          description: "Place your forearms on the ground, elbows directly under your shoulders. Keep your body in a straight line from head to heels.",
          image: "https://www.istockphoto.com/photo/smart-city-with-speed-line-glowing-light-trail-surround-the-city-big-data-connection-gm1445614323-483963437?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flink%2F&utm_term=link"
        },
      ];
      const [exercises, setExercises] = useState(cd)
  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '24px',
    margin: '20px 0',
  };

  return (
    <div>
      <h2 style={headingStyle}>Exercises</h2>
      <div style={listStyle}>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExercisesList;
