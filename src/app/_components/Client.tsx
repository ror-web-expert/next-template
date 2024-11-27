// import Client from '../data/client.json'

/* eslint-disable react/no-unescaped-entities */
import Clients from "../data/client.json";

function Client() {
  return (
    <div className="client-container">
      <div className="client">
        <div className="client-head">
          <h6>TESTMONIAL</h6>
          <h1>WHAT OUR CLIENTS SAY'S</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ullam
            placeat.
          </p>
        </div>
        {
        Clients.map((client) => {
          return (
            <div className="client-box" key={client.id}>
              <h1>{client.heading}</h1>
              <h6>{client.title}</h6>
              <p>
                {client.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Client;
