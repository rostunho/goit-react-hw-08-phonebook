import {
  ContactBody,
  Name,
  Phone,
  Controls,
  ControlItem,
  ControlButton,
  RemoveIcon,
  EditIcon,
} from './Contact.styled';
import { Avatar } from 'components/Avatar/Avatar';
import PropTypes from 'prop-types';

export function Contact({ contact, handleRemove, handleUpdate }) {
  return (
    <ContactBody>
      <Avatar size="244" style={{ position: 'absolute', left: '-48' }} />
      <div>
        <Name>{contact.name}</Name>
        <Phone>{contact.number}</Phone>
      </div>

      <Controls>
        <ControlItem>
          <ControlButton
            type="button"
            title="Edit Contact"
            onClick={() =>
              handleUpdate(contact.id, contact.name, contact.number)
            }
          >
            <EditIcon size="28" />
          </ControlButton>
        </ControlItem>
        <ControlItem>
          <ControlButton
            delete
            type="button"
            title="Delete Contact"
            onClick={() => handleRemove(contact.id)}
          >
            <RemoveIcon size="88" />
          </ControlButton>
        </ControlItem>
      </Controls>
    </ContactBody>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};
