import { ListUsers } from "common/components";
import { User } from "models";

export default function Home() {
  const users = [
    new User({
      age: 30,
      name: "Kareem Fathy",
      type: "user",
    }),
  ];

  return (
    <div>
      <ListUsers users={users} />
    </div>
  );
}
