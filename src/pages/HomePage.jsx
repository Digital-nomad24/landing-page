import Layout from '../components/Layout';
import Preloader from '../components/Preloader';
import { usePageMeta } from '../hooks/useSiteEffects';

const badges = [
  { src: '/assets/badges/journey-road-titan.svg', alt: 'Road Titan badge', name: 'Road Titan', cat: 'Journey' },
  { src: '/assets/badges/ride-convoy-legend.svg', alt: 'Convoy Legend badge', name: 'Convoy Legend', cat: 'Rides' },
  { src: '/assets/badges/lead-grand-marshal.svg', alt: 'Grand Marshal badge', name: 'Grand Marshal', cat: 'Leadership' },
  { src: '/assets/badges/mile-mega-convoy.svg', alt: 'Mega Convoy badge', name: 'Mega Convoy', cat: 'Milestone' },
  { src: '/assets/badges/safe-safety-champion.svg', alt: 'Safety Champion badge', name: 'Safety Champion', cat: 'Safety' },
  { src: '/assets/badges/comm-legend-of-the-road.svg', alt: 'Legend of the Road badge', name: 'Legend', cat: 'Community' },
];

const riders = [
  {
    badge: '/assets/badges/lead-grand-marshal.svg',
    name: 'Marco R.',
    role: 'Ride captain',
    quote:
      'We used to lose half the group at every exit. Now the pack stays locked — Convyo runs the ride so I get to actually ride it.',
    miles: '12,480',
  },
  {
    badge: '/assets/badges/comm-legend-of-the-road.svg',
    name: 'Jules T.',
    role: 'Club organizer',
    quote:
      'The recap card is the whole reason my club rode through winter. Everyone wants the MVP vote and nobody wants to drop a rank.',
    miles: '8,120',
  },
  {
    badge: '/assets/badges/safe-safety-champion.svg',
    name: 'Aisha K.',
    role: 'Weekend rider',
    quote:
      'Check-ins are why my partner stopped worrying. One tap at every stop and she knows exactly where I am.',
    miles: '3,050',
  },
];

