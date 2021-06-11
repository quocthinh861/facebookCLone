import React from 'react'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useSelector } from 'react-redux';

function Sidebar() {
    const username = useSelector(state => state.user.username);
    const photoURL = useSelector(state => state.user.photoURL);
    return (
        <div>
            <SidebarRow title={username} src={photoURL}/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='pages'/>
            <SidebarRow Icon={PeopleIcon} title='friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='videos'/>
            <SidebarRow Icon={ExpandMoreIcon} title='Marketplace'/>
        </div>
    )
}

export default Sidebar
