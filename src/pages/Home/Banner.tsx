interface Prop {
  setShowModal: (value: boolean) => void;
}

export const Banner = ({ setShowModal }: Prop) => {
  return (
    <>
      <div className="flex justify-between items-center text-sm">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </button>
        <a href="#" className="flex gap-1 items-center">
          <span className="font-bold">LeeInguk</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <div className="flex gap-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-5">
        <div>
          <img
            className="w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full"
            src="https://avatars.githubusercontent.com/u/122377401?v=4"
          />
        </div>
        <span className="my-3">@inggu96</span>

        <div className="flex gap-10 text-sm">
          <div className="flex flex-col items-center">
            <span className="font-bold">10</span>
            <span>Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">1.20 K</span>
            <span>Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">100 K</span>
            <span>Likes</span>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400"
        >
          View profile
        </button>

        <p className="mb-3">Description about me goes here</p>
      </div>
    </>
  );
};
