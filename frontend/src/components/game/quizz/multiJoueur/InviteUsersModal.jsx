/* eslint-disable react/prop-types */

import { useState } from "react";
import { Modal, TextInput, Label, Checkbox, Button } from "flowbite-react";

const InviteUsersModal = ({ users, isOpen, onClose, onInvite }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserSelect = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleInviteUsers = () => {
    onInvite(selectedUsers);
    setSelectedUsers([]);
    setSearchTerm("");
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal show={isOpen} onClose={onClose} size="md">
      <Modal.Header>
        <h2 className="text-lg font-semibold">Inviter des Utilisateurs</h2>
      </Modal.Header>
      <Modal.Body className="overflow-y-auto max-h-96">
        <div className="mb-4">
          <TextInput
            placeholder="Rechercher par nom d'utilisateur"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          {filteredUsers.map((user) => (
            <div key={user._id} className="flex items-center mb-2">
              <Checkbox
                id={user._id}
                checked={selectedUsers.includes(user._id)}
                onChange={() => handleUserSelect(user._id)}
              />
              <Label htmlFor={user._id} className="ml-2">
                {user.username}
              </Label>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <Button
          color="green"
          disabled={selectedUsers.length === 0}
          onClick={handleInviteUsers}
        >
          Envoyer Invitations
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InviteUsersModal;
