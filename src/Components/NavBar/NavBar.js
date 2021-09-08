import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { FullContainer } from "./Styles"

function NavBar() {
  return (
    <FullContainer>
      <AppBar position="static" style={{ backgroundColor: "#424242" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Jokes
          </Typography>
        </Toolbar>
      </AppBar>
    </FullContainer>
  )
}

export default NavBar
