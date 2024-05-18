// src/App.js
import React from 'react';

const exercises = [
  {
    name: 'Push-up',
    description: 'Place your hands on the ground, shoulder-width apart. Lower your body until your chest almost touches the ground, then push yourself back up.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbamIlHj6MMvSk6yLr4rQJYJo8WYjluIMO1mIAs1r-Z8R7BQ_D4CWV2tqYZA&sṣ', 
  },
  {
    name: 'Squat',
    description: 'Stand with your feet shoulder-width apart. Lower your hips until your thighs are parallel to the ground, then stand back up.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtf9mCYy539RYxQi_4zjRmps0br1DoOcBnlTPBgKrfZiPGpVOVU_RqMpYUQ&s', 
  },
  {
    name: 'Plank',
    description: 'Place your forearms on the ground, elbows directly under your shoulders. Keep your body in a straight line from head to heels.',
    image: 'https://www.istockphoto.com/photo/fit-woman-working-on-abdominal-muscles-doing-plank-exercise-core-workout-at-home-gm1216992005-355066303?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fplank&utm_medium=affiliate&utm_source=unsplash&utm_term=plank%3A%3A%3A', 
  },
  {
    name: 'Push-up',
    description: 'Place your hands on the ground, shoulder-width apart. Lower your body until your chest almost touches the ground, then push yourself back up.',
    image: 'https://unsplash.com/photos/woman-in-red-sports-bra-and-black-shorts-doing-push-up-on-gray-concrete-road-during-C9bbB4UBhQU', 
    equipment: 'None'
  },

  {
    name: 'Bench Press',
    description: 'Lie on a bench with your feet flat on the floor. Hold a barbell above your chest with your arms fully extended, then lower it to your chest and push it back up.',
    image: 'https://www.istockphoto.com/photo/young-man-spotting-each-other-in-a-gym-gm513434480-87605827?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbench-press&utm_medium=affiliate&utm_source=unsplash&utm_term=bench+press%3A%3A%3A', 
    equipment: 'Barbell, Bench'
  },
  {
    name: 'Deadlift',
    description: 'Stand with your feet hip-width apart, bend at your hips and knees to grasp a barbell with both hands. Lift the bar by straightening your hips and knees until you are standing straight.',
    image: 'https://unsplash.com/photos/topless-man-in-black-shorts-sitting-on-black-and-silver-barbell-9dzWZQWZMdE', 
    equipment: 'Barbell'
  },
  {
    name: 'Bicep Curl',
    description: 'Stand with a dumbbell in each hand, arms fully extended and palms facing forward. Curl the dumbbells up towards your shoulders, then lower them back to the starting position.',
    image: 'https://www.istockphoto.com/photo/a-focused-sportsman-is-sitting-in-a-gym-and-doing-exercises-for-the-biceps-and-gm1486887865-512528206?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbiceps-curl&utm_medium=affiliate&utm_source=unsplash&utm_term=biceps+curl%3A%3A%3A', 
    equipment: 'Dumbbells'
  },
  {
    name: 'Tricep Dip',
    description: 'Place your hands on the edge of a bench or chair, with your legs extended out in front of you. Lower your body by bending your elbows until your upper arms are parallel to the ground, then push back up.',
    image: 'https://www.istockphoto.com/photo/fitness-man-doing-bench-triceps-dips-outdoors-while-working-out-gm579755194-99711697?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FTricep-dip&utm_medium=affiliate&utm_source=unsplash&utm_term=Tricep+dip%3A%3A%3A',
    equipment: 'Bench or Chair'
  },
  {
    name: 'Lat Pulldown',
    description: 'Sit at a lat pulldown machine and grasp the bar with a wide grip. Pull the bar down towards your chest, then slowly let it rise back up to the starting position.',
    image: 'https://via.placeholder.com/300',
    equipment: 'Lat Pulldown Machine'
  },
  {
    name: 'Leg Press',
    description: 'Sit on a leg press machine with your feet shoulder-width apart on the platform. Push the platform away by extending your legs, then slowly let it come back towards you.',
    image: 'https://via.placeholder.com/300',
    equipment: 'Leg Press Machine'
  }

];

const App = () => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    maxWidth: '300px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '12px 0',
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: '#555',
  };

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
          <div key={index} style={cardStyle}>
            <img src={exercise.image} alt={exercise.name} style={imageStyle} />
            <h3 style={titleStyle}>{exercise.name}</h3>
            <p style={descriptionStyle}>{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
