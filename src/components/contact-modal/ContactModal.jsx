import { SocialsList } from "../social-links/SocialsList";

// TODO CONTACT MODAL
// TODO DROP DOWN ANIMATION
// TODO H1 --> EMAIL
// TODO UL >>> LI --> SOCIAL LINKS
// TODO
export const ContactModal = ({ openMenu }) => {
  return (
    <div className="w-full h-screen bg-pale-orange flex flex-col justify-center items-center">
      {/*<button className="navbar-close ml-auto p-5">
        <svg
          className="h-6 w-6 text-midnight cursor-pointer hover:text-light-green"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>*/}

      <h1 className="font-bold text-center text-5xl text-sunset py-5 m-auto">
        <a href="#" className="hover:text-light-green">
          <span className="underline hover:text-light-green">
            eunice.jh.baik
          </span>
          @gmail.com
        </a>
      </h1>
      <SocialsList />
    </div>
  );
};
