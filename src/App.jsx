import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [tab, setTab] = useState("tab_recent")

  const activate = (e) => {
    e.preventDefault();
    let target = e.target;
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('tab-active')
        target.classList.add('tab-active')
    })
    setTab(target.id)
  }

  return (
    <div className="App" data-theme="pastel">
      <main className="main-container">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="space-y-5"> {/* start left side */}
            <div className="card w-auto bg-base-100 shadow-xl rounded-xl"> {/* start user card */}
              <div className="h-24 bg-cover" style={{backgroundImage: `url("assets/img/planets-tech.jpg")`}}></div>
              <div className="card-body mb-0">
                <h1 className="font-black text-center text-2xl">Carlos Hung</h1>
                <div className="justify-start text-sm text-gray-400 mb-4">Software Developer</div>
                <p className="text-left">Enthusiastically making things happen</p>
                <a href="mailto:developertogo@gmail.com" className="mail-link social-link-hover text-sm"><span>developertogo@gmail.com</span></a>
                <span className="text-left text-sm mb-4 italic">415.967.0599</span>
                <div className="flex flex-col space-y-4">
                  <ul className="flex space-x-5">
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/developertogo" className="social-link-hover"><i className="fa-brands fa-linkedin text-xl"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/developertogo" className="social-link-hover"><i className="fa-brands fa-github text-xl"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.hackerrank.com/developertogo" className="social-link-hover"><i className="fa-brands fa-hackerrank text-xl"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/newman-reporter-har" className="social-link-hover"><i className="fa-brands fa-npm text-xl"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="card-actions justify-start mb-5">
                  <div className="badge badge-outline text-xs">Full-Stack</div> 
                  <div className="badge badge-outline text-xs">Backend</div> 
                  <div className="badge badge-outline text-xs">Polyglot</div>
                </div>
                <div className="flex group">
                  <button className="download-btn">Download CV</button>
                    <button className="download-btn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                    </button>
                  </div>
              </div>
            </div> {/* end user card */}
            <div className="card w-auto bg-base-100 shadow-xl rounded-xl"> {/* start info card */}
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Quick Facts</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div className="text-gray-400">Location</div>
                    <div className="font-medium text-right text-gray-600">SF Bay Area</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-400">Experience</div>
                    <div className="font-medium text-right text-gray-600">38+ years</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-400">Work Type</div>
                    <div className="font-medium text-right text-gray-600">Full-Time (FTE)</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-400">Environment</div>
                    <div className="font-medium text-right text-gray-600">100% Remote</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-400">Take-Home Test</div>
                    <div className="font-medium text-right text-gray-600">Love it!</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-400">Authorization</div>
                    <div className="font-medium text-right text-gray-600">US Citizen</div>
                  </div>
                </div> 
              </div>
            </div> {/* end info card */}
            <div className="card w-auto bg-base-100 shadow-xl rounded-xl"> {/* start skills card */}
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Skills</h2>
                <div className="-m-2 flex flex-wrap">
                  <span className="skill-tag">Go</span>
                  <span className="skill-tag">GoLang</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">NodeJS</span>
                  <span className="skill-tag">Ruby</span>
                  <span className="skill-tag">Rails</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">React Hook</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">PHP</span>
                  <span className="skill-tag">C/C++</span>
                  <span className="skill-tag">Postgres</span>
                  <span className="skill-tag">MySql</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">Startup</span>
                  <span className="skill-tag">REST</span>
                  <span className="skill-tag">AWS</span>
                </div>
              </div>
            </div> {/* end skills card */}
          </div> {/* end left side */}
          <div className="space-y-5 lg:col-span-2"> {/* start right side */}
            <div className="card w-auto bg-base-100 shadow-xl rounded-xl"> {/* start about block */}
              <div className="card-body pb-7">
                <h2 className="card-title text-2xl mb-2">About Me</h2>
                <div className="text-left text-base text-gray-400 mb-4">
                  <ul>
                    <li className="py-0 my-0">Solutions are not searchable</li>
                    <li className="py-0 my-0">Definitions are</li>
                    <li className="py-0 my-0">Clever solutions provided by me</li>
                    <li className="py-0 my-0">Are not searchable</li>
                    <li className="py-0 my-0">That's the reason you'll hire me :)</li>
                  </ul>
                </div>
                <div className="text-left ml-4 mb-2">
                  <ul className="list-disc space-y-2">
                    <li>Passionate about software development: It’s not just a job; it’s a hobby</li>
                    <li>Enjoy finding the simplicity of complex problems</li>
                    <li>Care about reliable and high-quality code</li> 
                    <li>Excel as a productive team player</li>
                    <li>Quick learner</li>
                    <li>Flexible to adapt to business requirement changes</li>
                    <li>Strong proponent of code reviews to promote good coding practice</li>
                    <li>Champion of RERO - Release Early Release Often, and DRY - Don't Repeat Yourself</li>
                  </ul> 
                </div>
              </div>
            </div> {/* end about card */}
            <div className="card w-auto bg-base-100 shadow-xl rounded-xl"> {/* start work history card */}
              <div className="card-body pt-6">
                <h2 className="card-title text-2xl mb-2">Work Experience</h2>
                <div id="tab_group" className="tabs mb-4">
                  <a id="tab_recent" className="tab tab-bordered tab-active" onClick={activate}>Recent Experience</a> 
                  <a id="tab_code" className="tab tab-bordered" onClick={activate}>Code Samples</a>
                  <a id="tab_most" className="tab tab-bordered" onClick={activate}>Most Challenging</a>
                  <a id="tab_accomplish" className="tab tab-bordered" onClick={activate}>Accomplishments</a>
                  <a id="tab_more" className="tab tab-bordered" onClick={activate}>More...</a> 
                </div>
                {tab == "tab_recent" && <div> {/* start recent experience tab */}
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2"> {/* start kipu collapse section */}
                    <div className="collapse-title text-lg font-medium"> {/* start collapse title */}
                      <div className="item-section mb-2">
                        <img className="company-logo rounded-full mx-auto" src="assets/img/kipu.jpeg" alt="" width="48" height="48"/>
                        <div className="w-full space-y-5">
                          <div className="item-header">
                            <div className="space-y-1.5">
                              <div className="font-bold text-left">Full-Stack Developer</div>
                              <div className="flex space-x-5">
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>Kipu Health</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>Miami, FL (Remote)</span>
                                </div>
                              </div>
                            </div>
                              <div className="space-y-2 sm:text-right">
                                  <div className="job-item-badge">Full time</div>
                                  <div className="item-header-info">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                      <span>Sep 2021 – Present</span>
                                  </div>
                              </div>
                          </div>
                          <div className="text-left text-sm">
                            <div className="card-actions justify-start mb-2">
                              <div className="badge badge-outline text-xs">Rails</div> 
                              <div className="badge badge-outline text-xs">JavaScript</div> 
                              <div className="badge badge-outline text-xs">Postgres</div>
                              <div className="badge badge-outline text-xs">AWS - S3, RDS</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> {/* end collapse title */}
                    <div className="collapse-content"> {/* start kipu collapse content */} 
                      <p className="text-sm text-gray-400 mb-4 ml-12">KIPU HEALTH develops EMR software solutions for behavioral health treatment centers.</p>
                      <div className="text-left ml-20 mb-2">
                        <ul className="list-disc space-y-2">
                          <li>
                            <span>Dive deep into the medication taper algorithm which gradually decreases the total daily dose of medication depending on the frequency that must be administered. This includes understanding the patient order parent-child data model relationship in order to fix a bug where duplicate </span>
                            <a href="https://en.wikipedia.org/wiki/Medication_Administration_Record" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">MAR</a>
                            <span>s appear in the patient medication log.</span>
                          </li>
                          <li>
                            <span>Enhance template form creation for patient evaluation and consent forms. Troubleshoot users’ authorization to perform actions given user’s roles using the </span>
                            <a href="https://github.com/CanCanCommunity/cancancan" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">CanCanCan</a>
                            <span> auth library/gem.</span>
                          </li>
                          <li>
                            <span>Sanitize the entire source code from cross-site scripting (</span>
                            <a href="https://owasp.org/www-community/attacks/xss/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">XSS</a>
                            <span>) vulnerability attacks (stored and reflected XSS) including applying </span>
                            <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding-for-html-contexts" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">OWASP</a>
                            <span> HTML entity encoding prevention rules to wrap untrusted data.</span>
                          </li>
                        </ul>
                      </div>
                    </div> {/* end collapse content */}
                  </div> {/* end kipu collapse section */}
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2"> {/* start synopsys collapse section */}
                    <div className="collapse-title text-lg font-medium"> {/* start collapse title */}
                      <div className="item-section mb-2">
                        <img className="company-logo rounded-full mx-auto" src="assets/img/synopsys.jpeg" alt="" width="48" height="48"/>
                        <div className="w-full space-y-5">
                          <div className="item-header">
                            <div className="space-y-1.5">
                              <div className="font-bold text-left">Backend Developer</div>
                              <div className="flex space-x-5">
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>Synopsys - WhiteHat</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>San Jose, CA (Remote)</span>
                                </div>
                              </div>
                            </div>
                              <div className="space-y-2 sm:text-right">
                                  <div className="job-item-badge">Full time</div>
                                  <div className="item-header-info">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                      <span>Feb 2020 – Sep 2021</span>
                                  </div>
                              </div>
                          </div>
                          <div className="text-left text-sm">
                            <div className="card-actions justify-start mb-2">
                              <div className="badge badge-outline text-xs">Go</div> 
                              <div className="badge badge-outline text-xs">NodeJS</div> 
                              <div className="badge badge-outline text-xs">Docker</div>
                              <div className="badge badge-outline text-xs">Jenkins</div>
                              <div className="badge badge-outline text-xs">REST</div>
                              <div className="badge badge-outline text-xs">Azure CI/CD</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> {/* end collapse title */}
                    <div className="collapse-content"> {/* start synopsys collapse content */} 
                      <p className="text-sm text-gray-400 mb-4 ml-12">
                        SYNOPSYS provides software solutions for developers to build secure web applications.
                      </p>
                      <div className="text-left ml-20 mb-2">
                        <ul className="list-disc space-y-2">
                          <li>
                            Provide solutions for easy and seamless adaptation of our ScanX in developers' development and testing (CI/CD) environments like Jenkins and Selenium, among others.
                          </li>
                          <li>
                            <span>Author and main contributor of the open-source Node.js package: </span>
                            <a href="https://www.npmjs.com/package/newman-reporter-har" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">newman-reporter-har</a> 
                            <span>, a custom Postman/Newman reporter that outputs a HAR file. A crucial solution to access Postman collections for vulnerability detection by ScanX, one of the </span>
                            <a href="https://postman-hack.devpost.com/submissions/search?utf8=%E2%9C%93&terms=whitehat&sort=" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Postman API Hack</a>
                            <span> winners on Feb 16, 2021.</span>
                          </li>
                        </ul>
                      </div>
                    </div> {/* end collapse content */}
                  </div> {/* end synopsys collapse section */}
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2"> {/* start ww collapse section */}
                    <div className="collapse-title text-lg font-medium"> {/* start collapse title */}
                      <div className="item-section mb-2">
                        <img className="company-logo rounded-full mx-auto" src="assets/img/ww.jpeg" alt="" width="48" height="48"/>
                        <div className="w-full space-y-5">
                          <div className="item-header">
                            <div className="space-y-1.5">
                              <div className="font-bold text-left">Backend Developer</div>
                              <div className="flex space-x-5">
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>WW</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>San Francisco (Hybrid)</span>
                                </div>
                              </div>
                            </div>
                              <div className="space-y-2 sm:text-right">
                                  <div className="job-item-badge">Contract</div>
                                  <div className="item-header-info">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                      <span>Jun 2019 – Dec 2019</span>
                                  </div>
                              </div>
                          </div>
                          <div className="text-left text-sm">
                            <div className="card-actions justify-start mb-2">
                              <div className="badge badge-outline text-xs">Rails</div> 
                              <div className="badge badge-outline text-xs">Postgres</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> {/* end collapse title */}
                    <div className="collapse-content"> {/* start collapse content */} 
                      <p className="text-sm text-gray-400 mb-4 ml-12">
                        Weight Watchers promotes wellness that works, inspiring healthy habits for real life.
                      </p>
                      <div className="text-left ml-20 mb-2">
                        <ul className="list-disc space-y-2">
                          <li>
                            Design and develop a coach matching algorithm, to search the database for the best active coach, matching user’s requested preferences based on system tags. Provide comprehensive unit tests to exercise every piece of functionality for all stages of the algorithm. Built with react-rails.
                          </li>
                          <li>
                            Develop new action events to track user interactions. Integrate with our registered business partners via REST APIs. Familiarize quickly with large DB schema and model classes to understand how and where to fetch any data. Modify alert subsystem to CRUD threshold alerts, e.g.: height/weight or BMI changes.
                          </li>
                        </ul>
                      </div>
                    </div> {/* end collapse content */}
                  </div> {/* end ww collapse section */}
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2"> {/* start global collapse section */}
                    <div className="collapse-title text-lg font-medium"> {/* start collapse title */}
                      <div className="item-section mb-2">
                        <img className="company-logo rounded-full mx-auto" src="assets/img/global.jpeg" alt="" width="48" height="48"/>
                        <div className="w-full space-y-5">
                          <div className="item-header">
                            <div className="space-y-1.5">
                              <div className="font-bold text-left">Full-Stack Developer</div>
                              <div className="flex space-x-5">
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>Global Payments</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>Charlotte, NC (Remote)</span>
                                </div>
                              </div>
                            </div>
                              <div className="space-y-2 sm:text-right">
                                  <div className="job-item-badge">Full time</div>
                                  <div className="item-header-info">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                      <span>Jan 2014 – May 2019</span>
                                  </div>
                              </div>
                          </div>
                          <div className="text-left text-sm">
                            <div className="card-actions justify-start mb-2">
                              <div className="badge badge-outline text-xs">Python</div> 
                              <div className="badge badge-outline text-xs">TypeScript</div> 
                              <div className="badge badge-outline text-xs">Angular</div>
                              <div className="badge badge-outline text-xs">Java</div>
                              <div className="badge badge-outline text-xs">MySql</div>
                              <div className="badge badge-outline text-xs">GCP</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> {/* end collapse title */}
                    <div className="collapse-content"> {/* start collapse content */} 
                      <p className="text-sm text-gray-400 mb-4 ml-12">
                        XENIAL, a Global Payments Company, provides point-of-sale (POS) system solutions.
                      </p>
                      <div className="text-left ml-20 mb-2">
                        <ul className="list-disc space-y-2">
                          <li>
                            Port frontend from AngularJS to Angular 4+. Extract business logic from legacy PHP code. Provide unit tests using Jasmine.
                          </li>
                          <li>
                            <span>Develop new REST API endpoints using </span>
                            <a href="https://www.dropwizard.io/en/latest/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Dropwizard</a>
                            <span>, a Java framework RESTful web services. Use </span>
                            <a href="https://jdbi.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Skife</a>
                            <span>, a Jdbi, to access the DB.</span> 
                          </li>
                          <li>
                            <span>Develop authorization model (backend) using </span>
                            <a href="https://shiro.apache.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Apache Shiro</a>
                            <span>, a Java security framework, including permission configuration and user restriction.</span>
                          </li>
                          <li>
                            <span>Revitalize the OnCloud Portal Platform project that ceased from making any development progress. Embark on developing a modular, flexible, extensible and maintainable SAAS Web Portal with RESTful APIs using </span>
                            <a href="https://trypyramid.com/community.html" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Pyramid</a>
                            <span> and </span>
                            <a href="https://cornice.readthedocs.io/en/latest/#" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Cornice</a>
                            <span> as Web and REST Frameworks respectively.</span>
                          </li>
                          <li>
                            <span>Develop a Dashboard displaying real-time graphical presentation of key store metrics such as total sales and profits, hourly net sales for today, sales breakdown by department, sales comparison from previous days, weeks, months and years. Use </span>
                            <a href="https://morrisjs.github.io/morris.js/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Morris</a>
                            <span> and </span>
                            <a href="https://www.flotcharts.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Flot.js</a>
                            <span> chart jQuery libraries.</span>
                          </li>
                        </ul>
                      </div>
                    </div> {/* end collapse content */}
                  </div> {/* end global collapse section */}
                </div>} {/* end recent experiment tab */}
                {tab == "tab_code" && <div>  {/* start code samples tab */}
                  <div className="card bg-base-100 shadow-xl p-4 pt-0 mb-2">
                    <div className="card-body p-2">
                      <div className="card-title space-x-28">
                        <div>
                          <i className="fa-solid fa-network-wired"></i>
                          <span className="ml-4">Newman Reporter HAR File Output</span>
                        </div>
                        <div className="space-y-2 sm:text-right">
                          <div className="job-item-badge">Open Source</div>
                        </div>
                      </div>
                      <p className="text-left text-sm">
                        <span>My open source contribution - A custom Postman/Newman Reporter that outputs a </span>
                        <a href="https://en.wikipedia.org/wiki/HAR_(file_format)" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">HAR</a> 
                        <span>, an HTTP ARchive format file.</span>
                      </p>
                      <div className="text-left text-sm mb-2">
                        <div className="card-actions justify-start mb-2">
                          <div className="badge badge-outline text-xs">Open Source</div> 
                          <div className="badge badge-outline text-xs">NodeJS</div> 
                          <div className="badge badge-outline text-xs">Newman</div> 
                          <div className="badge badge-outline text-xs">Postman</div> 
                          <div className="badge badge-outline text-xs">HAR</div> 
                        </div>
                      </div>
                      <div className="w-5/6">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/developertogo/newman-reporter-har"
                            className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600"
                            style={{width: "426px"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                          <span className="">https://github.com/developertogo/newman-reporter-har</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-4 mb-2">
                    <div className="card-body p-2">
                      <h5 className="card-title">
                        <i className="fa-solid fa-cash-register"></i>
                        <span className="ml-2">Yet Another Checkout System (YACS)</span>
                      </h5>
                      <p className="text-left text-sm">Develop a POS cash register using OOP in Ruby.</p>
                      <div className="text-left text-sm mb-2">
                        <div className="card-actions justify-start mb-2">
                          <div className="badge badge-outline text-xs">Ruby</div> 
                          <div className="badge badge-outline text-xs">OOP</div> 
                        </div>
                      </div>
                      <div className="w-96">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/developertogo/yacs-checkout"
                            className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                          <span className="">https://github.com/developertogo/yacs-checkout</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-4 mb-2">
                    <div className="card-body p-2">
                      <h5 className="card-title">
                        <i className="fa-solid fa-user-shield"></i>
                        <span className="ml-2">Scrub Personal Identifiable Information (PII)</span>
                      </h5>
                      <p className="text-left text-sm">Scrub personal identifiable information on unstructured JSON data with Go.</p>
                      <div className="text-left text-sm mb-2">
                        <div className="card-actions justify-start mb-2">
                          <div className="badge badge-outline text-xs">Go</div> 
                          <div className="badge badge-outline text-xs">Reflection</div> 
                          <div className="badge badge-outline text-xs">Recursion</div> 
                        </div>
                      </div>
                      <div className="w-96">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/developertogo/scrub-pii"
                            className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600"
                            style={{width: "348px"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                          <span className="">https://github.com/developertogo/scrub-pii</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-4 mb-2">
                    <div className="card-body p-2">
                      <h5 className="card-title">
                        <i className="fa-solid fa-rectangle-list"></i>
                        <span className="ml-2">Yummy Meals Order List with React</span>
                      </h5>
                      <p className="text-left text-sm">
                        <span>Develop an Order List Table page using </span>
                        <a href="https://github.com/refinedev/refine" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Refine</a> 
                        <span>, a React headless web application framework.</span>
                      </p>
                      <div className="text-left text-sm mb-2">
                        <div className="card-actions justify-start mb-2">
                          <div className="badge badge-outline text-xs">React</div> 
                          <div className="badge badge-outline text-xs">React Hook</div> 
                          <div className="badge badge-outline text-xs">TypeScript</div> 
                          <div className="badge badge-outline text-xs">Material UI</div> 
                        </div>
                      </div>
                      <div className="w-96">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/developertogo/yummy-meals-order"
                            className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600"
                            style={{width: "415px"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                          <span className="">https://github.com/developertogo/yummy-meals-order</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-4 mb-2">
                    <div className="card-body p-2">
                      <h5 className="card-title">
                        <i className="fa-solid fa-bell-concierge"></i>
                        <span className="ml-2">Yummy Meals Order Microservice</span>
                      </h5>
                      <p className="text-left text-sm">
                        <span>Develop a Restful API microservice to fetch meal orders using </span>
                        <a href="https://loopback.io/doc/en/lb4/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">LoopBack 4</a> 
                        <span>, a minimalistic microservice framework.</span>
                      </p>
                      <div className="text-left text-sm mb-2">
                        <div className="card-actions justify-start mb-2">
                          <div className="badge badge-outline text-xs">NodeJS</div> 
                          <div className="badge badge-outline text-xs">TypeScript</div> 
                          <div className="badge badge-outline text-xs">MySQL</div> 
                          <div className="badge badge-outline text-xs">REST</div> 
                          <div className="badge badge-outline text-xs">Microservice</div> 
                        </div>
                      </div>
                      <div className="w-96">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/developertogo/yummy-meals-microservice"
                            className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600"
                            style={{width: "460px"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                          <span className="">https://github.com/developertogo/yummy-meals-microservice</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-4 mb-2">
                    <div className="card-body p-2">
                      <h5 className="card-title">
                        <i className="fa-solid fa-car"></i>
                        <span className="ml-2">Track Driving History with Ruby</span>
                      </h5>
                      <p className="text-left text-sm">Develop a track driving history for drivers using OOP in Ruby.</p>
                      <div className="text-left text-sm mb-2">
                        <div className="card-actions justify-start mb-2">
                          <div className="badge badge-outline text-xs">Ruby</div> 
                          <div className="badge badge-outline text-xs">OOP</div> 
                        </div>
                      </div>
                      <div className="w-96">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/developertogo/driving-history"
                            className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                          <span className="">https://github.com/developertogo/driving-history</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-4 mb-2">
                    <div className="card-body p-2">
                      <h5 className="card-title">
                        <i className="fa-solid fa-robot"></i>
                        <span className="ml-2">Chatbot Automatic Testing Framework</span>
                      </h5>
                      <p className="text-left text-sm">
                        <span>Develop a chatbot testing framework using </span>
                        <a href="https://www.botium.ai/community/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Botium</a> 
                        <span>, a chatbot testing tool. As a demo, it tests the chatbot at this repo:  </span>
                        <a href="https://github.com/developertogo/chatbot" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">https://github.com/developertogo/chatbot</a> 
                      </p>
                      <div className="text-left text-sm mb-2">
                        <div className="card-actions justify-start mb-2">
                          <div className="badge badge-outline text-xs">JavaScript</div> 
                          <div className="badge badge-outline text-xs">Botium</div> 
                          <div className="badge badge-outline text-xs">Mocha</div> 
                        </div>
                      </div>
                      <div className="w-96">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/developertogo/chatbot-test"
                            className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600"
                            style={{width: "370px"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                          <span className="">https://github.com/developertogo/chatbot-test</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>} {/* end code samples tab */}
                {tab == "tab_most" && <div> {/* start most challenging tab */}
                  <div className="card bg-base-100 shadow-xl p-4 pt-0 mb-2">
                    <div className="card-body p-2">
                      <div className="item-section mb-4">
                        <img className="company-logo rounded-full mx-auto" src="assets/img/media-general.jpg" alt="" width="48" height="48"/>
                        <div className="w-full space-y-5">
                          <div className="item-header">
                            <div className="space-y-3">
                              <div className="font-medium text-left">
                                Build a search engine to search over <span className="font-semibold">30M</span> records using Lucene Solr 3.3. Provide full-text, faceted, and geospatial search.
                              </div>
                              <div className="font-medium text-left">
                                <span>Architect, design, develop, and test a multithreaded concurrency Short Message Peer to Peer Protocol (</span>
                                <a href="https://smpp.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">SMPP</a> 
                                <span>) service using </span>
                                <a href="https://netty.io/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Netty</a>
                                <span> to send <span className="font-semibold">1M</span> </span>
                                <a href="https://en.wikipedia.org/wiki/SMS" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">SMS</a>
                                <span> messages per hour, <span className="font-semibold">28</span> times faster than previous versions.</span>
                              </div>
                              <div className="flex space-x-10">
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>Media General - NetInformer</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>San Ramon, CA</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <span>2011</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-left text-sm">
                            <div className="card-actions justify-start mb-2">
                              <div className="badge badge-outline text-xs">Search</div> 
                              <div className="badge badge-outline text-xs">Lucene - Solr</div> 
                              <div className="badge badge-outline text-xs">Java</div>
                              <div className="badge badge-outline text-xs">Netty</div>
                              <div className="badge badge-outline text-xs">SMPP</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-4 pt-0 mb-2">
                    <div className="card-body p-2">
                      <div className="item-section mb-4">
                        <img className="company-logo rounded-full mx-auto" src="assets/img/turnhere.jpg" alt="" width="48" height="48"/>
                        <div className="w-full space-y-5">
                          <div className="item-header">
                            <div className="space-y-3">
                              <div className="font-medium text-left">
                                Lead a team of 4 developers towards the release of TurnHere OnRamp v1.0 in 4 months to help fuel and sustain the rapid business growth.
                              </div>
                              <div className="font-medium text-left">
                                Develop video production workflow applications like shoot scheduling, video upload, preview/editing, and distribution.
                              </div>
                              <div className="flex space-x-10">
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>TurnHere</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>Emeryville, CA</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <span>2009</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-left text-sm">
                            <div className="card-actions justify-start mb-2">
                              <div className="badge badge-outline text-xs">PHP</div> 
                              <div className="badge badge-outline text-xs">Drupal</div> 
                              <div className="badge badge-outline text-xs">MySQL</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-4 mb-2">
                    <div className="card-body p-2">
                      <div className="item-section mb-4">
                        <img className="company-logo rounded-full mx-auto" src="assets/img/adx-edi.jpg" alt="" width="48" height="48"/>
                        <div className="w-full space-y-5">
                          <div className="item-header">
                            <div className="space-y-3">
                              <div className="font-medium text-left">
                                Successful release of ADX Windows Desktop 3.2 in under four man-months. Inherited over 60K lines of undocumented VC++ code. Sole successor of the entire code base.
                              </div>
                              <div className="flex space-x-10">
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>ADX</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>Newark, CA</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <span>2004</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-left text-sm">
                            <div className="card-actions justify-start mb-2">
                              <div className="badge badge-outline text-xs">VC++</div> 
                              <div className="badge badge-outline text-xs">Windows</div> 
                              <div className="badge badge-outline text-xs">EDI</div> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>} {/* end most challenging tab */}
                {tab == "tab_accomplish" && <div> {/* start accomplishments tab */}
                  <div className="card bg-base-100 shadow-xl p-4 pt-0 mb-2">
                    <div className="card-body p-2">
                      <div className="item-section mb-4">
                        <div className="space-y-2">
                          <img className="company-logo rounded-full mx-auto" src="assets/img/postman-award.jpg" alt="" width="48" height="48"/>
                          <img className="company-logo rounded-full mx-auto" src="assets/img/postman.jpg" alt="" width="48" height="48"/>
                        </div>
                        <div className="w-full space-y-5">
                          <div className="item-header">
                            <div className="space-y-3">
                              <div className="font-bold text-left text-lg">
                                Postman API Hack Moonshot Prize Winner - Feb 16, 2021
                              </div>
                              <div className="font-medium text-left">
                                <span>Our ScanX (</span>
                                <a href="https://postman-hack.devpost.com/submissions/search?utf8=%E2%9C%93&terms=whitehat&sort=" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">API Security Tester</a>
                                <span>) product was one of 13 winners from more than 1,900 developers from 115 countries who competed in the Postman API Hack.</span>
                              </div>
                              <div className="flex space-x-5">
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>WhiteHat Security</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>San Jose, CA (Remote)</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <span>Feb 2021</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-left text-sm">
                            <div className="card-actions justify-start mb-2">
                              <div className="badge badge-outline text-xs">Security</div> 
                              <div className="badge badge-outline text-xs">REST</div> 
                              <div className="badge badge-outline text-xs">Go</div>
                              <div className="badge badge-outline text-xs">NodeJS</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2"> {/* start collapse section */}
                    <div className="collapse-title text-lg font-medium"> {/* start collapse title */}
                      <div className="item-section mb-2">
                        <div className="company-logo bg-green-700">
                          <span className="text-2xl">A</span>
                        </div>
                        <div className="w-full space-y-5">
                          <div className="item-header">
                            <div className="space-y-1.5">
                              <div className="font-bold text-left">Senior Engineer / Lead / Architect</div>
                              <div className="flex space-x-5">
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>Startups to SMB</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>SF Bay Area</span>
                                </div>
                              </div>
                            </div>
                              <div className="space-y-2 sm:text-right">
                                  <div className="" style={{display: 'inline-flex'}}></div>
                                  <div className="item-header-info">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                      <span>1984 – 2014</span>
                                  </div>
                              </div>
                          </div>
                          <div className="text-left text-sm">
                            <div className="card-actions justify-start mb-2">
                              <div className="badge badge-outline text-xs">Python</div> 
                              <div className="badge badge-outline text-xs">PHP</div> 
                              <div className="badge badge-outline text-xs">Java</div>
                              <div className="badge badge-outline text-xs">C/C++</div>
                              <div className="badge badge-outline text-xs">MySQL</div>
                              <div className="badge badge-outline text-xs">Postgres</div>
                              <div className="badge badge-outline text-xs">JS/HTML</div>
                              <div className="badge badge-outline text-xs">AWS</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> {/* end collapse title */}
                    <div className="collapse-content"> {/* start collapse content */} 
                      <div className="space-y-0 ml-16 mb-4">
                        <div className="text-left">Develop CRUD web applications in the following industries:</div>
                        <div className="text-left text-sm italic">CMS | Network Management | Supply Chain | SMS | Ad Network | Merchant Web Portal</div>
                      </div>
                      <div className="text-left ml-16 mb-2">
                        <p className="underline mb-2">Top Companies:</p>
                        <ul className="list-none space-y-2 text-sm">
                          <li><span className="font-semibold">ZEAL LEARNING</span> – Develops a mobile social learning platform for K-12 students</li>
                          <li><span className="font-semibold">WEBTALK</span> – Provides an online social platform for users to monetize their relationships</li>
                          <li><span className="font-semibold">BUFFALO STUDIOS</span> – Develops social engaging online games</li>
                          <li><span className="font-semibold">MEDIA GENERAL</span> – Provides SMS text marketing and mobile coupons</li>
                          <li><span className="font-semibold">MERCHANTCIRCLE</span> – Provides an online marketing platform for local merchants</li>
                          <li><span className="font-semibold">TURNHERE</span> - Produces high-quality, low-cost online videos</li>
                          <li><span className="font-semibold">ADTERACTIVE</span> – Provides an online ad network delivering qualified leads to advertisers</li>
                          <li><span className="font-semibold">POLYCOM</span> – Provides video-conferencing communication solutions</li>
                          <li><span className="font-semibold">ADX</span> – Provides video-conferencing communication solutions</li>
                          <li><span className="font-semibold">COVALENT TECH</span> – Provides web infrastructure solutions for the Apache server</li>
                          <li><span className="font-semibold">DIGITAL ISLAND</span> – Provides network infrastructure for content distribution</li>
                          <li><span className="font-semibold">FREEGATE</span> – Manufactures Internet server appliances for SMB</li>
                          <li><span className="font-semibold">CORONET</span> – Provides a network monitoring system for network traffic analysis</li>
                          <li><span className="font-semibold">RAYNET</span> – Manufactures fiber optic systems for telephone and cable networks</li>
                          <li><span className="font-semibold">VITALINK</span> – Manufactures data networking products to build computer networks</li>
                          <li><span className="font-semibold">AMDAHL</span> – Manufactures IBM-compatible mainframe systems</li>
                        </ul>
                      </div>
                    </div> {/* end collapse content */}
                  </div> {/* end collapse section */}
                </div>} {/* end accomplishments tab */}
                {tab == "tab_more" && <div> {/* start more tab */} 
                  <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2"> {/* start kipu collapse section */}
                    <div className="collapse-title text-lg font-medium"> {/* start collapse title */}
                      <div className="item-section mb-2">
                        <img className="company-logo rounded-full mx-auto" src="assets/img/deal-acceleration.jpg" alt="" width="48" height="48"/>
                        <div className="w-full space-y-5">
                          <div className="item-header">
                            <div className="space-y-1.5">
                              <div className="font-bold text-left">Frontend Developer</div>
                              <div className="flex space-x-5">
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  <span>Deal Acceleration</span>
                                </div>
                                <div className="item-header-info">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>San Jose, CA (Remote)</span>
                                </div>
                              </div>
                            </div>
                              <div className="space-y-2 sm:text-right">
                                  <div className="job-item-badge">Side Project</div>
                                  <div className="item-header-info">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                      <span>Jan 2020 – Present</span>
                                  </div>
                              </div>
                          </div>
                          <div className="text-left text-sm">
                            <div className="card-actions justify-start mb-2">
                              <div className="badge badge-outline text-xs">React</div> 
                              <div className="badge badge-outline text-xs">NextJS</div> 
                              <div className="badge badge-outline text-xs">JavaScript</div>
                              <div className="badge badge-outline text-xs">REST</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-64 ml-16">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.dealacceleration.com/"
                            className="flex items-center space-x-3 px-3.5 py-1.5 rounded-lg group border border-purple-500 bg-white text-purple-500 text-sm font-medium transition duration-200 hover:border-purple-600 hover:text-white hover:bg-purple-600"
                            style={{width: "284px"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                          </svg>
                          <span className="">https://www.dealacceleration.com/</span>
                        </a>
                      </div>
                    </div> {/* end collapse title */}
                    <div className="collapse-content"> {/* start collapse content */} 
                      <p className="text-sm text-gray-400 mb-4 ml-12">
                        DEAL ACCELERATION provides a shopping social media platform to shop and share.
                      </p>
                      <div className="text-left ml-20 mb-2">
                        <ul className="list-disc space-y-2">
                          <li>
                            Connect the React Frontend with the REST APIs (email, favorites, profiles, and sign-in/out). Convert site to support SSL. Test end-to-end functionalities and fix any issues that might arise. 
                          </li>
                          <li>
                            <span>Implement the customer-facing UI according to the design specification. Integrate Google Analytics with our </span>
                            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">NextJS</a>
                            <span>, React framework, for web traffic tracking analysis and reporting</span>
                          </li>
                        </ul>
                      </div>
                    </div> {/* end collapse content */}
                  </div> {/* end kipu collapse section */}
                  <div className="p-7 block-section mb-2">{/* start education block */}
                    <h2 className="block-title text-xl text-left">
                      <i className="fa-solid fa-graduation-cap"></i>
                      <span className="ml-4">Education</span>
                    </h2>
                    <div className="mb-5 item-section"> {/* start scu edu section */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style={{backgroundImage: `url("assets/img/scu-edu.jpeg")`}}></div>
                      <div className="w-full space-y-5">
                        <div className="item-header items-end">
                          <div className="space-y-1.5">
                            <div className="font-medium">M.S. in Computer Science and Engineering</div>
                            <div className="flex space-x-5">
                              <div className="item-header-info">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                <span>Santa Clara University</span>
                              </div>
                              <div className="item-header-info">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Santa Clara, CA</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-b border-gray-200"></div>
                      </div>
                    </div> {/* end scu edu section */}
                    <div className="item-section">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cover" style={{backgroundImage: `url("assets/img/osu-edu.jpeg")`}}></div>
                      <div className="w-full space-y-5">
                        <div className="item-header items-end">
                          <div className="space-y-1.5">
                            <div className="font-medium text-left">B.S. in Computer Science</div>
                            <div className="flex space-x-5">
                              <div className="item-header-info">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                <span>Oregon State University</span>
                              </div>
                              <div className="item-header-info">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Corvallis, OR</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> {/* end education block */}
                  <div className="card bg-base-100 shadow-xl p-4 mb-2">{/* start claim-to-fame card */}
                    <div className="card-body p-2">
                      <h5 className="card-title">
                        <i className="fa-solid fa-globe"></i>
                        <span className="ml-2">Internet Claim to Fame</span>
                      </h5>
                      <p className="text-left">
                        <span>In 2000, I registered 2 TCP/IP port numbers (</span>
                        <span className="text-gray-400">3041, 3046</span><span>) with the </span>
                        <a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=carlos+hung" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Internet Assigned Number Authority</a>
                        <span>. These registered ports were used in Digital Island flash ship network software product called </span><span className="italic">Traceware</span>
                        <span>, a modified version of </span>
                        <a href="https://en.wikipedia.org/wiki/BIND" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">BIND</a>
                        <span> (Berkeley Internet Name Domain),</span>
                        <span> which controls the distribution of content based on geographic location. </span>
                      </p>
                    </div>
                  </div> {/* end claim-to-fame card */}
                  <div className="card bg-base-100 shadow-xl p-4 mb-2">
                    <div className="card-body p-2">
                      <h5 className="card-title">
                        <i className="fa-solid fa-language"></i>
                        <span className="ml-2">Foreign Language</span>
                      </h5>
                      <p className="text-left">Read, speak and write fluently native Spanish from Venezuela, S.A.</p>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-4 mb-2">
                    <div className="card-body p-2">
                      <h5 className="card-title">
                        <i className="fa-solid fa-star"></i>
                        <span className="ml-2">Favorite Sites</span>
                      </h5>
                      <p className="text-left text-sm">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">GitHub</a>
                        <span> | </span>
                        <a href="https://owasp.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">OWASP</a>
                        <span> | </span>
                        <a href="https://go.dev/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Golang</a>
                        <span> | </span>
                        <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">MDN JavaScript</a>
                        <span> | </span>
                        <a href="https://ruby-doc.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Ruby-Doc</a>
                        <span> | </span>
                        <a href="https://elixir-lang.org/docs.html" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-blue-600">Elixir-Doc</a>
                      </p>
                    </div>
                  </div>
                </div>} {/* end more tab */}
              </div>
            </div>
          </div> {/* end right side */}
        </div>
      </main>
      <h1 className="mt-4 mb-4"><span>Built with  </span>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Tailwind CSS</a> 
        <span> + </span> 
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">React</a> 
        <span> + </span>
        <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">React Hook</a> 
      </h1>
      <h1>
        <a href="https://github.com/developertogo/portfolio" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Source</a>
      </h1>
    </div>
  )
}

export default App
