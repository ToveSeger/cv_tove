import styles from './FlipCard.module.scss';

export const FlipCard = () => {
  return (
    <div className={styles.flipCard}>
        <div className={styles.flipCardContent}>
            <div className={styles.flipCardFront}>
                <p>Hej</p>
            </div>
            <div className={styles.flipCardBack}>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
            </div>
        </div>
    </div>
  )
}
