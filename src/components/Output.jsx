import { useEffect, useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setOutput([]);
    setIsError(false);
  }, [language]);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();

    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      console.log(result.output);
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    console.log("Source Code:", sourceCode);
  };
  return (
    <div className="">
      <h2 className="text-2xl text-white">Output:</h2>
      <button
        className="border border-green-300 p-2 rounded-md text-green-300 my-2 cursor-pointer hover:bg-gray-400"
        onClick={() => runCode()}
      >
        {isLoading ? (
          <div className="border-red-400 border-[4px] w-[20px] h-[20px] rounded-full bg-transparent animate-spin mx-5"></div>
        ) : (
          "Run Code"
        )}
      </button>
      <div
        className={`h-[75vh] border bg-white  text-2xl border-[#333] rounded-md p-2 ${isError ? "text-red-500" : "text-black"}`}
      >
        {output.length > 0
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
