import { Link } from "react-router-dom";

export default function LiNav({ link, page }: { link: any; page: any }) {
  return (
    <>
      <li>
        <Link className="navButtonLinks" to={link}>
          {page}
        </Link>
      </li>
    </>
  );
}
