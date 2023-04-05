import React, { useEffect, useMemo, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ContactType from '../types/ContactType';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../store/hooks';
import { removeContact } from '../store/modules/contactsSlice';

interface ListContactsProps {
  data: ContactType[];
}

const ListContacts: React.FC<ListContactsProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [dataLocal, setDataLocal] = useState<ContactType[]>([]);

  useEffect(() => {
    if (data.length) {
      setDataLocal([...data]);
    }
  }, [data]);

  const handleDelete = (itemDelete: ContactType) => {
    const index = dataLocal.findIndex(item => item.phone === itemDelete.phone);

    dispatch(removeContact(index));
  };

  const listMemo = useMemo(() => {
    return dataLocal.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <ListItem
            alignItems="flex-start"
            secondaryAction={
              <IconButton onClick={() => handleDelete(item)} edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{item.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                  {item.phone}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      );
    });
  }, [dataLocal]);

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      {dataLocal.length ? listMemo : <Typography variant="body1">Nenhum contato cadastrado.</Typography>}
    </List>
  );
};

export default ListContacts;
