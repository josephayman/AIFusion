import { useState, ChangeEvent, FormEvent } from "react";
import MarkdownViewer from "~/components/MarkdownViewer";

export default function TextFormagic() {
  const [content, setContent] = useState<string>("");

  return (
    <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
      <div className="bg-white">
        <div className="relative isolate pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-16 sm:pb-16 sm:pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1>Text Formagic</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Organize your notes and ideas in a simple and intuitive way.
                </p>
              </div>
              <NoteInput onContentChange={setContent} />
              <MarkdownViewer content={content} />
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface NoteInputProps {
  onContentChange: (content: string) => void;
}

export function NoteInput({ onContentChange }: NoteInputProps) {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("/api/format-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: value }),
    });
    const data = await response.json();
    console.log("data", data);
    console.log("data.result", data.result);
  
    let rawResult = data.result;
  
    console.log("rawResult");
    onContentChange(rawResult);
    console.log(value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label
        htmlFor="plain text"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add your notes
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          name="plain text"
          id="plain text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={value}
          onChange={handleChange}
        />
        <button
          className="mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
