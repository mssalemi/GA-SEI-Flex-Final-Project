import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom";
import { getLeague, getLeagues } from '../../services/leagues'
import { CircularProgress } from '@material-ui/core'
import TeamList from './TeamList'

function League() {

  const { id } = useParams();
  const [league, setLeague] = useState(null);

  useEffect(async () => {
    const {data} = await getLeagues()
    await setLeague(data.filter(league => league._id == id)[0])
    console.log(league);
  }, [])

  return (
    <div>
      {
        league ? <>
          We got a league!
          <TeamList teams={league.teams}/>
        </> : <CircularProgress />
      }
    </div>
  )
}

export default League
