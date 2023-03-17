import { useState } from "react";
import Profile from "../Components/Profile";
import useScrollhandler from "../Hooks/useScrollHandler";
import { ProfileInt } from "../Types/interfaces";

export default function Home() {
  const [users, setUsers] = useState<[] | ProfileInt[]>([]);
  const [page, setPage] = useState<number>(1);

  // Renders new profiles while scrolling
  useScrollhandler({ array: users, setArray: setUsers, page, setPage });

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Profiles</h1>
      <div className="profiles-container">
        {/* If length is more then 0, it means users are fetched, so we can render them */}
        {users.length > 0 ? (
          users.map((user) => {
            return <Profile user={user} key={"home" + user.id} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
