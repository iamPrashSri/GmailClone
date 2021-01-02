import React, { useEffect, useState } from 'react';
import './EmailsList.css';
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from '../Section/Section';
import EmailRow from '../EmailRow/EmailRow';
import { db } from '../../DataLayerConfig/Firebase';

function EmailsList() {

    let [emails, setEmails] = useState([]);
    useEffect(() => {
        db.collection('Emails').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ));
    }, []);
    return (
        <div className="emailsList">
            <div className="emailsList__settings">
                <div className="emailsList__settings__left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailsList__settings__right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailsList__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>

            <div className="emailsList__list">
                {emails.map((email) => (
                    <EmailRow 
                        id={email.id}
                        key={email.id}
                        title={email.data.to}
                        subject={email.data.subject}
                        description={email.data.message}
                        time={new Date(email.data.timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmailsList;
