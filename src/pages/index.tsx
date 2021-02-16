import styles from '../styles/index.module.css';

export default function Home(): JSX.Element {
    return (
        <div className={styles.content_wrapper}>
            <header className={styles.header}>
                <h1>InstaTrack</h1>
            </header>
            <div className={styles.card}>
                <div className={styles.profile_picture} />
                <div className={styles.info}>
                    <div className={styles.info_posts}>
                        <p>Posts</p>
                        <p>193</p>
                    </div>
                    <div className={styles.info_following}>
                        <p>Following</p>
                        <p>2938</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
