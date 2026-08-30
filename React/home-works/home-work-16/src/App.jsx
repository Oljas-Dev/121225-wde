import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My MUI App</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать!
        </Typography>

        <Typography variant="body1" paragraph="true">
          Это простое приложение, созданное с использованием Material UI.
        </Typography>

        <Button variant="contained" onClick={handleOpen}>
          Открыть диалог
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Привет!</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Это диалоговое окно Material UI. Вы можете закрыть его с помощью
            кнопки ниже или нажав за пределами окна.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
