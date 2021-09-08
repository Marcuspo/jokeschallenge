import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { FullContainer } from "./Styles"

function NavBar() {
  return (
    <FullContainer>
      <AppBar position="static">
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