export default function HomePage() {
  usePageMeta({
    title: 'Convyo — Nobody gets left behind',
    description:
      'Convyo holds your whole motorcycle group on one live map, one channel and one route — from kickstands up to the last fuel stop.',
    canonical: 'https://convyo.app/',
  });

  return (
    <Layout navVariant="home" ctaLabel="Roll out" ctaTo="/#roll">
      <Preloader />

      <main id="main">
        <section className="hero">
          <svg className="hero__topo" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g fill="none" stroke="#00D1B2" strokeOpacity=".13" strokeWidth="1">
              <path d="M-100,700 C200,640 340,520 560,540 C780,560 900,470 1120,430 C1290,400 1400,420 1500,390" />
              <path d="M-100,640 C210,575 350,455 570,478 C790,500 910,405 1130,362 C1300,330 1400,352 1500,320" />
              <path d="M-100,580 C220,512 360,392 580,417 C800,442 920,342 1140,296 C1310,262 1400,286 1500,252" />
              <path d="M-100,520 C230,450 370,330 590,357 C810,384 930,280 1150,231 C1320,195 1400,220 1500,185" />
              <path d="M-100,460 C240,388 380,268 600,297 C820,326 940,218 1160,166 C1330,127 1400,154 1500,118" />
              <path d="M-100,400 C250,326 390,206 610,237 C830,268 950,156 1170,101 C1340,60 1400,88 1500,50" />
              <path d="M-100,790 C190,740 330,630 550,646 C770,662 890,580 1110,545 C1280,518 1400,536 1500,508" />
            </g>
          </svg>

          <div className="hero__grid shell">
            <div className="hero__copy">
              <div className="eyebrow eyebrow--rule" data-reveal>
                Group riding, solved
              </div>
              <h1 className="display hero__title" data-reveal>
                Nobody
                <br />
                gets left
                <br />
                <span>behind.</span>
              </h1>
              <p className="hero__lede" data-reveal>
                Convyo holds your whole group on one live map, one channel and one route — from kickstands up to the last fuel stop.
              </p>

              <div className="btnrow" data-reveal>
                <a className="btn btn--solid" href="#roll">
                  Start a convoy
                  <span className="sweep" aria-hidden="true" />
                </a>
                <a className="btn btn--ghost" href="#stations">
                  Ride the demo
                </a>
              </div>

              <div className="instruments" data-reveal>
                <div>
                  <div className="stat-num" data-count="48000" data-suffix="+">
                    48,000+
                  </div>
                  <div className="label">Riders enlisted</div>
                </div>
                <div>
                  <div className="stat-num" data-count="12" data-suffix="M">
                    12M
                  </div>
                  <div className="label">Miles on record</div>
                </div>
                <div>
                  <div className="stat-num" style={{ color: '#00D1B2' }} data-count="4.9" data-decimals="1">
                    4.9
                  </div>
                  <div className="label">Rider rating</div>
                </div>
              </div>
            </div>

            <div className="device-wrap" data-reveal>
              <div className="device">
                <div className="device__notch" />
                <div className="device__screen">
                  <svg className="device__map" viewBox="0 0 300 600" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
                    <g fill="none" stroke="#00D1B2" strokeOpacity=".08" strokeWidth="1">
                      <path d="M-20,180 C60,150 120,210 200,180 C260,158 300,175 340,160" />
                      <path d="M-20,250 C60,220 120,280 200,250 C260,228 300,245 340,230" />
                      <path d="M-20,330 C60,300 120,360 200,330 C260,308 300,325 340,310" />
                      <path d="M-20,420 C60,390 120,450 200,420 C260,398 300,415 340,400" />
                    </g>
                    <path
                      d="M46,168 C120,232 66,338 158,392 C244,442 206,528 262,562"
                      fill="none"
                      stroke="#00D1B2"
                      strokeOpacity=".18"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    <path
                      className="route-live"
                      d="M46,168 C120,232 66,338 158,392 C244,442 206,528 262,562"
                      fill="none"
                      stroke="#00D1B2"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="12 10"
                    />
                  </svg>

                  <div className="dot dot--lead" />
                  <div className="dot dot--a" />
                  <div className="dot dot--b" />
                  <div className="dot dot--sweep" />

                  <div className="hud">
                    <div className="hud__top">
                      <div className="hud__live">● LIVE · CANYON RUN</div>
                      <div className="hud__count">07 UP</div>
                    </div>
                    <div className="hud__cells">
                      <div>
                        <div className="stat-num">
                          <span data-speed>62</span>
                          <span className="unit"> MPH</span>
                        </div>
                      </div>
                      <div>
                        <div className="stat-num">
                          142<span className="unit"> MI</span>
                        </div>
                      </div>
                      <div>
                        <div className="stat-num" style={{ color: '#00D1B2' }} data-clock>
                          2:14
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="formation">
                    <div className="formation__head">
                      Formation<span>98% LOCKED</span>
                    </div>
                    <div className="formation__bars">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i className="off" />
                    </div>
                    <div className="formation__flags">
                      <span className="on">◉ COMMS</span>
                      <span className="blink">◉ FUEL 40MI</span>
                      <span>◉ SOS READY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker__rail">
            <div className="ticker__set">
              <span>Live formation</span>
              <span className="hot">Push-to-talk</span>
              <span>Auto re-group</span>
              <span>Fuel-stop sync</span>
              <span className="hot">SOS beacon</span>
              <span>Ride ledger</span>
              <span>Earned ranks</span>
            </div>
            <div className="ticker__set">
              <span>Live formation</span>
              <span className="hot">Push-to-talk</span>
              <span>Auto re-group</span>
              <span>Fuel-stop sync</span>
              <span className="hot">SOS beacon</span>
              <span>Ride ledger</span>
              <span>Earned ranks</span>
            </div>
          </div>
        </div>

        <section className="band" id="problem">
          <div className="split-grid shell">
            <div className="split-grid__rail">
              <div className="eyebrow">01 / The Split</div>
            </div>
            <div className="split-grid__body">
              <p className="split-copy" data-reveal>
                <b>The group splits at the first light.</b> Somebody misses the exit. Half the pack is idling at the gas station, the other half is twenty miles ahead and out of signal.{' '}
                <b>You have done this ride.</b>
              </p>
              <div className="split-stats" data-reveal>
                <div>
                  <div className="stat-num">3 in 4</div>
                  <p>group rides lose a rider at least once</p>
                </div>
                <div>
                  <div className="stat-num">22 min</div>
                  <p>average time burned re-grouping</p>
                </div>
                <div>
                  <div className="stat-num">0</div>
                  <p>of that happens on Convyo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="band" id="stations">
          <div className="shell" style={{ position: 'relative' }}>
            <div className="stations__head">
              <div className="eyebrow">02 / The System</div>
              <h2 className="display" data-reveal>
                Four things that keep a pack together
              </h2>
            </div>

            <div className="stations__list">
              <div className="spine" aria-hidden="true">
                <div className="spine__fill" data-spine />
                <div className="spine__rider" data-rider />
              </div>

              <article className="station" data-reveal>
                <div className="station__mi">MI 000</div>
                <div>
                  <h3>
                    Everyone on
                    <br />
                    one live map
                  </h3>
                  <p>
                    Every rider&apos;s position, speed and gap, updated live. Convoy auto-regroups at lights, turns and stops so the tail never guesses.
                  </p>
                </div>
                <div className="panel">
                  <div className="panel__label">Formation · 7 riders</div>
                  <div className="roll">
                    <div className="roll__row">
                      <i className="lead" />
                      <b>LEAD · Marco</b>
                      <em className="hot">0 m</em>
                    </div>
                    <div className="roll__row">
                      <i />
                      <b>Jules</b>
                      <em>42 m</em>
                    </div>
                    <div className="roll__row">
                      <i />
                      <b>Aisha</b>
                      <em>88 m</em>
                    </div>
                    <div className="roll__row">
                      <i className="sweep" />
                      <b>SWEEP · Dev</b>
                      <em>210 m</em>
                    </div>
                  </div>
                </div>
              </article>

              <article className="station" data-reveal>
                <div className="station__mi">MI 042</div>
                <div>
                  <h3>
                    One channel,
                    <br />
                    gloves on
                  </h3>
                  <p>
                    Push-to-talk that works through a helmet and a headwind. Drop a pin, call a stop, warn about gravel — without touching the screen.
                  </p>
                </div>
                <div className="panel">
                  <div className="panel__label">Channel · open</div>
                  <div className="ptt">
                    <div className="ptt__key">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D1B2" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <path d="M12 19v3" />
                      </svg>
                    </div>
                    <div className="ptt__wave">
                      <i className="dim" style={{ height: '40%' }} />
                      <i style={{ height: '75%' }} />
                      <i style={{ height: '55%' }} />
                      <i style={{ height: '100%' }} />
                      <i style={{ height: '65%' }} />
                      <i className="dim" style={{ height: '35%' }} />
                      <i style={{ height: '80%' }} />
                      <i className="dim" style={{ height: '45%' }} />
                      <i className="dimmer" style={{ height: '25%' }} />
                    </div>
                  </div>
                  <div className="quote">MARCO: “Gravel on the next left.”</div>
                </div>
              </article>

              <article className="station" data-reveal>
                <div className="station__mi">MI 118</div>
                <div>
                  <h3>
                    Nobody
                    <br />
                    rides alone
                  </h3>
                  <p>
                    Automatic check-ins at every stop, low-fuel pings, and a crash-detect SOS that reaches the convoy before it reaches your family.
                  </p>
                </div>
                <div className="panel">
                  <div className="panel__label">Roll call · summit pass</div>
                  <div className="checkin">
                    <div>IN</div>
                    <div>IN</div>
                    <div>IN</div>
                    <div>IN</div>
                    <div>IN</div>
                    <div>IN</div>
                    <div className="pending">2MI</div>
                    <div className="empty">—</div>
                  </div>
                  <div className="quote">6 of 7 in · Dev 2 mi out</div>
                </div>
              </article>

              <article className="station" data-reveal>
                <div className="station__mi">MI 204</div>
                <div>
                  <h3>
                    Every mile
                    <br />
                    on the record
                  </h3>
                  <p>
                    The ride ends and the ledger writes itself — distance, formation score, elevation, and the Ride MVP your group voted for.
                  </p>
                </div>
                <div className="panel">
                  <div className="panel__label">Ride ledger · 12 Oct</div>
                  <div className="ledger">
                    <div>
                      <div className="stat-num">
                        204<span className="unit"> MI</span>
                      </div>
                    </div>
                    <div>
                      <div className="stat-num">
                        6,240<span className="unit"> FT</span>
                      </div>
                    </div>
                    <div>
                      <div className="stat-num" style={{ color: '#00D1B2' }}>
                        98<span className="unit">% FORM</span>
                      </div>
                    </div>
                    <div>
                      <div className="mvp">MVP · AISHA</div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="band band--alt ranks" id="ranks">
          <div className="split-grid shell">
            <div className="split-grid__rail">
              <div className="eyebrow">03 / The Record</div>
            </div>
            <div className="split-grid__body">
              <h2 className="display" data-reveal>
                Rank is earned
                <br />
                in miles, not money
              </h2>
              <p data-reveal>
                Thirty-eight struck-metal badges across six disciplines. Bronze to Diamond. No shortcuts, no purchases — the only way up is to ride.
              </p>
              <div className="badges" data-reveal>
                {badges.map((b) => (
                  <div className="badge" key={b.name}>
                    <img src={b.src} alt={b.alt} width="88" height="88" loading="lazy" />
                    <b>{b.name}</b>
                    <span>{b.cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="band" id="roster">
          <div className="split-grid shell">
            <div className="split-grid__rail">
              <div className="eyebrow">04 / The Riders</div>
            </div>
            <div className="roster__body">
              <h2 className="display" data-reveal>
                From the manifest
              </h2>
              <div className="roster__list">
                {riders.map((r) => (
                  <figure className="rider" data-reveal key={r.name}>
                    <div className="rider__who">
                      <img src={r.badge} alt="" width="38" height="38" loading="lazy" />
                      <div>
                        <b>{r.name}</b>
                        <span>{r.role}</span>
                      </div>
                    </div>
                    <blockquote>
                      <p>{r.quote}</p>
                    </blockquote>
                    <div className="rider__miles">
                      <div className="stat-num">{r.miles}</div>
                      <span>Miles logged</span>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rollout" id="roll">
          <svg className="rollout__topo" viewBox="0 0 1400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g fill="none" stroke="#06231F" strokeOpacity=".12" strokeWidth="1">
              <path d="M-100,320 C200,270 340,180 560,196 C780,212 900,140 1120,108 C1290,84 1400,100 1500,76" />
              <path d="M-100,260 C210,206 350,116 570,134 C790,152 910,76 1130,42 C1300,16 1400,34 1500,8" />
              <path d="M-100,380 C190,336 330,240 550,254 C770,268 890,198 1110,170 C1280,148 1400,164 1500,142" />
            </g>
          </svg>
          <div className="rollout__grid">
            <div>
              <div className="rollout__eyebrow">Kickstands up</div>
              <h2>
                Get the group
                <br />
                on Convyo
              </h2>
              <p>Free to download, free to ride. Set up your first convoy in under two minutes.</p>
            </div>
            <div className="stores">
              <a className="store" href="#roll">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.29 10.34.86 1.25 1.88 2.65 3.21 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.7-1.04-2.73-4.13zM14.53 4.42c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z" />
                </svg>
                <div>
                  <small>Download on the</small>
                  <b>App Store</b>
                </div>
              </a>
              <a className="store" href="#roll">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#5BF0DA" d="M3.6 2.1 13 11.5 3.6 20.9c-.3-.2-.5-.6-.5-1.1V3.2c0-.5.2-.9.5-1.1z" />
                  <path fill="#00D1B2" d="M16.8 8.3 13 11.5l-2.5-2.5 6.3-3.6c.3.2.6.6.6 1.1 0 .5-.2.9-.6 1.1z" />
                  <path fill="#159BDD" d="M13 11.5 3.6 20.9c.3.2.7.2 1.1 0l11.5-6.6L13 11.5z" />
                </svg>
                <div>
                  <small>Get it on</small>
                  <b>Google Play</b>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
