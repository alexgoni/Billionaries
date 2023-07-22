export default function Navbar() {
  return (
    <>
      <nav>
        <span>Billionaries</span>
      </nav>
      <style jsx>{`
        nav {
          text-align: center;
          color: white;
          background-color: black;
          padding: 1rem;
          box-shadow: 0 0 10px 0 gray;
        }

        span {
          font-size: x-large;
        }
      `}</style>
    </>
  );
}
