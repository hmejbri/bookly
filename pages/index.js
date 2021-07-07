import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ImgCard from '../card'
import Ad from '../Ad'

import { Paper, Grid } from '@material-ui/core'
import { useEffect, useState } from 'react'

export default function Home() {
  const [cards, setCards] = useState([])



  useEffect(()=>{
    for(var i=0; i<35; i++) 
      if(i%3==0)
        setCards(cards => [...cards, 
          <div key={i}>
            <center>
            <Grid container>
              <Grid item xs={3}>
                <ImgCard />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <ImgCard />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <br />
            </center>
          </div>
        ])
      else
        setCards(cards => [...cards, 
          <div key={i}>
            <center>
            <Grid container>
              <Grid item xs={3}>
                <ImgCard />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <ImgCard />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <ImgCard />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <br />
            </center>
          </div>
        ])
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Bookly | Home</title>
        <meta name="description" content="Cards with random images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Ad /> <br />
        <Ad /> <br />
        <Ad />
        <Paper>
          {cards}
        </Paper>
      </div>
    </div>
  )
}
