import {Card} from "../card/Card";


const UserProfile = ({user}) => {
  //console.log("user", user)
  //console.log("typeof", typeof props)

    const {name, age, role, skills} = user; 
  return (
    <Card>
      <h2>User Profile</h2>
      <p> Name: {user.name} </p>
      <p> Age: {age} </p>
      <p> Profession: {role} </p>
      <ul>
      {skills.map((skill, index) => (
        <li key={index}> Skill {index + 1}: {skill} </li>
      ))}
      </ul>
    </Card>
  )
}

export default  UserProfile;
