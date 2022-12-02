import { useState } from "react";

function index() {
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState([
]);

  async function handleClick() {
    setLoading(true);
    const res = await fetch("/api/random");
    const json = await res.json();
    console.log(json);
    setUrls([...urls, json.url]);
    setLoading(false);
    return json?.url;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="h-screen mx-auto  max-w-3xl flex justify-center">
        <div className="w-full pt-20 ">
          <div
            onClick={async () => {
              const url = await handleClick();
              setTimeout(() => {
                window.open(url, "_blank");
              });
            }}
            className="bg-black p-4 w-full flex justify-center rounded-md m-auto hover:cursor-pointer h-20 "
          >
            {loading == true ? (
              <svg
                className="animate-spin mx-auto h-5 w-5 text-white m-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25 "
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <p className="text-white text-2xl font-bold uppercase m-auto">
                random vercel.app
              </p>
            )}
          </div>
          {urls.map((url, index) => {
            return (
              <div
                key={index}
                onClick={() => window.open(url, "_blank")}
                className="mt-4 bg-white border-black border-4  p-4 w-full flex justify-center rounded-md m-auto hover:cursor-pointer h-20
             items-center  px-4 py-2 text-sm font-medium text-white shadow-sm
            "
              >
                {" "}
                <p className="text-black text-xl font-bold uppercase m-auto">
                  {url.replace("https://", "")}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default index;
