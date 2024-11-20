/* eslint-disable @next/next/no-img-element */

function Footdesc() {
  return (
    <div className="foot-desc">

        <div className="foot-1st">
        <div className="logo-foot">
          <a href="#" className="font-bold text-2xl sm:text-3xl flex ">
            <img
              style={{ width: 150 }}
              src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png"
              alt="logo"
            />
            <span>Samar</span>
          </a>
        </div>
        <div className="foot-mail">
            <h1>+91 987-654-3210</h1>
            <h2>info@example.com</h2>
        </div>
        <div className="foot-adress">
            <h1>1247/Plot No. 39, 15th Phase, Colony.</h1>
            <h2>Kkatpally, Hyderabad</h2>
        </div>
        </div>
        <hr />

    </div>
  );
}

export default Footdesc;
