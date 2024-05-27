import React, { useState } from 'react'
import styles from "./Letras.module.css"

const uno = ["a", "l", "m", "o", "h", "a", "d", "a"]
const dos = ["a", "m", "o", "r"]

export const Letras = () => {
    const [lettersResult, setLettersResult] = useState(uno)
    const [isSwiped, setIsSwiped] = useState(false);
  
    const swipeCard = () => {
      setIsSwiped(true);
    };
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.title}>Letras</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.result}>
                    {lettersResult.map((v) => (
                        <h3 className={styles.letra}>{v}</h3>
                    ))}
                </div>
                <div className={`${styles.scene} ${styles.sceneCard} ${isFlipped && styles.isFlipped}`} onClick={handleClick}>
                <div className={`${styles.card}`}>
                    <div className={`${styles.card__face} ${styles.card__facefront}`}>front</div>
                    <div className={`${styles.card__face} ${styles.card__faceback}`}>back</div>
                </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.first}>
                        <button className={`${styles.button}`}>a</button>
                        <button className={styles.button}>c</button>
                        <button className={styles.button}>d</button>
                        <button className={`${styles.button} ${styles.buttonEnd}`}>e</button>
                    </div>
                    <div className={styles.second}>
                        <button className={styles.button}>f</button>
                        <button className={styles.button}>g</button>
                        <button className={styles.button}>h</button>
                        <button className={`${styles.button} ${styles.buttonEnd}`}>j</button>
                    </div>
                    <div className={styles.third}>
                        <button className={styles.button}>k</button>
                        <button className={styles.button}>l</button>
                        <button className={styles.button}>ñ</button>
                        <button className={`${styles.button} ${styles.buttonEnd}`}>p</button>
                    </div>
                    <div className={styles.fourth}>
                        <button className={`${styles.button} ${styles.buttonBottom}`}>o</button>
                        <button className={`${styles.button} ${styles.buttonBottom}`}>i</button>
                        <button className={`${styles.button} ${styles.buttonBottom}`}>u</button>
                        <button className={`${styles.button} ${styles.buttonEnd} ${styles.buttonBottom}`}>y</button>
                    </div>
                </div>
            </div>
            <div className={styles.end}>
                <h6 className={styles.endTitle}> By: Camilo Arboleda 💜</h6>
            </div>
        </div>
    )
}
