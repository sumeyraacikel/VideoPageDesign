import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Typography} from "@mui/material";

function Comments() {
    return (
        <div className="min-w-full min-h-full max-h-[50px] w-auto h-auto bg-cover mt-2" style={{paddingRight: "35px"}}>
            <List className="bg-searchBar lg:text-[16px] sm:text-[12px]" sx={{'& > :not(style)': {m: 1, width: '100ch'}}}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircle/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        sx={{
                            '& > :not(style)': {m: 1, width: '100ch'},
                        }}
                        primary="@kullanici_adi"
                        secondary={<Typography sx={{fontSize: '12px', color: 'grey'}}>1 ay önce</Typography>}
                    />
                </ListItem>
            </List>
        </div>
    );
}

export default Comments;
