export default function HeroSection() {
  return (
    <>
      <div className="hero">
        <div className="con">
          <div className="socials">
            <a href="" className="social">
              <svg
                width="27"
                height="22"
                viewBox="0 0 27 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6471 2.02954C23.6707 2.69804 22.5896 3.20933 21.4455 3.54373C20.8314 2.8584 20.0153 2.37265 19.1076 2.15219C18.1998 1.93173 17.2442 1.98718 16.37 2.31106C15.4957 2.63493 14.7451 3.2116 14.2195 3.96306C13.694 4.71453 13.4188 5.60453 13.4314 6.51271V7.50237C11.6396 7.54747 9.86406 7.16174 8.263 6.37955C6.66195 5.59735 5.28504 4.44297 4.25491 3.01921C4.25491 3.01921 0.176483 11.9262 9.35295 15.8848C7.2531 17.2683 4.75162 17.962 2.2157 17.8641C11.3922 22.8124 22.6079 17.8641 22.6079 6.48302C22.6069 6.20735 22.5796 5.93237 22.5263 5.6616C23.5669 4.6655 24.3012 3.40786 24.6471 2.02954V2.02954Z"
                  stroke="white"
                  stroke-width="2.80392"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            <a href="" className="social">
              <svg
                width="16"
                height="26"
                viewBox="0 0 16 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0392 1.75165H10.7255C9.26076 1.75165 7.85599 2.34247 6.82025 3.39415C5.78451 4.44582 5.20264 5.8722 5.20264 7.35949V10.7242H1.88892V15.2105H5.20264V24.183H9.62094V15.2105H12.9347L14.0392 10.7242H9.62094V7.35949C9.62094 7.06203 9.73732 6.77676 9.94446 6.56642C10.1516 6.35609 10.4326 6.23792 10.7255 6.23792H14.0392V1.75165Z"
                  stroke="white"
                  stroke-width="2.3366"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            <a href="" className="social">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7843 2.28757H7.73857C4.68837 2.28757 2.2157 4.76024 2.2157 7.81044V18.8562C2.2157 21.9064 4.68837 24.3791 7.73857 24.3791H18.7843C21.8345 24.3791 24.3072 21.9064 24.3072 18.8562V7.81044C24.3072 4.76024 21.8345 2.28757 18.7843 2.28757Z"
                  stroke="white"
                  stroke-width="2.80392"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.6797 12.6374C17.8161 13.5567 17.659 14.4956 17.231 15.3205C16.803 16.1454 16.1258 16.8143 15.2957 17.2321C14.4655 17.6499 13.5248 17.7954 12.6073 17.6477C11.6898 17.5001 10.8422 17.0669 10.185 16.4097C9.52789 15.7526 9.09469 14.905 8.94705 13.9875C8.79941 13.0699 8.94484 12.1292 9.36266 11.2991C9.78047 10.469 10.4494 9.79176 11.2743 9.36374C12.0992 8.93572 13.038 8.7787 13.9573 8.91501C14.895 9.05406 15.7631 9.49101 16.4334 10.1613C17.1038 10.8316 17.5407 11.6997 17.6797 12.6374Z"
                  stroke="white"
                  stroke-width="2.80392"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.3366 7.25818H19.3484"
                  stroke="white"
                  stroke-width="2.80392"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="text">
            <h4>Looking for Tasty Donuts?</h4>
            <h1>
              Try <span>Brand</span> Now
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Risus at consequat eget
              ligula quisque vel.
            </p>
            <a href="" className="try">
              Try Now
            </a>
          </div>
        </div>
        <div className="img">
          <img src={require("./Donut.png")} alt="" className="donut" />
        </div>
      </div>
    </>
  );
}
