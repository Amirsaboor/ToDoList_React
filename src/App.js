import Container from './compomemts/container/'
import Titr from './compomemts/titr'
import List from './compomemts/list'



function App() {
  return (
    <Container bgColor='warning'>
      <Titr>
      ToDoList
      </Titr>
      <List>
      </List>
    </Container>
  );
}

export default App;
