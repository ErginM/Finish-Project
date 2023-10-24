import { useEffect, useState } from "react";
import styles from './style.module.css'

const TestApi = () => {

    const [teamData, setTeamData] = useState([])
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        const url = 'https://free-nba.p.rapidapi.com/teams?page=1';
        const options = {
            method: 'GET',
            headers: {
                "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
                "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
            },
        };

        fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
            setTeamData(res.data)
            setIsLoad(false)
        })
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.team}>Команды:</div>
            {isLoad && <div>Данные загружаются, пожалуйста подождите...</div>}
            {teamData.map((el, i) => {
                return (
                    <div className={styles.name}>
                    {i+1}.{el.abbreviation} --- {el.city}
                </div>
                )
            })}
        </div>
    )
}

export default TestApi