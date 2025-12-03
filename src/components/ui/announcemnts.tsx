export default function CardHover(): JSX.Element {
  return (
    <div className="py-32 pb-60 bg-gray-200">
      <div className="max-w-[2000px] mx-auto px-6">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 text-gray-900">
          Announcements
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-[2000px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-6">
        <div className="card relative w-full max-w-[450px] h-[320px] mx-auto">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_skycraper_1.jpg?v=1764155867"
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content text-center">
              <h3>Hello there!</h3>
              <p>Trust yourself and keep going.</p>
            </div>
          </div>
        </div>

        <div className="card relative w-full max-w-[450px] h-[320px] mx-auto">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/blu_chip.png?v=1764156319"
                  alt="card2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content text-center">
              <h3>Welcome!</h3>
              <p>Keep learning and improving.</p>
            </div>
          </div>
        </div>

        <div className="card relative w-full max-w-[450px] h-[320px] mx-auto">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone.png?v=1764156328"
                  alt="card3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content text-center">
              <h3>You're doing great!</h3>
              <p>Stay consistent every day.</p>
            </div>
          </div>
        </div>

        <div className="card relative w-full max-w-[450px] h-[320px] mx-auto">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <img
                  src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/drone.png?v=1764156328"
                  alt="card4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content text-center">
              <h3>Keep going!</h3>
              <p>Your hard work will pay off.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <style>{`
    
      .container .card .icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
      }
      
      .container .card .slide {
          width: 100%;
          max-width: 450px;
          height: 320px;
          transition: 0.5s;
      }
      .container .card {
          transition: transform 0.5s ease;
      }
      .container .card:hover {
          transform: scale(1.1);
      }
      .container .card .slide.slide1 {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          transition: .7s;
          transform: translateY(160px);
      }
      .container .card:hover .slide.slide1{
          transform: tran
      .container .card .slide.slide2 {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
          transition: .8s;
          transform: translateY(-160px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      }
      .container .card:hover .slide.slide2{
          transform: translateY(0);
      }
      .container .card .slide.slide2::after{
          content: "";
          position: absolute;
          width: 30px;
          height: 4px;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: #2c73df;
      }
      .container .card .slide.slide2 .content p {
          margin: 0;
          padding: 0;
          text-align: center;
          color: #414141;
      }
      .container .card .slide.slide2 .content h3 {
          margin: 0 0 10px 0;
          padding: 0;
          font-size: 24px;
          text-align: center;
          color: #414141;
      }
      `}</style>
    </div>
  );
}