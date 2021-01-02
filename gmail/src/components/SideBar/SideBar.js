import React from 'react';
import './SideBar.css';
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SideBarOption from '../SideBarOption/SideBarOption';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { openSendMessage } from '../../features/mailSlice';
import { useDispatch } from "react-redux";

function SideBar() {

    let dispatch = useDispatch();
    return (
        <div className="sideBar">
            <Button
                className="sideBar__compose" 
                startIcon={<AddIcon fontSize="large" />}
                onClick={() => dispatch(openSendMessage)}>
                Compose
            </Button>

            <SideBarOption Icon={InboxIcon} title="Inbox" count={54} selected={true} />
            <SideBarOption Icon={StarIcon} title="Starred" count={54} />
            <SideBarOption Icon={AccessTimeIcon} title="Snoozed" count={54} />
            <SideBarOption Icon={LabelImportantIcon} title="Important" count={54} />
            <SideBarOption Icon={NearMeIcon} title="Sent" count={54} />
            <SideBarOption Icon={NoteIcon} title="Drafts" count={54} />
            <SideBarOption Icon={ExpandMoreIcon} title="More" count={54} />

            <div className="sideBar__footer">
                <div className="sideBar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>

                    <IconButton>
                        <DuoIcon />
                    </IconButton>

                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
