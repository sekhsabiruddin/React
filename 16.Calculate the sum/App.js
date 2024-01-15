import { useState } from "react";

function App() {
  const [sum, setSum] = useState(0);

  const handleInc = (e) => {
    console.log(e.target.value);
    setSum(sum + parseInt(e.target.value));
  };
  return (
    <>
      <input type="number" onChange={handleInc} />
      <div>sum: {sum}</div>
    </>
  );
}
export default App;
