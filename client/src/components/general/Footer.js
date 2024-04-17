import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";

const Footer = () => {
  return (
    <footer
      className="w-full flex flex-col gap-10 sm:gap-5 sm:flex-row items-center justify-between p-4 md:p-10 lg:p-12 mb-16 mt-16 xl:mb-0"
      data-cy="footer-container"
    >
      <div className="w-full flex justify-evenly items-center sm:flex-col sm:items-start sm:justify-center gap-2">
        <div
          className="text-sm text-center sm:text-left"
          data-cy="footer-text-container"
        >
          <p data-cy="footer-copyright-text">
            Copyright © 2022 - All rights reserved.
          </p>
          <p data-cy="footer-made-by-text">
            Made with ❤{" "}
            <a
              aria-label="helloukey"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white underline"
              href="https://github.com/helloukey"
            >
              @helloukey
            </a>
          </p>
          <p data-cy="footer-data-by-text">
            Data provided by -{" "}
            <a
              aria-label="tmdb"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white underline"
              href="https://www.themoviedb.org/"
            >
              TMDB
            </a>
          </p>
        </div>
      </div>
      <div
        className="flex items-center justify-center gap-4 pb-10 sm:p-0"
        data-cy="footer-social-links-container"
      >
        <a
          aria-label="website"
          href="https://kunalukey.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          <FaGlobe
            className="text-xl lg:text-2xl"
            data-cy="footer-website-icon"
          />
        </a>
        <a
          aria-label="github"
          href="https://github.com/helloukey"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          <FaGithub
            className="text-xl lg:text-2xl"
            data-cy="footer-github-icon"
          />
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/kunalukey/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          <FaLinkedinIn
            className="text-xl lg:text-2xl"
            data-cy="footer-linkedin-icon"
          />
        </a>
        <a
          aria-label="youtube"
          href="https://youtube.com/c/techlenses"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          <FaYoutube
            className="text-xl lg:text-2xl"
            data-cy="footer-youtube-icon"
          />
        </a>
        <a
          aria-label="mail"
          href="mailto:kunalukey32@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          <FaEnvelope
            className="text-xl lg:text-2xl"
            data-cy="footer-mail-icon"
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
