import { useRouter } from "next/router";
import Image from "next/image";

export default function Index({ data }) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/rich/${id}`);
  };

  return (
    <>
      <div className="container">
        {data.map((person) => (
          <div
            onClick={() => onClick(person.id)}
            className="person"
            key={person.id}
          >
            <Image alt="person" src={person.squareImage}></Image>
            <h4>{person.name}</h4>
            <div className="info">
              {Math.round(person.netWorth / 1000)} Billion /{" "}
              {person.industries[0]}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        body {
          min-width: 500px; /* Set a minimum width for the body */
        }
        .container {
          margin: 0 auto;
          padding: 10rem;
          padding-top: 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .person img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }

        .person:hover img {
          transform: scale(1.05) translateY(-10px);
        }

        .person h4 {
          font-size: 18px;
          margin: 0;
        }

        .person .info {
          font-size: smaller;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const data = await (
    await fetch("https://billions-api.nomadcoders.workers.dev/")
  ).json();

  return {
    props: {
      data,
    },
  };
}
