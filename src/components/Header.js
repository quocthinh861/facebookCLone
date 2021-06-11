import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';

function Header() {

    const username = useSelector(state => state.user.username);
    const photoURL =  useSelector(state => state.user.photoURL);
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png"/>
                <div className='header__input'>
                    <SearchIcon />
                    <input type='text' placeholder='Tìm kiếm' />
                </div>
            </div>
            <div className='header__middle'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <SubscriptionsIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <StorefrontIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontSize='large'/>
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar fontSize='large' src={photoURL}/>
                    <h4>{username}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
