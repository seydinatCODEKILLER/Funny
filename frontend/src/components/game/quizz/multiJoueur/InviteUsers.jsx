/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";

const InviteUsers = ({ selectedUsers, onInvite }) =>
  selectedUsers.length > 0 && (
    <Button color="green" className="w-full" onClick={onInvite}>
      Envoyer Invitations
    </Button>
  );

export default InviteUsers;
