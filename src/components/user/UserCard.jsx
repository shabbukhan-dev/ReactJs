import {Card} from "../card/Card";

export function UserCard({ users, handleUserClick }) {

    //console.log ("handleUserClick", handleUserClick)

    return (
      <Card>
         <h2> User Card </h2>
         <section className="gridContainer">
        {users.map((item) => {
          const { name, role } = item;
        return (
            <article key={item.id} className="gridItem">
            <p> {name} </p>
            <p> {role} </p>
            <button onClick={() => handleUserClick(name)}>
            View Profile
            </button>
          </article>
        )  
        })}
        </section>
      </Card>
  );
}
