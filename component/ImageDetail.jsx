    import Image from "next/image";
    import Link from "next/link";
    export default function Gallery({ thumbnailUrl, title, id }) {
      return (
        <div>
          <Link as={`/preview/${id}`} href="/preview/[id]">
            <a>
              <img width={250} height={200} src={`https://ellaphotos.herokuapp.com${thumbnailUrl}`} />
              <div className="photoid"> {title}</div>
            </a>
          </Link>
        </div>
      );
    }