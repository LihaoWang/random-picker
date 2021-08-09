import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function App() {
  const [input, setInput] = useState(null);
  const [pick, setPick] = useState();
  const [mode, setMode] = useState("1");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    var arr;
    console.log(input);
    if (input === null) {
      alert("Please enter something");
    } else {
      // const arr = mode ? input.split(",") : input.split(/\n/);
      if (mode === "1") {
        arr = input.split(",");
      } else {
        arr = input.split(/\n/);
      }

      setPick(random_item(arr));
    }
  };
  const onChangeMode = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setMode(e.target.value);
  };

  return (
    <div className="App">
      <>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Select onChange={onChangeMode}>
            <option value={"1"}>seperated by commas</option>
            <option value={"2"}>seperated by lines</option>
          </Form.Select>
          <Form.Group className="mt-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Please enter something"
              value={input}
              onChange={handleChange}
            />
            <Button type="submit" value="submit" className="btn mt-4">
              Pick One!
            </Button>
          </Form.Group>
        </Form>

        <p className="pick">{pick}</p>
      </>
    </div>
  );
}

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export default App;
