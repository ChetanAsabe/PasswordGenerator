import { useState } from "react";

const Home = () => {
  const [password, setPassword] = useState(" ");

  const generatedPass = () => {
    const chars =
      "ABCDEFHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789@#$%&*([)]!";
    let pass = "";

    for (let i = 0; i < 10; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  const copy = () => {
    const val = document.getElementById("input");
    val.value = password;
    val.select();
    document.execCommand('copy')
  }

  return (
    <div className="bg-slate-50 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/20 w-96 h-64 rounded-xl">
      <div className="text-2xl text-black font-bold py-8">
        <h2>Password Generator</h2>
      </div>

      <div className="pb-8">
        <input
          id="input"
          type="text"
          value={password}
          className="text-black border border-slate-400  bg-white w-2/3 rounded-lg px-3 py-2 "
        />
      </div>

      <div className="flex justify-evenly">
        <div>
          <button onClick={copy}>Copy</button>
        </div>
        <div>
          <button onClick={generatedPass}>Generate</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
