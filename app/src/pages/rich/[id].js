export default function Detail({ data }) {
  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };

  return (
    <>
      <div className="container">
        <div className="info">
          <img src={data.squareImage}></img>
          <h2>{data.name}</h2>
          <div>Networth: {Math.round(data.netWorth / 1000)} Billion</div>
          <div>Country: {data.country}</div>
          <div>Industry: {data.industries.join(", ")}</div>
          <div>{data.bio}</div>
        </div>

        <div className="assets">
          <h2>Financial Assets</h2>
          <div className="assetsGrid">
            {data.financialAssets?.map((each, index) => (
              <div className="asset" key={index}>
                <div>Ticker: {each.ticker}</div>
                <div>Shares: {formatNumberWithCommas(each.numberOfShares)}</div>
                {each.exerciseOptionPrice && (
                  <div>
                    Excersie Price: $
                    {formatNumberWithCommas(each.exerciseOptionPrice)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: grid;
          flex-direction: column;
          align-items: center;
          gap: 5rem;
          margin: 0 auto;
          margin-top: 2rem;
          margin-bottom: 3rem;
          width: 70%;
        }

        img {
          max-width: 100%;
        }

        .info {
          background-color: #f5f5f5;
          padding: 3rem;
        }

        .info div {
          padding: 0.2rem;
        }

        .assets {
          background-color: #f5f5f5;
          padding: 2rem;
          padding-top: 1rem;
        }

        .assetsGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .asset {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 10px;
        }

        .asset div {
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  const data = await (
    await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`)
  ).json();

  return {
    props: {
      data,
    },
  };
}
