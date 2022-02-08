import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            <div className={s.item}>Content</div>
            <div className={s.item}>My posts</div>
            <div className={s.item}>New posts</div>
            <div className={s.item}>New posts</div>
            <div className={s.item}>Post 1</div>
            <div className={s.item}>Post 2</div>
        </div>
    );
}

export default MyPosts;