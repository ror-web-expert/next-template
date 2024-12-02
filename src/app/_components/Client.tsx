// import Client from '../data/client.json'

/* eslint-disable react/no-unescaped-entities */
import Clients from "../data/client.json";

function Client() {
  return (
    <div className="client-container">
      <div className="client">
        <div className="client-head">
          <h3>TESTMONIAL</h3>
          <h1>WHAT OUR CLIENTS SAY'S</h1>
          <p>
            Discover how our solutions have helped our clients achieve success
            and exceed their goals.
          </p>
        </div>
        {Clients &&
          Clients.map((client) => {
            return (
              <div className="client-box" key={client.id}>
                <h3>{client.name}</h3>
                <h6>{client.title}</h6>
                <p>{client.content}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Client;
