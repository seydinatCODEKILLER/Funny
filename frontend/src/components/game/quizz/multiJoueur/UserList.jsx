/* eslint-disable react/prop-types */
import { Checkbox, Label } from "flowbite-react";

const UserList = ({ users, selectedUsers, onUserSelect }) => (
  <div className="mb-4">
    {users.map((user) => (
      <div key={user._id} className="flex items-center mb-2">
        <Checkbox
          id={user._id}
          checked={selectedUsers.includes(user._id)}
          onChange={() => onUserSelect(user._id)}
        />
        <Label htmlFor={user._id} className="ml-2">
          {user.username}
        </Label>
      </div>
    ))}
  </div>
);

export default UserList;
