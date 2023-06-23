import React from "react";

const About = () => {
  return (
    <section className="max-w-full mt-24 min-h-screen" id="about">
      <div className="flex md:flex-row md:items-stretch sm:flex-col  sm:items-center sm:space-y-6  gap-2 justify-between p-8 max-w-7xl mx-auto ">
        {/* Card-1 */}
        <div className="bg-slate-300 max-w-sm   shadow-lg p-4 border-b-4 border-b-yellow-300 hover:scale-105 hover:border-r-4 hover:border-primary duration-300 rounded-lg ">
          <div className="text-xl font-bold p-2">What is URL Shortening?</div>
          <div className="max-w-xs p-4">
            <ul className="flex flex-col text-start gap-8 list-disc">
              <li>
                <p>
                  URL shortening is a technique used to create shorter, more
                  manageable URLs for websites. It involves taking a long URL
                  and generating a shortened version that redirects users to the
                  original destination
                </p>
              </li>
              <li>
                <p>
                  This can be particularly useful when sharing links on social
                  media platforms or in situations where character limits are a
                  concern.
                </p>
              </li>
              <li>
                <p>
                  Our URL shortening service provides you with a reliable and
                  secure way to shorten your URLs, making them more accessible
                  and easier to share
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-slate-300  p-4 max-w-sm rounded-lg border-b-4 border-b-yellow-300 hover:scale-105 hover:border-r-4 hover:border-primary duration-300 ">
          <div className="text-xl font-bold  p-2">Why Use a URL Shortener?</div>
          <div className="max-w-xs p-4">
            <ul className="flex flex-col gap-2 text-start list-disc">
              <li>
                <p>
                  Enhanced Shareability: Long and complex URLs can be difficult
                  to share, especially on platforms like Twitter with character
                  restrictions. By using a URL shortener, you can create concise
                  links that are easy to copy, paste, and share across various
                  channels.
                </p>
              </li>
              <li>
                <p>
                  Trackable Analytics: Our URL shortener provides you with
                  valuable insights into the performance of your shortened
                  links. You can track the number of clicks, geographic data,
                  and referral sources, allowing you to analyze and optimize
                  your marketing efforts effectively.
                </p>
              </li>
              <li>
                <p>
                  Branding Opportunities: Many URL shorteners allow you to
                  customize the shortened URLs with your brand name or a
                  relevant keyword. This not only reinforces your brand identity
                  but also increases link trustworthiness among users.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Card-3 */}
        <div className="bg-slate-300  p-4 max-w-xs border-b-4 border-b-yellow-300 hover:scale-105 hover:border-r-4 hover:border-primary duration-300  rounded-lg ">
          <div className="text-xl font-bold  p-2">
            Ensuring Reliable Shortened Links
          </div>
          <div className="max-w-xs p-4">
            <ul className="flex flex-col gap-2 text-start list-disc">
              <li>
                <p>
                  99.9% Uptime Guarantee: Our URL shortening service operates on
                  a robust infrastructure, ensuring minimal downtime. You can
                  rely on our system to keep your shortened links active and
                  accessible at all times.
                </p>
              </li>
              <li>
                <p>
                  HTTPS Encryption: We prioritize the security of our users and
                  their visitors. All shortened links are encrypted using HTTPS,
                  ensuring that data transmitted between the user and the
                  destination page remains secure and private.
                </p>
              </li>
              <li>
                <p>
                  Anti-spam Measures: Our system actively monitors and filters
                  out malicious and spammy URLs, providing a safer browsing
                  experience for your users.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
