import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@material-ui/core"
import { useEffect } from "react"
import { useState } from "react"
import api from "../../Api/Api"

import { FullContainer, FullCard, ButtonInCard } from "./Styles"

function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const response = await api.get("/20")
    console.log(response.data.value)
    setLoading(false)
    setData(response.data.value)
    window.scroll(0, 0)
  }

  return (
    <FullContainer>
      {loading ? (
        <CircularProgress disableShrink />
      ) : (
        <>
          {data.map((jokes) => (
            <FullCard>
              <Card>
                <CardContent>
                  <>
                    <Typography
                      className="title"
                      color="textSecondary"
                      gutterBottom
                    >
                      Piada número: {jokes.id}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {jokes.joke}
                    </Typography>
                  </>
                </CardContent>
              </Card>
            </FullCard>
          ))}

          <ButtonInCard>
            <Button onClick={getData} variant="contained">
              Carregar mais
            </Button>
          </ButtonInCard>
        </>
      )}
    </FullContainer>
  )
}

export default Home
