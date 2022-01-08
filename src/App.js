import {motion}  from "framer-motion";
import { useMotionValue,useTransform } from "framer-motion";

import "./App.css";

function App() {
  const x = useMotionValue(0)
const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

// return <motion.div drag="x" style={{ x, opacity }} />
  return (
    <div className="App">
      <motion.form drag='x' animate={{x:[100,0]}} style={{x,opacity}}>
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </motion.form>
    </div>
  );
}

export default App;
