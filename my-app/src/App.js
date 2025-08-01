import ProfileCard from './components/ProfileCard.js';

import './App.css';

const profileData = [
  {
    image:'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Yousef Shaikhan',
    jobTitle: 'Software Engineer',
    bio: 'Loves coding and coffee.',
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YV976jUjQxX20bf2Udc9eK3-9I7lcGqW2Q&s",
    name:'Jane Smith',
    jobTitle: 'Car sales',
    bio:'Passionate about cars and customer service.',
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1ZiGRQYSbQycx1fDTF__qwdsRRkmU3qjaA&s",
    name: 'Mohadeseh Falahati',
    jobTitle: 'Nurse',
    bio: 'Dedicated to patient care and well-being.',
  },

];

function App() {
  return (
    <div className="App">
      {profileData.map((profile, index) => (
        <ProfileCard
          key={index}
          image={profile.image}
          name={profile.name}
          jobTitle={profile.jobTitle}
          bio={profile.bio}
        />
      ))}
    </div>
  );
}

export default App;