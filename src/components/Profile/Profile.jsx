import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://be-original.co.uk/wp-content/uploads/2019/11/wh-you-need-a-LInkedIn-header-850x266.jpg"/>
            <div className={s.item}>content</div>
            <div className={s.item}>My posts</div>
            <div className={s.item}>New posts</div>
            <div className={s.item}>New posts</div>
            <div className={s.item}>Post 1</div>
            <div className={s.item}>Post 2</div>
        </div>
    );
}

export default Profile;